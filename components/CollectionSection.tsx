"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { watches, type Watch } from "@/lib/watches";
import RevealLines from "./motion/RevealLines";

const ease = [0.22, 1, 0.36, 1] as const;

function WatchCard({ watch, span }: { watch: Watch; span: string }) {
  const [active, setActive] = useState(0);

  const statusTone =
    watch.status === "Available"
      ? "text-bordeaux"
      : watch.status === "Sold"
        ? "text-ink/40"
        : "text-ink/60";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease }}
      className={`group relative ${span}`}
    >
      <Link
        href={`/watches/${watch.id}`}
        aria-label={`View ${watch.model}`}
        className="block"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.2, ease }}
          className="relative aspect-[4/5] w-full overflow-hidden bg-ivory-200"
        >
          {watch.gallery.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-[1.04]"
              style={{
                backgroundImage: `url('${src}')`,
                opacity: i === active ? 1 : 0,
                filter: "contrast(1.05)"
              }}
            />
          ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/0 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />

        <div className="pointer-events-none absolute left-0 right-0 top-0 flex items-center justify-between p-5 text-ivory">
          <div className="eyebrow text-ivory/75">{watch.reference}</div>
          <div className="numeral text-sm text-ivory/85">{watch.year}</div>
        </div>

        {watch.status === "Sold" && (
          <div className="pointer-events-none absolute right-5 top-14 border border-ivory/40 px-2.5 py-1 text-[9px] tracking-ultra-wide text-ivory/80">
            Placed
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="serif text-sm font-light leading-relaxed italic text-ivory/90">
            "{watch.notes}"
          </p>
        </div>

          {watch.gallery.length > 1 && (
            <div className="absolute bottom-5 right-5 flex gap-1.5">
              {watch.gallery.map((_, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(i);
                  }}
                  aria-label={`View image ${i + 1} of ${watch.gallery.length}`}
                  className={`h-[3px] transition-all duration-500 ${
                    i === active
                      ? "w-7 bg-ivory"
                      : "w-3 bg-ivory/40 hover:bg-ivory/70"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay: 0.4, ease }}
        className="mt-6 flex items-start justify-between gap-4"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-ink/55">{watch.brand}</span>
            <span className="eyebrow text-ink/30">·</span>
            <span className={`eyebrow ${statusTone}`}>{watch.status}</span>
          </div>
          <Link
            href={`/watches/${watch.id}`}
            className="serif mt-3 block text-xl font-light leading-tight text-ink transition-colors duration-300 hover:text-bordeaux md:text-2xl"
          >
            {watch.model}
          </Link>
          <div className="mt-3 text-[11px] text-ink/55">
            {watch.year} — {watch.case}
          </div>
        </div>
        <div className="shrink-0">
          <Link
            href={`/watches/${watch.id}`}
            className="group/btn mt-1 inline-flex items-center gap-2 text-[11px] tracking-wider text-ink/80 transition-colors hover:text-bordeaux"
          >
            <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover/btn:border-bordeaux">
              View
            </span>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path
                d="M1 8L8 1M8 1H3M8 1V6"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}

const filters = ["All", "Available", "On Hold", "Sold"] as const;

export default function CollectionSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered =
    filter === "All" ? watches : watches.filter((w) => w.status === filter);

  const span = "col-span-12 sm:col-span-6 lg:col-span-4";

  return (
    <section id="collection" className="relative bg-ivory-50 py-28 md:py-40">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 items-end gap-x-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow mb-8 text-ink/55">III — The Collection</div>
            <RevealLines
              as="h2"
              className="serif font-light leading-[1] text-ink"
            >
              {[
                <span
                  key="l1"
                  style={{ fontSize: "clamp(2.5rem, 5.2vw, 4.75rem)" }}
                >
                  A selection of <span className="italic">pieces</span>
                </span>,
                <span
                  key="l2"
                  style={{ fontSize: "clamp(2.5rem, 5.2vw, 4.75rem)" }}
                >
                  currently in residence.
                </span>
              ]}
            </RevealLines>
          </div>
          <div className="col-span-12 mt-10 lg:col-span-4 lg:mt-0">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/15 pt-4 lg:justify-end">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`eyebrow transition-colors duration-300 ${
                    filter === f
                      ? "text-bordeaux"
                      : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {f}
                  {filter === f && (
                    <span className="ml-2 inline-block h-px w-4 bg-bordeaux align-middle" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-16">
          {filtered.map((watch) => (
            <WatchCard key={watch.id} watch={watch} span={span} />
          ))}
        </div>

        <div className="mt-28 flex flex-col items-center gap-4 border-t border-ink/15 pt-12">
          <p className="serif text-center text-xl font-light italic text-ink/70 md:text-2xl">
            The full archive is shared upon introduction.
          </p>
          <a
            href="#contact"
            className="eyebrow mt-4 inline-flex items-center gap-3 text-ink transition-colors hover:text-bordeaux"
          >
            <span className="border-b border-ink/40 pb-1">
              Request the Private Catalogue
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
