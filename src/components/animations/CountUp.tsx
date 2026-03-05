"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "motion/react";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function CountUp({
  value,
  className,
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<string | null>(null);

  const parsed = useMemo(() => {
    const match = value.match(/^([\d.]+)/);
    if (!match) return null;
    const numStr = match[1];
    const num = parseFloat(numStr);
    if (num <= 0) return null;
    const hasDec = numStr.includes(".");
    const decPlaces = hasDec ? (numStr.split(".")[1]?.length || 0) : 0;
    const suf = value.slice(numStr.length);
    return { num, suffix: suf, hasDecimal: hasDec, decimalPlaces: decPlaces };
  }, [value]);

  useEffect(() => {
    if (!isInView || !parsed || prefersReducedMotion) return;

    const controls = animate(0, parsed.num, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatted = parsed.hasDecimal
          ? latest.toFixed(parsed.decimalPlaces)
          : Math.round(latest).toString();
        setDisplayValue(formatted + parsed.suffix);
      },
    });

    return () => controls.stop();
  }, [isInView, parsed, duration, prefersReducedMotion]);

  if (!parsed || prefersReducedMotion) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {displayValue !== null ? displayValue : value}
    </span>
  );
}
