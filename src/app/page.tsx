import HeroSection from "@/components/sections/home/HeroSection";
import ProblemSection from "@/components/sections/home/ProblemSection";
import InsightSection from "@/components/sections/home/InsightSection";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import ProcessSection from "@/components/sections/home/ProcessSection";
import CaseStudiesPreview from "@/components/sections/home/CaseStudiesPreview";
import StatsSection from "@/components/sections/home/StatsSection";
import CTASection from "@/components/sections/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <InsightSection />
      <ServicesOverview />
      <ProcessSection />
      <CaseStudiesPreview />
      <StatsSection />
      <CTASection />
    </>
  );
}
