"use client";

import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const benefits = [
  {
    title: "Real-Time Revenue Intelligence",
    desc: "Live pipeline health, deal risk scoring, and revenue forecasts updated continuously — not weekly spreadsheets assembled by hand.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="12" width="4" height="9" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="10" y="7" width="4" height="14" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Measurable Impact from Day One",
    desc: "Track the exact ROI of every agent. See how insights translate to recovered deals, optimized spend, and faster sales cycles.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" opacity="0.3" />
        <circle cx="12" cy="12" r="6" opacity="0.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Seamless Integration with Your Stack",
    desc: "We connect to Salesforce, HubSpot, QuickBooks, Google Analytics, Stripe, and 40+ tools your team already uses. No rip-and-replace.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Your Team Stays in Control",
    desc: "We deliver intelligence. Your people make decisions. The Virtual CRO is a co-pilot that makes leadership smarter — not a replacement.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" fill="currentColor" opacity="0.15" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function VCROWhyChoose() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          label="Why Choose Us"
          title="Everything You Need to Analyze, Optimize, and Scale Revenue"
          description="One system that connects your data, surfaces the insights, and arms your leadership with intelligence that was previously locked behind $250K executive hires."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent mb-5">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2.5">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
