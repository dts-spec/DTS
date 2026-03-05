import type { Metadata } from "next";
import CaseStudiesHero from "@/components/sections/case-studies/CaseStudiesHero";
import CaseStudyGrid from "@/components/sections/case-studies/CaseStudyGrid";
import CTASection from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | Digital Technology Solutions",
  description:
    "See how mid-size companies are using AI to transform marketing, operations, and customer intelligence.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudyGrid />
      <CTASection />
    </>
  );
}
