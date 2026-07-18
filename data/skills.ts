export interface Skill {
  name: string;
  level: number; // percentage (e.g. 90)
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: [
      { name: "Python (FastAPI)", level: 95, featured: true },
      { name: "PHP (Laravel)", level: 95, featured: true },
      { name: "Node.js (NestJS / Express)", level: 90, featured: true },
      { name: "Zend Framework", level: 80, featured: false },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 90, featured: true },
      { name: "Vue.js", level: 85, featured: false },
      { name: "Livewire & Alpine.js", level: 90, featured: true },
      { name: "Tailwind CSS", level: 95, featured: true },
      { name: "Vite", level: 90, featured: false },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", level: 95, featured: true },
      { name: "MySQL", level: 95, featured: true },
      { name: "Redis", level: 90, featured: true },
      { name: "Database Optimization & Indexing", level: 90, featured: true },
    ],
  },
  {
    title: "DevOps & Architecture",
    skills: [
      { name: "Docker & Docker-Compose", level: 90, featured: true },
      { name: "Clean Architecture", level: 95, featured: true },
      { name: "RESTful APIs / Microservices", level: 95, featured: true },
      { name: "Nginx / Cloudflare", level: 85, featured: false },
      { name: "Git Workflow", level: 95, featured: true },
    ],
  },
  {
    title: "Integrations & Protocols",
    skills: [
      { name: "Third-party APIs (Plaid, QuickBooks)", level: 90, featured: true },
      { name: "Logistics & Payment Gateways", level: 90, featured: true },
      { name: "OAuth & Webhooks", level: 95, featured: true },
      { name: "AI Agents Integration", level: 90, featured: true },
    ],
  },
];
