"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { processSteps } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-surface">
      <Container>
        <SectionHeading
          label="How We Work"
          title="From Discovery to Scale"
          description="A proven process that gets you results without disrupting your business."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} delay={0.1 * i}>
              <div className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
                )}
                <div className="text-center">
                  <span className="inline-block text-5xl md:text-6xl font-display text-accent/20 mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mb-3 font-display tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
