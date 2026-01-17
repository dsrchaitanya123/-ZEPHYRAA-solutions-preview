// @data/about.ts

import { 
  Globe, Cpu, Layers, Code, Zap, Shield, Database, Terminal
} from 'lucide-react';

export const BRAND_DATA = {
  name: "Zephyraa Software Private Limited",
  founded: 2026,
  tagline: "Breezing Through Complexity.",
  contactEmail: "pasupuladharaniswarreddy@outlook.com",
  instagram: "https://www.instagram.com/zephyraa_solutions",
  location: "Kavali, India"
};

export const HERO_CONTENT = {
  badge: "Full-Cycle Engineering",
  title: "We Build Stateful Software",
  titleAccent: "That Actually Ships.",
  description: "We handle architecture, implementation, security, and deployment with enterprise-grade rigor.",
  stats: [
    {
      icon: Globe,
      label: "Global Solutions",
      sublabel: "Cross-region deployment & scaling"
    },
    {
      icon: Terminal,
      label: "Practical Engineering",
      sublabel: "Code that solves business logic"
    },
    {
      icon: Shield,
      label: "Secure by Design",
      sublabel: "Security-first build methodology"
    }
  ]
};

export const SERVICES = [
  {
    icon: Code,
    title: "Product Engineering",
    desc: "From MVP to production-grade platforms, engineered with disciplined delivery pipelines.",
    tags: ["React", "Next.js", "Node", "CI/CD"]
  },
  {
    icon: Database,
    title: "Cloud & Data Systems",
    desc: "Distributed infra, optimized queries, and reproducible deployment pipelines for serious scale.",
    tags: ["PostgreSQL", "Redis", "Docker", "Kubernetes"]
  },
  {
    icon: Cpu,
    title: "IT Transformation",
    desc: "Migration from legacy systems, API modernization, and operational automation.",
    tags: ["Python", "REST", "Microservices"]
  },
  {
    icon: Layers,
    title: "Custom Integrations",
    desc: "Payment gateways, vendor APIs, auth systems, and enterprise tooling.",
    tags: ["OAuth2", "GraphQL", "Webhooks"]
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    desc: "Build-test-ship in iterative loops that reduce development uncertainty.",
    tags: ["Agile", "CI/CD", "Testing"]
  },
  {
    icon: Shield,
    title: "Security Hardening",
    desc: "Audit, monitoring, secrets management, compliance patterns, and intrusion reduction.",
    tags: ["Zero Trust", "TLS", "Audits"]
  }
];

export const TECH_STACK = [
  {
    title: "Frontend",
    icon: Code,
    items: ["React", "Next.js", "Tailwind", "TypeScript"]
  },
  {
    title: "Backend",
    icon: Cpu,
    items: ["Node.js", "Python", "Express", "FastAPI"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "Infrastructure",
    icon: Terminal,
    items: ["Docker", "NGINX", "Cloudflare", "CI/CD"]
  }
];

export const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "We dissect your problem statement, understanding the core business logic before writing code." },
  { num: "02", title: "Architecture", desc: "Designing scalable schemas and selecting the right tech stack for future-proof performance." },
  { num: "03", title: "Development", desc: "Agile sprints with regular updates. We build, test, and refine in real-time loops." },
  { num: "04", title: "Deployment", desc: "Seamless CI/CD pipelines ensuring your product hits the market with zero downtime." }
];
