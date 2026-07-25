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
  Cloud,
  Cpu,
  Database,
  Globe2,
  MonitorSmartphone,
  Server,
  Zap,
} from "lucide-react";

const stats = [
  { value: "$31B+", label: "Yıllık Gelir (USD)" },
  { value: "Top 3", label: "Global Sunucu Üreticilerinden Biri" },
  { value: "120", label: "Ülkede Aktif Operasyon" },
  { value: "3", label: "Borsada İşlem Gören Şirket" },
];

const strengths = [
  {
    icon: Cpu,
    title: "Ar-Ge Odaklı Organizasyon",
    desc: "36.000 çalışanın %60'ı Ar-Ge ve mühendislik kadrosunda; 31.000'in üzerinde global patent portföyü.",
    image: null,
  },
  {
    icon: Server,
    title: "Sunucu Teknolojisinde Liderlik",
    desc: "Yapay zeka sunucularında dünyanın 1 numarası, tüm sunucularda 2 numarası; 178 operatör ve endüstri müşterisine hizmet.",
    image: "/images/11111.jpg",
  },
  {
    icon: Cloud,
    title: "IT ve Bulut DNA'sı",
    desc: "IT altyapısı yazılım gücünü BESS'e entegre eden tek oyuncu; hücre bazlı izleme ve yapay zeka destekli kontrol.",
    image: null,
  },
  {
    icon: Zap,
    title: "Sıfır Karbon Vizyonu",
    desc: "BESS ürünleri, Inspur'un sıfır karbon hedefi doğrultusunda yatırım yaptığı ana sektörlerden biri.",
    image: null,
  },
];

const timeline = [
  { year: "1945", event: "Inspur'un temelleri atıldı." },
  { year: "1983", event: "İlk Inspur bilgisayarı tanıtıldı." },
  { year: "1993", event: "Çin'in ilk kompakt sunucusu piyasaya sürüldü." },
  { year: "2010", event: "Büyük ölçekli merkezi bilgisayar sistemi K1 geliştirildi." },
  { year: "2022", event: "Yapay zeka sunucularında dünya 1.si, tüm sunucularda 2.si oldu." },
  { year: "Bugün", event: "1 GWh'a yaklaşan BESS kurulum deneyimi ile enerji depolamada küresel oyuncu." },
];

const sectors = [
  { icon: Server, title: "Bilişim Donanımı", desc: "Dünyanın en güçlü sunucularının üreticisi." },
  { icon: Cloud, title: "Bulut Bilişim", desc: "Çin devlet veri bulutu ve akıllı şehir yönetimi." },
  { icon: Database, title: "Büyük Veri", desc: "90.000'den fazla devlet ve kamu uygulamasının servis sağlayıcısı." },
  { icon: MonitorSmartphone, title: "Akıllı Terminaller", desc: "Akıllı robotlar, VR, etkileşimli ekranlar ve sıfır karbon enerji çözümleri." },
];

export default function InspurBrandPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white overflow-hidden">
        {/* Hero */}
        <section className="relative py-28 md:py-36 bg-[#0b1f4e] text-white overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-16 w-56 mb-10 bg-white rounded-2xl p-3">
                  <Image
                    src="/images/image1.png"
                    alt="Inspur logosu"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  IT Dünyasının <span className="text-[#f97316]">Devi</span>
                </h1>
                <p className="text-xl text-white/75 leading-relaxed mb-10 max-w-xl font-light">
                  Yapay zeka sunucularında dünyanın 1 numarası olmayı başarmış,
                  tüm sunucu üreticileri arasında dünyanın ilk 3 firması arasında
                  olan lider şirket.
                </p>
                <Link
                  href="/bess"
                  className="inline-flex items-center gap-3 bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c2410c] transition-colors"
                >
                  <BatteryCharging className="w-5 h-5" />
                  BESS Ürünlerini İncele
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[40px] overflow-hidden bg-white/5 border border-white/10"
              >
                <Image
                  src="/images/products/bess-konteyner-xl.png"
                  alt="Inspur konteyner tipi BESS"
                  fill
                  className="object-contain p-10"
                  priority
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[28px] bg-white/5 border border-white/10 p-7 text-center backdrop-blur"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#f97316] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden farklı */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                Inspur&apos;u Farklı Kılan Nedir?
              </h2>
              <div className="w-20 h-1.5 bg-[#ea580c] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strengths.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-[#f8fafc] rounded-[30px] p-8 border border-gray-100"
                >
                  {item.image && (
                    <div className="relative mb-7 aspect-video overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <item.icon className="w-9 h-9 text-[#ea580c] mb-6" />
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarihçe */}
        <section className="py-24 bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                80 Yıllık Teknoloji Yolculuğu
              </h2>
              <p className="text-gray-500 text-lg font-light">
                Ana bilgisayar döneminden bulut bilişim çağına uzanan kesintisiz inovasyon.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-8 pb-10 last:pb-0 relative"
                >
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[3.4rem] top-14 bottom-0 w-px bg-gray-200" />
                  )}
                  <div className="w-28 shrink-0 text-right">
                    <span className="inline-block rounded-full bg-[#1e3a8a] text-white text-sm font-bold px-4 py-2">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-600 font-light text-lg pt-1.5">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ana sektörler */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                Inspur Ana Sektörler
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-[#f8fafc] rounded-[28px] p-7 border border-gray-100"
                >
                  <sector.icon className="w-8 h-8 text-[#ea580c] mb-5" />
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{sector.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{sector.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rizhao referans */}
        <section className="py-24 bg-[#1e3a8a] text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Globe2 className="w-12 h-12 text-[#f97316] mb-8" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Sahada Kanıtlanmış Deneyim
                </h2>
                <p className="text-white/75 text-lg font-light leading-relaxed mb-8">
                  Inspur; santral, off-grid, şarj istasyonu, sıfır karbon
                  alanları, veri merkezi ve mikro şebeke uygulamalarında 1 GWh&apos;a
                  yaklaşan kurulum deneyimine sahip. Rizhao Santral Projesi&apos;nde
                  tek seferde 200 MW / 400 MWh kurulum gerçekleştirdi.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10 max-w-md">
                  <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
                    <div className="text-3xl font-bold text-[#f97316]">1 GWh</div>
                    <div className="text-white/60 text-sm mt-1">Yaklaşan kurulum deneyimi</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-6 border border-white/10">
                    <div className="text-3xl font-bold text-[#f97316]">400 MWh</div>
                    <div className="text-white/60 text-sm mt-1">Rizhao tek proje kurulumu</div>
                  </div>
                </div>
                <Link
                  href="/bess"
                  className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-bold hover:bg-[#f97316] hover:text-white transition-colors"
                >
                  Ürünleri İncele <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/e9551124-2722-4454-bf42-e6d7ff187aec.png"
                  alt="Inspur BESS saha kurulumu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
