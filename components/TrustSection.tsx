"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    numeral: "I",
    title: "Authenticated",
    body:
      "Every piece is examined by independent watchmakers, cross-referenced against the manufacture's archives, and matched to its original production records before it enters our care.",
    foot: "Caliber & case verification — independent."
  },
  {
    numeral: "II",
    title: "Documented",
    body:
      "Condition reports, provenance dossiers, and high-resolution photography. We maintain an archive-grade file for every reference that passes through the house.",
    foot: "Photographic and written record retained in perpetuity."
  },
  {
    numeral: "III",
    title: "Curated",
    body:
      "We do not deal in volume. The collection is shaped by intent — rare references, fine condition, and pieces whose history we believe deserves continuance.",
    foot: "Pieces selected and refused in equal measure."
  }
];

export default function TrustSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-20%" });

  return (
    <section className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-5" ref={titleRef}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={titleInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow mb-8 text-ink/55"
            >
              II — The House
            </motion.div>
            <h2
              className="serif font-light leading-[1] text-ink"
              style={{ fontSize: "clamp(2.25rem, 4.2vw, 3.75rem)" }}
            >
              {["Authenticated.", "Documented.", "Curated."].map((word, i) => (
                <span
                  key={word}
                  className="block overflow-hidden"
                  style={{ paddingBottom: "0.06em" }}
                >
                  <motion.span
                    initial={{ y: "118%", opacity: 0, filter: "blur(12px)" }}
                    animate={
                      titleInView
                        ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                        : undefined
                    }
                    transition={{
                      y: {
                        duration: 1.5,
                        delay: 0.15 + i * 0.16,
                        ease: [0.22, 1, 0.36, 1]
                      },
                      opacity: {
                        duration: 1.7,
                        delay: 0.15 + i * 0.16,
                        ease: [0.22, 1, 0.36, 1]
                      },
                      filter: {
                        duration: 1.6,
                        delay: 0.15 + i * 0.16,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }}
                    className={`inline-block ${
                      i === 2 ? "italic text-bordeaux" : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-6 lg:col-start-7 lg:mt-2">
            <p className="text-[15px] leading-[1.8] text-ink/70">
              Watch Square exists at the intersection of three disciplines —
              the dealer's eye for the market, the collector's instinct for
              what endures, and the archivist's commitment to keeping the
              record accurate. We work quietly, with a small circle of
              clients, sourcing from private collections and trusted hands.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "0% 50%" }}
          className="hairline mt-20"
        />

        <div className="grid grid-cols-12 gap-x-6 gap-y-16 pt-20">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.5,
                delay: i * 0.18,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group col-span-12 md:col-span-4"
            >
              <div className="flex items-baseline gap-4 border-t border-ink/20 pt-6">
                <span className="numeral text-2xl text-bordeaux">
                  {p.numeral}
                </span>
                <span className="eyebrow text-ink/50">Principle</span>
              </div>

              <h3 className="serif mt-8 text-3xl font-light text-ink md:text-4xl">
                {p.title}
              </h3>

              <p className="mt-6 text-[14.5px] leading-[1.75] text-ink/70">
                {p.body}
              </p>

              <p className="mt-10 text-[11px] italic tracking-wide text-ink/45">
                — {p.foot}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
