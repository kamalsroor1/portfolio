"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";

export const BlogSection = () => {
  // Take latest 3 posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6 border-b border-border-subtle bg-bg relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          marker="Blog"
          title="Insights & Tutorials"
          description="Nurturing thoughts on high-performance backend, PostgreSQL database replication, and system architectures."
        />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="h-full flex flex-col justify-between border-border-subtle/50 relative overflow-hidden group">
                <div className="flex flex-col gap-4">
                  {/* Meta data */}
                  <div className="flex items-center justify-between text-xxs font-mono text-text-secondary">
                    <span>{post.publishDate}</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Category Tag */}
                  <div>
                    <Badge variant="cyan" className="uppercase text-xxs">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-display uppercase tracking-wide text-text-primary group-hover:text-accent-glow transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Summary */}
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
            </motion.div>
          ))}
        </div>

        {/* Go to full blog */}
        <div className="flex justify-center mt-12">
          <Link href="/blog">
            <Button variant="secondary" size="lg">
              Visit Full Blog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
