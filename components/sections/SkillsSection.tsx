"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface Job {
  period: string;
  company: string;
  role: string;
  description: string;
  stack: string[];
}

const workExperience: Job[] = [
  {
    period: "June 2026 – Present",
    company: "SDC App (Remote)",
    role: "Senior Backend Developer",
    description: "Driving backend architecture and continuous integration strategies for scalable multi-tenant applications. Spearheading core API development, performance scaling, and modern microservices integration using Python (FastAPI) and Node.js.",
    stack: ["FastAPI", "Python", "Node.js", "Multi-tenancy", "CI/CD", "Docker"]
  },
  {
    period: "Present",
    company: "Freelance (Upwork)",
    role: "Senior Full-Stack / Backend Engineer",
    description: "Providing architectural consulting and hands-on implementation for high-value enterprise SaaS and AI-driven platforms. Specialized in legacy codebase maintenance, technical SEO infrastructure optimization for high-traffic programmatic sites (12k+ pages), and secure deployment environments.",
    stack: ["FastAPI", "Laravel", "PostgreSQL", "SEO Infrastructure", "Cloudflare Workers", "Docker"]
  },
  {
    period: "May 2024 – June 2026",
    company: "Travware (Cairo, Egypt)",
    role: "Backend Software Engineer",
    description: "Architected and engineered high-performance APIs and centralized multi-tenant database designs utilizing Laravel and MySQL. Handled complex data migration workflows, routine framework updates, and dependency maintenance for high-uptime production systems.",
    stack: ["Laravel", "PHP", "MySQL", "Database Migration", "API Design", "Redis"]
  },
  {
    period: "Jan 2020 – Apr 2024",
    company: "Ibtikarat LLC / Freelance Contracts",
    role: "Full-Stack Developer",
    description: "Developed custom business management software, scheduling automations, and custom dashboards using Laravel, Livewire, and Vue.js. Optimized database queries, reducing heavy page load times significantly through caching layers and strategic data indexing. Integrated complex financial and operational pipelines.",
    stack: ["Laravel", "Livewire", "Vue.js", "Alpine.js", "Redis Caching", "API Integrations"]
  }
];

const journeyMilestones = [
  {
    year: "2026",
    title: "FastAPI & AI Specialist",
    description: "Deepened expertise in high-performance Python (FastAPI) backends, LangChain, and AI Agent orchestration systems."
  },
  {
    year: "2024",
    title: "Database Architect & Senior Developer",
    description: "Managed complex multi-tenant database migrations (2TB+ PostgreSQL/MySQL) and zero-downtime cutovers."
  },
  {
    year: "2020",
    title: "Enterprise Laravel Implementer",
    description: "Engineered full-stack business tools with Laravel, Vue.js, and Redis integrations for logistics and finance operations."
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 border-b border-border-subtle relative bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          marker="Work - Experience"
          title="Work & Journey"
          description="Detailed timeline of my professional career, enterprise positions, and core developmental milestones."
        />

        {/* Experience List (Table-like in ref.webp) */}
        <div className="flex flex-col gap-6 mb-20">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-border-subtle/50">
                {/* Date range */}
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs text-accent-glow font-bold block mb-1">
                    {job.period}
                  </span>
                  <span className="font-display text-text-secondary text-sm font-semibold uppercase block">
                    {job.company}
                  </span>
                </div>

                {/* Role & Description */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-text-primary">
                    {job.role}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
                  {job.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Journey Markers Section from ref.webp */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="font-mono text-xs text-text-secondary tracking-wider block">
              .../Career Journey ...
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
              >
                <Card className="h-full flex flex-col gap-4 border-border-subtle/50 relative overflow-hidden group">
                  {/* Subtle glowing card background */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/2 rounded-full blur-2xl group-hover:bg-accent/5 transition-all duration-300" />
                  
                  <div className="font-mono text-3xl font-bold text-glow-violet text-accent">
                    {milestone.year}
                  </div>
                  <h4 className="font-display font-bold uppercase tracking-wide text-text-primary text-md">
                    {milestone.title}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {milestone.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
