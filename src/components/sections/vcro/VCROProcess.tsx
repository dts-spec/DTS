"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { WidgetRevenue, WidgetPipeline, WidgetAlerts } from "./VCROWidgets";

const steps = [
  {
    n: "01",
    label: "Discover & Audit",
    time: "2-3 Weeks",
    desc: "We map your complete revenue architecture — every lead source, sales stage, and conversion point. We audit every data system for quality, gaps, and integration readiness. Nothing is assumed.",
  },
  {
    n: "02",
    label: "Design & Blueprint",
    time: "1 Week",
    desc: "You receive a Revenue Intelligence Blueprint: which agents deploy, what dashboards your team sees, data connections required, and projected ROI. Nothing is built until you approve the plan.",
  },
  {
    n: "03",
    label: "Build & Configure",
    time: "3-6 Weeks",
    desc: "Custom agent training on your data. Integration with your CRM, marketing tools, and accounting software. 100+ outputs validated against historical performance before launch.",
  },
  {
    n: "04",
    label: "Launch & Train",
    time: "2-3 Weeks",
    desc: "Phased rollout: internal champions first, then department-by-department training. Automated briefings, reports, and alerts activated. Your team is confident from day one.",
  },
  {
    n: "05",
    label: "Optimize & Scale",
    time: "Ongoing",
    desc: "Continuous tuning. Monthly strategy reviews with your leadership. New integrations as your stack evolves. Expansion into additional agent modules as your needs grow.",
  },
];

const widgets = [
  <WidgetPipeline key="pipeline" />,
  <WidgetAlerts key="alerts1" />,
  <WidgetRevenue key="revenue1" />,
  <WidgetAlerts key="alerts2" />,
  <WidgetRevenue key="revenue2" />,
];

export default function VCROProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-site">
        <SectionHeading
          label="Our Process"
          title="From Discovery to Deployment"
          description="A structured 5-phase process. Minimal disruption. Maximum intelligence."
          align="center"
        />

        <FadeIn>
          {/* Step tabs */}
          <div className="flex gap-1.5 mb-5 justify-center flex-wrap">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeStep === i
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-border bg-transparent text-muted hover:border-muted-foreground"
                }`}
              >
                Step {i + 1}
              </button>
            ))}
          </div>

          {/* Step content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-card rounded-3xl p-8 md:p-10 border border-border min-h-[380px]">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl font-extrabold text-accent font-mono">
                  {steps[activeStep].n}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">
                    {steps[activeStep].label}
                  </h3>
                  <span className="text-sm text-accent font-mono font-medium">
                    {steps[activeStep].time}
                  </span>
                </div>
              </div>
              <p className="text-base text-muted leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>
            <div className="flex items-center">{widgets[activeStep]}</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
