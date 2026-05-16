"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 14,
  as = "a"
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  as?: "a" | "button";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = ((e.clientX - (r.left + r.width / 2)) / r.width) * strength;
    const dy = ((e.clientY - (r.top + r.height / 2)) / r.height) * strength;
    x.set(dx);
    y.set(dy);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = as;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={className}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
