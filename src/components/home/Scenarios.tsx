"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const customerScenarios = [
  {
    id: "home",
    title: "Evler İçin",
    image: "/images/home-scenario.png",
    links: [
      { label: "Ürünler ve Çözümler", href: "/cozumlerimiz/evler" },
      { label: "Referanslar ve Hikayeler", href: "/referanslar" },
      { label: "Servis ve Destek", href: "/servis" },
    ],
  },
  {
    id: "business",
    title: "İşletmeler İçin",
    image: "/images/business-scenario.png",
    links: [
      { label: "Ticari Çözümler", href: "/cozumlerimiz/ticari" },
      { label: "Sürdürülebilirlik Raporları", href: "/referanslar" },
      { label: "Endüstriyel Teknik Destek", href: "/servis" },
    ],
  },
  {
    id: "grid",
    title: "Şebeke Ölçekli",
    image: "/images/utility-scenario.png",
    links: [
      { label: "Büyük Ölçekli Depolama", href: "/cozumlerimiz/sebeke" },
      { label: "EPC Partnerliği", href: "/referanslar" },
      { label: "Global Projeler", href: "/referanslar" },
    ],
  },
  {
    id: "installers",
    title: "Kurulumcular",
    image: "/images/home-hero.png",
    links: [
      { label: "Sertifikasyon Programı", href: "/servis" },
      { label: "Kurulum Klavuzları", href: "/teknik-dokumanlar" },
      { label: "Partner Portalı", href: "/servis" },
    ],
  },
  {
    id: "distributors",
    title: "Distribütörler",
    image: "/images/powertitan-layered.png",
    links: [
      { label: "Tedarik Zinciri", href: "/hakkimizda" },
      { label: "Satış Kanalları", href: "/hakkimizda" },
      { label: "Bize Katılın", href: "/hakkimizda" },
    ],
  },
];

const businessAreas = [
  {
    id: "pv",
    title: "Güneş Enerjisi",
    image: "/images/home-hero.png",
    links: [
      { label: "BESS Çözümleri", href: "/markalar/inspur" },
      { label: "Hibrit Çözümler", href: "/markalar/inspur" },
      { label: "Teknik Kataloglar", href: "/teknik-dokumanlar" },
    ],
  },
  {
    id: "ess",
    title: "Enerji Depolama",
    image: "/images/powertitan-layered.png",
    links: [
      { label: "Inspur BESS Serisi", href: "/markalar/inspur" },
      { label: "Lityum Bataryalar", href: "/markalar/inspur" },
      { label: "Sistem Entegrasyonu", href: "/markalar/inspur" },
    ],
  },
  {
    id: "ev",
    title: "EV Şarj Çözümleri",
    image: "/images/heat-pump.png",
    links: [
      { label: "Hızlı Şarj İstasyonları", href: "/markalar/thermaplus" },
      { label: "Yazılım ve Kontrol", href: "/servis" },
      { label: "Referans Projeler", href: "/referanslar" },
    ],
  },
];

export default function Scenarios() {
  const [mainTab, setMainTab] = useState("scenarios"); // "scenarios" or "business"
  const [activeTab, setActiveTab] = useState("power-plants");
  
  const currentData = mainTab === "scenarios" ? customerScenarios : businessAreas;
  const activeScenario = currentData.find((s) => s.id === activeTab) || currentData[0];

  const handleMainTabChange = (tab: string) => {
    setMainTab(tab);
    setActiveTab(tab === "scenarios" ? "power-plants" : "pv");
  };

  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-[#1e3a8a]">
      {/* Top Tabs */}
      <div className="absolute top-12 left-0 w-full z-20 flex justify-center gap-12 text-sm font-medium">
        <button 
          onClick={() => handleMainTabChange("scenarios")}
          className={`uppercase tracking-widest transition-all pb-2 ${
            mainTab === "scenarios" ? "text-white border-b-2 border-[#ea580c]" : "text-white/50 hover:text-white"
          }`}
        >
          Çözümlerimiz
        </button>
        <button 
          onClick={() => handleMainTabChange("business")}
          className={`uppercase tracking-widest transition-all pb-2 ${
            mainTab === "business" ? "text-white border-b-2 border-[#ea580c]" : "text-white/50 hover:text-white"
          }`}
        >
          İş Alanları
        </button>
      </div>

      {/* Background Image with Reveal Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${mainTab}-${activeTab}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeScenario.image}
            alt={activeScenario.title}
            fill
            className="object-cover"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-6 h-full relative z-10 flex flex-col justify-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${mainTab}-${activeTab}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={activeScenario.links[0].href} className="group">
                <h2 className="text-6xl md:text-8xl font-medium text-white mb-16 flex items-center gap-6 group-hover:text-[#ea580c] transition-colors">
                  {activeScenario.title} <ChevronRight className="w-16 h-16 text-white/30 group-hover:text-[#ea580c] transition-all" />
                </h2>
              </Link>

              <div className="space-y-8">
                {activeScenario.links.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-4 text-2xl text-white/70 hover:text-white transition-all font-light"
                    >
                      {link.label} 
                      <ChevronRight className="w-6 h-6 text-[#ea580c] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="absolute bottom-12 left-0 w-full z-20 px-6">
        <div className="container mx-auto">
          <div className="bg-black/40 backdrop-blur-2xl rounded-[32px] p-2 flex items-center justify-between border border-white/10 shadow-2xl">
            {currentData.map((s, index) => (
              <React.Fragment key={s.id}>
                <button
                  onClick={() => setActiveTab(s.id)}
                  className={`flex-1 py-5 px-4 rounded-[24px] text-sm font-medium transition-all duration-500 whitespace-nowrap ${
                    activeTab === s.id 
                      ? "bg-white text-[#1e3a8a] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] scale-100" 
                      : "text-white/50 hover:text-white hover:bg-white/5 scale-95"
                  }`}
                >
                  {s.title}
                </button>
                {index < currentData.length - 1 && (
                  <div className="w-px h-6 bg-white/10 mx-1 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
