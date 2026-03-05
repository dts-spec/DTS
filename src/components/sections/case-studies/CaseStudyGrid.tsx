"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import { caseStudies } from "@/lib/constants";
import CaseStudyDetail from "./CaseStudyDetail";

export default function CaseStudyGrid() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.id} delay={0.1 * i}>
              <a
                href={`#${study.id}`}
                className="group block bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:bg-card-hover hover:-translate-y-1 h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                      {study.categoryLabel}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs text-muted-foreground mb-2">
                    {study.company} &middot; {study.industry}
                  </p>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.results.slice(0, 2).map((result) => (
                      <span
                        key={result.metric}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                      >
                        {result.metric}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Detailed case study sections */}
        {caseStudies.map((study, i) => (
          <CaseStudyDetail key={study.id} study={study} index={i} />
        ))}
      </Container>
    </section>
  );
}
