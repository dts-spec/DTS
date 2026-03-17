"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "remote-teams", label: "Remote Teams" },
  { value: "ai-integration", label: "AI Integration" },
  { value: "custom-development", label: "Custom Development" },
  { value: "virtual-cro", label: "Virtual CRO" },
  { value: "not-sure", label: "Not sure yet" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const TOTAL_STEPS = 3;

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      return;
    }

    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please email joshua@digitaltechnologysolutions.co directly."
      );
    } finally {
      setSending(false);
    }
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

  const canProceed = () => {
    if (step === 1) return formData.name.trim() && formData.email.trim();
    if (step === 2) return true; // company and service are optional
    if (step === 3) return formData.message.trim();
    return false;
  };

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
                You&apos;re All Set
              </h3>
              <p className="text-muted leading-relaxed">
                Thanks for reaching out. We will get back to you within 24 hours
                with a personalized plan for your business.
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
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-8">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                  <div key={i} className="flex-1 flex items-center gap-2">
                    <div
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        i + 1 <= step ? "bg-accent" : "bg-border"
                      }`}
                    />
                  </div>
                ))}
                <span className="text-xs text-muted-foreground ml-2">
                  Step {step} of {TOTAL_STEPS}
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-2">
                          Let&apos;s Start With You
                        </h3>
                        <p className="text-sm text-muted mb-6">
                          Who should we follow up with?
                        </p>
                      </div>
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
                          autoFocus
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
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-2">
                          Tell Us About Your Business
                        </h3>
                        <p className="text-sm text-muted mb-6">
                          This helps us match you with the right team.
                        </p>
                      </div>
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
                          autoFocus
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2"
                        >
                          What Are You Interested In?
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
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-2">
                          What Can We Help With?
                        </h3>
                        <p className="text-sm text-muted mb-6">
                          Give us a quick overview and we will tailor our
                          response.
                        </p>
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
                          autoFocus
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 mt-8">
                  {step > 1 && (
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => setStep(step - 1)}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!canProceed() || sending}
                  >
                    {sending
                      ? "Sending..."
                      : step < TOTAL_STEPS
                        ? "Continue"
                        : "Get My Free Strategy Session"}
                  </Button>
                </div>

                {error && (
                  <p className="text-sm text-red-400 mt-3">{error}</p>
                )}

                <p className="text-xs text-muted-foreground mt-4">
                  100% free &middot; No commitment &middot; Takes 2 minutes
                </p>
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
                      We present a tailored plan with clear timelines and
                      pricing.
                    </li>
                  </ol>
                </div>

                {/* Trust signals near form */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Your data is encrypted and secure
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    No spam, ever. We respect your inbox.
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
