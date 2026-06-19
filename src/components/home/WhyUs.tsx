"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="py-32 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-[#ea580c] text-3xl md:text-5xl font-medium mb-12">
            Neden Newstag Enerji?
          </h2>
          
          <div className="w-px h-32 bg-[#f97316] mx-auto mb-16 opacity-30" />

          <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
            Küresel iş ortaklarımızın güvenini arkasına alan Newstag Enerji; teknoloji, üretim ve servis süreçlerinde en yüksek standartları sunar. Gelin, sürdürülebilir bir geleceğe birlikte köprü kuralım.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
