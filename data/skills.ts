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
      { name: "Python (FastAPI / Django)", level: 95, featured: true },
      { name: "PHP (Laravel / Livewire)", level: 95, featured: true },
      { name: "Node.js (NestJS)", level: 90, featured: true },
      { name: "Zend Framework", level: 75, featured: false },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "Vue.js / Nuxt.js", level: 90, featured: true },
      { name: "React / Next.js", level: 85, featured: false },
      { name: "HTML5 / CSS3 / Sass", level: 95, featured: true },
      { name: "Tailwind CSS / Bootstrap", level: 95, featured: true },
      { name: "jQuery / Javascript (ES6)", level: 90, featured: false },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "PostgreSQL / MySQL", level: 95, featured: true },
      { name: "Redis Caching / MongoDB", level: 90, featured: true },
      { name: "Database Optimization", level: 95, featured: true },
      { name: "NoSQL", level: 80, featured: false },
    ],
  },
  {
    title: "DevOps & Architecture",
    skills: [
      { name: "Docker", level: 90, featured: true },
      { name: "GitHub Actions (CI/CD)", level: 90, featured: true },
      { name: "AWS / Nginx / Linux", level: 85, featured: false },
      { name: "Clean Architecture (SOLID / TDD)", level: 95, featured: true },
      { name: "Multi-Tenant Systems (Tenancy)", level: 95, featured: true },
    ],
  },
  {
    title: "Integrations & Protocols",
    skills: [
      { name: "Python AI Integrations (Agents)", level: 95, featured: true },
      { name: "Payment Gateways (Stripe, etc.)", level: 95, featured: true },
      { name: "WebSockets (socket.io, Reverb)", level: 90, featured: true },
      { name: "OAuth / Webhooks / APIs", level: 95, featured: true },
    ],
  },
];
