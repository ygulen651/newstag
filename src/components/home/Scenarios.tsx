"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Layers, Package } from "lucide-react";
import Link from "next/link";
import { solutions } from "@/lib/solutions-data";
import { useLanguage } from "@/lib/i18n";

export default function Scenarios() {
  const [activeSlug, setActiveSlug] = useState(solutions[0].slug);
  const { t } = useLanguage();
  const active = solutions.find((s) => s.slug === activeSlug) ?? solutions[0];

  return (
    <section className="relative h-[820px] w-full overflow-hidden bg-[#1e3a8a]">
      {/* Section Title */}
      <div className="absolute top-12 left-0 w-full z-20 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#f97316] mb-3 block">
          Newstag Enerji
        </span>
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
          {t.nav.solutions}
        </h2>
      </div>

      {/* Background Image with Reveal Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-6 h-full relative z-10 flex flex-col justify-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${active.slug}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/cozumlerimiz/${active.slug}`} className="group">
                <h3 className="text-4xl md:text-7xl font-medium text-white mb-8 flex items-center gap-6 group-hover:text-[#f97316] transition-colors">
                  {active.title}
                  <ChevronRight className="w-12 h-12 md:w-16 md:h-16 text-white/30 group-hover:text-[#f97316] transition-all" />
                </h3>
              </Link>

              <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed mb-12 max-w-xl">
                {active.shortDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/bess"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-[#1e3a8a] transition-colors hover:bg-[#ea580c] hover:text-white"
                >
                  <Package className="w-5 h-5" />
                  {t.common.products}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/cozumlerimiz/${active.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#1e3a8a]"
                >
                  <Layers className="w-5 h-5" />
                  {t.common.solutions}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="absolute bottom-12 left-0 w-full z-20 px-6">
        <div className="container mx-auto">
          <div className="bg-black/40 backdrop-blur-2xl rounded-[32px] p-2 flex flex-wrap items-center justify-between border border-white/10 shadow-2xl">
            {solutions.map((s, index) => (
              <React.Fragment key={s.slug}>
                <button
                  onClick={() => setActiveSlug(s.slug)}
                  onMouseEnter={() => setActiveSlug(s.slug)}
                  className={`flex-1 py-4 px-3 rounded-[24px] text-xs md:text-sm font-medium transition-all duration-500 whitespace-nowrap ${
                    activeSlug === s.slug
                      ? "bg-white text-[#1e3a8a] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] scale-100"
                      : "text-white/50 hover:text-white hover:bg-white/5 scale-95"
                  }`}
                >
                  {s.navTitle}
                </button>
                {index < solutions.length - 1 && (
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
