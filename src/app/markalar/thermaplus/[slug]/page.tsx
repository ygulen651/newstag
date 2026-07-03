import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { heatPumpProducts } from "@/lib/product-data";

export function generateStaticParams() {
  return heatPumpProducts.map((product) => ({ slug: product.slug }));
}

export default async function HeatPumpProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = heatPumpProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <Link href="/markalar/thermaplus" className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold mb-10 hover:text-[#ea580c]">
              <ArrowLeft className="w-5 h-5" /> Thermaplus Ürünlerine Dön
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
                <Image src={product.image} alt={product.title} fill className="object-contain p-8" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">Seçim ve Projelendirme</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Isı pompası kapasitesi; yapı tipi, kullanım senaryosu, iklim
              bölgesi, sıcak su ihtiyacı, havuz hacmi veya proses sıcaklığına
              göre seçilmelidir. Kesin model ve kapasite, keşif ve teknik
              hesaplama sonrasında netleştirilir.
            </p>
            <a href="https://form.jotform.com/232702760885966" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors">
              Kapasite Hesaplama Formu
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
