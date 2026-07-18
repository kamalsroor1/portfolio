"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export const ContactSection = () => {
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
              Let's build something remarkable together.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-text-secondary text-sm md:text-base leading-relaxed"
            >
              I welcome you to connect for potential engagements, architectural consulting, backend optimizations, full-stack projects, or custom AI solutions. Reach out directly via WhatsApp or Email for a prompt response.
            </motion.p>
          </div>

          {/* Right: Contact Buttons Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card hoverable={false} className="border-border-subtle/50 p-8 flex flex-col gap-8 bg-black/10">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xxs text-accent-glow font-bold uppercase tracking-wider">
                    // Direct Communication
                  </span>
                  <h4 className="text-xl font-bold font-display uppercase tracking-wide text-text-primary">
                    Start a Conversation
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Choose your preferred channel below. I typically respond to WhatsApp messages within a few hours and emails within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* WhatsApp button card */}
                  <a
                    href="https://wa.me/201012316954"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between p-6 rounded-xl border border-border-subtle/50 bg-white/[0.01] hover:bg-white/[0.03] hover:border-accent/40 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform duration-300">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.824-6.86C16.69 2.19 14.254 1.187 11.66 1.187 6.223 1.187 1.8 5.558 1.797 10.92c-.001 1.638.455 3.242 1.32 4.673l-.99 3.612 3.93-.999zM17.07 14.73c-.273-.137-1.62-.8-1.87-.892-.252-.093-.437-.138-.62.138-.182.274-.707.892-.867 1.077-.16.183-.32.206-.593.069-.272-.138-1.15-.424-2.19-1.354-.809-.722-1.354-1.616-1.513-1.89-.16-.273-.016-.421.12-.558.123-.122.273-.32.41-.48.136-.16.182-.273.272-.455.09-.183.046-.343-.023-.48-.068-.138-.62-1.496-.85-2.043-.223-.538-.49-.464-.67-.464-.176 0-.377-.009-.578-.009s-.527.076-.803.376c-.276.3-.1.152-1.15 1.153-.276.3-.59.74-.79 1.12-.2.378-.024.71.113.935.138.225.263.398.414.56l5.72 5.093s.32.206.59.07c.27-.138 1.62-.8 1.87-.89z"/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-sans font-bold text-base text-text-primary group-hover:text-accent-glow transition-colors">
                          WhatsApp Chat
                        </span>
                        <span className="text-text-secondary text-xxs font-mono">
                          +20 101 231 6954
                        </span>
                      </div>
                    </div>
                    <span className="text-accent text-xxs font-mono mt-6 flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                      Chat Now &rarr;
                    </span>
                  </a>

                  {/* Email button card */}
                  <a
                    href="mailto:kamal.s.sroor@gmail.com"
                    className="flex flex-col justify-between p-6 rounded-xl border border-border-subtle/50 bg-white/[0.01] hover:bg-white/[0.03] hover:border-accent/40 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                          <rect width="20" height="16" x="2" y="4" rx="2"/>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-sans font-bold text-base text-text-primary group-hover:text-accent-glow transition-colors">
                          Direct Email
                        </span>
                        <span className="text-text-secondary text-xxs font-mono">
                          kamal.s.sroor@gmail.com
                        </span>
                      </div>
                    </div>
                    <span className="text-accent text-xxs font-mono mt-6 flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                      Send Email &rarr;
                    </span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
