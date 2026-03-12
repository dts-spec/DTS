"use client";

import Container from "@/components/ui/Container";
import TextReveal from "@/components/animations/TextReveal";
import FadeIn from "@/components/animations/FadeIn";

export default function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.06)_0%,transparent_50%)]" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              Case Studies
            </span>
          </FadeIn>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] tracking-wide mb-6">
            <TextReveal text="Real Results" />
          </h1>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              How mid-size companies are using AI platforms to transform
              marketing, operations, and customer intelligence.
            </p>
            <p className="text-sm text-muted/70 italic mt-4">
              Names of businesses have been changed for privacy and confidentiality.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
