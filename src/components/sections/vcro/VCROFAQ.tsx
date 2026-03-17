"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Does the Virtual CRO replace our leadership team?",
    a: "No — and that's the point. The Virtual CRO arms your leaders with CRO-level intelligence: data analysis, forecasting, and recommendations. Your people apply judgment and make decisions. It's a revenue co-pilot, not an autopilot.",
  },
  {
    q: "What tools do you integrate with?",
    a: "We connect to your existing stack — CRM (Salesforce, HubSpot, Pipedrive), marketing (Google Ads, Meta, GA4), accounting (QuickBooks, Xero, NetSuite), and support (Zendesk, Intercom). 40+ integrations available. We never modify your data.",
  },
  {
    q: "How is this different from a dashboard?",
    a: "Dashboards show what happened. The Virtual CRO tells you what to do about it. Every output includes specific, data-backed recommendations — and it synthesizes insights across all your systems simultaneously.",
  },
  {
    q: "Do we need technical staff to manage it?",
    a: "No. We handle setup, configuration, and ongoing optimization. Your team interacts through natural language queries, automated reports, and Slack or email delivery. Zero technical skills required.",
  },
  {
    q: "How accurate are the forecasts?",
    a: "We back-test every deployment against historical data before launch. Typical accuracy: 85-95% depending on data quality. Every forecast includes confidence intervals so you know the reliability range.",
  },
  {
    q: "Can we start small and add more later?",
    a: "Absolutely. Start with 3-4 agents. Add expansion modules anytime — additional agent clusters can be scoped and deployed as your needs grow.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
        open
          ? "bg-card border-border"
          : "bg-transparent border-border hover:border-muted-foreground/30"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold text-foreground flex-1 pr-4">{q}</span>
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
            open ? "bg-accent/20" : "bg-border"
          }`}
        >
          <span
            className={`text-base transition-transform duration-300 ${
              open ? "text-accent rotate-45" : "text-muted rotate-0"
            }`}
          >
            +
          </span>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[15px] text-muted leading-relaxed mt-3.5 overflow-hidden"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function VCROFAQ() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-site max-w-[720px]">
        <SectionHeading
          label="Frequently Asked Questions"
          title="Everything You Need to Know"
          align="center"
        />

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <FAQItem q={faq.q} a={faq.a} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
