"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects, Project } from "@/data/projects";

const categories: { label: string; value: 'all' | Project['category'] }[] = [
  { label: "All Work", value: "all" },
  { label: "SaaS Platforms", value: "saas" },
  { label: "Backend Systems", value: "backend" },
  { label: "Full-Stack Dev", value: "fullstack" },
];

const testimonials = [
  {
    quote: "Kamal delivered exceptional architecting on our multi-tenant SaaS. His database optimization cut down load times by 3x. Highly professional engineering ownership.",
    author: "FinTech Client, Upwork",
    meta: "SaaS Multi-Tenant Architecture"
  },
  {
    quote: "Outstanding database migration. Migrated over 2TB of high-traffic production PostgreSQL database with zero disruption. An absolute database expert.",
    author: "Travware Engineering Lead",
    meta: "PostgreSQL Migration & Optimization"
  }
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | Project['category']>("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 border-b border-border-subtle bg-bg-deep/30 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          marker="Projects (Showcase)"
          title="Case Studies"
          description="User-centered Development Approach Enhances Productivity and Drives Revenue Growth."
        />

        {/* Filter categories */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full flex flex-col justify-between border-border-subtle/50 relative overflow-hidden group">
                  <div className="flex flex-col gap-4">
                    {/* Project Header Info */}
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

                    {/* Title */}
                    <h3 className="text-xl font-bold font-display uppercase tracking-wide text-text-primary group-hover:text-accent-glow transition-colors">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Stack Badges & View Case Study */}
                  <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-border-subtle/50">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-1.5 py-0">
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 4 && (
                        <Badge variant="outline" className="px-1.5 py-0">
                          +{project.stack.length - 4} more
                        </Badge>
                      )}
                    </div>
                    
                    <Link href={`/projects/${project.slug}`} className="w-full">
                      <Button variant="glass" size="sm" className="w-full text-xs">
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Testimonials & Certificates Showcase from ref.webp */}
        <div className="border-t border-border-subtle/50 pt-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-text-secondary tracking-wider block">
              .../Testimonials & Recognitions ...
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={test.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="h-full flex flex-col justify-between border-border-subtle/30 bg-white/[0.01]">
                  <p className="font-sans italic text-sm text-text-secondary leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                  <div>
                    <h5 className="font-display font-semibold uppercase tracking-wider text-text-primary text-sm">
                      {test.author}
                    </h5>
                    <span className="font-mono text-xxs text-accent-glow uppercase">
                      {test.meta}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
