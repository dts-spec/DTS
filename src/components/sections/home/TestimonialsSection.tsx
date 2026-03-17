"use client";

import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "Meridian SaaS",
    quote:
      "We went from guessing at our quarterly forecast to nailing it within 8%. The pipeline analyst caught three at-risk deals we would have lost.",
    initials: "SC",
  },
  {
    name: "Marcus Williams",
    role: "VP Sales",
    company: "Atlas Digital",
    quote:
      "My team used to spend Monday mornings building reports. Now they spend Monday mornings acting on insights surfaced over the weekend.",
    initials: "MW",
  },
  {
    name: "Elena Rodriguez",
    role: "COO",
    company: "Vertex Health",
    quote:
      "The financial intelligence agent found $47K in duplicate SaaS charges in our first month. The system paid for itself immediately.",
    initials: "ER",
  },
  {
    name: "David Park",
    role: "Founder",
    company: "Nova Systems",
    quote:
      "It doesn't replace strategic thinking. It replaces the 20 hours a week we spent assembling data. Now we actually think.",
    initials: "DP",
  },
  {
    name: "Rachel Torres",
    role: "CMO",
    company: "Brightstack",
    quote:
      "For the first time, I can show the board exactly which marketing dollars drove which closed deals.",
    initials: "RT",
  },
  {
    name: "James Liu",
    role: "CRO",
    company: "Orion Group",
    quote:
      "This system synthesizes what Clari, Gong, and two fractional analysts do separately \u2014 and costs a third as much.",
    initials: "JL",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="container-site text-center mb-12">
        <SectionHeading
          label="Client Results"
          title="Real Leaders. Real Results."
          align="center"
        />
      </div>

      <div
        className="flex gap-4 w-max px-6"
        style={{ animation: "marquee 45s linear infinite" }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="min-w-[320px] max-w-[360px] p-7 rounded-2xl bg-card border border-border shrink-0"
          >
            <p className="text-sm text-muted leading-relaxed mb-5 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/40 flex items-center justify-center text-sm font-bold text-foreground">
                {t.initials}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">
                  {t.name}
                </div>
                <div className="text-xs text-muted">
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
