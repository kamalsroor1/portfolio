"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setLogs([]);

    try {
      setLogs((prev) => [...prev, "> Connecting to SMTP relay: smtp.gmail.com:587..."]);
      await sleep(400);
      setLogs((prev) => [...prev, "> Secured TLS v1.3 handshake established [OK]"]);
      await sleep(400);
      setLogs((prev) => [...prev, `> Authenticating user: ${formData.email} [OK]`]);
      await sleep(400);
      setLogs((prev) => [...prev, "> Parsing payload: serializing subject & body [OK]"]);
      await sleep(450);
      setLogs((prev) => [...prev, "> Dispatching message... 250 Accepted (Queued) [OK]"]);
      await sleep(300);
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage("SMTP connection timeout. Please check your network.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-bg-deep/50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          marker="Contact us"
          title="Get In Touch"
          description="Have an enterprise system migration, SaaS design question, or a project in mind? Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Text & Prompt */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-semibold uppercase tracking-wide text-text-primary leading-tight"
            >
              I am eager to connect with you and hear your thoughts.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-text-secondary text-sm md:text-base leading-relaxed"
            >
              I welcome you to connect for potential engagements, architectural consulting, full-stack collaborations, or just a friendly developer chat. Fill out the form or write to me directly at my email.
            </motion.p>
          </div>

          {/* Right: Contact Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card hoverable={false} className="border-border-subtle/50">
                {status === "loading" || status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Mini Terminal */}
                    <div className="bg-black/60 border border-border-subtle/80 rounded-md p-4 min-h-[170px] font-mono text-[10px] md:text-xs flex flex-col gap-2 text-text-secondary shadow-inner shadow-black/80">
                      <div className="flex items-center gap-1.5 border-b border-border-subtle/30 pb-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-red-500/85" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/85" />
                        <span className="w-2 h-2 rounded-full bg-green-500/85" />
                        <span className="text-[9px] font-semibold ml-2 tracking-widest text-text-secondary/40">SMTP_CLIENT</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {logs.map((log, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={idx === logs.length - 1 && status === "loading" ? "text-accent-cyan text-glow-cyan" : ""}
                          >
                            {log}
                          </motion.div>
                        ))}
                        {status === "loading" && (
                          <div className="flex items-center gap-1">
                            <span>&gt;</span>
                            <span className="inline-block w-1.5 h-3.5 bg-accent-cyan animate-pulse" />
                          </div>
                        )}
                      </div>
                    </div>

                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-4 flex flex-col items-center gap-4"
                      >
                        <CheckCircle2 size={40} className="text-accent-cyan text-glow-cyan animate-bounce" />
                        <h4 className="text-lg font-bold font-display uppercase tracking-wider text-text-primary">
                          Message Dispatched Successfully!
                        </h4>
                        <p className="text-text-secondary text-sm max-w-sm">
                          Thank you for getting in touch. I will read your message and reply to your email as soon as possible.
                        </p>
                        <Button variant="glass" size="sm" onClick={() => setStatus("idle")} className="mt-2">
                          Send another message
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Error display */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded text-xs flex items-center gap-2"
                      >
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-mono text-xxs text-text-secondary uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className="w-full bg-white/[0.02] border border-border-subtle/80 hover:border-white/10 focus:border-accent focus:outline-none rounded px-4 py-2.5 text-sm text-text-primary transition-colors"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-mono text-xxs text-text-secondary uppercase">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. john@example.com"
                          className="w-full bg-white/[0.02] border border-border-subtle/80 hover:border-white/10 focus:border-accent focus:outline-none rounded px-4 py-2.5 text-sm text-text-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="font-mono text-xxs text-text-secondary uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        className="w-full bg-white/[0.02] border border-border-subtle/80 hover:border-white/10 focus:border-accent focus:outline-none rounded px-4 py-2.5 text-sm text-text-primary transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-mono text-xxs text-text-secondary uppercase">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Write your message details here..."
                        className="w-full bg-white/[0.02] border border-border-subtle/80 hover:border-white/10 focus:border-accent focus:outline-none rounded px-4 py-2.5 text-sm text-text-primary transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="mt-2 flex justify-end">
                      <Button
                        type="submit"
                        variant="primary"
                        isLoading={false}
                        className="flex items-center gap-2"
                      >
                        <Send size={14} />
                        <span>Send Message</span>
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
