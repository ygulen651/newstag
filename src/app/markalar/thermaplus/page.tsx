"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Droplets,
  Leaf,
  Recycle,
  Settings,
  Thermometer,
  Waves,
} from "lucide-react";
import { heatPumpProducts } from "@/lib/product-data";

const benefits = [
  { title: "Yüksek Enerji Tasarrufu", icon: BarChart3, desc: "Fosil yakıt bağımlılığını azaltarak işletme ve konut enerji giderlerini düşürür." },
  { title: "Tek Sistem", icon: Thermometer, desc: "Isıtma, soğutma ve sıcak su ihtiyacını tek sistem yaklaşımıyla yönetir." },
  { title: "Atık Isı Değerlendirme", icon: Recycle, desc: "Uygun projelerde atık ısıyı yeniden kullanarak toplam verimliliği artırır." },
  { title: "Çevrecilik", icon: Leaf, desc: "Karbon ayak izini azaltır, yeşil bina ve sürdürülebilirlik hedeflerini destekler." },
  { title: "Havuz Kullanımı", icon: Waves, desc: "Konut ve ticari havuzlarda sezonu uzatır, sıcak havuz konforu sağlar." },
  { title: "Akıllı Kontrol", icon: Settings, desc: "Kontrol ve otomasyon seçenekleriyle sistem performansını izlenebilir hale getirir." },
];

const pluses = [
  "Konut, havuz ve endüstriyel seri seçenekleri",
  "Isıtma, soğutma ve sıcak su ihtiyaçlarına bütüncül yaklaşım",
  "GES ve BESS ile entegre, düşük karbonlu kullanım senaryoları",
  "Ticari yapılarda yüksek HVAC yükünü verimli yönetme",
];

const categories = ["Konut serisi", "Sıcak su serisi", "Havuz serisi", "Endüstriyel seri"];

export default function ThermaplusPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-hidden pt-24">
        <section className="relative py-28 md:py-36 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold text-sm mb-8 uppercase tracking-widest">
                  <Leaf className="w-4 h-4" /> Temiz Isı Teknolojisi
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#1e3a8a]">
                  Thermaplus <span className="text-[#ea580c]">Isı Pompası</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-light">
                  Isı pompası; havadaki, sudaki veya ortam enerjisindeki ısıyı
                  alıp bina, proses, sıcak su veya havuz kullanımına taşıyan
                  yüksek verimli iklimlendirme teknolojisidir. Aynı sistem
                  ısıtma ve soğutma görevini üstlenebilir.
                </p>
                <Link href="#urunler" className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors">
                  Ürünleri İncele <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <Image src="/images/heat-pump.png" alt="Thermaplus ısı pompası" fill className="object-cover" priority />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">Isı Pompası Nasıl Çalışır?</h2>
              <p className="text-gray-500 text-lg font-light">
                Çevredeki düşük sıcaklıklı enerji, kompresör çevrimiyle kullanılabilir ısıya dönüştürülür.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {["Dış Hava", "Evaporatör", "Kompresör", "Kondenser", "Isıtma / Soğutma"].map((step, index) => (
                <div key={step} className="relative bg-[#f8fafc] rounded-[28px] p-6 border border-gray-100 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#ea580c] text-white mx-auto mb-5 flex items-center justify-center font-bold">{index + 1}</div>
                  <h3 className="text-lg font-bold text-[#1e3a8a]">{step}</h3>
                  {index < 4 && <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-[#ea580c] w-6 h-6 z-10" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">Isı Pompası ile Elde Edilen Faydalar</h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div key={benefit.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.5 }} className="bg-white rounded-[30px] p-8 border border-gray-100 shadow-sm">
                  <benefit.icon className="w-8 h-8 text-[#ea580c] mb-6" />
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{benefit.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image src="/images/residential-solutions.png" alt="Thermaplus entegre enerji çözümü" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-8">Thermaplus’ın Artıları</h2>
                <div className="space-y-5">
                  {pluses.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#ea580c] text-white flex items-center justify-center shrink-0">✓</div>
                      <p className="text-lg text-gray-600 font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="urunler" className="py-16 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">Thermaplus Ürünleri</h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            {categories.map((category) => (
              <div key={category} className="mb-10 last:mb-0">
                <h3 className="text-2xl font-bold text-[#ea580c] mb-4">{category}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {heatPumpProducts.filter((product) => product.category === category).map((product) => (
                    <Link key={product.slug} href={`/markalar/thermaplus/${product.slug}`} className="group bg-white rounded-[20px] p-3 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex gap-4 items-center">
                      <div className="relative w-32 sm:w-40 aspect-square rounded-[16px] overflow-hidden bg-gray-50 shrink-0">
                        <Image src={product.image} alt={product.title} fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="min-w-0 py-1">
                        <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 leading-tight">{product.title}</h4>
                        <p className="text-gray-500 font-light leading-relaxed mb-3 text-sm line-clamp-2">{product.summary}</p>
                        <span className="inline-flex items-center gap-2 font-bold text-sm text-[#1e3a8a] group-hover:text-[#ea580c]">
                          Detayları İncele <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-[#1e3a8a]">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto text-white">
              <Droplets className="w-14 h-14 text-[#f97316] mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Kapasite Hesaplama</h2>
              <p className="text-white/75 font-light text-lg md:text-xl leading-relaxed mb-10">
                Tasarruf hesaplama modülü hazır olduğunda buraya özel bağlantı eklenebilir. Şimdilik kapasite hesaplama formuna yönlendirme yapıyoruz.
              </p>
              <a href="https://form.jotform.com/232702760885966" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors">
                Kapasite Hesaplama Formu <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
