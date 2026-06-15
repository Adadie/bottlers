"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reports = [
  {
    image: "/images/reaction-laugh.jpg",
    status: "Reaction: Disbelief → Laughter",
    caption:
      "Target acquired. First reaction: uncontrollable laughter. We've seen this exact laugh before — it's the same one Arsenal fans do every May, right before the crying starts.",
  },
  {
    image: "/images/reaction-handover.jpg",
    status: "Reaction: Could not make eye contact",
    caption:
      "UEFA may not hand out participation medals, but I was kind enough to hand out water. Judging by the smile and downward gaze, acceptance has reached stage three.",
  },
  {
    image: "/images/reaction-toast.jpg",
    status: "Reaction: Premature celebration",
    caption:
      "He raised it like a trophy, mid-lunch, for the camera. Technically accurate — it is, statistically, the closest thing to a UCL trophy this club has lifted all season.",
  },
  {
    image: "/images/reaction-desk.jpg",
    status: "Reaction: Quiet, permanent reminder",
    caption:
      "Days later. Still on the desk. Right next to the coffee, in his eyeline, every single morning. We don't call this a prank anymore. We call it 'integration.'",
  },
  {
    image: "/images/reaction-closure.jpg",
    status: "Reaction: Forgiveness (eventually)",
    caption:
      "Friendship: tested, not destroyed. He even agreed to pose for the photo, bottle in hand, smiling. A true professional. Arsenal could learn something about resilience from him.",
  },
];

export default function DeliveryDay() {
  return (
    <section className="bg-[#080808] py-24 md:py-36 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-4"
          >
            Delivery Day — Field Reports
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-[#f0ebe0] leading-tight"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            Mission: Delivered
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#555] text-lg mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            <em>
              The bottles found their targets. Here is the documented evidence
              — unedited, unfiltered, and frankly, a little bit beautiful.
            </em>
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl overflow-hidden group ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={report.image}
                  alt={report.status}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Status badge */}
                <div className="absolute top-3 left-3 right-3 flex justify-start">
                  <span className="bg-black/70 backdrop-blur-sm border border-[#ef0107]/40 rounded-full px-3 py-1.5 text-[#ef0107] text-[10px] tracking-[0.2em] uppercase font-medium">
                    {report.status}
                  </span>
                </div>
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Caption */}
              <div className="p-5">
                <p className="text-[#888] text-sm leading-relaxed">
                  {report.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p
            className="text-[#c8a96e] text-lg md:text-xl"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
          >
            <em>Three delivered. Zero regrets. One brand born.</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
