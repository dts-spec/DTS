import type { Metadata } from "next";
import VCROHero from "@/components/sections/vcro/VCROHero";
import VCROMission from "@/components/sections/vcro/VCROMission";
import VCROWhyChoose from "@/components/sections/vcro/VCROWhyChoose";
import VCROIntegrations from "@/components/sections/vcro/VCROIntegrations";
import VCROAgents from "@/components/sections/vcro/VCROAgents";
import VCROProcess from "@/components/sections/vcro/VCROProcess";
import VCROTestimonials from "@/components/sections/vcro/VCROTestimonials";
import VCROPricing from "@/components/sections/vcro/VCROPricing";
import VCROFAQ from "@/components/sections/vcro/VCROFAQ";
import VCROCTA from "@/components/sections/vcro/VCROCTA";
import VCROChat from "@/components/sections/vcro/VCROChat";

export const metadata: Metadata = {
  title: "Virtual CRO",
  description:
    "AI-powered revenue intelligence that analyzes your data, finds where deals stall, and deploys AI agents to surface insights to your team — every day.",
};

export default function VCROPage() {
  return (
    <>
      <VCROHero />
      <VCROMission />
      <VCROWhyChoose />
      <VCROIntegrations />
      <VCROAgents />
      <VCROProcess />
      <VCROTestimonials />
      <VCROPricing />
      <VCROFAQ />
      <VCROCTA />
      <VCROChat />
    </>
  );
}
