import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { navLinks, services, siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/dts-logo.jpeg"
                alt="Digital Technology Solutions"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="font-bold text-lg tracking-tight">DTS</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@dts.com"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  hello@dts.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Digital Technology Solutions. All
            rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with precision. Powered by innovation.
          </p>
        </div>
      </Container>
    </footer>
  );
}
