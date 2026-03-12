"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "remote-teams", label: "Remote Teams" },
  { value: "ai-integration", label: "AI Integration" },
  { value: "custom-development", label: "Custom Development" },
  { value: "not-sure", label: "Not sure yet" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300";

  if (submitted) {
    return (
      <section className="pb-24 md:pb-32">
        <Container>
          <FadeIn>
            <div className="max-w-xl mx-auto text-center bg-card border border-border rounded-2xl p-12">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-3xl md:text-4xl tracking-wide mb-4">
                Message Sent
              </h3>
              <p className="text-muted leading-relaxed">
                Thanks for reaching out. We will get back to you within 24
                hours to discuss how we can help your business.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    );
  }

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          <div className="lg:col-span-3">
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or challenge..."
                    className={inputClasses + " resize-none"}
                  />
                </div>

                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:joshua@digitaltechnologysolutions.co"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    joshua@digitaltechnologysolutions.co
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    Response Time
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    We respond to all inquiries within 24 hours during business
                    days. Most hear back from us within a few hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    What Happens Next
                  </h3>
                  <ol className="space-y-3 text-sm text-muted">
                    <li className="flex gap-3">
                      <span className="text-accent font-semibold">1.</span>
                      We review your message and match you with the right team.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-semibold">2.</span>
                      We schedule a 30-minute discovery call at your convenience.
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-semibold">3.</span>
                      We present a tailored plan with clear timelines and pricing.
                    </li>
                  </ol>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
