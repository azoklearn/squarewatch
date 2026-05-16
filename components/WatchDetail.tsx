"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { Watch } from "@/lib/watches";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WatchDetail({
  watch,
  others
}: {
  watch: Watch;
  others: Watch[];
}) {
  const [active, setActive] = useState(0);

  const statusTone =
    watch.status === "Available"
      ? "text-bordeaux"
      : watch.status === "Sold"
        ? "text-ink/45"
        : "text-ink/65";

  return (
    <article className="relative bg-ivory pt-32 md:pt-40">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="flex items-center gap-3 text-[11px] tracking-extra-wide text-ink/50"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-bordeaux"
          >
            HOUSE
          </Link>
          <span>—</span>
          <Link
            href="/#collection"
            className="transition-colors duration-300 hover:text-bordeaux"
          >
            COLLECTION
          </Link>
          <span>—</span>
          <span className="text-ink/80">{watch.reference}</span>
        </motion.nav>
      </div>

      {/* Header */}
      <section className="mx-auto mt-12 max-w-[1480px] px-6 md:mt-20 md:px-12">
        <div className="grid grid-cols-12 items-end gap-x-6">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="eyebrow mb-6 text-ink/55"
            >
              {watch.brand} · {watch.reference}
            </motion.div>
            <h1
              className="serif font-light leading-[0.96] text-ink"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              {watch.model.split("—").map((part, i) => (
                <span
                  key={i}
                  className="block overflow-hidden"
                  style={{ paddingBottom: "0.06em" }}
                >
                  <motion.span
                    initial={{
                      y: "118%",
                      opacity: 0,
                      filter: "blur(14px)"
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      filter: "blur(0px)"
                    }}
                    transition={{
                      y: { duration: 1.55, delay: 0.25 + i * 0.18, ease },
                      opacity: {
                        duration: 1.75,
                        delay: 0.25 + i * 0.18,
                        ease
                      },
                      filter: {
                        duration: 1.6,
                        delay: 0.25 + i * 0.18,
                        ease
                      }
                    }}
                    className="inline-block"
                  >
                    {i > 0 && (
                      <span className="serif italic text-bordeaux">— </span>
                    )}
                    {part.trim()}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-3 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease }}
              className="border-t border-ink/15 pt-6 text-right"
            >
              <div className="eyebrow text-ink/50">Status</div>
              <div className={`serif mt-2 text-2xl font-light ${statusTone}`}>
                {watch.status}
              </div>
              <div className="numeral mt-1 text-sm italic text-ink/55">
                Circa {watch.year}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto mt-16 max-w-[1480px] px-6 md:mt-24 md:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.6, delay: 0.3, ease }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-ivory-200 md:aspect-[5/4]"
            >
              {watch.gallery.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: i === 0 ? 1 : 0 }}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    scale: i === active ? 1 : 1.02
                  }}
                  transition={{ duration: 0.9, ease }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${src}')`,
                    filter: "contrast(1.05)"
                  }}
                />
              ))}

              <div className="pointer-events-none absolute left-0 right-0 top-0 flex items-center justify-between p-5 text-ivory mix-blend-difference">
                <div className="eyebrow">{watch.reference}</div>
                <div className="numeral text-sm">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(watch.gallery.length).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-3">
              {watch.gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`group relative aspect-square w-full overflow-hidden border transition-colors duration-300 lg:aspect-[5/4] ${
                    i === active
                      ? "border-bordeaux"
                      : "border-transparent hover:border-ink/30"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${src}')`,
                      filter: "contrast(1.05)"
                    }}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      i === active ? "opacity-0" : "bg-ivory/35"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notes & Specs */}
      <section className="mx-auto mt-24 max-w-[1480px] px-6 md:mt-32 md:px-12">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow mb-6 text-ink/55">Notes</div>
            <p
              className="serif font-light leading-[1.4] text-ink"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" }}
            >
              {watch.notes}
            </p>

            <div className="mt-16 max-w-xl border-t border-ink/15 pt-8">
              <p className="text-[14px] leading-[1.85] text-ink/70">
                Each piece offered by the house is accompanied by a written
                condition report, photographic record, and where available the
                original guarantee and archive extract. We invite you to
                request the full dossier — examined privately, in person or by
                appointment.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 bg-bordeaux px-8 py-4 text-[12.5px] font-medium tracking-wider text-ivory transition-colors duration-500 hover:bg-bordeaux-700"
              >
                <span>Request Full Dossier</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </Link>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 px-2 py-4 text-[12.5px] font-medium tracking-wider text-ink"
              >
                <span className="relative pb-1 transition-colors duration-500 group-hover:text-bordeaux">
                  Book a Private Viewing
                  <span className="absolute inset-x-0 bottom-0 h-px bg-ink/40" />
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-bordeaux transition-transform duration-700 group-hover:scale-x-100" />
                </span>
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="eyebrow mb-6 text-ink/55">Specifications</div>
            <dl className="divide-y divide-ink/12 border-t border-ink/15">
              {[
                ["Maison", watch.brand],
                ["Reference", watch.reference],
                ["Year", watch.year],
                ["Caliber", watch.caliber],
                ["Case", watch.case],
                ["Status", watch.status]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 gap-4 py-4 text-[13px]"
                >
                  <dt className="eyebrow text-ink/50">{label}</dt>
                  <dd className="text-right text-ink/85">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-ink/15 pt-8 text-[11px] leading-[1.7] tracking-wide text-ink/50">
              <p>
                Price on enquiry. All pieces are subject to a final examination
                by the buyer or their representative prior to release. Watch
                Square retains the right to refuse a sale at its discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other pieces */}
      {others.length > 0 && (
        <section className="mx-auto mt-32 max-w-[1480px] border-t border-ink/12 px-6 py-20 md:mt-40 md:px-12 md:py-28">
          <div className="grid grid-cols-12 items-end gap-x-6">
            <div className="col-span-12 md:col-span-8">
              <div className="eyebrow mb-6 text-ink/55">
                Also in residence
              </div>
              <h2
                className="serif font-light leading-[1] text-ink"
                style={{ fontSize: "clamp(1.75rem, 3.4vw, 3rem)" }}
              >
                Other <span className="italic text-bordeaux">pieces</span>{" "}
                currently in the collection.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link
                href="/#collection"
                className="eyebrow inline-flex items-center gap-2 text-ink transition-colors hover:text-bordeaux"
              >
                <span className="border-b border-ink/40 pb-1">
                  View All
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
            {others.map((o) => (
              <Link
                key={o.id}
                href={`/watches/${o.id}`}
                className="group col-span-12 sm:col-span-6"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    style={{
                      backgroundImage: `url('${o.image}')`,
                      filter: "contrast(1.05)"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-70" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="eyebrow text-ink/55">{o.brand}</div>
                    <div className="serif mt-2 text-xl font-light leading-tight text-ink transition-colors duration-300 group-hover:text-bordeaux md:text-2xl">
                      {o.model}
                    </div>
                    <div className="mt-2 text-[11px] text-ink/55">
                      {o.year} — {o.reference}
                    </div>
                  </div>
                  <span
                    className={`eyebrow shrink-0 ${
                      o.status === "Available"
                        ? "text-bordeaux"
                        : o.status === "Sold"
                          ? "text-ink/40"
                          : "text-ink/60"
                    }`}
                  >
                    {o.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
