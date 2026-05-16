"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paragraphs = [
  "Watch Square was founded in 2014 around a small, deliberate question — how should one trade in objects that are, in the end, not really commodities at all.",
  "Twelve years on, the house remains intentionally small. We work with a few dozen clients across Europe, North America and Asia — collectors, custodians of family holdings, and those at the beginning of a serious pursuit.",
  "We are not for everyone, and that suits the practice. Pieces find their way to us through trust. They leave the same way."
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-ivory-50 py-28 md:py-44"
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-3">
            <div className="eyebrow text-ink/55">VI — The House</div>
            <div className="serif mt-8 text-5xl font-light italic text-bordeaux">
              About
            </div>
            <div className="mt-12 hidden space-y-3 text-[11px] tracking-extra-wide text-ink/55 lg:block">
              <div className="border-t border-ink/15 pt-3">
                <span className="block text-ink/40">Founded</span>
                <span className="text-ink/80">MMXIV — Geneva</span>
              </div>
              <div className="border-t border-ink/15 pt-3">
                <span className="block text-ink/40">Presence</span>
                <span className="text-ink/80">Geneva · Paris · London</span>
              </div>
              <div className="border-t border-ink/15 pt-3">
                <span className="block text-ink/40">Clients</span>
                <span className="text-ink/80">By introduction</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-12 lg:col-span-8 lg:col-start-5 lg:mt-0">
            <div
              className="serif font-light leading-[1.2] text-ink"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" }}
            >
              {paragraphs.map((para, i) => {
                const start = i / paragraphs.length;
                const end = (i + 1) / paragraphs.length;
                return (
                  <Paragraph
                    key={i}
                    text={para}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>

            <div className="mt-16 grid grid-cols-12 gap-x-6 border-t border-ink/15 pt-10">
              <div className="col-span-12 md:col-span-6">
                <div className="serif text-xl font-light italic text-ink/80">
                  Élise Marchand
                </div>
                <div className="eyebrow mt-2 text-ink/55">
                  Founder & Principal
                </div>
              </div>
              <div className="col-span-12 mt-6 md:col-span-6 md:mt-0">
                <p className="text-[13px] leading-[1.8] text-ink/65">
                  Formerly a specialist at one of the major auction houses,
                  with two decades spent examining, cataloguing, and placing
                  pieces of consequence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Paragraph({
  text,
  progress,
  start,
  end
}: {
  text: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const words = text.split(" ");
  return (
    <p className="mb-10 last:mb-0">
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={progress}
          start={start + (i / words.length) * (end - start)}
          end={start + ((i + 1.4) / words.length) * (end - start)}
        />
      ))}
    </p>
  );
}

function Word({
  word,
  progress,
  start,
  end
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
      <span>&nbsp;</span>
    </motion.span>
  );
}
