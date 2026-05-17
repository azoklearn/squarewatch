"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useEffect, useRef } from "react";
import MagneticButton from "./motion/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Subtle cursor parallax
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const sx = useSpring(cx, { stiffness: 50, damping: 18, mass: 0.6 });
  const sy = useSpring(cy, { stiffness: 50, damping: 18, mass: 0.6 });
  const px = useTransform(sx, (v) => v * 0.012);
  const py = useTransform(sy, (v) => v * 0.012);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      cx.set(e.clientX - window.innerWidth / 2);
      cy.set(e.clientY - window.innerHeight / 2);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cx, cy]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-ink text-ivory"
    >
      {/* Full-bleed video background */}
      <motion.div
        style={{ y: bgY, scale: bgScale, x: px }}
        className="absolute inset-[-6%]"
      >
        <motion.div style={{ y: py }} className="absolute inset-0">
          <video
            src="https://patek-res.cloudinary.com/video/upload/f_auto:video/dfsmedia/0906caea301d42b3b8bd23bd656d1711/448646-source/pp-2026-new-models-banner-16-9-product-highlights"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/imagesite.jpg"
            className="h-full w-full object-cover"
            style={{ filter: "contrast(1.04) brightness(0.72) saturate(0.85)" }}
          />
        </motion.div>
      </motion.div>

      {/* Dark wash */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/45 to-ink/85"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(14,13,11,0) 0%, rgba(14,13,11,0.5) 80%)"
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-center px-6 md:px-12"
      >
        <div className="max-w-5xl">
          <h1 className="serif font-light leading-[0.94] tracking-tight text-ivory">
            {["Luxury Watches,", "Curated With Precision."].map((line, i) => (
              <span
                key={line}
                className="block overflow-hidden"
                style={{
                  fontSize: "clamp(3rem, 7.8vw, 7rem)",
                  paddingBottom: "0.06em"
                }}
              >
                <motion.span
                  initial={{ y: "118%", opacity: 0, filter: "blur(14px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    y: { duration: 1.55, delay: 0.25 + i * 0.22, ease },
                    opacity: {
                      duration: 1.8,
                      delay: 0.25 + i * 0.22,
                      ease
                    },
                    filter: {
                      duration: 1.6,
                      delay: 0.25 + i * 0.22,
                      ease
                    }
                  }}
                  className="inline-block"
                >
                  {i === 1 ? (
                    <>
                      Curated With{" "}
                      <span className="serif italic text-bordeaux">
                        Precision.
                      </span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 1.25, ease }}
            className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7"
          >
            <MagneticButton
              href="#collection"
              className="group inline-flex items-center gap-3 bg-bordeaux px-9 py-4 text-[12.5px] font-medium tracking-wider text-ivory transition-colors duration-500 hover:bg-bordeaux-700"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                  Explore the Collection
                </span>
                <span className="absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  Explore the Collection
                </span>
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              >
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </MagneticButton>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-2 py-4 text-[12.5px] font-medium tracking-wider text-ivory"
            >
              <span className="relative pb-1 transition-colors duration-500 group-hover:text-champagne">
                Book a Private Consultation
                <span className="absolute inset-x-0 bottom-0 h-px bg-ivory/35" />
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-champagne transition-transform duration-700 group-hover:scale-x-100" />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
