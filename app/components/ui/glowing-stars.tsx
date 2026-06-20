// components/ui/glowing-stars.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Generate stars ONCE at module level – pure, runs only when the module loads
const STARS_COUNT = 100;
const STARS = Array.from({ length: STARS_COUNT }, (_, i) => ({
  id: i,
  x: Math.random() * 100, // 0–100%
  y: Math.random() * 100,
  size: Math.random() * 3 + 1, // 1–4px
  duration: Math.random() * 3 + 2, // 2–5s
  delay: Math.random() * 2,
}));

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div className={cn("fixed inset-0 z-0", className)}>
    <Illustration />
    <div className="absolute -z-10 h-full w-full">{children}</div>
  </div>
);

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <p className={cn("text-base text-white max-w-[16rem]", className)}>
    {children}
  </p>
);

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <h2 className={cn("font-bold text-2xl text-[#eaeaea]", className)}>
    {children}
  </h2>
);

const Illustration = () => (
  <div className="absolute inset-0 overflow-hidden">
    {STARS.map((star) => (
      <motion.div
        key={star.id}
        className="absolute rounded-full bg-blue-700 dark:bg-white shadow-[0_0_5px_1px_rgba(0,0,255,0.8)] dark:shadow-[0_0_5px_1px_rgba(255,255,255,0.8)]"
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
        }}
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.2, 1, 0.2],
        }}
        transition={{
          duration: star.duration,
          delay: star.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);
