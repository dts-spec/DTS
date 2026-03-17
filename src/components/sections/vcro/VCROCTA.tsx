"use client";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function VCROCTA() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-site">
        <FadeIn>
          <div className="max-w-[780px] mx-auto text-center p-12 md:p-16 rounded-3xl bg-card border border-border relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.03] pointer-events-none blur-3xl" />
            <p className="text-sm text-muted-foreground italic mb-4 relative">
              Reach out anytime
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide mb-4 relative">
              Ready to See What Your
              <br />
              Data Is Trying to Tell You?
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-[460px] mx-auto mb-8 relative">
              Schedule a 30-minute call. We&apos;ll discuss your revenue challenges and whether
              the Virtual CRO is the right fit. No pressure. No pitch deck.
            </p>
            <div className="relative">
              <Button href="/contact" size="lg">
                Get My Free Strategy Call
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3.5 relative">
              100% free &middot; No commitment &middot; Typically responds within 4 hours
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
