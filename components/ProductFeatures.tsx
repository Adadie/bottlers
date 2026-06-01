"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "💧",
    title: "Tasting Notes",
    body: "Opens with a wave of bitter disappointment, evolving into notes of missed big chances. Long finish of 'maybe next season' with a lingering aftertaste of second place.",
  },
  {
    icon: "🏆",
    title: "Trophy Equivalent",
    body: "None. Much like the Arsenal UCL cabinet, this bottle contains something — but it isn't silverware. It is, however, 500ml of premium hydration.",
  },
  {
    icon: "🔬",
    title: "Ingredients",
    body: "100% naturally sourced water, distilled through the collective sigh of Arsenal fans worldwide. No artificial hope was added. The hope was already gone.",
  },
  {
    icon: "📅",
    title: "Vintage",
    body: "May 30, 2026. A date that will live in Arsenal infamy, right next to every other date they were supposed to win something and didn't.",
  },
  {
    icon: "🎁",
    title: "Serving Suggestion",
    body: "Best served ice cold to Arsenal fans, preferably while wearing a neutral expression. Pairs well with 'I believe you have something that belongs to me' energy.",
  },
  {
    icon: "🛡️",
    title: "Authenticity",
    body: "Each bottle features a genuine hand-cut, hand-applied Arsenal crest. Not mass produced. Not soulless. This troll was crafted with love, precision, and absolutely no mercy.",
  },
];

export default function ProductFeatures() {
  return (
    <section className="bg-[#050505] py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-4"
          >
            Product Specifications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-black text-[#f0ebe0] leading-tight"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Why Arsenal Bottlerz™?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#555] text-lg mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            <em>
              Because regular water doesn&apos;t come with a side of emotional
              damage.
            </em>
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#ef0107]/30 transition-colors duration-300 group"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-[#f0ebe0] font-bold text-lg mb-3 group-hover:text-[#c8a96e] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certification badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border border-[#ef0107]/40 rounded-full px-8 py-4 bg-[#0d0d0d]">
            <p className="text-[#ef0107] text-sm tracking-[0.2em] uppercase font-medium">
              🏅 Certified Troll Approved — Class of 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
