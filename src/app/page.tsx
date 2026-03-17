import HeroSection from "@/components/sections/home/HeroSection";
import TrustBar from "@/components/sections/home/TrustBar";
import ProblemSection from "@/components/sections/home/ProblemSection";
import InsightSection from "@/components/sections/home/InsightSection";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import ProcessSection from "@/components/sections/home/ProcessSection";
import CaseStudiesPreview from "@/components/sections/home/CaseStudiesPreview";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import VCROPromo from "@/components/sections/home/VCROPromo";
import StatsSection from "@/components/sections/home/StatsSection";
import CTASection from "@/components/sections/home/CTASection";
import VCROChat from "@/components/sections/vcro/VCROChat";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <InsightSection />
      <ServicesOverview />
      <ProcessSection />
      <CaseStudiesPreview />
      <TestimonialsSection />
      <VCROPromo />
      <StatsSection />
      <CTASection />
      <VCROChat />
    </>
  );
}
