"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/lib/constants";

const featured = caseStudies.slice(0, 3);

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 md:py-32 lg:py-40 border-t border-border">
      <Container>
        <SectionHeading
          label="Case Studies"
          title="AI In Action"
          description="Real results from real companies. See how we have helped mid-size businesses transform with AI."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featured.map((study, i) => (
            <FadeIn key={study.id} delay={0.1 * i}>
              <Link
                href={`/case-studies#${study.id}`}
                className="group block bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:bg-card-hover hover:-translate-y-1 h-full"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {study.categoryLabel}
                  </span>
                  <h3 className="text-base font-bold mt-2 mb-2 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {study.company} &middot; {study.industry}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <Button href="/case-studies" variant="ghost">
              View All Case Studies
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
