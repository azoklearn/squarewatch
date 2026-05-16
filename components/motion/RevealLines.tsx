"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function RevealLines({
  children,
  className = "",
  delay = 0,
  stagger = 0.13,
  blur = 12,
  as: Tag = "h2"
}: {
  children: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
  blur?: number;
  as?: "h1" | "h2" | "h3" | "div";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  const Container = Tag as keyof JSX.IntrinsicElements;

  return (
    // @ts-expect-error - dynamic tag with ref
    <Container ref={ref} className={className}>
      {children.map((line, i) => (
        <Fragment key={i}>
          <span
            className="block overflow-hidden"
            style={{ paddingBottom: "0.08em" }}
          >
            <motion.span
              initial={{
                y: "118%",
                opacity: 0,
                filter: `blur(${blur}px)`
              }}
              animate={
                inView
                  ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                  : undefined
              }
              transition={{
                y: { duration: 1.55, delay: delay + i * stagger, ease },
                opacity: {
                  duration: 1.75,
                  delay: delay + i * stagger,
                  ease
                },
                filter: {
                  duration: 1.6,
                  delay: delay + i * stagger,
                  ease
                }
              }}
              className="inline-block"
            >
              {line}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </Container>
  );
}
