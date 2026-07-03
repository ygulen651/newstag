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
  Calculator,
  Droplets,
  Factory,
  Home,
  Leaf,
  Recycle,
  Settings,
  Thermometer,
  ThermometerSun,
  Waves,
  Wind,
} from "lucide-react";
import { heatPumpCategories, heatPumpProducts } from "@/lib/product-data";

const copStats = [
  { value: "3-5", label: "COP: 1 birim elektrikten 3-5 birim ısı" },
  { value: "%75", label: "Yıllık enerji giderinde tasarrufa varan potansiyel" },
  { value: "A+++", label: "ERP enerji verimliliği sınıfı" },
  { value: "80 °C", label: "Endüstriyel serilerde çıkış suyu sıcaklığı" },
];

const cycleSteps = [
  {
    title: "Dış Hava",
    desc: "Havadaki, topraktaki veya sudaki düşük sıcaklıklı enerji alınır.",
    icon: Wind,
    align: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Evaporatör",
    desc: "Soğutucu akışkan ısıyı emer ve buharlaşır.",
    icon: Droplets,
    align: "lg:col-start-2 lg:row-start-2",
  },
  {
    title: "Kompresör",
    desc: "Basınç yükselir, enerji kullanılabilir ısıya dönüşür.",
    icon: Settings,
    align: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Kondenser",
    desc: "Isı, suya veya iç ortama kontrollü şekilde aktarılır.",
    icon: Thermometer,
    align: "lg:col-start-4 lg:row-start-2",
  },
  {
    title: "Isıtma / Soğutma / Sıcak Su",
    desc: "Tek cihazla konfor ve kullanım sıcak suyu sağlanır.",
    icon: ThermometerSun,
    align: "lg:col-start-5 lg:row-start-1",
  },
];

const sources = [
  {
    icon: Wind,
    title: "Hava Kaynaklı",
    desc: "En yaygın çözüm; kurulumu basit, yatırım maliyeti düşük.",
  },
  {
    icon: Leaf,
    title: "Toprak Kaynaklı",
    desc: "Yüksek verim; büyük ölçekli projeler için ideal.",
  },
  {
    icon: Droplets,
    title: "Su Kaynaklı",
    desc: "Göl ve nehir kenarı tesisler için optimum performans.",
  },
];

const benefits = [
  {
    title: "Yüksek Enerji Tasarrufu",
    icon: BarChart3,
    desc: "Doğalgazın 3-5 katı verimlilik ile işletme ve konut enerji giderlerini belirgin şekilde düşürür.",
  },
  {
    title: "3'ü 1 Arada Tek Sistem",
    icon: Thermometer,
    desc: "Isıtma, soğutma ve sıcak su ihtiyacını tek sistemle karşılar; ayrı sistemlerin kurulum ve bakım maliyetinden kurtarır.",
  },
  {
    title: "Fosil Yakıttan Bağımsızlık",
    icon: Leaf,
    desc: "Fiyatı öngörülemez hale gelen doğalgaz bağımlılığını kırar; karbon ayak izini azaltır.",
  },
  {
    title: "Atık Isı Değerlendirme",
    icon: Recycle,
    desc: "Uygun projelerde tesisteki atık ısıyı yeniden kullanarak toplam verimliliği artırır.",
  },
  {
    title: "Havuz Konforu",
    icon: Waves,
    desc: "Konut ve ticari havuzlarda sezonu uzatır; 500 m³'e kadar havuzlarda sıcak havuz konforu sağlar.",
  },
  {
    title: "Akıllı Kontrol",
    icon: Settings,
    desc: "Wi-Fi, LCD panel ve otomasyon seçenekleriyle sistem performansını izlenebilir hale getirir.",
  },
];

const thermaplusPluses = [
  "Türkiye'de üretilen ısı pompası teknolojisi",
  "Yerli parça, yerli mühendislik ve güçlü servis ağı",
  "Konut, havuz ve endüstriyel seri seçenekleri",
  "GES ve BESS ile entegre, düşük karbonlu kullanım senaryoları",
  "A+++ enerji etiketi ile bina enerji pasaportu değerine katkı",
  "6 kW'tan 1.066 kW kaskad sistemlere uzanan geniş güç aralığı",
];

const categoryMeta: Record<string, { icon: typeof Home; desc: string }> = {
  "Konut Serileri": {
    icon: Home,
    desc: "Isıtma, soğutma ve kullanım sıcak suyu için 6-16 kW inverter monoblok çözümler ve boyler uyumlu seriler.",
  },
  "Havuz Serileri": {
    icon: Waves,
    desc: "15 m³ villa havuzlarından 500 m³ ticari havuzlara kadar korozyona dayanıklı, sessiz ısıtma çözümleri.",
  },
  "Endüstriyel Seriler": {
    icon: Factory,
    desc: "80 °C proses suyu, ticari sıcak su ve 328 kW - 1.066 kW kaskad sistemlerle büyük ölçekli projeler.",
  },
};

export default function HeatPumpPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative py-28 md:py-36 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold text-sm mb-8 uppercase tracking-widest">
                  <Leaf className="w-4 h-4" /> Temiz Isı Teknolojisi
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#1e3a8a]">
                  Thermaplus <span className="text-[#ea580c]">Isı Pompası</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-light">
                  Çevreci, verimli, ekonomik. Isı pompası; çevredeki havadan,
                  topraktan veya sudan aldığı enerjiyi ısıtma ve soğutma
                  sistemine aktaran elektrikli bir cihazdır. Kışın ısıtır, yazın
                  soğutur; üstelik kullanım sıcak suyu da üretir.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#urunler"
                    className="inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#152e73] transition-colors"
                  >
                    Ürünleri İncele <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/markalar/thermaplus"
                    className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold border border-blue-100 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
                  >
                    Markayı Tanıyın
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/heat-pump.png"
                  alt="Thermaplus ısı pompası"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* COP verileri */}
        <section className="py-20 bg-white border-b border-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {copStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#f8fafc] rounded-[28px] p-8 border border-gray-100 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#ea580c] mb-3">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-500 font-medium leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-500 font-light mt-10 max-w-3xl mx-auto">
              COP (Verimlilik Katsayısı): Isı pompası 1 birim elektrik
              harcayarak 3-5 birim ısıtma enerjisi üretir. Bu, doğalgaza göre
              3-5 kat verimlilik ve yılda %75&apos;e varan tasarruf anlamına gelir.
            </p>
          </div>
        </section>

        {/* Nasıl çalışır - cable energy flow */}
        <section className="relative overflow-hidden bg-[#07152f] py-24 text-white">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <motion.div
            animate={{ opacity: [0.22, 0.55, 0.22], scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e3a8a]/40 blur-[120px]"
          />
          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-[#f97316]">
                Isı Enerjisi Akışı
              </span>
              <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                Isı Pompası Nasıl Çalışır?
              </h2>
              <p className="text-lg font-light leading-relaxed text-white/70">
                Düşük sıcaklıklı çevre enerjisi kablo hattı boyunca taşınır;
                evaporatör, kompresör ve kondenser çevrimiyle kullanılabilir
                ısıya dönüştürülür.
              </p>
            </div>

            <div className="relative mx-auto max-w-7xl">
              <svg
                viewBox="0 0 1200 560"
                className="pointer-events-none absolute inset-x-0 top-2 z-0 hidden h-[560px] w-full overflow-visible lg:block"
                aria-hidden="true"
              >
                <path
                  d="M240 150 C300 150 285 430 360 430 C455 430 455 150 560 150 C665 150 665 430 800 430 C910 430 900 150 1035 150"
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeLinecap="round"
                  strokeWidth="14"
                />
                <path
                  d="M240 150 C300 150 285 430 360 430 C455 430 455 150 560 150 C665 150 665 430 800 430 C910 430 900 150 1035 150"
                  fill="none"
                  stroke="rgba(7,21,47,0.9)"
                  strokeLinecap="round"
                  strokeWidth="8"
                />
                <motion.path
                  animate={{ strokeDashoffset: [120, -920] }}
                  transition={{ repeat: Infinity, duration: 5.8, ease: "linear" }}
                  d="M240 150 C300 150 285 430 360 430 C455 430 455 150 560 150 C665 150 665 430 800 430 C910 430 900 150 1035 150"
                  fill="none"
                  stroke="#f97316"
                  strokeDasharray="34 86"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
                {[
                  { cx: 240, cy: 150, delay: 0 },
                  { cx: 360, cy: 430, delay: 0.25 },
                  { cx: 560, cy: 150, delay: 0.5 },
                  { cx: 800, cy: 430, delay: 0.75 },
                  { cx: 1035, cy: 150, delay: 1 },
                ].map((point) => (
                  <motion.circle
                    key={`${point.cx}-${point.cy}`}
                    animate={{ opacity: [0.25, 1, 0.25], r: [5, 9, 5] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      delay: point.delay,
                      ease: "easeInOut",
                    }}
                    cx={point.cx}
                    cy={point.cy}
                    fill="#f97316"
                  />
                ))}
              </svg>

              <div className="relative z-10 grid grid-cols-1 gap-0 lg:grid-cols-5 lg:grid-rows-[auto_auto] lg:gap-x-6 lg:gap-y-12">
                {cycleSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.1, duration: 0.55 }}
                    className={`${step.align} relative pb-10 lg:pb-0`}
                  >
                    {index > 0 && (
                      <div className="absolute -left-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#f97316]/60 bg-[#07152f] lg:flex">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#f97316] shadow-[0_0_18px_rgba(249,115,22,0.9)]" />
                      </div>
                    )}
                    {index < cycleSteps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 z-20 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#f97316]/60 bg-[#07152f] lg:flex">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#f97316] shadow-[0_0_18px_rgba(249,115,22,0.9)]" />
                      </div>
                    )}
                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-md">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          delay: index * 0.25,
                          ease: "easeInOut",
                        }}
                        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f97316] text-white shadow-[0_0_28px_rgba(249,115,22,0.35)]"
                      >
                        <step.icon className="h-7 w-7" />
                      </motion.div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-black text-[#1e3a8a]">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-sm font-light leading-relaxed text-white/68">
                        {step.desc}
                      </p>
                      <motion.div
                        animate={{ opacity: [0.2, 0.7, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2.6, delay: index * 0.35 }}
                        className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#f97316]/40"
                      />
                    </div>
                    {index < cycleSteps.length - 1 && (
                      <div className="absolute bottom-0 left-1/2 flex h-10 -translate-x-1/2 flex-col items-center lg:hidden">
                        <div className="h-full w-3 rounded-full bg-white/15" />
                        <motion.div
                          animate={{ y: [0, 28, 0], opacity: [0.2, 1, 0.2] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                          className="absolute top-0 h-4 w-4 rounded-full bg-[#f97316] shadow-[0_0_18px_rgba(249,115,22,0.9)]"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Faydalar */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                Isı Pompası ile Elde Edilen Faydalar
              </h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {sources.map((source, i) => (
                <motion.div
                  key={source.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-[28px] p-7 border border-gray-100 shadow-sm"
                >
                  <source.icon className="w-8 h-8 text-[#ea580c] mb-5" />
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{source.title}</h3>
                  <p className="text-gray-500 font-light">{source.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="bg-white rounded-[30px] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <benefit.icon className="w-8 h-8 text-[#ea580c] mb-6" />
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{benefit.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Thermaplus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/residential-solutions.png"
                  alt="Thermaplus entegre enerji çözümü"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[#ea580c] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                  Newstag&apos;ın Tescilli Markası
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-8">
                  Neden Thermaplus?
                </h2>
                <div className="space-y-5">
                  {thermaplusPluses.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#ea580c] text-white flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <p className="text-lg text-gray-600 font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ürünler - Konut / Havuz / Endüstriyel */}
        <section id="urunler" className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                Thermaplus Ürün Gamı
              </h2>
              <p className="text-gray-500 text-lg font-light">
                Konut, havuz ve endüstriyel ihtiyaçlara göre gruplanmış seriler.
              </p>
            </div>

            {heatPumpCategories.map((category) => {
              const meta = categoryMeta[category];
              const CategoryIcon = meta.icon;
              return (
                <div key={category} className="mb-16 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center">
                        <CategoryIcon className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#1e3a8a]">{category}</h3>
                    </div>
                    <p className="text-gray-500 font-light md:mb-1 max-w-2xl">{meta.desc}</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {heatPumpProducts
                      .filter((product) => product.category === category)
                      .map((product) => (
                        <Link
                          key={product.slug}
                          href={`/isi-pompasi/${product.slug}`}
                          className="group bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-5 items-center"
                        >
                          <div className="relative w-32 sm:w-36 aspect-square rounded-[18px] overflow-hidden bg-gray-50 shrink-0">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="min-w-0 py-1">
                            <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 leading-tight">
                              {product.title}
                            </h4>
                            <p className="text-gray-500 font-light leading-relaxed mb-3 text-sm line-clamp-2">
                              {product.summary}
                            </p>
                            <span className="inline-flex items-center gap-2 font-bold text-sm text-[#1e3a8a] group-hover:text-[#ea580c]">
                              Detayları İncele <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tasarruf hesaplama modülü */}
        <section className="py-24 bg-[#1e3a8a]">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto text-white">
              <Calculator className="w-14 h-14 text-[#f97316] mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Tasarruf Hesaplama
              </h2>
              <p className="text-white/75 font-light text-lg md:text-xl leading-relaxed mb-10">
                Mevcut ısıtma sisteminize göre ısı pompasıyla ne kadar tasarruf
                edeceğinizi hesaplayan modülümüz çok yakında burada. Şimdilik
                kapasite hesaplama formumuz üzerinden uzman ekibimizden ücretsiz
                analiz talep edebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://form.jotform.com/232702760885966"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
                >
                  Kapasite Hesaplama Formu <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1e3a8a] transition-colors"
                >
                  <ThermometerSun className="w-5 h-5" />
                  Uzmana Danışın
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
