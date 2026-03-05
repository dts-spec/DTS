"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.08)_0%,transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-4xl">
            <FadeIn delay={0.2}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6 md:mb-8">
                Digital Technology Solutions
              </span>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-wide mb-6 md:mb-8">
                Your Competitors Are Already Using AI.
                <br />
                <span className="text-accent">Are You?</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-8 md:mb-12">
                We build the teams, integrate the systems, and develop the
                platforms that put you ahead&mdash;not behind.
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/services" size="lg">
                  See How We Do It
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Book a Call
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Hero image */}
          <FadeIn direction="right" delay={0.5}>
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1761998066489-4f32b9a4dff8?w=800&q=80"
                alt="Abstract dark metallic curves"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-[0.15em]">Scroll</span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 4L8 20M8 20L14 14M8 20L2 14" />
            </svg>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
