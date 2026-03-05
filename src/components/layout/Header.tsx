"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const scrolled = useScrollProgress(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container-site flex items-center justify-between h-20">
          <Link href="/" className="relative z-10 flex items-center gap-3">
            <Image
              src="/images/dts-logo.jpeg"
              alt="Digital Technology Solutions"
              width={40}
              height={40}
              className="rounded"
              priority
            />
            <span className="font-bold text-lg tracking-tight hidden sm:block">
              DTS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden relative z-10 p-2 cursor-pointer"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-foreground" />
              <span className="block w-6 h-0.5 bg-foreground" />
              <span className="block w-4 h-0.5 bg-foreground" />
            </div>
          </button>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
