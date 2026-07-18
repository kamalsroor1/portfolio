import React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-deep border-t border-border-subtle pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Big Thank You Header from ref.webp */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-text-secondary tracking-widest block mb-4">
            .../Thank you ...
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-widest text-text-primary">
            ••• Thank you for watching •••
          </h2>
          <span className="font-mono text-xs text-accent-glow tracking-widest block mt-4">
            Senior Backend Engineer & Software Architect — Kamal Salah Sroor
          </span>
        </div>

        {/* Info Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-border-subtle/50 pb-12 mb-8 text-center md:text-left">
          {/* Contact Details */}
          <div>
            <h4 className="font-display font-semibold uppercase text-text-primary mb-4 tracking-wider">
              Contact us
            </h4>
            <div className="flex flex-col gap-3 items-center md:items-start text-sm text-text-secondary">
              <a href="mailto:kamal.s.sroor@gmail.com" className="flex items-center gap-2 hover:text-accent-glow transition-colors">
                <Mail size={16} />
                <span>kamal.s.sroor@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-display font-semibold uppercase text-text-primary mb-4 tracking-wider">
              Quick Links
            </h4>
            <div className="flex gap-6 text-sm text-text-secondary">
              <Link href="/#home" className="hover:text-accent-glow transition-colors">Home</Link>
              <Link href="/#about" className="hover:text-accent-glow transition-colors">About</Link>
              <Link href="/#projects" className="hover:text-accent-glow transition-colors">Projects</Link>
              <Link href="/blog" className="hover:text-accent-glow transition-colors">Blog</Link>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-display font-semibold uppercase text-text-primary mb-4 tracking-wider">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/kamalsroor1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md glass-panel flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kamal-sroor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md glass-panel flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copywrite */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-xs text-text-secondary font-mono gap-4">
          <span>&copy; {currentYear} Kamal Salah Sroor. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
