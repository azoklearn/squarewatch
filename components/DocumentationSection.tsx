"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealLines from "./motion/RevealLines";

const chapters = [
  {
    n: "01",
    title: "Authentication",
    body:
      "Each piece is opened by an independent watchmaker. Caliber engravings, case stamps, and serial coherence are verified against the manufacture's records. Where archive extracts exist, we obtain them."
  },
  {
    n: "02",
    title: "Condition reports",
    body:
      "Case geometry is measured, lugs assessed for past intervention, dial and hands examined under magnification. Findings are written plainly — the piece is described as it is, not as one might hope."
  },
  {
    n: "03",
    title: "Market context",
    body:
      "We trace comparable sales across the major auctions and trusted private channels. Pricing is presented with reasoning, not asserted. Clients leave informed of the wider landscape."
  },
  {
    n: "04",
    title: "Archive-grade record",
    body:
      "Every dossier is retained — large-format photography, measurements, provenance notes. Should a piece return to us decades later, the file remains."
  }
];

export default function DocumentationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const parallax = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const figureScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);

  return (
    <section
      id="documentation"
      ref={ref}
      className="relative overflow-hidden bg-ink py-28 text-ivory md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(244, 239, 230, 0.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px"
        }}
      />

      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-32">
              <div className="eyebrow mb-8 text-ivory/55">
                IV — Documentation
              </div>
              <RevealLines
                as="h2"
                blur={14}
                className="serif font-light leading-[0.98] text-ivory"
              >
                {[
                  <span
                    key="l1"
                    style={{ fontSize: "clamp(2.5rem, 5.2vw, 4.75rem)" }}
                  >
                    A piece is only as
                  </span>,
                  <span
                    key="l2"
                    style={{ fontSize: "clamp(2.5rem, 5.2vw, 4.75rem)" }}
                  >
                    valuable as its{" "}
                    <span className="italic text-champagne">record.</span>
                  </span>
                ]}
              </RevealLines>

              <p className="mt-10 max-w-md text-[14.5px] leading-[1.85] text-ivory/65">
                Our approach is institutional. Where a museum catalogues an
                object, we catalogue a watch — its origin, condition, and
                place within the broader history of its reference. Discretion
                is absolute; rigour is not negotiable.
              </p>

              <motion.figure
                style={{ y: parallax }}
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-16 hidden aspect-[4/5] w-full max-w-sm overflow-hidden lg:block"
              >
                <motion.div
                  style={{
                    scale: figureScale,
                    backgroundImage: "url('/watches/datejust/02.jpg')",
                    filter: "contrast(1.08) brightness(0.92)"
                  }}
                  className="absolute inset-0 bg-cover bg-center"
                />
              </motion.figure>
            </div>
          </div>

          <div className="col-span-12 mt-16 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <ol className="flex flex-col">
              {chapters.map((c, i) => (
                <motion.li
                  key={c.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1.1,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative grid grid-cols-12 gap-x-6 border-t border-ivory/15 py-10"
                >
                  <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-champagne transition-transform duration-[1100ms] ease-out group-hover:scale-x-100" />
                  <div className="col-span-2">
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="numeral inline-block text-3xl text-champagne"
                    >
                      {c.n}
                    </motion.span>
                  </div>
                  <div className="col-span-10">
                    <h3 className="serif text-3xl font-light leading-tight text-ivory transition-transform duration-700 ease-out group-hover:translate-x-2 md:text-4xl">
                      {c.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-[14.5px] leading-[1.85] text-ivory/65">
                      {c.body}
                    </p>
                  </div>
                </motion.li>
              ))}
              <li className="border-t border-ivory/15" />
            </ol>

            <div className="mt-16 max-w-md">
              <blockquote className="serif text-xl font-light italic leading-snug text-champagne md:text-2xl">
                "We would rather refuse a sale than misrepresent a piece."
              </blockquote>
              <div className="eyebrow mt-6 text-ivory/55">
                — House principle
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
