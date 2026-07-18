export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'backend' | 'fullstack' | 'frontend' | 'saas';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'enterprise-saas-multi-tenant-platform',
    title: 'Enterprise SaaS Multi-Tenant Platform',
    category: 'saas',
    shortDescription:
      'Scalable multi-tenant SaaS architecture with complete data isolation, custom domain mapping, and RBAC.',
    fullDescription:
      'A comprehensive enterprise SaaS platform built to serve multiple independent tenants on a single infrastructure. Designed for high availability, security, and customization at scale.',
    problem:
      'A growing B2B SaaS company needed to serve multiple enterprise clients on a shared infrastructure while maintaining complete data segregation and custom branding per client.',
    solution:
      'Architected a multi-tenant system using Laravel with a database-per-tenant strategy. Implemented centralized authentication with JWT, custom domain routing via Nginx wildcards, and a role-based access control (RBAC) system with hierarchical permissions.',
    results: [
      'Supported 50+ enterprise tenants on a single infrastructure',
      'Achieved 99.9% uptime through optimized database connection pooling',
      'Reduced per-tenant onboarding time from 3 days to under 2 hours',
      'Zero cross-tenant data leakage incidents since launch',
    ],
    stack: ['Laravel', 'PHP', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'Vue.js', 'Tailwind CSS'],
    image: '/images/projects/saas-platform.jpg',
    featured: true,
    year: '2024',
  },
  {
    id: '2',
    slug: 'high-scale-db-migration',
    title: 'High-Scale Database Migration & Optimization',
    category: 'backend',
    shortDescription:
      'Zero-downtime PostgreSQL server migration with massive schema restructuring and performance tuning.',
    fullDescription:
      'Orchestrated a critical database migration for a high-traffic production system involving terabytes of data, schema restructuring, and minimal downtime requirements.',
    problem:
      'A production PostgreSQL database had grown to a point where the existing schema was causing severe performance bottlenecks. A complete architectural migration was needed with near-zero downtime tolerance.',
    solution:
      'Implemented a blue-green migration strategy using pg_dump with parallel workers, created staging environment for schema validation, implemented Redis-based caching layers during transition, and used Postgres logical replication to sync data in real-time during cutover.',
    results: [
      'Migrated 2TB+ database with less than 15 minutes total downtime',
      'Improved average query response time by 340%',
      'Reduced database server costs by 45% through better indexing strategies',
      'Implemented automated backup rotation reducing storage costs by 60%',
    ],
    stack: ['PostgreSQL', 'Redis', 'Laravel', 'Python', 'Docker', 'Bash', 'Nginx'],
    image: '/images/projects/db-migration.jpg',
    featured: true,
    year: '2024',
  },
  {
    id: '3',
    slug: 'medical-shift-tracker',
    title: 'Automated Medical Shift Tracker',
    category: 'fullstack',
    shortDescription:
      'Scalable shift rotation and scheduling system for medical facilities with complex operational logistics.',
    fullDescription:
      'A comprehensive workforce management application built specifically for medical institutions, handling complex shift rotations, staff availability, and operational logistics automation.',
    problem:
      'Medical facility administrators were managing complex shift rotations for 200+ staff members manually using spreadsheets, leading to scheduling conflicts, missed shifts, and compliance issues.',
    solution:
      'Built a custom scheduling engine using Laravel with a constraint-satisfaction algorithm for shift assignment. Created an intuitive Vue.js dashboard for administrators with real-time updates via WebSockets and automated SMS/email notifications for staff.',
    results: [
      'Reduced scheduling time from 8 hours/week to under 30 minutes',
      'Eliminated 100% of scheduling conflicts through algorithmic assignment',
      'Automated 95% of shift-change notifications',
      'Improved staff satisfaction scores by 38%',
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'WebSockets', 'Livewire', 'Alpine.js', 'Tailwind CSS'],
    image: '/images/projects/shift-tracker.jpg',
    featured: true,
    year: '2023',
  },
  {
    id: '4',
    slug: 'ai-driven-saas-platform',
    title: 'AI-Driven SaaS Platform with FastAPI',
    category: 'backend',
    shortDescription:
      'Modern AI-integrated SaaS platform built with Python FastAPI, featuring AI Agent orchestration and third-party integrations.',
    fullDescription:
      'A cutting-edge SaaS platform leveraging Python FastAPI as the core backend, integrated with various AI models and agents, financial APIs (Plaid, QuickBooks), and real-time data processing pipelines.',
    problem:
      'A fintech startup needed to build a scalable, AI-powered financial intelligence platform that could integrate with existing accounting software and banking APIs while processing large volumes of transactions in real time.',
    solution:
      'Architected a microservices-based solution using Python FastAPI with async processing, integrated AI agents via LangChain for financial data analysis, built OAuth flows for Plaid/QuickBooks integration, and implemented webhook handlers for real-time transaction events.',
    results: [
      'Processed 10,000+ financial transactions per hour with sub-200ms response times',
      'Integrated 5 major financial APIs (Plaid, QuickBooks, Stripe, PayPal, Banking Direct)',
      'AI agents reduced manual financial categorization work by 90%',
      'Scaled to 500+ concurrent users without performance degradation',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'LangChain', 'Plaid API', 'QuickBooks API', 'OAuth'],
    image: '/images/projects/ai-saas.jpg',
    featured: false,
    year: '2025',
  },
  {
    id: '5',
    slug: 'programmatic-seo-platform',
    title: 'High-Traffic Programmatic SEO Platform',
    category: 'fullstack',
    shortDescription:
      'Technical SEO infrastructure for a 12,000+ page programmatic content site with Cloudflare optimization.',
    fullDescription:
      'Designed and optimized a large-scale programmatic SEO platform handling over 12,000 dynamically generated pages, with full Cloudflare integration, edge caching, and advanced technical SEO implementations.',
    problem:
      'A content company had 12,000+ programmatically generated pages but poor Core Web Vitals scores, slow TTFB, and inconsistent crawling by search engines, resulting in poor rankings despite quality content.',
    solution:
      'Rebuilt the technical infrastructure with Next.js for SSG, implemented Cloudflare Workers for edge-side rendering, added structured data (Schema.org) automation, optimized Core Web Vitals through aggressive code splitting and image optimization, and built a custom sitemap generation system.',
    results: [
      'Improved average Lighthouse score from 42 to 94',
      'Reduced Time to First Byte (TTFB) by 78% with edge caching',
      'Increased organic search impressions by 320% in 3 months',
      'Achieved 100% crawl coverage of all 12,000+ pages within 2 weeks',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Cloudflare Workers', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/projects/seo-platform.jpg',
    featured: false,
    year: '2024',
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter((p) => p.category === category);
