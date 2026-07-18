import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Required for Next.js Static Export
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-32 pb-24 px-6 grid-bg-pattern">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-glow transition-colors font-mono"
            >
              <ArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>
            
            <span className="font-mono text-xs text-text-secondary">
              Published in {project.year}
            </span>
          </div>

          {/* Title Header */}
          <SectionHeader
            marker={`Project / ${project.category}`}
            title={project.title}
          />

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="primary" className="text-glow-violet">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Layout Content */}
          <div className="flex flex-col gap-10">
            {/* Summary Panel */}
            <Card hoverable={false} className="border-border-subtle/50 bg-white/[0.01]">
              <h3 className="font-display font-semibold uppercase text-text-primary text-md mb-2">
                Executive Summary
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </Card>

            {/* Problem & Solution columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card hoverable={false} className="border-border-subtle/50 h-full">
                <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider mb-4">
                  // The Challenge / Problem
                </h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {project.problem}
                </p>
              </Card>

              <Card hoverable={false} className="border-border-subtle/50 h-full">
                <h4 className="font-mono text-xs font-bold text-accent-cyan uppercase tracking-wider mb-4">
                  // Engineering Solution
                </h4>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {project.solution}
                </p>
              </Card>
            </div>

            {/* Measurable Results */}
            <Card hoverable={false} className="border-border-subtle/50">
              <h3 className="font-display font-semibold uppercase text-text-primary text-md mb-6 tracking-wide">
                Key Deliverables & Results
              </h3>
              <ul className="flex flex-col gap-4">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="font-mono text-accent-cyan select-none">[{idx + 1}]</span>
                    <span className="leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Action buttons (Demo/Code) */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    <span>Live Demonstration</span>
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="flex items-center gap-2">
                    <Code size={16} />
                    <span>View Repository</span>
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
