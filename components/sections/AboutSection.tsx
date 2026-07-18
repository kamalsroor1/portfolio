"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

export const AboutSection = () => {
  const personalDetails = [
    { label: "Name", value: "Kamal Salah Sroor" },
    { label: "Nationality", value: "Egyptian" },
    { label: "Email", value: "kamal.sroor.dev@gmail.com" },
    { label: "Experience", value: "6+ Years" },
    { label: "Freelance", value: "Available" },
    { label: "Language", value: "Arabic / English" },
  ];

  return (
    <section id="about" className="py-24 px-6 border-b border-border-subtle bg-bg-deep/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          marker="About"
          title="About Me"
          description="A senior-level software engineer driven by clean code, robust software architectures, and automated operational pipelines."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal details & Intro */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4 text-text-secondary text-sm md:text-base leading-relaxed"
            >
              <h3 className="text-xl font-display font-semibold text-text-primary uppercase tracking-wide">
                Professional Bio
              </h3>
              <p>
                Results-driven Senior Full-Stack & Backend Engineer with over 6 years of professional experience designing, building, and maintaining robust enterprise web applications and scalable SaaS architectures.
              </p>
              <p>
                Recognized for strong system architectural ownership, technical SEO literacy, and efficient deployment using Docker environments. Experienced in managing dynamic DB migrations and configuring microservices with high uptime.
              </p>
            </motion.div>

            {/* Parameter Table from ref.webp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card hoverable={false} className="border-border-subtle/50 p-0 overflow-hidden">
                <table className="w-full text-left border-collapse text-sm">
                  <tbody>
                    {personalDetails.map((detail, index) => (
                      <tr
                        key={detail.label}
                        className={index !== personalDetails.length - 1 ? "border-b border-border-subtle/50" : ""}
                      >
                        <td className="px-6 py-4 font-mono text-xs text-text-secondary w-1/3 bg-white/[0.01]">
                          {detail.label}
                        </td>
                        <td className="px-6 py-4 font-sans font-semibold text-text-primary">
                          {detail.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </motion.div>
          </div>

          {/* Right Column: Categorized Skills from ref.webp */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className="h-full flex flex-col gap-4">
                  <h4 className="font-mono text-xs font-bold text-accent-glow uppercase tracking-wider border-b border-border-subtle/50 pb-2">
                    // {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant={skill.featured ? "primary" : "secondary"}
                        className={skill.featured ? "text-glow-violet font-semibold" : ""}
                      >
                        {skill.name}
                      </Badge>
                    ))}
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
