"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, ShieldCheck, Microscope, Globe2, Leaf } from "lucide-react";
import Link from "next/link";

const stats = [
  { 
    value: "870", 
    unit: "GW", 
    label: "Güç Elektroniği Dönüştürücüsü Kurulumu", 
    icon: Zap 
  },
  { 
    value: "BİRİNCİ", 
    unit: "", 
    label: "PV İnvertör, ESS ve PCS Finansal Güvenilirlik", 
    icon: ShieldCheck 
  },
  { 
    value: "6", 
    unit: "", 
    label: "Ar-Ge Merkezi", 
    icon: Microscope 
  },
  { 
    value: "20", 
    unit: "+", 
    label: "Uluslararası İştirakler", 
    icon: Globe2 
  },
  { 
    value: "AAA", 
    unit: "", 
    label: "MSCI ESG 2025 Derecelendirmesi", 
    icon: Leaf 
  },
];

export default function Trust() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-48 bg-white overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-0 right-0 w-1/3 h-full -z-10 opacity-10 blur-3xl pointer-events-none"
      >
        <div className="w-full h-full bg-[#ea580c] rounded-full translate-x-1/2" />
      </motion.div>
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]), opacity }}
        className="absolute bottom-0 left-0 w-1/2 h-full -z-10 opacity-10 blur-3xl pointer-events-none"
      >
        <div className="w-full h-full bg-[#f97316] rounded-full -translate-x-1/2" />
      </motion.div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-[#ea580c] text-3xl md:text-5xl font-medium mb-12">
            Herkes İçin Temiz Enerji
          </h2>
          
          <div className="w-px h-32 bg-[#f97316] mx-auto mb-16 opacity-30" />

          <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mb-24 max-w-4xl mx-auto font-light">
            Sungrow olarak temiz enerjinin tüm temel teknoloji alanlarında gelişimine öncülük ediyoruz. Güneş, rüzgâr, depolama, elektrifikasyon ve hidrojen çözümleriyle temiz enerjiyi yaygınlaştırmayı ve daha yenilikçi uygulamaları hayata geçirmeyi amaçlıyoruz.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="w-8 h-8 text-[#ea580c] mb-6" />
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#1e3a8a] tracking-tight">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-lg font-medium text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-[10px] md:text-xs text-gray-400 leading-tight max-w-[140px] uppercase font-medium tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/hakkimizda"
              className="inline-block px-12 py-4 border border-[#ea580c] text-[#ea580c] rounded-full hover:bg-[#ea580c] hover:text-white transition-all duration-300 text-lg font-medium"
            >
              Kim Olduğumuzu Keşfedin
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
