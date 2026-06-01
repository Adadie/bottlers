"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#111] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Final CTA / delivery notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 md:p-12 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl"
        >
          <p className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-4">
            Delivery Notice
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#f0ebe0] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Coming to an Arsenal Fan
            <br />
            <span className="text-[#ef0107]">Near You</span>
          </h2>
          <p className="text-[#666] text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Three bottles. Three recipients. All personally selected for their
            dedication to a club that has never won the UCL and, based on recent
            evidence, may never will.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[#555]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span>Bottles: Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span>Smug smile: Prepared</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span>Sympathy: 0%</span>
            </div>
          </div>
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3
            className="text-5xl font-black mb-2 text-glow-red"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            <span className="text-[#ef0107]">Arsenal</span>{" "}
            <span className="text-[#f0ebe0] italic">Tears™</span>
          </h3>
          <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-6">
            est. 30 May 2026 • Budapest, Hungary
          </p>

          <div className="h-px w-24 bg-[#1a1a1a] mx-auto mb-6" />

          <p className="text-[#333] text-xs leading-relaxed max-w-lg mx-auto">
            Arsenal Bottlerz™ is an independent trolling initiative. Arsenal
            Football Club had no involvement in this product and probably wishes
            they had won the UCL instead. No Arsenal fans were physically harmed
            in the making of these bottles. Emotionally, however, is another
            story.
          </p>

          <p className="text-[#222] text-xs mt-6">
            UCL Final 2026 · 1—1 AET · PSG 4—3 Arsenal (Pens) · Forever 0 titles
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
