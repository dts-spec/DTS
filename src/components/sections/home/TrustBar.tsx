"use client";

import FadeIn from "@/components/animations/FadeIn";

const partners = [
  "Salesforce",
  "HubSpot",
  "Google Cloud",
  "AWS",
  "Anthropic",
  "Stripe",
  "QuickBooks",
  "Slack",
];

export default function TrustBar() {
  return (
    <section className="py-10 md:py-14 border-b border-border">
      <div className="container-site">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Trusted Platforms We Build With &amp; Integrate
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {partners.map((name) => (
              <span
                key={name}
                className="text-sm md:text-base font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
