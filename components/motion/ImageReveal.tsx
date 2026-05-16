"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ImageReveal({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  filter = "grayscale(0.08) contrast(1.04)",
  direction = "up",
  delay = 0,
  duration = 1.4,
  parallax = 0
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  filter?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  parallax?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const clipFrom = {
    up: "inset(100% 0% 0% 0%)",
    down: "inset(0% 0% 100% 0%)",
    left: "inset(0% 100% 0% 0%)",
    right: "inset(0% 0% 0% 100%)"
  }[direction];

  const imgStyle: CSSProperties = {
    backgroundImage: `url('${src}')`,
    filter
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ clipPath: inView ? "inset(0% 0% 0% 0%)" : clipFrom }}
      initial={{ clipPath: clipFrom }}
      animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
      transition={{ duration, delay, ease }}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
    >
      <motion.div
        initial={{ scale: 1.2 }}
        animate={inView ? { scale: 1 } : undefined}
        transition={{ duration: duration + 0.4, delay, ease }}
        className={`absolute inset-0 bg-cover bg-center ${imgClassName}`}
        style={imgStyle}
      />
    </motion.div>
  );
}
