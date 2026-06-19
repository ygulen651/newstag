"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const brands = [
  {
    name: "THERMAPLUS",
    desc: "Yüksek verimli, çevre dostu ve akıllı ısı pompası çözümleri. Konut ve ticari alanlar için sürdürülebilir iklimlendirme.",
    logo: "/images/Adsız tasarım.png",
    link: "/markalar/thermaplus",
    bg: "bg-gray-50",
  },
  {
    name: "INSPUR",
    desc: "Veri merkezleri için akıllı altyapı ve yüksek kapasiteli sıvı soğutma enerji çözümleri.",
    logo: "/images/image1.png",
    link: "/markalar/inspur",
    bg: "bg-white",
  }
];

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f8fafc] min-h-screen pt-40 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-[#ea580c] text-sm font-bold uppercase tracking-[0.4em] mb-4 block">Küresel Güç</span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-medium text-[#020817] tracking-tighter mb-4">
                Global <span className="text-[#ea580c]">Markalarımız</span>
              </h1>
            </div>
            <div className="text-xl text-gray-500 font-light max-w-md">
              Sektöründe lider, vizyoner ve teknoloji odaklı partnerlerimizle geleceği tasarlıyoruz.
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 mt-20">
            {brands.map((brand, i) => (
              <Link href={brand.link} key={brand.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-[40px] p-10 md:p-12 border border-gray-200/80 hover:shadow-2xl hover:border-[#ea580c]/30 transition-all duration-300 flex flex-col md:flex-row items-center gap-10"
                >
                  {/* Logo */}
                  <div className="relative h-20 w-full md:w-56 shrink-0">
                    <Image 
                      src={brand.logo} 
                      alt={brand.name} 
                      fill 
                      className="object-contain object-center md:object-left transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px md:w-px md:h-24 bg-gray-200/80" />

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-3 tracking-tight">
                      {brand.name}
                    </h2>
                    <p className="text-gray-500 font-light leading-relaxed mb-6">
                      {brand.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#ea580c] transition-colors duration-300 shadow-sm border border-gray-200/50 group-hover:border-[#ea580c]">
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-all" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
