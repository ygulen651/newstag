import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { heatPumpProducts } from "@/lib/product-data";

const solutionLinks: Record<string, { title: string; href: string }[]> = {
  "thermaplus-up-serisi": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-fuzzy-serisi": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-bcp": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-all": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-silent-pool-serisi": [{ title: "Konutlar", href: "/cozumlerimiz/konutlar" }],
  "thermaplus-commercial-pool": [{ title: "Ticari İşletmeler", href: "/cozumlerimiz/ticari-isletmeler" }],
  "thermaplus-plus-serisi": [{ title: "Sanayi Tesisleri", href: "/cozumlerimiz/sanayi-tesisleri" }],
  "thermaplus-commercial-sicak-su": [
    { title: "Sanayi Tesisleri", href: "/cozumlerimiz/sanayi-tesisleri" },
    { title: "Ticari İşletmeler", href: "/cozumlerimiz/ticari-isletmeler" },
  ],
  "thermaplus-commercial-duo": [
    { title: "Sanayi Tesisleri", href: "/cozumlerimiz/sanayi-tesisleri" },
    { title: "Ticari İşletmeler", href: "/cozumlerimiz/ticari-isletmeler" },
  ],
};

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

  const related = heatPumpProducts
    .filter((item) => item.category === product.category && item.slug !== slug)
    .slice(0, 3);
  const productSolutions = solutionLinks[product.slug] ?? [];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <Link
              href="/isi-pompasi#urunler"
              className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold mb-10 hover:text-[#ea580c]"
            >
              <ArrowLeft className="w-5 h-5" /> Isı Pompası Ürünlerine Dön
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mt-4 mb-8">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
                  {product.description}
                </p>
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
                  className="object-contain p-10"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            {productSolutions.length > 0 && (
              <div className="mb-14 rounded-[30px] border border-blue-100 bg-[#f8fafc] p-8">
                <h2 className="mb-5 text-2xl font-bold text-[#1e3a8a]">
                  Ürünün Kullanıldığı Çözüm Alanları
                </h2>
                <div className="flex flex-wrap gap-3">
                  {productSolutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-[#1e3a8a] shadow-sm transition-colors hover:text-[#ea580c]"
                    >
                      {solution.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-8">Doğru Model Seçimi</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Isı pompası kapasitesi; bina büyüklüğü, yalıtım durumu, bölge
              iklimi, sıcak su ve havuz ihtiyacına göre belirlenir. Uzman
              ekibimiz ücretsiz keşif ile ihtiyacınıza en uygun Thermaplus
              modelini önerir.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors"
              >
                Ücretsiz Keşif Talep Et <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 border border-blue-100 bg-white px-8 py-4 rounded-full font-bold text-[#1e3a8a] hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
              >
                Ürün Kataloğunu Talep Et <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-24 bg-[#f8fafc]">
            <div className="container mx-auto px-6">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-[#1e3a8a]">
                  Aynı Serideki Diğer Ürünler
                </h2>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/isi-pompasi/${item.slug}`}
                    className="group bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-50">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
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
        )}
      </main>
      <Footer />
    </>
  );
}
