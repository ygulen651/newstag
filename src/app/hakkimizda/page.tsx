"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield, Target, Eye, Zap, Award, ArrowDown } from "lucide-react";
import Image from "next/image";

const values = [
  { title: "Güven", desc: "Saray Holding'in yarım asırlık mirasıyla sarsılmaz bir güven inşa ediyoruz.", icon: Shield },
  { title: "İnovasyon", desc: "En yeni enerji teknolojilerini Türkiye'ye taşıyarak dönüşüme liderlik ediyoruz.", icon: Zap },
  { title: "Sürdürülebilirlik", desc: "Gelecek nesillere daha yaşanabilir bir dünya bırakmak için çalışıyoruz.", icon: Target },
  { title: "Mükemmellik", desc: "Mühendislikten servise kadar her aşamada en yüksek kaliteyi hedefliyoruz.", icon: Award },
];

function ParallaxSection({ children, image, title, speed = 0.5 }: { children: React.ReactNode, image: string, title: string, speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[100vh] flex items-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover brightness-50" />
      </motion.div>
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="bg-white">
        {/* Immersive Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1e3a8a]">
          <motion.div 
            style={{ scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.2]) }}
            className="absolute inset-0 z-0 opacity-40"
          >
            <Image src="/images/hakkimizda-hero.png" alt="Hero" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-[#ea580c]/20 mix-blend-multiply" />
          </motion.div>
          
          <div className="relative z-10 text-center space-y-8 max-w-5xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Geleceğin Enerjisi</span>
              <h1 className="text-6xl md:text-9xl font-medium text-white tracking-tighter leading-none">
                Yeni Nesil <br />
                <span className="text-gray-300">Teknoloji Gücü</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-12"
            >
              <div className="flex flex-col items-center gap-4 text-white/30">
                <span className="text-[10px] uppercase tracking-widest">Keşfetmek İçin Kaydırın</span>
                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Narrative Section 1 - Parallax Background */}
        <ParallaxSection image="/images/business-scenario.png" title="Heritage" speed={-0.2}>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tighter leading-none">
                Yarım Asırlık <br /> <span className="text-[#ea580c]">Saray Holding</span> Güvencesi
              </h2>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                  1961 yılından bu yana sanayi, gıda ve ambalaj sektörlerindeki liderliğini enerji sektörüne de taşıyan Saray Holding, sürdürülebilir gelecek vizyonuyla büyümeye devam ediyor.
                </p>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                  Greeneco Enerji ile jeotermal ve yenilenebilir enerji alanında atılan güçlü adımlar, bugün <span className="font-medium text-white">Newstag Enerji</span> çatısı altında güneş enerjisi (PV), enerji depolama sistemleri (BESS) ve e-mobilite çözümleriyle taçlanıyor.
                </p>
              </div>
            </motion.div>
          </div>
        </ParallaxSection>

        {/* Values - Editorial List (No Boxes) */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
                <h2 className="text-5xl md:text-7xl font-medium text-[#1e3a8a] tracking-tighter leading-none">
                  Fark <br /> Yaratan <br /> <span className="text-[#f97316]">Değerlerimiz</span>
                </h2>
                <div className="mt-8 w-12 h-1 bg-[#ea580c]" />
              </div>
              
              <div className="w-full lg:w-2/3 space-y-12 lg:space-y-16">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row gap-6 md:gap-12 group"
                  >
                    <span className="text-6xl md:text-8xl font-black text-gray-100 group-hover:text-[#ea580c]/10 transition-colors duration-700">
                      0{i + 1}
                    </span>
                    <div className="pt-4">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#1e3a8a] flex items-center gap-4">
                        {v.title}
                        <v.icon className="w-6 h-6 text-[#ea580c] md:opacity-0 md:group-hover:opacity-100 transition-all md:-translate-x-4 md:group-hover:translate-x-0" />
                      </h3>
                      <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                        {v.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Fluid Split Layout (No Boxes) */}
        <section className="py-32 bg-[#1e3a8a] relative overflow-hidden">
          {/* Parallax Ticker */}
          <div className="absolute top-0 left-0 w-full flex whitespace-nowrap opacity-5 pointer-events-none">
            {[1, 2].map((n) => (
              <motion.span 
                key={n}
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="text-[10rem] md:text-[25rem] font-black text-white tracking-tighter uppercase mr-20"
              >
                FUTURE • ENERGY • SUSTAINABLE • 
              </motion.span>
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="space-y-24 md:space-y-32">
              {/* Vision */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    className="w-24 h-1 bg-[#f97316] mb-12 origin-left"
                  />
                  <h3 className="text-3xl font-bold text-[#f97316] mb-8 uppercase tracking-[0.3em]">Vizyonumuz</h3>
                  <p className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-tight">
                    Dünya standartlarında enerji teknolojilerini <span className="text-gray-300">herkes için erişilebilir</span> kılan bir gelecek.
                  </p>
                </div>
                <div className="hidden lg:block text-white/10">
                  <Eye className="w-64 h-64" />
                </div>
              </div>

              {/* Mission */}
              <div className="flex flex-col lg:flex-row-reverse justify-between items-start gap-12 text-right">
                <div className="max-w-3xl lg:text-right">
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    className="w-24 h-1 bg-[#f97316] mb-12 origin-right ml-auto"
                  />
                  <h3 className="text-3xl font-bold text-[#f97316] mb-8 uppercase tracking-[0.3em]">Misyonumuz</h3>
                  <p className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-tight">
                    Çevreye duyarlı çözümlerle <span className="text-gray-300">karbon ayak izini</span> minimize eden teknolojik dönüşüm.
                  </p>
                </div>
                <div className="hidden lg:block text-white/10">
                  <Target className="w-64 h-64" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
