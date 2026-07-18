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
    period: "Jun 2025 – Jun 2026",
    company: "E2E County",
    role: "Senior Backend Engineer",
    description: "Architected migration of a legacy Zend Framework 1 monolith to Laravel (30+ modules, 650+ tables). Designed an AI-assisted test automation pipeline using Postman for 1,600+ API endpoints, cutting test-authoring time by 90% and reducing regression cycles by 40%.",
    stack: ["Laravel", "PHP", "Zend Framework", "PostgreSQL", "AI Prompting", "Postman"]
  },
  {
    period: "Aug 2023 – Jun 2025",
    company: "Ibtikarat (ابتكارات)",
    role: "Senior Backend Engineer",
    description: "Spearheaded backend architecture for Saudi government digital transformation projects, scaling to 10k+ daily active users at 99.99% uptime. Developed a Multi-tenant SaaS core with Laravel and Livewire, integrating 5+ government APIs.",
    stack: ["Laravel", "Livewire", "PHP", "MySQL", "Redis", "Multi-tenancy", "Security"]
  },
  {
    period: "Jan 2023 – Aug 2023",
    company: "Developer Network",
    role: "Backend Team Lead",
    description: "Led development of Jarvis, a unified communication platform integrating Meta APIs (Facebook/WhatsApp) for enterprise support. Implemented Redis caching, reducing response times by 20%, and mentored 3 engineers on SOLID and clean code.",
    stack: ["Meta APIs", "WebSockets", "PHP", "Laravel", "Redis", "SOLID", "TDD"]
  },
  {
    period: "Oct 2021 – Dec 2022",
    company: "Pyramids Freight",
    role: "Backend Engineer",
    description: "Engineered logistics calculation logic and real-time container tracking. Integrated Stripe Payment Gateway with 3D Secure, reducing payment failures by 15%, and optimized database query indexing.",
    stack: ["PHP", "Laravel", "MySQL", "Stripe API", "SQL Optimization", "Database Indexing"]
  },
  {
    period: "2019 – 2021",
    company: "Freelance & Early Career",
    role: "Mid-Level Backend Engineer",
    description: "Developed rental car booking engines with dynamic pricing matrices, integrating Riyad Bank and Mastercard payment APIs. Scaled Laravel systems for 30% user growth and automated CI/CD deployment pipelines.",
    stack: ["PHP", "Laravel", "MySQL", "Redis Caching", "CI/CD", "OpenAPI/Swagger"]
  }
];

const journeyMilestones = [
  {
    year: "2026",
    title: "Python, FastAPI & AI Systems",
    description: "Shifting primary focus to high-performance Python (FastAPI, Django), AI Agent orchestration, and LangChain."
  },
  {
    year: "2023",
    title: "Senior Backend Engineer & Team Lead",
    description: "Led development of enterprise real-time chat engines (Jarvis Meta APIs) and high-concurrency government platforms."
  },
  {
    year: "2019",
    title: "Freelance Full-Stack Developer",
    description: "Began professional development journey, building custom PHP Laravel booking engines, SaaS solutions, and E-commerce platforms."
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
