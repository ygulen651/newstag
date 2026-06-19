import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <Link href="/markalar/inspur" className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold mb-10 hover:text-[#ea580c]">
              <ArrowLeft className="w-5 h-5" /> BESS Ürünlerine Dön
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">{product.category}</span>
                <h1 className="text-5xl md:text-7xl font-bold text-[#1e3a8a] mt-4 mb-8">{product.title}</h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">{product.description}</p>
                <div className="space-y-4">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#ea580c]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-white">
                <Image src={product.image} alt={product.title} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">Uygulama Notları</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Bu ürün ailesi proje kapasitesi, bağlantı gücü, yedekleme süresi,
              güvenlik sınıfı, soğutma tercihi ve saha koşullarına göre
              konfigüre edilir. Detaylı katalog bilgileri ve kesin teknik
              değerler, proje keşfi ve seçilecek model ailesine göre
              netleştirilmelidir.
            </p>
            <Link href="/iletisim" className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors">
              Teknik Görüşme Talep Et
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
