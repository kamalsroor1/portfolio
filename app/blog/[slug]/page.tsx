import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Required for Next.js Static Export
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Simple client-side helper to render basic markdown structures
const renderContent = (markdownText: string) => {
  const blocks = markdownText.split("\n\n");
  
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    
    // Headers
    if (trimmed.startsWith("## ")) {
      return (
        <h3 key={idx} className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide text-text-primary mt-8 mb-4">
          {trimmed.replace("## ", "")}
        </h3>
      );
    }
    
    if (trimmed.startsWith("### ")) {
      return (
        <h4 key={idx} className="text-lg font-bold font-display uppercase tracking-wide text-text-primary mt-6 mb-3">
          {trimmed.replace("### ", "")}
        </h4>
      );
    }

    // Code Blocks
    if (trimmed.startsWith("```")) {
      const lines = trimmed.split("\n");
      const language = lines[0].replace("```", "") || "code";
      const code = lines.slice(1, lines.length - 1).join("\n");
      
      return (
        <div key={idx} className="my-6 rounded-md overflow-hidden border border-border-subtle bg-bg-deep/80 font-mono text-xs">
          <div className="bg-white/[0.02] px-4 py-1.5 border-b border-border-subtle flex justify-between items-center text-text-secondary select-none">
            <span>{language}</span>
          </div>
          <pre className="p-4 overflow-x-auto text-glow-cyan text-accent-cyan">
            <code>{code}</code>
          </pre>
        </div>
      );
    }

    // Unordered lists
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      const items = trimmed.split("\n");
      return (
        <ul key={idx} className="list-disc pl-6 my-4 flex flex-col gap-2 text-sm text-text-secondary">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="leading-relaxed">
              {item.replace(/^[\*\-]\s+/, "")}
            </li>
          ))}
        </ul>
      );
    }

    // Regular paragraphs
    return (
      <p key={idx} className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
        {trimmed}
      </p>
    );
  });
};

export default async function BlogPostDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-32 pb-24 px-6 grid-bg-pattern">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <div className="mb-8 flex items-center justify-between border-b border-border-subtle pb-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-glow transition-colors font-mono">
              <ArrowLeft size={16} />
              <span>Back to Blog</span>
            </Link>
            
            <div className="flex gap-2">
              <Badge variant="cyan" className="uppercase text-xxs">
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Headline Title */}
          <SectionHeader
            marker={`Blog / ${post.category}`}
            title={post.title}
          />

          {/* Meta parameters */}
          <div className="flex flex-wrap gap-6 items-center text-xs text-text-secondary font-mono mb-10">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-accent" />
              <span>By {post.author.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-accent" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-accent" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Render blog post content */}
          <Card hoverable={false} className="border-border-subtle/50 bg-white/[0.01]">
            <article className="prose prose-invert max-w-none">
              {renderContent(post.content)}
            </article>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
