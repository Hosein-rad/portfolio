// components/ui/dot-pattern-background.tsx
"use client";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useEffect } from "react";

// Smaller, faint base dots – larger, fully opaque highlight dots
const dotPatterns = {
  light: {
    default: "",
    highlight: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23075985' cx='10' cy='10' r='3'/%3E%3C/svg%3E")`,
  },
  dark: {
    default: "",
    highlight: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' cx='10' cy='10' r='3'/%3E%3C/svg%3E")`,
  },
};

export const HeroHighlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth radial reveal – highlight fades in as cursor nears
  const maskImage = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      black 0%,
      transparent 100%
    )
  `;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Base dots – light */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{ backgroundImage: dotPatterns.light.default }}
      />
      {/* Base dots – dark */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{ backgroundImage: dotPatterns.dark.default }}
      />

      {/* Highlight dots – light (gradually revealed by mask) */}
      <motion.div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.highlight,
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      {/* Highlight dots – dark */}
      <motion.div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: dotPatterns.dark.highlight,
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
    </div>
  );
};
