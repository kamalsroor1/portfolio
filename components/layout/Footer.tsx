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
            ••• Let's build something remarkable •••
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
              <a
                href="https://wa.me/201012316954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md glass-panel flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300"
                title="Chat on WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.824-6.86C16.69 2.19 14.254 1.187 11.66 1.187 6.223 1.187 1.8 5.558 1.797 10.92c-.001 1.638.455 3.242 1.32 4.673l-.99 3.612 3.93-.999zM17.07 14.73c-.273-.137-1.62-.8-1.87-.892-.252-.093-.437-.138-.62.138-.182.274-.707.892-.867 1.077-.16.183-.32.206-.593.069-.272-.138-1.15-.424-2.19-1.354-.809-.722-1.354-1.616-1.513-1.89-.16-.273-.016-.421.12-.558.123-.122.273-.32.41-.48.136-.16.182-.273.272-.455.09-.183.046-.343-.023-.48-.068-.138-.62-1.496-.85-2.043-.223-.538-.49-.464-.67-.464-.176 0-.377-.009-.578-.009s-.527.076-.803.376c-.276.3-.1.152-1.15 1.153-.276.3-.59.74-.79 1.12-.2.378-.024.71.113.935.138.225.263.398.414.56l5.72 5.093s.32.206.59.07c.27-.138 1.62-.8 1.87-.89z"/>
                </svg>
              </a>
              <a
                href="mailto:kamal.s.sroor@gmail.com"
                className="w-10 h-10 rounded-md glass-panel flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300"
                title="Send Email"
              >
                <Mail size={18} />
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
