"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
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
        <div className="hidden md:flex items-center gap-4">
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
        </div>
      </div>
    </nav>
  );
};
