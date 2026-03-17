"use client";

import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const pricingFactors = [
  {
    label: "Number of AI Agents",
    desc: "Deploy 3 agents or all 7 — scoped to the intelligence your team actually needs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2a6 6 0 0 1 6 6c0 2-1 3.5-2.5 4.5M12 2a6 6 0 0 0-6 6c0 2 1 3.5 2.5 4.5M12 2v20M8.5 12.5A4 4 0 0 0 6 16.5c0 2 1.5 3.5 3.5 4M15.5 12.5A4 4 0 0 1 18 16.5c0 2-1.5 3.5-3.5 4" opacity="0.6" />
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    label: "Total Data Integrations",
    desc: "From 2 core systems to a full-stack connection across CRM, marketing, finance, and support.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    label: "Customized Dashboards",
    desc: "Tailored reporting for each stakeholder — from daily Slack briefs to quarterly board decks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="12" width="4" height="9" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="10" y="7" width="4" height="14" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: "Dedicated Solutions Architect",
    desc: "Your assigned technical lead who knows your business and manages your deployment end-to-end.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" opacity="0.5" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" opacity="0.5" />
      </svg>
    ),
  },
];

export default function VCROPricing() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-site">
        <SectionHeading
          label="Pricing"
          title="Custom-Built. Custom-Priced."
          description="Every Virtual CRO deployment is tailored to your business. Setup budgets and monthly fees are based on scope, not arbitrary tiers."
          align="center"
        />

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
            {pricingFactors.map((f, i) => (
              <Card key={i} className="!p-7">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent mb-4">
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{f.label}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative rounded-3xl bg-card border border-border p-12 md:p-14 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-emerald-500 via-amber-500 to-purple-500" />
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide mb-4">
              Contact Us for Custom Setup & Pricing
            </h3>
            <p className="text-lg text-muted leading-relaxed max-w-[520px] mx-auto mb-8">
              Setup fees and monthly subscriptions are customized to our client&apos;s needs.
              Every engagement is scoped to deliver the right intelligence for your business —
              nothing more, nothing less.
            </p>
            <Button href="/contact" size="lg">
              Get My Custom Quote
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
