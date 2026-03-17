"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function VCROMission() {
  return (
    <section className="py-20 md:py-24 border-t border-b border-border bg-surface">
      <div className="container-site max-w-[800px] text-center">
        <FadeIn>
          <div className="relative">
            <div className="text-6xl text-accent/15 font-serif leading-none -mb-5">
              &ldquo;
            </div>
            <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium">
              We analyze your revenue data, find where deals stall, where marketing dollars
              waste, and where cash flow hides. Then we build and deploy AI agents that surface
              those insights to your team — every morning, every week, every quarter.
              <span className="block text-accent font-bold mt-3">
                Best part? Your people make the decisions. The AI just makes sure they never
                decide blind.
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
