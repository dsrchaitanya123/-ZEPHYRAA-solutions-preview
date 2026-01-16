// data/services.ts
import { 
  Rocket, 
  Layers, 
  Cpu, 
  Globe, 
  Zap, 
  BarChart3 
} from "lucide-react";

export const services = [
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "We craft data-driven roadmaps that align your brand with market opportunities and user needs.",
    icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "High-performance, scalable web applications built with modern frameworks like Next.js and Tailwind CSS.",
    icon: Globe,
    gradient: "from-pink-500 to-orange-500",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Immersive digital experiences focused on user-centric design principles and aesthetic excellence.",
    icon: Layers,
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    id: "ai-integration",
    title: "AI Solutions",
    description: "Leveraging machine learning and automation to streamline your business workflows and decision making.",
    icon: Cpu,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Visual storytelling that makes your brand unforgettable through logos, typography, and color systems.",
    icon: Zap,
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: "growth-marketing",
    title: "Growth Marketing",
    description: "Scaling your reach through optimized SEO, performance marketing, and conversion rate optimization.",
    icon: BarChart3,
    gradient: "from-blue-500 to-cyan-500",
  },
];