"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "@/components/ui/Loader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" onComplete={handleLoadingComplete} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <main className="min-h-screen bg-bg">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

