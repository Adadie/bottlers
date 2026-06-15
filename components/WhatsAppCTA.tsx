"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "250783177179";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi 👋 I'd like to order an Arsenal Bottlerz™ water bottle. My Arsenal fan friend needs one urgently — they're still not over the final. 😂"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppCTA() {
  return (
    <section className="bg-[#080808] py-24 md:py-36 px-6 border-t border-[#111]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#ef0107] text-xs tracking-[0.35em] uppercase mb-4"
        >
          Limited Stock
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-[#f0ebe0] leading-tight mb-4"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Got an Arsenal Fan
          <br />
          <span className="text-[#ef0107] italic">Who Needs One?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#666] text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          <em>
            Don&apos;t let your Arsenal fan friend grieve alone and
            unhydrated. Send them a bottle. It won&apos;t fix the result —
            nothing will — but it will remind them of it every single time
            they take a sip.
          </em>
        </motion.p>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {[
            { icon: "🫙", title: "Hand-crafted", desc: "Every label cut and applied by hand. No mass production. Pure artisanal trolling." },
            { icon: "🚀", title: "Fast Delivery", desc: "Delivered personally, with a smile. The kind of smile Arsenal fans will not enjoy." },
            { icon: "💀", title: "No Sympathy", desc: "Zero condolences included. This product is the condolence." },
          ].map((perk) => (
            <div
              key={perk.title}
              className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-5 text-left"
            >
              <div className="text-2xl mb-3">{perk.icon}</div>
              <p className="text-[#f0ebe0] font-semibold text-sm mb-1">{perk.title}</p>
              <p className="text-[#555] text-xs leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* WhatsApp button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5a] active:scale-95 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-[0_0_40px_rgba(37,211,102,0.35)]"
          >
            {/* WhatsApp icon */}
            <svg
              className="w-7 h-7 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-[#333] text-xs mt-6"
        >
          Arsenal fans only. By ordering you confirm your friend supports a club that has never won the UCL.
        </motion.p>
      </div>
    </section>
  );
}
