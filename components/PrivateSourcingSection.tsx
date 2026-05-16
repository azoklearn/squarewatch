"use client";

import { motion } from "framer-motion";
import RevealLines from "./motion/RevealLines";

const steps = [
  {
    n: "i",
    title: "Brief",
    body:
      "A private conversation to understand the reference, the configuration, and the threshold at which a piece becomes the right one."
  },
  {
    n: "ii",
    title: "Search",
    body:
      "Our network is activated quietly — private collections, longtime contacts, auction whisper. We never broadcast a client's intent."
  },
  {
    n: "iii",
    title: "Acquisition",
    body:
      "Once a candidate is found, it is studied. We present it with full documentation. Nothing concludes until you are certain."
  }
];

export default function PrivateSourcingSection() {
  return (
    <section
      id="sourcing"
      className="relative bg-ivory py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow mb-8 text-ink/55">V — Private Sourcing</div>
            <RevealLines
              as="h2"
              className="serif font-light leading-[0.98] text-ink"
            >
              {[
                <span
                  key="l1"
                  style={{ fontSize: "clamp(2.5rem, 5.4vw, 5rem)" }}
                >
                  The piece you have in mind —
                </span>,
                <span
                  key="l2"
                  style={{ fontSize: "clamp(2.5rem, 5.4vw, 5rem)" }}
                  className="italic text-bordeaux"
                >
                  we will find it.
                </span>
              ]}
            </RevealLines>
            <p className="mt-10 max-w-xl text-[15px] leading-[1.85] text-ink/70">
              Most of what we transact never reaches a catalogue. If you are
              searching for a specific reference, configuration, or dial — a
              piece you have only encountered in books, or one you have
              quietly waited years for — we will conduct the search on your
              behalf, discreetly and without obligation.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 mt-12 lg:col-span-5 lg:mt-4"
          >
            <motion.div
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/imagesite.jpg')",
                  filter: "contrast(1.06) brightness(0.92)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute inset-x-0 bottom-0 p-8 text-ivory"
              >
                <div className="eyebrow text-ivory/70">Latest acquisition</div>
                <div className="serif mt-2 text-2xl font-light italic">
                  Found in Lausanne — March MMXXVI
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="hairline mt-24" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 pt-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="col-span-12 md:col-span-4"
            >
              <div className="flex items-baseline gap-4">
                <span className="numeral text-2xl text-bordeaux">{s.n}.</span>
                <span className="serif text-2xl font-light text-ink">
                  {s.title}
                </span>
              </div>
              <p className="mt-6 max-w-sm text-[14.5px] leading-[1.8] text-ink/65">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-ink/15 pt-12 md:flex-row md:items-center">
          <p className="serif max-w-xl text-2xl font-light italic text-ink/80 md:text-3xl">
            We work by introduction, by patience, and by quiet conversations.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[12.5px] font-medium tracking-wider text-ivory transition-colors duration-500 hover:bg-bordeaux"
          >
            <span>Begin a Private Search</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
