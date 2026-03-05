"use client";

import Container from "@/components/ui/Container";
import CountUp from "@/components/animations/CountUp";
import FadeIn from "@/components/animations/FadeIn";
import { stats } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 border-t border-b border-border">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div className="text-center">
                <CountUp
                  value={stat.value}
                  className="block text-4xl md:text-5xl lg:text-6xl font-display text-accent leading-none mb-2"
                />
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
