"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Cloud,
  Cpu,
  Gauge,
  Globe2,
  LineChart,
  PlugZap,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { bessProducts } from "@/lib/product-data";

const benefits = [
  {
    title: "Arbitraj ile Tasarruf",
    desc: "Elektriği düşük fiyatlı saatlerde depolayıp pahalı saatlerde kullanarak maliyetleri azaltır.",
    icon: LineChart,
  },
  {
    title: "Pik Güç Tıraşlama",
    desc: "Ani yüksek güç gereksinimlerini karşılayarak kapasite ve talep bedeli baskısını azaltır.",
    icon: Gauge,
  },
  {
    title: "Operasyonel Süreklilik",
    desc: "Kesinti anında kritik yükleri besleyerek üretim, hizmet ve veri sürekliliğini destekler.",
    icon: ShieldCheck,
  },
  {
    title: "Reaktif Güç Kompanzasyonu",
    desc: "Gerilim regülasyonu ve reaktif güç cezası riskini azaltan esnek güç yönetimi sağlar.",
    icon: PlugZap,
  },
  {
    title: "Harmonik Kompanzasyonu",
    desc: "Güç kalitesini iyileştirir, hassas ekipmanları ve altyapıyı korur.",
    icon: Cable,
  },
  {
    title: "Jeneratör İkamesi",
    desc: "Yakıt, bakım ve emisyon maliyeti yüksek jeneratör kullanımını azaltır.",
    icon: Zap,
  },
];

const inspurReasons = [
  {
    title: "IT Devi",
    desc: "Küresel ölçekte sunucu, bulut ve veri altyapısı deneyimiyle enerji depolama projelerine güçlü mühendislik yaklaşımı getirir.",
    icon: Globe2,
  },
  {
    title: "Donanım Teknolojisi",
    desc: "Uzun çevrim ömürlü LFP hücreler, gelişmiş sıvı soğutma ve yüksek güvenlikli kabinet/konteyner mimarisi.",
    icon: Cpu,
  },
  {
    title: "IT / Cloud DNA'sı",
    desc: "Hücre bazlı izleme, AI destekli kontrol ve düşük fiziksel müdahale ihtiyacıyla akıllı enerji yönetimi.",
    icon: Cloud,
  },
  {
    title: "Güvenlik ve Servis",
    desc: "Yangın söndürme, gaz/duman/sıcaklık algılama ve servis organizasyonu ile proje yaşam döngüsünü destekler.",
    icon: ShieldCheck,
  },
];

export default function InspurPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white overflow-hidden">
        <section className="relative py-28 md:py-36 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold text-sm mb-8 uppercase tracking-widest">
                  <BatteryCharging className="w-4 h-4" /> Batarya Enerji Depolama
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#1e3a8a]">
                  BESS <span className="text-[#ea580c]">Çözümleri</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl font-light">
                  BESS, elektrik enerjisini bataryalarda depolayan ve ihtiyaç
                  anında şebekeye, tesise veya kritik yüklere geri veren enerji
                  depolama sistemidir. GES, şebeke, jeneratör ve tüketim
                  altyapısı arasında esneklik sağlayarak maliyet, süreklilik ve
                  güç kalitesini aynı anda yönetir.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-xl">
                  {["1 GWh'a yakın kurulum deneyimi", "Tek seferde 400 MWh'a varan kurulum", "Global teknoloji partneri"].map((item) => (
                    <div key={item} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                      <p className="text-sm font-bold text-[#1e3a8a] leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-white"
              >
                <Image src="/images/e9551124-2722-4454-bf42-e6d7ff187aec.png" alt="Inspur BESS" fill className="object-cover" priority />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">BESS Nasıl Çalışır?</h2>
              <p className="text-gray-500 text-lg font-light">
                Sistem; enerji kaynağı, batarya, güç dönüşüm sistemi ve akıllı kontrol katmanından oluşur.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
              {["GES / Şebeke", "PCS", "Batarya", "EMS / BMS", "Yük / Şebeke"].map((step, index) => (
                <div key={step} className="relative bg-[#f8fafc] rounded-[28px] p-6 border border-gray-100 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#ea580c] text-white mx-auto mb-5 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">BESS ile Elde Edilen Faydalar</h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="bg-white rounded-[30px] p-8 border border-gray-100 shadow-sm"
                >
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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">Neden Inspur?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inspurReasons.map((reason) => (
                <div key={reason.title} className="bg-[#f8fafc] rounded-[30px] p-7 border border-gray-100">
                  <reason.icon className="w-9 h-9 text-[#ea580c] mb-6" />
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{reason.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">BESS Ürünleri</h2>
              <div className="h-px bg-gray-200 flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bessProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/markalar/inspur/${product.slug}`}
                  className="group bg-white rounded-[36px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-7 bg-gray-50">
                    <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">{product.category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-3 mb-4">{product.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-6">{product.summary}</p>
                  <span className="inline-flex items-center gap-2 font-bold text-[#1e3a8a] group-hover:text-[#ea580c]">
                    Detayları İncele <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Projeniz İçin BESS Konfigürasyonu</h2>
            <p className="text-xl text-white/75 mb-10 max-w-2xl mx-auto font-light">
              Uygulama alanınıza göre kapasite, güç, soğutma, güvenlik ve kontrol mimarisini birlikte netleştirelim.
            </p>
            <Link href="/iletisim" className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-10 py-5 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors">
              Teklif Al <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
