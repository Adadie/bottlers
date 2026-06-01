"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MastermindSection() {
  return (
    <section className="bg-[#050505] py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-4 text-center"
        >
          Chapter X
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-black text-[#f0ebe0] text-center mb-16 leading-tight"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          The Mastermind Smiles
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#1a1a1a] glow-red">
              <Image
                src="/images/mastermind-selfie.jpg"
                alt="The mastermind"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Red vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(239,1,7,0.2) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Quote badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-4 md:right-auto md:-left-6 bg-[#ef0107] text-white rounded-xl px-5 py-3 shadow-xl"
            >
              <p className="text-sm font-bold">&ldquo;I planned this before full time&rdquo;</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-8 md:pt-0"
          >
            <h3
              className="text-3xl md:text-4xl font-black text-[#f0ebe0] mb-2"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              The Artist.
            </h3>
            <h3
              className="text-3xl md:text-4xl font-black text-[#c8a96e] mb-2"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              The Genius.
            </h3>
            <h3
              className="text-3xl md:text-4xl font-black text-[#ef0107] mb-8"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              The Professional Troller.
            </h3>

            <div className="space-y-5 text-[#888] text-base leading-relaxed">
              <p>
                While the world mourned, he smiled. That smile isn&apos;t relief, it
                isn&apos;t joy — it is the quiet confidence of a man who had already
                purchased photo paper before the final whistle.
              </p>
              <p>
                Hours of work. Printed sheets. Precision cutting. Label
                application. And now, holding the finished product —{" "}
                <span className="text-[#f0ebe0]">Arsenal Bottlerz™</span>, the
                most thoughtful, most diabolical gift in UCL final history.
              </p>
              <p>
                The bottle does not lie. The logo does not flinch. And neither
                does he.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#1a1a1a] pt-8">
              {[
                { value: "3", label: "Bottles made" },
                { value: "0", label: "Sympathy given" },
                { value: "∞", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-3xl font-black text-[#ef0107]"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#555] text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
