"use client";

type LogoProps = {
  variant?: "ink" | "ivory";
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeMap = {
  sm: "text-xl md:text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-5xl md:text-6xl",
  xl: "text-6xl md:text-7xl"
};

export default function Logo({
  variant = "ink",
  size = "md"
}: LogoProps) {
  const base =
    variant === "ink" ? "text-ink" : "text-ivory";

  return (
    <div
      className={`flex flex-col leading-[0.95] ${base}`}
      aria-label="Watch Square"
    >
      <span
        className={`serif font-medium tracking-[0.04em] ${sizeMap[size]}`}
        aria-hidden="true"
      >
        <span className="text-bordeaux">W</span>
        <span>ATCH</span>
      </span>
      <span
        className={`serif font-medium tracking-[0.04em] ${sizeMap[size]}`}
        aria-hidden="true"
      >
        <span className="text-bordeaux">S</span>
        <span>QUARE</span>
      </span>
      <span className="sr-only">Watch Square</span>
    </div>
  );
}
