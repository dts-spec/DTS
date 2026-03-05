import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import CTASection from "@/components/sections/home/CTASection";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Remote teams, AI integration, and custom development. Three pillars of digital transformation tailored to your business.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          id={service.id}
          label={service.label}
          title={service.title}
          problem={service.problem}
          solution={service.solution}
          features={service.features}
          index={index}
        />
      ))}
      <CTASection />
    </>
  );
}
