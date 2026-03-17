"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Show me a sample pipeline analysis",
  "How is this different from a dashboard?",
  "What does a daily briefing look like?",
  "What integrations do you support?",
];

export default function VCROChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm the Virtual CRO AI — a live demo of the revenue intelligence system DTS builds for businesses like yours. Ask me anything: pipeline analysis, marketing attribution, cash flow forecasting, or just say \"show me a demo\" to see what I can do.",
    },
  ]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Listen for external "open chat" events (e.g. from hero button)
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-vcro-chat", handler);
    return () => window.removeEventListener("open-vcro-chat", handler);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || streaming) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);

    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages([...newMessages, assistantMessage]);

    try {
      const res = await fetch("/api/vcro-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") break;
              try {
                const parsed = JSON.parse(data);
                accumulated += parsed.text;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: "assistant",
                    content: accumulated,
                  };
                  return updated;
                });
              } catch {
                // skip malformed chunks
              }
            }
          }
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again or reach out to joshua@digitaltechnologysolutions.co to schedule a live demo.",
        };
        return updated;
      });
    }

    setStreaming(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating chat button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1.5 cursor-pointer group"
            aria-label="Open Virtual CRO chat"
          >
            <span className="relative w-14 h-12 bg-emerald-600 group-hover:bg-emerald-500 flex items-center justify-center transition-all duration-300 shadow-[0_0_24px_rgba(16,185,129,0.35)] group-hover:shadow-[0_0_36px_rgba(16,185,129,0.5)] rounded-2xl rounded-bl-sm">
              <span className="absolute inset-0 rounded-2xl rounded-bl-sm bg-emerald-400/20 animate-ping" />
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="relative z-10"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400 group-hover:text-emerald-300 transition-colors">
              Chat Now
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] rounded-2xl bg-card border border-border shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-emerald-600/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="text-emerald-400"
                  >
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Virtual CRO
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Demo
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-border flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-emerald-600 text-white rounded-br-md"
                        : "bg-surface border border-border text-muted rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                    {streaming && i === messages.length - 1 && msg.role === "assistant" && (
                      <span className="inline-block w-1.5 h-4 bg-emerald-400/60 ml-0.5 animate-pulse" />
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions (only show before first user message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="text-[11px] px-3 py-1.5 rounded-full border border-border text-muted hover:border-emerald-500/40 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-border shrink-0"
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the Virtual CRO..."
                  disabled={streaming}
                  className="flex-1 bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-emerald-500/40 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || streaming}
                  className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed shrink-0"
                  aria-label="Send message"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
