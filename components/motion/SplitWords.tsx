"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  italicWords?: string[];
  italicClassName?: string;
  children?: ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function SplitWords({
  text,
  className = "",
  delay = 0,
  stagger = 0.045,
  duration = 1.05,
  as = "h2",
  italicWords = [],
  italicClassName = "italic text-bordeaux"
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const words = text.split(" ");

  const MotionTag = motion[as] as typeof motion.h2;

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => {
        const isItalic = italicWords.some(
          (w) => w.toLowerCase() === word.replace(/[.,]/g, "").toLowerCase()
        );
        return (
          <span
            key={`${word}-${i}`}
            className="relative inline-block overflow-hidden align-baseline"
            style={{ marginRight: "0.28em", paddingBottom: "0.08em" }}
            aria-hidden="true"
          >
            <motion.span
              initial={{ y: "120%", opacity: 0, filter: "blur(10px)" }}
              animate={
                inView
                  ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                  : undefined
              }
              transition={{
                duration: duration + 0.2,
                delay: delay + i * stagger,
                ease,
                opacity: { duration: duration * 1.2, delay: delay + i * stagger },
                filter: { duration: duration * 1.1, delay: delay + i * stagger }
              }}
              className={`inline-block ${isItalic ? italicClassName : ""}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}
