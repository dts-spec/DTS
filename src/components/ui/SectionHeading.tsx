"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide",
          align === "center" && "mx-auto",
          description && "mb-4 md:mb-6"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg text-muted leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
