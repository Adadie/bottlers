"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowScore(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Ambient red glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(239,1,7,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,235,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,224,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-16 bg-[#c8a96e] opacity-60" />
          <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase font-medium">
            UCL Final • 30 May 2026
          </span>
          <div className="h-px w-16 bg-[#c8a96e] opacity-60" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-7xl md:text-9xl font-black tracking-tight mb-4 leading-none"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          <span className="text-[#ef0107] text-glow-red">Arsenal</span>
          <br />
          <span className="text-[#f0ebe0] italic">Bottlerz™</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#c8a96e] text-lg md:text-xl tracking-wide mb-12"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          <em>The Only Trophy Arsenal Brought Home</em>
        </motion.p>

        {/* Score reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showScore ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="inline-block border border-[#222] bg-[#0d0d0d] rounded-2xl px-8 md:px-16 py-6 md:py-8 mb-12 glow-red"
        >
          {/* AET score */}
          <p className="text-[#666] text-xs tracking-[0.25em] uppercase mb-3">
            After Extra Time
          </p>
          <div className="flex items-center gap-6 md:gap-10 mb-5">
            <div className="text-center">
              <p className="text-[#f0ebe0] text-2xl md:text-3xl font-bold tracking-tight">
                PSG
              </p>
              <p className="text-[#c8a96e] text-xs mt-1">Champions</p>
            </div>
            <div className="text-center">
              <p
                className="text-5xl md:text-7xl font-black text-[#f0ebe0]"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                1 — 1
              </p>
            </div>
            <div className="text-center">
              <p className="text-[#f0ebe0] text-2xl md:text-3xl font-bold tracking-tight">
                Arsenal
              </p>
              <p className="text-[#ef0107] text-xs mt-1">Again</p>
            </div>
          </div>

          {/* Penalty shootout */}
          <div className="border-t border-[#1a1a1a] pt-4">
            <p className="text-[#666] text-xs tracking-[0.25em] uppercase mb-2">
              Penalty Shootout
            </p>
            <p
              className="text-3xl md:text-4xl font-black text-[#ef0107] text-glow-red"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              PSG 4 — 3 Arsenal
            </p>
            <p className="text-[#444] text-xs mt-1 tracking-wide">
              So close. Yet so Arsenal.
            </p>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-[#444] text-sm md:text-base max-w-lg mx-auto leading-relaxed"
        >
          While Arsenal fans processed their grief, one man processed something
          else entirely. This is the story of the most thoughtful gift of 2026.
        </motion.p>

        {/* Scroll CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <p className="text-[#333] text-xs tracking-[0.2em] uppercase">
            Scroll to witness
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-gradient-to-b from-[#ef0107] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
