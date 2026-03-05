"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";

export default function MissionSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <SectionHeading
              label="Our Mission"
              title="Technology Should Serve People, Not Replace Them"
            />
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted leading-relaxed mb-6">
                We started Digital Technology Solutions because we saw a
                disconnect. Businesses were being told AI would change
                everything, but nobody was showing them how to actually make it
                work.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-muted leading-relaxed">
                We are not here to sell you the future. We are here to build it
                with you. Every integration we deploy, every team we assemble,
                every platform we develop is designed to make your people more
                effective&mdash;not more expendable.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="right" delay={0.3}>
            <div>
              {/* Team image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1762008312967-beaf3f59984e?w=700&q=80"
                  alt="Modern office with geometric lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-6">
                  Why We Exist
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-4">
                    <p className="text-sm text-muted leading-relaxed">
                      Most AI transformations fail because they start with
                      technology instead of people. We reverse that. We start with
                      your team, your workflows, and your goals&mdash;then we find
                      the technology that fits.
                    </p>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <p className="text-sm text-muted leading-relaxed">
                      Hiring talent should not take months or cost a fortune. We
                      maintain a vetted global network so you can move fast without
                      compromising quality.
                    </p>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <p className="text-sm text-muted leading-relaxed">
                      Custom software should be built for your business, not the
                      other way around. We develop platforms that fit how you work
                      today and scale as you grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
