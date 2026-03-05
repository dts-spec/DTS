import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import MissionSection from "@/components/sections/about/MissionSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import StatsSection from "@/components/sections/home/StatsSection";
import CTASection from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "We bridge the gap between AI capability and business readiness. Learn about our mission, values, and approach.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
