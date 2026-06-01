"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TheCollection() {
  return (
    <section className="bg-[#080808] py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-4 text-center"
        >
          Chapter XI — The Final Reveal
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-black text-[#f0ebe0] text-center mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          The Troll Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-[#555] text-lg mb-16"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          <em>Three bottles. Three Arsenal fans. Zero UCL trophies. The math checks out.</em>
        </motion.p>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[3/4] md:aspect-video rounded-2xl overflow-hidden border border-[#1a1a1a] glow-red"
        >
          <Image
            src="/images/collection-three-bottles.jpg"
            alt="The Arsenal Tears collection — three bottles"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          {/* Dark overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-2">
                Limited Edition
              </p>
              <h3
                className="text-3xl md:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                Arsenal Bottlerz™
                <br />
                <span className="text-[#ef0107]">2026 UCL Final Series</span>
              </h3>
              <p className="text-white/60 text-sm mt-2">
                Production run: 3 units — all accounted for
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Units Produced", value: "3" },
            { label: "UCL Titles Won", value: "0" },
            { label: "Friends Betrayed", value: "3" },
            { label: "Regrets", value: "None" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-5 text-center"
            >
              <p
                className="text-3xl md:text-4xl font-black text-[#ef0107] mb-1"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
              >
                {item.value}
              </p>
              <p className="text-[#555] text-xs tracking-wide">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
