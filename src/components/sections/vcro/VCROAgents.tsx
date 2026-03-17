"use client";

import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const agents = [
  {
    name: "Pipeline Analyst",
    desc: "Deal scoring, risk alerts, rep benchmarking, and sales forecasts calibrated to your conversion history.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="12" width="4" height="9" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="10" y="7" width="4" height="14" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Marketing Performance",
    desc: "Revenue attribution connecting every marketing dollar to closed deals. Budget reallocation recommendations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" opacity="0.3" />
        <circle cx="12" cy="12" r="6" opacity="0.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Financial Intelligence",
    desc: "Cash flow forecasting, margin analysis, SaaS audits, discount tracking, and transaction anomaly detection.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" fill="currentColor" opacity="0.15" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Customer Intelligence",
    desc: "Health scores, churn risk prediction, expansion signals, cohort analysis, and automated renewal briefs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" opacity="0.5" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Competitive Intelligence",
    desc: "Always-on monitoring with auto-updated battle cards, pricing alerts, and market trend analysis.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2a6 6 0 0 1 6 6c0 2-1 3.5-2.5 4.5M12 2a6 6 0 0 0-6 6c0 2 1 3.5 2.5 4.5M12 2v20M8.5 12.5A4 4 0 0 0 6 16.5c0 2 1.5 3.5 3.5 4M15.5 12.5A4 4 0 0 1 18 16.5c0 2-1.5 3.5-3.5 4" opacity="0.6" />
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Forecasting & Strategy",
    desc: "Scenario modeling, gap analysis, what-if simulations, and resource allocation across all agent data.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" opacity="0.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: "Executive Briefing",
    desc: "Daily summaries, weekly department reports, monthly reviews, and quarterly board decks — auto-generated.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

export default function VCROAgents() {
  return (
    <section id="agents" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          label="All Features in One Place"
          title="7 Specialized AI Agents. One Revenue Brain."
          description="Each agent is trained on your data and calibrated to your business model."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agents.map((a, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <Card className="h-full !p-6 md:!p-7">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent mb-4">
                  {a.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{a.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
