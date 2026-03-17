"use client";

import { useState, useEffect } from "react";

export function WidgetRevenue() {
  const [bars, setBars] = useState([55, 72, 40, 88, 52, 78, 94, 48, 82, 60, 73, 90]);

  useEffect(() => {
    const t = setInterval(() => {
      setBars((prev) =>
        prev.map((b) => Math.max(20, Math.min(98, b + (Math.random() - 0.48) * 12)))
      );
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-2xl bg-card border border-border p-5 overflow-hidden">
      <div className="flex justify-between items-center mb-3.5">
        <span className="text-xs font-semibold text-muted-foreground tracking-widest font-mono uppercase">
          Revenue Forecast
        </span>
        <span className="text-[11px] text-emerald-500 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          LIVE
        </span>
      </div>
      <div className="flex items-end gap-1 h-20 mb-3">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded relative transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              height: `${h}%`,
              background: "linear-gradient(to top, var(--color-accent), rgba(255,107,0,0.2))",
            }}
          >
            {i === bars.length - 1 && (
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-muted-foreground font-mono">Jan</span>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground font-mono">$847K</span>
          <span className="text-[11px] text-emerald-500 font-semibold font-mono px-2 py-0.5 rounded-md bg-emerald-500/10">
            +23.4%
          </span>
        </div>
        <span className="text-[11px] text-muted-foreground font-mono">Dec</span>
      </div>
    </div>
  );
}

export function WidgetPipeline() {
  const deals = [
    { name: "Meridian Group", val: "$126K", stage: "Negotiation", pct: 87, color: "emerald" },
    { name: "Atlas Digital", val: "$84K", stage: "Proposal Review", pct: 62, color: "amber" },
    { name: "Vertex Health", val: "$42K", stage: "Discovery", pct: 35, color: "accent" },
    { name: "Nova Systems", val: "$67K", stage: "Demo Scheduled", pct: 48, color: "cyan" },
  ];

  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-500 shadow-emerald-500/25",
    amber: "bg-amber-500 shadow-amber-500/25",
    accent: "bg-accent shadow-accent/25",
    cyan: "bg-cyan-500 shadow-cyan-500/25",
  };

  return (
    <div className="rounded-2xl bg-card border border-border p-5">
      <div className="flex justify-between items-center mb-3.5">
        <span className="text-xs font-semibold text-muted-foreground tracking-widest font-mono uppercase">
          Pipeline Health
        </span>
        <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-accent/10 text-accent font-mono font-semibold">
          4 Active Deals
        </span>
      </div>
      {deals.map((d, i) => (
        <div key={i} className={`py-2.5 ${i > 0 ? "border-t border-border" : ""}`}>
          <div className="flex justify-between items-center mb-1.5">
            <div>
              <div className="text-[13px] text-foreground font-semibold">{d.name}</div>
              <div className="text-[11px] text-muted">{d.stage}</div>
            </div>
            <div className="text-right">
              <div className="text-[13px] text-foreground font-bold font-mono">{d.val}</div>
            </div>
          </div>
          <div className="h-1 rounded-full bg-border">
            <div
              className={`h-full rounded-full ${colorMap[d.color]} shadow-md transition-all duration-1000`}
              style={{ width: `${d.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function WidgetAlerts() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setVisible((v) => Math.min(3, v + 1)), 1500);
    return () => clearInterval(t);
  }, []);

  const alerts = [
    {
      title: "Deal Risk — Meridian Group",
      desc: "No stakeholder contact in 9 days. Decision-maker disengaged since March 5.",
      colorClass: "bg-orange-500/5 border-orange-500/10 text-orange-500",
    },
    {
      title: "Expansion Signal — Atlas Digital",
      desc: "Requesting API access and additional seats. Upsell opportunity: est. $24K ARR.",
      colorClass: "bg-emerald-500/5 border-emerald-500/10 text-emerald-500",
    },
    {
      title: "Forecast Updated",
      desc: "Q2 projection adjusted to $847K. Pipeline velocity increased 14% WoW.",
      colorClass: "bg-accent/5 border-accent/10 text-accent",
    },
  ];

  return (
    <div className="rounded-2xl bg-card border border-border p-5">
      <div className="flex justify-between items-center mb-3.5">
        <span className="text-xs font-semibold text-muted-foreground tracking-widest font-mono uppercase">
          Daily Briefing
        </span>
        <span className="text-[11px] text-muted-foreground font-mono">Today, 8:02 AM</span>
      </div>
      <div className="flex flex-col gap-2">
        {alerts.slice(0, visible).map((a, i) => (
          <div
            key={i}
            className={`px-3.5 py-3 rounded-xl border transition-all duration-600 ${a.colorClass}`}
          >
            <div className="text-xs font-semibold mb-0.5">{a.title}</div>
            <div className="text-xs text-muted leading-relaxed">{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
