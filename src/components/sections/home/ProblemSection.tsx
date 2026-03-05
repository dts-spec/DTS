"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";

const problems = [
  "Your competitors are automating workflows while your team drowns in manual processes.",
  "You know AI can transform your business\u2014but your team doesn\u2019t know where to start.",
  "Hiring the right talent is expensive, slow, and full of uncertainty.",
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <SectionHeading
              label="The Reality"
              title="AI Is Not Coming. It Is Here."
            />

            <div className="space-y-6">
              {problems.map((problem, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </span>
                    <p className="text-lg text-muted leading-relaxed">
                      {problem}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn direction="right" delay={0.3}>
            <div className="rounded-2xl overflow-hidden">
              {/* Atmospheric image */}
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1680992046626-418f7e910589?w=600&q=80"
                  alt="Server rack with ambient lighting"
                  fill
                  className="object-cover opacity-50"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-card/60 to-card" />
              </div>
              {/* Stat card */}
              <div className="bg-card border border-border border-t-0 rounded-b-2xl p-10 md:p-12">
                <p className="text-6xl md:text-7xl font-display text-accent leading-none mb-4">
                  73%
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  of companies have adopted AI in at least one business function.
                  If you are not one of them, you are already behind.
                </p>
                <p className="text-xs text-muted-foreground mt-4 uppercase tracking-wider">
                  McKinsey Global Survey, 2024
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
