"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function InsightSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1604063176436-b463de60413f?w=1200&q=75"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Scrolling background text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div className="whitespace-nowrap text-[8rem] md:text-[12rem] font-display text-foreground/[0.02] tracking-wider animate-[marquee_30s_linear_infinite]">
          AUTOMATION &middot; INTEGRATION &middot; DEPLOYMENT &middot; SCALE
          &middot; AUTOMATION &middot; INTEGRATION &middot; DEPLOYMENT &middot;
          SCALE &middot;
        </div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              The Shift
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide mb-6 md:mb-8">
              It Is Not About Technology.
              <br />
              It Is About Integration.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              The companies winning with AI are not the ones with the biggest
              budgets. They are the ones who integrated AI into their existing
              workflows without disrupting their teams. That is what we do.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
