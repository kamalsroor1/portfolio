"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogPosts, BlogPost } from "@/data/blog";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            marker="Blog"
            title="Insights & Articles"
            description="Deep architectural articles about Python FastAPI, Laravel multi-tenant database designs, and scaling pipelines."
          />

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-16 relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.02] border border-border-subtle hover:border-white/10 focus:border-accent focus:outline-none rounded-full pl-12 pr-6 py-3 text-sm text-text-primary transition-colors font-sans"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
          </div>

          {/* Grid listing */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-secondary text-sm">No articles matched your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.slug} className="h-full flex flex-col justify-between border-border-subtle/50 relative overflow-hidden group">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xxs font-mono text-text-secondary">
                      <span>{post.publishDate}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <div>
                      <Badge variant="cyan" className="uppercase text-xxs">
                        {post.category}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold font-display uppercase tracking-wide text-text-primary group-hover:text-accent-glow transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-text-secondary text-xs leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-subtle/50 flex justify-end">
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-xs text-accent-cyan hover:text-accent-glow transition-colors font-mono font-semibold">
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
