"use client";

import Logo from "./Logo";

const cols = [
  {
    title: "House",
    links: [
      { label: "The Collection", href: "#collection" },
      { label: "Documentation", href: "#documentation" },
      { label: "Private Sourcing", href: "#sourcing" },
      { label: "About", href: "#about" }
    ]
  },
  {
    title: "Bureaux",
    links: [
      { label: "Geneva — Rue du Rhône", href: "#contact" },
      { label: "Paris — Rue Saint-Honoré", href: "#contact" },
      { label: "London — Mount Street", href: "#contact" }
    ]
  },
  {
    title: "Discretion",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms of Business", href: "#" },
      { label: "Authentication Policy", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-ivory">
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <div className="col-span-12 lg:col-span-5">
            <Logo variant="ivory" size="xl" />
            <p className="serif mt-10 max-w-sm text-2xl font-light leading-snug italic text-champagne">
              Dealing, collecting and documenting exceptional timepieces.
            </p>
            <div className="mt-12 flex flex-col gap-2 text-[12px] tracking-wide text-ivory/55">
              <span>+41 22 000 00 00</span>
              <span>bureau@watchsquare.ch</span>
            </div>
          </div>

          {cols.map((col) => (
            <div
              key={col.title}
              className="col-span-6 md:col-span-4 lg:col-span-2"
            >
              <div className="eyebrow text-ivory/45">{col.title}</div>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="serif text-base font-light text-ivory/85 transition-colors duration-300 hover:text-champagne"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 lg:col-span-1">
            <div className="eyebrow text-ivory/45">Letters</div>
            <p className="mt-6 text-[12px] leading-[1.7] text-ivory/65">
              An occasional correspondence on horology, sent only to those who
              ask.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 border-b border-champagne pb-1 text-[12px] tracking-wider text-champagne"
            >
              Subscribe
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-ivory/15 pt-8 text-[11px] tracking-wide text-ivory/45 md:flex-row md:items-center">
          <div>
            © MMXXVI Watch Square SA — Maison Horlogère, Geneva. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>VAT CHE-114.000.000</span>
            <span className="hidden h-3 w-px bg-ivory/25 md:block" />
            <span>Member — Federation of the Swiss Watch Industry</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="serif select-none overflow-hidden border-t border-ivory/10 py-10 text-center text-[12vw] font-light leading-none tracking-tight text-ivory/[0.04]"
      >
        WATCH SQUARE
      </div>
    </footer>
  );
}
