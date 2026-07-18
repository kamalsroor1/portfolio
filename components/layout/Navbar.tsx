"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-bg-deep/80 backdrop-blur-md border-b border-border-subtle py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Custom KS Hexagonal Tech Logo */}
          <div className="w-10 h-10 rounded-xl border border-accent/20 bg-accent/5 flex items-center justify-center text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
            <svg
              viewBox="0 0 32 32"
              className="w-5 h-5 text-accent-glow"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="16 3 29 10 29 22 16 29 3 22 3 10" strokeWidth="1.5" className="opacity-45" />
              <path d="M11 9v14" strokeWidth="2.2" />
              <path d="M18 9l-7 7 7 7" strokeWidth="2.2" />
              <path d="M12 16h5c2 0 3 0.8 3 2.5s-1 2.5-3 2.5h-5" strokeWidth="2.2" />
            </svg>
          </div>
          <div className="flex flex-col text-[10px] leading-[1.1] font-display font-bold uppercase tracking-[2px] text-text-primary">
            <span>Kamal</span>
            <span className="text-text-secondary">Sroor</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/" && typeof window !== "undefined" && window.location.hash === link.href.replace("/", ""));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "text-xs font-medium uppercase tracking-[2px] font-display transition-colors duration-300 hover:text-accent-glow",
                  isActive ? "text-accent-glow font-semibold text-glow-violet" : "text-text-secondary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/201012316954"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300 bg-white/[0.01]"
            title="Chat on WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.824-6.86C16.69 2.19 14.254 1.187 11.66 1.187 6.223 1.187 1.8 5.558 1.797 10.92c-.001 1.638.455 3.242 1.32 4.673l-.99 3.612 3.93-.999zM17.07 14.73c-.273-.137-1.62-.8-1.87-.892-.252-.093-.437-.138-.62.138-.182.274-.707.892-.867 1.077-.16.183-.32.206-.593.069-.272-.138-1.15-.424-2.19-1.354-.809-.722-1.354-1.616-1.513-1.89-.16-.273-.016-.421.12-.558.123-.122.273-.32.41-.48.136-.16.182-.273.272-.455.09-.183.046-.343-.023-.48-.068-.138-.62-1.496-.85-2.043-.223-.538-.49-.464-.67-.464-.176 0-.377-.009-.578-.009s-.527.076-.803.376c-.276.3-.1.152-1.15 1.153-.276.3-.59.74-.79 1.12-.2.378-.024.71.113.935.138.225.263.398.414.56l5.72 5.093s.32.206.59.07c.27-.138 1.62-.8 1.87-.89z"/>
            </svg>
          </a>
          <a
            href="mailto:kamal.s.sroor@gmail.com"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300 bg-white/[0.01] mr-1"
            title="Send Email"
          >
            <Mail size={16} />
          </a>
          <Link href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>
            <Button
              variant="glass"
              size="sm"
              className="rounded-full px-6 py-2 border-white/20 hover:border-accent hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300 font-display uppercase tracking-widest text-xs"
            >
              Light Up the Talk
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary p-1 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 w-full bg-bg/95 backdrop-blur-lg border-t border-border-subtle transition-transform duration-300 md:hidden flex flex-col p-6 gap-6",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-lg font-medium text-text-secondary hover:text-text-primary py-2 border-b border-border-subtle/50"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <a href="/resume.pdf" download="Kamal_Sroor_CV.pdf" className="w-full">
            <Button variant="glass" className="w-full flex items-center justify-center gap-2">
              <Download size={16} />
              <span>Download Resume</span>
            </Button>
          </a>
          <Link href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")} className="w-full">
            <Button variant="primary" className="w-full">
              Light Up the Talk
            </Button>
          </Link>
          <div className="flex justify-center gap-4 mt-3 pt-4 border-t border-border-subtle/50">
            <a
              href="https://wa.me/201012316954"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300"
              title="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.824-6.86C16.69 2.19 14.254 1.187 11.66 1.187 6.223 1.187 1.8 5.558 1.797 10.92c-.001 1.638.455 3.242 1.32 4.673l-.99 3.612 3.93-.999zM17.07 14.73c-.273-.137-1.62-.8-1.87-.892-.252-.093-.437-.138-.62.138-.182.274-.707.892-.867 1.077-.16.183-.32.206-.593.069-.272-.138-1.15-.424-2.19-1.354-.809-.722-1.354-1.616-1.513-1.89-.16-.273-.016-.421.12-.558.123-.122.273-.32.41-.48.136-.16.182-.273.272-.455.09-.183.046-.343-.023-.48-.068-.138-.62-1.496-.85-2.043-.223-.538-.49-.464-.67-.464-.176 0-.377-.009-.578-.009s-.527.076-.803.376c-.276.3-.1.152-1.15 1.153-.276.3-.59.74-.79 1.12-.2.378-.024.71.113.935.138.225.263.398.414.56l5.72 5.093s.32.206.59.07c.27-.138 1.62-.8 1.87-.89z"/>
              </svg>
            </a>
            <a
              href="mailto:kamal.s.sroor@gmail.com"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-glow hover:border-accent/40 transition-all duration-300"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
