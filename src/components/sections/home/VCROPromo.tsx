"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";

const highlights = [
  {
    title: "7 AI Agents",
    desc: "Pipeline, marketing, finance, customer, competitive, forecasting, and executive briefing — all trained on your data.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3 3 3 0 0 1-1 5.2V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1.8A3 3 0 0 1 5 10a3 3 0 0 1 3-3V6a4 4 0 0 1 4-4z" />
        <path d="M12 2v20" />
        <path d="M8 10h8" />
        <path d="M8 14h8" />
      </svg>
    ),
  },
  {
    title: "40+ Integrations",
    desc: "Connects to Salesforce, HubSpot, QuickBooks, Stripe, Google Analytics, and your entire existing stack.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Real-Time Intelligence",
    desc: "Live pipeline health, deal risk scoring, revenue forecasts, and daily briefings delivered automatically.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
        <rect x="3" y="12" width="4" height="9" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="10" y="7" width="4" height="14" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
];

export default function VCROPromo() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 border-t border-border overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.05)_0%,transparent_50%)]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              label="New: Virtual CRO"
              title="AI Revenue Intelligence for Growing Businesses"
              description="Stop guessing at your revenue. Our Virtual CRO deploys AI agents that analyze your data, surface insights, and arm your leadership with intelligence — every day."
            />

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/vcro" size="lg">
                  Explore Virtual CRO
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Book a Free Call
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right: Feature cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((h, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="right">
                <Card className="!p-6 flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">{h.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{h.desc}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
