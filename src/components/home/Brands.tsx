"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const brands = [
  {
    name: "INSPUR",
    role: "Enerji Depolama (BESS)",
    description: "Dünya teknoloji devi Inspur'un Türkiye distribütörü olarak, güvenilir ve yüksek performanslı enerji depolama sistemleri (BESS) sunuyoruz.",
    image: "/images/e9551124-2722-4454-bf42-e6d7ff187aec.png",
    logo: "/images/image1.png",
    href: "/markalar/inspur",
    tags: ["Global Distribütörlük", "BESS", "Yüksek Kapasite"],
  },
  {
    name: "Thermaplus",
    role: "Isı Pompası",
    description: "Saray Holding'in kendi tescilli markası olan Thermaplus ile eviniz veya işletmeniz için verimlilik odaklı, yerli ve yenilikçi iklimlendirme sistemleri.",
    image: "/images/heat-pump.png",
    logo: "/images/Adsız tasarım.png",
    href: "/markalar/thermaplus",
    tags: ["A+++ Verimlilik", "Sessiz Çalışma", "Akıllı Kontrol"],
  },
];

export default function Brands() {
  return (
    <section className="py-32 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#ea580c] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Partnerlerimiz & Markalarımız</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-[#1e3a8a]">Sektöre Yön Veren <br/>Teknoloji Ortaklıkları</h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg font-light">Global teknoloji devlerinin Türkiye distribütörlüğü ve Saray Holding güvencesiyle oluşturduğumuz kendi tescilli markalarımız.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-white rounded-[40px] p-8 md:p-14 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Logo and Role */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div className="relative h-12 md:h-16 w-48 shrink-0">
                    <Image src={brand.logo} alt={brand.name} fill className="object-contain object-left transition-transform group-hover:scale-105" />
                  </div>
                  <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-[10px] font-bold tracking-widest uppercase border border-gray-100">
                    {brand.role}
                  </span>
                </div>
                
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                  {brand.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                  {brand.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between mt-auto">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border border-gray-100 shadow-inner group-hover:-translate-y-2 transition-transform duration-500">
                  <Image src={brand.image} alt={brand.name} fill className="object-cover" />
                </div>

                <Link
                  href={brand.href}
                  className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#ea580c] transition-colors duration-300 shadow-sm border border-gray-100 group-hover:border-[#ea580c]"
                >
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
