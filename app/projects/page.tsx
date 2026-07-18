"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects, Project } from "@/data/projects";

const categories: { label: string; value: 'all' | Project['category'] }[] = [
  { label: "All Projects", value: "all" },
  { label: "SaaS Platforms", value: "saas" },
  { label: "Backend Systems", value: "backend" },
  { label: "Full-Stack Dev", value: "fullstack" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | Project['category']>("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-32 pb-24 px-6 grid-bg-pattern">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-glow transition-colors font-mono">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>

          <SectionHeader
            marker="Projects"
            title="Complete Case Studies"
            description="Deep dive into architectural blueprints, database performance audits, and full-stack solutions built for scale."
          />

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={activeCategory === cat.value ? "primary" : "glass"}
                size="sm"
                onClick={() => setActiveCategory(cat.value)}
                className="rounded-full"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="h-full flex flex-col justify-between border-border-subtle/50 relative overflow-hidden group">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xxs text-accent-glow font-bold uppercase tracking-wider">
                      {project.year} // {project.category}
                    </span>
                    <Link href={`/projects/${project.slug}`}>
                      <span className="text-text-secondary hover:text-accent-cyan transition-colors">
                        <ArrowUpRight size={18} />
                      </span>
                    </Link>
                  </div>

                  <h3 className="text-xl font-bold font-display uppercase tracking-wide text-text-primary group-hover:text-accent-glow transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-xs leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-border-subtle/50">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-1.5 py-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link href={`/projects/${project.slug}`} className="w-full">
                    <Button variant="glass" size="sm" className="w-full text-xs">
                      Read Full Case Study
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
