"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Zap, ShieldCheck, Battery } from "lucide-react";

export default function SungrowPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <Navbar />
      <main ref={ref} className="bg-white overflow-hidden">
        {/* Parallax Hero */}
        <section className="relative h-[80vh] flex items-center justify-center bg-[#020817] overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-50">
            <Image src="/images/powertitan-layered.png" alt="Sungrow BESS" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] to-transparent z-10" />
          
          <div className="relative z-20 text-center max-w-4xl px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-medium text-white mb-6 tracking-tighter"
            >
              PowerTitan <span className="text-[#ea580c]">2.0</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-gray-400 font-light"
            >
              Dünyanın en gelişmiş sıvı soğutmalı enerji depolama sistemi.
            </motion.p>
          </div>
        </section>

        {/* Features - Minimalist List */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-medium text-[#020817] tracking-tighter leading-none">
                  Sistemin <br /><span className="text-[#ea580c]">Avantajları</span>
                </h2>
              </div>
            </div>

            <div className="border-t border-gray-200">
              {[
                { icon: Zap, title: "Yüksek Verimlilik", desc: "%98.5'e varan sistem verimliliği ile maksimum enerji geri dönüşümü." },
                { icon: ShieldCheck, title: "Üstün Güvenlik", desc: "Hücre seviyesinden sistem seviyesine kadar 4 katmanlı güvenlik mimarisi." },
                { icon: Battery, title: "Uzun Ömür", desc: "10.000 döngüye kadar garantili batarya performansı ve kapasitesi." }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="py-12 border-b border-gray-200 flex flex-col md:flex-row gap-8 items-start md:items-center group hover:pl-4 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#ea580c] group-hover:text-white transition-colors shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-medium text-[#020817] tracking-tight group-hover:text-[#ea580c] transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
