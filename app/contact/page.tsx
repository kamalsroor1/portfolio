import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";


export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-32 pb-12 grid-bg-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-glow transition-colors font-mono">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
export const dynamic = "force-static";
