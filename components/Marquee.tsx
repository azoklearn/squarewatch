"use client";

const maisons = [
  "Patek Philippe",
  "Audemars Piguet",
  "Vacheron Constantin",
  "A. Lange & Söhne",
  "F.P. Journe",
  "Rolex",
  "Cartier",
  "Breguet",
  "Philippe Dufour",
  "Roger Smith",
  "Greubel Forsey",
  "Laurent Ferrier"
];

export default function Marquee() {
  return (
    <section
      aria-label="Maisons represented"
      className="border-y border-ink/10 bg-ivory-50 py-8 overflow-hidden"
    >
      <div className="flex w-max animate-marquee gap-16 px-8">
        {[...maisons, ...maisons].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            <span className="serif text-2xl font-light italic text-ink/65">
              {name}
            </span>
            <span
              className="h-1 w-1 rounded-full bg-ink/30"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
