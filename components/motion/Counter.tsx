"use client";

import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({
  to,
  duration = 2.2,
  className = "",
  prefix = "",
  suffix = ""
}: {
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  const value = useMotionValue(0);
  const spring = useSpring(value, {
    stiffness: 60,
    damping: 22,
    mass: 1
  });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
