"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={container} className="relative h-[120vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ scale, borderRadius }}
          className="relative h-full w-full overflow-hidden mx-auto"
        >
          {/* Background Video with Parallax Depth */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
            className="absolute inset-0 z-0"
          >
            <video
              src="/images/magnific_cinematic-renewable-energy-video-prompt-1520-seccr_veo3_1_1080p_16-9_24fps_22089.mp4"
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* Brand Stamp */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-8 right-8 md:top-12 md:right-12 z-20 flex items-center gap-3 bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
            <span className="text-white/90 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
              Bir Saray Holding Markası
            </span>
          </motion.div>

          {/* Hero Text */}
          <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-32 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-8xl font-medium tracking-tight text-white drop-shadow-lg"
            >
              TEMİZ BİR GELECEĞE GÜÇ VERİN
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
