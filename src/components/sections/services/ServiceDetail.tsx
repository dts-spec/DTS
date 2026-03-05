"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "remote-teams": {
    src: "https://images.unsplash.com/photo-1764534161906-f08540a2d333?w=700&q=80",
    alt: "Modern skyscrapers illuminated at night",
  },
  "ai-integration": {
    src: "https://images.unsplash.com/photo-1675044794023-2c70962f4899?w=700&q=80",
    alt: "Abstract molecular structures",
  },
  "custom-development": {
    src: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?w=700&q=80",
    alt: "Developer working in dark environment",
  },
};

interface ServiceDetailProps {
  id: string;
  label: string;
  title: string;
  problem: string;
  solution: string;
  features: readonly string[];
  index: number;
}

export default function ServiceDetail({
  id,
  label,
  title,
  problem,
  solution,
  features,
  index,
}: ServiceDetailProps) {
  const isEven = index % 2 === 0;
  const image = serviceImages[id];

  return (
    <section
      id={id}
      className="py-24 md:py-32 border-t border-border scroll-mt-24"
    >
      <Container>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start ${
            isEven ? "" : "lg:direction-rtl"
          }`}
        >
          <div className={isEven ? "" : "lg:direction-ltr"}>
            <SectionHeading label={label} title={title} />

            <FadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-xl p-6 mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">
                  The Problem
                </p>
                <p className="text-muted leading-relaxed">{problem}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-muted leading-relaxed mb-8">
                {solution}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Button href="/contact">Get Started</Button>
            </FadeIn>
          </div>

          <div className={isEven ? "" : "lg:direction-ltr"}>
            {image && (
              <FadeIn direction={isEven ? "right" : "left"} delay={0.1}>
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </FadeIn>
            )}

            <FadeIn direction={isEven ? "right" : "left"} delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6">
                  What You Get
                </h3>
                <div className="space-y-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="flex-shrink-0 mt-0.5 text-accent"
                      >
                        <path
                          d="M5 10l3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-muted leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
