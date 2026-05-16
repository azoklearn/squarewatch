"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

type Line = {
  text: string;
  italic?: boolean;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function SplitLines({
  lines,
  className = "",
  italicClassName = "italic text-bordeaux",
  fontSize,
  delay = 0,
  stagger = 0.12,
  as = "h2"
}: {
  lines: Line[];
  className?: string;
  italicClassName?: string;
  fontSize?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3";
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  const Tag = as as keyof JSX.IntrinsicElements;
  const style: CSSProperties = fontSize ? { fontSize } : {};

  return (
    // @ts-expect-error - dynamic JSX tag
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ ...style, paddingBottom: "0.06em" }}
        >
          <motion.span
            initial={{ y: "118%", opacity: 0, filter: "blur(12px)" }}
            animate={
              inView
                ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                : undefined
            }
            transition={{
              y: { duration: 1.4, delay: delay + i * stagger, ease },
              opacity: {
                duration: 1.6,
                delay: delay + i * stagger,
                ease
              },
              filter: {
                duration: 1.5,
                delay: delay + i * stagger,
                ease
              }
            }}
            className={`inline-block ${
              line.italic ? italicClassName : ""
            } ${line.className ?? ""}`}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
