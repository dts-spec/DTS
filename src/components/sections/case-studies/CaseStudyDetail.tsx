"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import type { CaseStudy } from "@/lib/constants";

interface CaseStudyDetailProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyDetail({ study, index }: CaseStudyDetailProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      id={study.id}
      className="py-20 md:py-28 border-t border-border scroll-mt-24"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start ${
          isEven ? "" : "lg:direction-rtl"
        }`}
      >
        <div className={isEven ? "" : "lg:direction-ltr"}>
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              {study.categoryLabel}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide mb-2">
              {study.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-sm text-muted-foreground mb-8">
              {study.company} &middot; {study.industry}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">
                The Challenge
              </p>
              <p className="text-muted leading-relaxed">{study.challenge}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {study.solution}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              {study.results.map((result) => (
                <div
                  key={result.metric}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <p className="text-2xl md:text-3xl font-display text-accent leading-none mb-1">
                    {result.metric}
                  </p>
                  <p className="text-xs text-muted">{result.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className={isEven ? "" : "lg:direction-ltr"}>
          <FadeIn direction={isEven ? "right" : "left"} delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn direction={isEven ? "right" : "left"} delay={0.3}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6">
                What We Built
              </h3>
              <div className="space-y-4">
                {study.features.map((feature, i) => (
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
    </div>
  );
}
