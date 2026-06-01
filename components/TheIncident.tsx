"use client";

import { motion } from "framer-motion";

export default function TheIncident() {
  const words = [
    "Budapest.",
    "The",
    "dream",
    "died.",
    "Again.",
  ];

  return (
    <section className="bg-[#050505] py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-10"
        >
          The Incident
        </motion.p>

        {/* Animated word-by-word headline */}
        <h2
          className="text-5xl md:text-7xl font-black leading-tight mb-16"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`inline-block mr-4 ${
                word === "died." || word === "Again."
                  ? "text-[#ef0107]"
                  : "text-[#f0ebe0]"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 text-[#888] text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          <p>
            Budapest. A stadium full of hope. Millions of red-and-white clad
            believers watching their beloved Gunners step onto the grandest
            stage in club football. The UEFA Champions League Final.{" "}
            <em className="text-[#f0ebe0]">The one they&apos;ve never won.</em>
          </p>
          <p>
            1 — 1 after extra time. Arsenal had dared to believe. Then came the
            penalty shootout — the cruelest theatre in football. PSG 4, Arsenal
            3. The cannon fell silent. The dream, once again, evaporated into
            the Budapest night air like so many{" "}
            <em className="text-[#f0ebe0]">
              &quot;we&apos;re winning the league&quot;
            </em>{" "}
            predictions before it.
          </p>
          <p className="text-[#f0ebe0] text-xl font-medium">
            But somewhere in the city, a man was already at his desk. Printing.
            Cutting. Planning.
          </p>
          <p>
            Because true friendship is not offering condolences.{" "}
            <em className="text-[#c8a96e]">
              True friendship is giving them something to cry into.
            </em>
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent"
        />
      </div>
    </section>
  );
}
