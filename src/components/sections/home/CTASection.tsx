"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle accent gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,0,0.06)_0%,transparent_60%)]" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-wide mb-6 md:mb-8">
              Ready to Stop
              <br />
              <span className="text-accent">Falling Behind?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 md:mb-12">
              Let us build the team, integrate the AI, and develop the platform
              that moves your business forward.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Start a Conversation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No commitment. No jargon. Just a conversation about what is
              possible.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
