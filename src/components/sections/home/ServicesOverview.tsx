"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  globe: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  brain: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3 3 3 0 0 1-1 5.2V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1.8A3 3 0 0 1 5 10a3 3 0 0 1 3-3V6a4 4 0 0 1 4-4z" />
      <path d="M12 2v20" />
      <path d="M8 10h8" />
      <path d="M8 14h8" />
    </svg>
  ),
  code: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  ),
};

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 lg:py-40 border-t border-border">
      <Container>
        <SectionHeading
          label="What We Do"
          title="Three Pillars of Digital Transformation"
          description={"Everything your business needs to compete in the AI era\u2014talent, intelligence, and technology."}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={0.1 * i}>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent/30 hover:bg-card-hover hover:-translate-y-1 h-full">
                <div className="mb-6">{icons[service.icon]}</div>
                <h3 className="text-xl font-bold mb-3">{service.label}</h3>
                <p className="text-muted leading-relaxed mb-6 text-sm">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all duration-300"
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
