import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { bessProducts } from "@/lib/product-data";

export function generateStaticParams() {
  return bessProducts.map((product) => ({ slug: product.slug }));
}

export default async function BessProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = bessProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const otherProducts = bessProducts.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <Link
              href="/bess"
              className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold mb-10 hover:text-[#ea580c]"
            >
              <ArrowLeft className="w-5 h-5" /> BESS Ürünlerine Dön
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mt-4 mb-8">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                  {product.description}
                </p>
                {product.options && (
                  <div className="mb-10">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Ürün Seçenekleri
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {product.options.map((option) => (
                        <span
                          key={option}
                          className="text-sm font-bold text-[#1e3a8a] bg-white border border-blue-100 px-4 py-2.5 rounded-xl shadow-sm"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="space-y-4">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#ea580c] mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={product.imageFit === "contain" ? "object-contain p-10" : "object-cover"}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">Uygulama Notları</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Bu ürün ailesi; proje kapasitesi, bağlantı gücü, yedekleme süresi,
              güvenlik sınıfı, soğutma tercihi ve saha koşullarına göre
              konfigüre edilir. Kesin teknik değerler, proje keşfi ve seçilecek
              model ailesine göre katalog üzerinden netleştirilir.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors"
            >
              Teknik Görüşme Talep Et <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Diğer BESS Ürünleri</h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/bess/${item.slug}`}
                  className="group bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`${
                        item.imageFit === "contain" ? "object-contain p-4" : "object-cover"
                      } group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{item.title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#1e3a8a] group-hover:text-[#ea580c]">
                    İncele <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
