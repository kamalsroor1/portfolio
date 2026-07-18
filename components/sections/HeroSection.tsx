"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const roles = [
  "Python & AI Developer",
  "AI Agent Specialist",
  "Backend & API Architect",
  "FastAPI & Python Engineer"
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollToAbout = () => {
    const aboutElem = document.getElementById("about");
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg-pattern">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Vertical text "Python & AI DEVELOPER" */}
        <div className="hidden md:flex md:col-span-1 flex-col items-center justify-center gap-6 h-full select-none md:order-1">
          <div className="w-[1px] h-16 bg-border-subtle/40" />
          <span className="font-display text-text-secondary/20 text-2xl font-bold uppercase tracking-[15px] rotate-270 origin-center whitespace-nowrap">
            Python & AI DEVELOPER
          </span>
          <div className="w-[1px] h-16 bg-border-subtle/40" />
        </div>

        {/* Center Left Content: Photo Container with Floating Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="col-span-12 md:col-span-5 relative flex items-center justify-center select-none order-1 md:order-2"
        >
          <div className="relative w-full h-[380px] md:h-[500px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Gradients to fade photo edges into the background color (#121212) */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-transparent z-10 hidden md:block" />
            
            <img
              src="/images/myimage.png"
              alt="Kamal Salah Sroor"
              className="w-full h-full object-cover object-top filter grayscale opacity-60 hover:opacity-85 hover:grayscale-0 transition-all duration-700 ease-in-out"
            />

            {/* Floating Pill Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] glass-panel rounded-xl p-3 flex items-center justify-between gap-3 z-20 shadow-xl border border-white/5">
              <p className="text-[10px] md:text-xxs text-text-secondary font-medium tracking-wide leading-tight">
                "Orchestrated scalable backends and API architecture for 25+ enterprise platforms."
              </p>
              <div className="flex -space-x-2 overflow-hidden flex-shrink-0">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80",
                ].map((url, i) => (
                  <img
                    key={i}
                    className="inline-block h-5 w-5 rounded-full ring-1 ring-[#0A0A0F] object-cover"
                    src={url}
                    alt="Client Avatar"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Right Content: Main Headline & Intro */}
        <div className="col-span-12 md:col-span-5 relative z-20 flex flex-col justify-center items-start gap-5 order-2 md:order-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-1 w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent-glow font-mono text-[9px] md:text-[10px] uppercase tracking-wider mb-3 w-fit select-none animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
              <span>Current Focus: Python, FastAPI & AI Agents</span>
            </div>
            <span className="font-mono text-xs text-text-secondary/60 tracking-widest block uppercase">
              .../Welcome to my portal ...
            </span>
            
            {/* Overlapping Typography Name Style */}
            <div className="relative w-full select-none mt-2">
              {/* KAMAL - Bold high-visibility gray overlapping */}
              <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-wider text-text-secondary md:-ml-28 uppercase leading-none">
                Kamal
              </h2>
              {/* SROOR - Huge white overlapping */}
              <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white md:-ml-12 uppercase leading-none mt-1 text-glow-violet">
                Sroor
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-8 font-mono text-sm md:text-base text-accent-cyan font-bold tracking-wider"
          >
            &gt; {currentText}
            <span className="animate-ping">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-xl text-text-secondary text-sm md:text-base leading-relaxed"
          >
            My goal is to write clean, maintainable code that enhances the development process and makes coding enjoyable through structured and thoughtful practices. Specializing in high-performance databases, multi-tenant SaaS environments, and modern AI Agent integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-2"
          >
            <Button
              variant="glass"
              className="rounded-full px-8 py-3 border-white/20 hover:border-accent hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 font-display uppercase tracking-widest text-xs"
              onClick={scrollToAbout}
            >
              Portfolio
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Social Media Icons (Capsule vertical layout) */}
        <div className="col-span-12 md:col-span-1 flex md:flex-col items-center justify-center gap-6 h-full md:border-l border-border-subtle/50 md:pl-6 py-6 z-10 order-3 md:order-4">
          <span className="hidden md:block font-mono text-xxs text-text-secondary rotate-90 whitespace-nowrap mb-6 tracking-widest">
            CONNECT
          </span>
          <div className="flex md:flex-col items-center gap-3 bg-black/40 border border-border-subtle/20 rounded-full md:rounded-2xl p-2 md:py-4 md:px-2 shadow-lg shadow-black/60">
            <a
              href="https://github.com/kamalsroor1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-black/60 border border-border-subtle/10 flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300 hover:scale-105"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kamal-sroor/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-black/60 border border-border-subtle/10 flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:kamal.s.sroor@gmail.com"
              className="w-10 h-10 rounded-xl bg-black/60 border border-border-subtle/10 flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Arrow Down at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer" onClick={scrollToAbout}>
        <span className="font-mono text-xxs text-text-secondary tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-accent"
        >
          <ArrowDown size={18} />
        </motion.div>
      </div>
    </section>
  );
};
