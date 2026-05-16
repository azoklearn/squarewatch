"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring
} from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Documentation", href: "#documentation" },
  { label: "Private Sourcing", href: "#sourcing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navigation() {
  const { scrollY, scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 60);
  });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setSearchOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4
  });

  const onLight = scrolled || open || searchOpen;
  const iconColor = onLight ? "text-ink" : "text-ivory";
  const burgerBar = onLight ? "bg-ink" : "bg-ivory";

  return (
    <>
      <motion.div
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="fixed inset-x-0 top-0 z-[60] h-[1.5px] bg-bordeaux"
      />

      <motion.header
        animate={{
          backgroundColor: onLight
            ? "rgba(244, 239, 230, 1)"
            : "rgba(244, 239, 230, 0)",
          borderBottomColor: onLight
            ? "rgba(14, 13, 11, 0.08)"
            : "rgba(14, 13, 11, 0)"
        }}
        transition={{ duration: 0.55, ease }}
        className="fixed inset-x-0 top-0 z-50 border-b"
      >
        <div className="relative mx-auto flex h-20 max-w-[1480px] items-center px-6 md:px-12">
          {/* Left — Hamburger */}
          <div className="flex flex-1 items-center">
            <button
              type="button"
              onClick={() => {
                setOpen((v) => !v);
                setSearchOpen(false);
              }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="group flex items-center gap-3"
            >
              <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
                <span
                  className={`h-px w-6 transition-all duration-500 ${burgerBar} ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-6 transition-all duration-500 ${burgerBar} ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
              <span
                className={`eyebrow hidden transition-colors duration-500 sm:inline ${
                  onLight ? "text-ink/70" : "text-ivory/75"
                }`}
              >
                {open ? "Close" : "Menu"}
              </span>
            </button>
          </div>

          {/* Center — Logo */}
          <a
            href="#top"
            aria-label="Watch Square"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Logo size="sm" variant={onLight ? "ink" : "ivory"} />
          </a>

          {/* Right — Search */}
          <div className="flex flex-1 items-center justify-end">
            <button
              type="button"
              onClick={() => {
                setSearchOpen((v) => !v);
                setOpen(false);
              }}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              className={`group flex items-center gap-3 transition-colors duration-500 ${iconColor}`}
            >
              <span
                className={`eyebrow hidden transition-colors duration-500 sm:inline ${
                  onLight ? "text-ink/70" : "text-ivory/75"
                }`}
              >
                Search
              </span>
              <div className="flex h-10 w-10 items-center justify-center">
                {!searchOpen ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="12.5"
                      y1="12.5"
                      x2="16.5"
                      y2="16.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <line
                      x1="1"
                      y1="1"
                      x2="13"
                      y2="13"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="13"
                      y1="1"
                      x2="1"
                      y2="13"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu drawer */}
      <MenuDrawer open={open} onClose={() => setOpen(false)} />

      {/* Search drawer */}
      <SearchDrawer open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function MenuDrawer({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        clipPath: open
          ? "inset(0% 0% 0% 0%)"
          : "inset(0% 0% 100% 0%)"
      }}
      transition={{ duration: 0.8, ease }}
      className="fixed inset-x-0 top-20 z-40 bg-ivory"
      style={{ height: "calc(100vh - 5rem)" }}
      aria-hidden={!open}
    >
      <div className="mx-auto grid h-full max-w-[1480px] grid-cols-12 gap-x-6 px-6 pb-12 pt-16 md:px-12 md:pt-24">
        <nav className="col-span-12 lg:col-span-8">
          <div className="eyebrow mb-10 text-ink/45">Navigate</div>
          <ul className="flex flex-col gap-0">
            {links.map((link, i) => (
              <li key={link.href} className="overflow-hidden">
                <motion.a
                  initial={{ y: "110%", opacity: 0 }}
                  animate={
                    open
                      ? { y: "0%", opacity: 1 }
                      : { y: "110%", opacity: 0 }
                  }
                  transition={{
                    duration: 1.1,
                    delay: open ? 0.15 + i * 0.07 : 0,
                    ease
                  }}
                  href={link.href}
                  onClick={onClose}
                  className="serif group flex items-baseline justify-between border-b border-ink/12 py-5 text-ink transition-colors duration-500 hover:text-bordeaux"
                  style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                >
                  <span className="block">
                    <span className="numeral mr-6 text-base italic text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </span>
                  <span className="text-2xl text-ink/40 transition-all duration-500 group-hover:translate-x-2 group-hover:text-bordeaux md:text-3xl">
                    →
                  </span>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        <aside className="col-span-12 mt-12 flex flex-col justify-end lg:col-span-3 lg:col-start-10 lg:mt-0">
          <div className="space-y-6 text-[12px] leading-[1.7] tracking-wide text-ink/65">
            <div>
              <div className="eyebrow text-ink/40">Geneva</div>
              <div className="mt-2 text-ink/80">Rue du Rhône 47 · 1204</div>
            </div>
            <div>
              <div className="eyebrow text-ink/40">Correspondence</div>
              <div className="mt-2 text-ink/80">bureau@watchsquare.ch</div>
            </div>
            <div>
              <div className="eyebrow text-ink/40">By appointment</div>
              <div className="mt-2 text-ink/80">+41 22 000 00 00</div>
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function SearchDrawer({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) {
      const el = document.getElementById("nav-search-input");
      el?.focus();
    } else {
      setQuery("");
    }
  }, [open]);

  const suggestions = [
    "Rolex Datejust",
    "Patek Philippe",
    "Audemars Piguet",
    "Salmon dial",
    "Independent makers"
  ];

  return (
    <motion.div
      initial={false}
      animate={{
        clipPath: open
          ? "inset(0% 0% 0% 0%)"
          : "inset(0% 0% 100% 0%)"
      }}
      transition={{ duration: 0.8, ease }}
      className="fixed inset-x-0 top-20 z-40 bg-ivory"
      style={{ height: "calc(100vh - 5rem)" }}
      aria-hidden={!open}
    >
      <div className="mx-auto flex h-full max-w-[1480px] flex-col px-6 pt-16 md:px-12 md:pt-24">
        <div className="eyebrow text-ink/45">Search the archive</div>

        <div className="relative mt-6 border-b border-ink/20 pb-4">
          <input
            id="nav-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a maison, reference, configuration…"
            className="serif w-full bg-transparent text-ink placeholder:text-ink/30 focus:outline-none"
            style={{ fontSize: "clamp(1.75rem, 4.4vw, 3.75rem)" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") onClose();
            }}
          />
        </div>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <div className="eyebrow mb-5 text-ink/45">Suggested</div>
            <ul className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => setQuery(s)}
                    className="inline-flex border border-ink/25 px-4 py-2 text-[12px] tracking-wide text-ink/75 transition-colors duration-300 hover:border-bordeaux hover:text-bordeaux"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="eyebrow mb-5 text-ink/45">Cannot find a piece?</div>
            <p className="text-[13px] leading-[1.8] text-ink/70">
              Most of what we transact never appears in a public catalogue. If
              you are searching for a specific reference, we will conduct the
              search on your behalf — discreetly, and without obligation.
            </p>
            <a
              href="#sourcing"
              onClick={onClose}
              className="eyebrow mt-6 inline-flex items-center gap-3 text-ink transition-colors hover:text-bordeaux"
            >
              <span className="border-b border-ink/40 pb-1">
                Begin a Private Search
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
