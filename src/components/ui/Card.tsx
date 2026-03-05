"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-2xl p-8 md:p-10 transition-all duration-300",
        hover && "hover:border-accent/30 hover:bg-card-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
