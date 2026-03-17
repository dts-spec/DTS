"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { WidgetRevenue, WidgetPipeline, WidgetAlerts } from "./VCROWidgets";

export default function VCROHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/[0.02] blur-3xl" />
        <div className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full bg-emerald-500/[0.02] blur-3xl" />
      </div>

      <FadeIn>
        <Badge className="mb-8">AI Revenue Intelligence Partner</Badge>
      </FadeIn>

      <FadeIn delay={0.08}>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[82px] leading-[0.95] tracking-wide max-w-[880px] mx-auto">
          Stop Guessing.
          <br />
          Start Growing.
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[600px] mx-auto mt-7">
          Your revenue data is scattered across a dozen tools. Your team builds reports nobody
          reads. The insights that would change everything are buried — and by the time you find
          them, the quarter is over.
        </p>
      </FadeIn>

      <FadeIn delay={0.22}>
        <div className="flex gap-3.5 mt-10 flex-wrap justify-center">
          <Button href="/contact" size="lg">
            Get My Free Discovery Call
          </Button>
          <Button href="#agents" variant="ghost" size="lg">
            See How It Works
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          100% free &middot; No commitment &middot; Takes 30 minutes
        </p>
      </FadeIn>

      {/* Micro-proof stats */}
      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10 py-5 px-8 rounded-2xl border border-border/50 bg-card/30">
          <div className="text-center">
            <span className="block text-2xl font-display text-accent tracking-wide">85-95%</span>
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Forecast Accuracy</span>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="text-center">
            <span className="block text-2xl font-display text-accent tracking-wide">40+</span>
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Integrations</span>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="text-center">
            <span className="block text-2xl font-display text-accent tracking-wide">3-6 Wks</span>
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">To Deploy</span>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="text-center">
            <span className="block text-2xl font-display text-accent tracking-wide">7</span>
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">AI Agents</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4} className="w-full max-w-[960px] mt-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-3.5">
          <WidgetRevenue />
          <WidgetPipeline />
        </div>
        <div className="mt-3.5">
          <WidgetAlerts />
        </div>
      </FadeIn>
    </section>
  );
}
