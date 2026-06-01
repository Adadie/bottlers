"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const chapters = [
  {
    number: "I",
    image: "/images/sticker-chaos.jpg",
    title: "The Spark",
    subtitle: "Where legends are born",
    body: "The final whistle blew. Arsenal fell. And while the internet was flooding with condolence tweets, one genius was already at his printer. Behold: the raw material. Arsenal logos scattered like the Gunners' Champions League dreams — everywhere and going nowhere.",
    tag: "00:51 — Post-match",
    imageOnRight: false,
  },
  {
    number: "II",
    image: "/images/workshop-sheets.jpg",
    title: "The Workshop Opens",
    subtitle: "Production begins",
    body: "Multiple sheets. Multiple logos. Some upside down — much like Arsenal's entire campaign in hindsight. A comb and a pen lay nearby, tools of a craftsman who takes his trolling as seriously as Arteta takes his tactical notebooks.",
    tag: "Production line activated",
    imageOnRight: true,
  },
  {
    number: "III",
    image: "/images/tools-and-target.jpg",
    title: "Meet the Victim",
    subtitle: "The target has been identified",
    body: "Then it appeared. A plain, unsuspecting water bottle — blissfully unaware of the destiny that awaited it. A blade. A pen. The sheets. The Arsenal badge. Everything in place. The transformation was imminent.",
    tag: "Subject identified",
    imageOnRight: false,
  },
  {
    number: "IV",
    image: "/images/workspace-closeup.jpg",
    title: "Precision Engineering",
    subtitle: "Every detail matters",
    body: "Cut. Trim. Align. This is not the work of an amateur. The individual Arsenal crests, carefully separated from their sheets, await application. Ferrari has Maranello. Lamborghini has Sant'Agata. Arsenal Bottlerz™ has this desk. Deal with it.",
    tag: "Surgical precision",
    imageOnRight: true,
  },
  {
    number: "V",
    image: "/images/first-branded-bottle.jpg",
    title: "The First Born",
    subtitle: "A trolling milestone",
    body: "History. The first Arsenal Bottlerz™ bottle. The Arsenal crest, freshly applied, stares back at you — the logo of a club that finished the UCL with zero titles, now on a bottle of water. The symmetry is poetry.",
    tag: "First unit complete",
    imageOnRight: false,
  },
  {
    number: "VI",
    image: "/images/prototype-shot.jpg",
    title: "Quality Control",
    subtitle: "Standards must be maintained",
    body: "Every great product requires quality assurance. The prototype is inspected. Approved. Unlike Arsenal's back four in the final, this label holds its ground. Perfectly adhered. Professionally devastating.",
    tag: "QA passed",
    imageOnRight: true,
  },
  {
    number: "VII",
    image: "/images/bottle-dark-flat.jpg",
    title: "The Dark Night",
    subtitle: "A moment of dark reflection",
    body: "120 minutes. An equaliser. Actual hope. Then penalties — the one format where 'bottling it' stops being a metaphor. PSG 4, Arsenal 3. The bottle processed this information and laid down. Like honestly?.",
    tag: "00:51 — Flat",
    imageOnRight: false,
  },
  {
    number: "VIII",
    image: "/images/bottle-portrait-dark.jpg",
    title: "Standing Tall",
    subtitle: "Unlike Arsenal",
    body: "It stands. Upright. Proud. Bearing the Arsenal crest like a badge of honour — which is ironic, because the Arsenal squad did none of those things in the second half. The bottle, however, is doing wonderfully.",
    tag: "Vertical. Dignified.",
    imageOnRight: true,
  },
  {
    number: "IX",
    image: "/images/bottle-portrait-clean.jpg",
    title: "The Masterpiece",
    subtitle: "Art in its purest form",
    body: "Clean background. Full upright. Perfect label alignment. This is the product shot. This is the moment Arsenal Bottlerz™ officially becomes a brand. A legacy. A conversation starter that will make at least three Arsenal fans question the friendship.",
    tag: "Final product",
    imageOnRight: false,
  },
];

function ChapterCard({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const imageFirst = !chapter.imageOnRight;

  return (
    <div className="py-16 md:py-24 border-b border-[#111] last:border-0">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
            imageFirst ? "" : "md:[&>*:first-child]:order-2"
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imageFirst ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Chapter number watermark */}
            <span
              className="absolute -top-8 left-0 text-[120px] md:text-[160px] font-black leading-none select-none pointer-events-none z-0"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                color: "rgba(239,1,7,0.06)",
              }}
            >
              {chapter.number}
            </span>

            <div className="relative overflow-hidden rounded-xl border border-[#1a1a1a] aspect-[4/3] group">
              <Image
                src={chapter.image}
                alt={chapter.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-[#c8a96e] text-xs tracking-widest uppercase">
                  {chapter.tag}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: imageFirst ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative z-10"
          >
            <p className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-3">
              Chapter {chapter.number}
            </p>
            <h3
              className="text-4xl md:text-5xl font-black text-[#f0ebe0] mb-2 leading-tight"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {chapter.title}
            </h3>
            <p
              className="text-[#c8a96e] text-sm italic mb-6"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
            >
              {chapter.subtitle}
            </p>
            <p className="text-[#888] text-base md:text-lg leading-relaxed">
              {chapter.body}
            </p>

            {/* Step number indicator */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#1a1a1a]" />
              <span className="text-[#333] text-xs tracking-widest">
                {String(index + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function OriginStory() {
  return (
    <section className="bg-[#050505]">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-4"
        >
          The Origin Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-[#f0ebe0] leading-tight"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          How It Was Made
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#555] text-lg mt-4 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          <em>A documentary in eleven chapters</em>
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="bg-[#080808]">
        {chapters.map((chapter, i) => (
          <ChapterCard key={i} chapter={chapter} index={i} />
        ))}
      </div>
    </section>
  );
}
