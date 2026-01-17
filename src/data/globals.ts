// @data/globals.ts
import { Server, Lock, Activity, Zap, ShieldCheck, LayoutGrid } from 'lucide-react';

export const GLOBAL_STATS = [
  { label: "Cities Active", value: "12+" },
  { label: "Enterprise Clients", value: "50+" },
  { label: "Lives Impacted", value: "100k+" },
  { label: "Uptime Global", value: "99.9%" },
];

export const CORE_FEATURES = [
  {
    title: "Edge Computing",
    desc: "Process data where it's created. Our decentralized nodes reduce latency to single-digit milliseconds.",
    icon: Server,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Zero Trust Security",
    desc: "Enterprise-grade encryption at rest and in transit. We treat every access request as a potential threat.",
    icon: Lock,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Real-time Analytics",
    desc: "Gain actionable insights instantly. Monitor network health and user traffic through our live dashboard.",
    icon: Activity,
    color: "text-green-600",
    bg: "bg-green-50"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Zephyraa simply works. We migrated our entire infrastructure in less than a week.",
    author: "Elena R.",
    role: "CTO, FinStream",
  },
  {
    quote: "The latency reduction was immediate. Our users in remote areas finally have a seamless experience.",
    author: "Marcus J.",
    role: "VP Engineering, EduGlobal",
  }
];

export const BENTO_VALUES = [
  {
    type: "large",
    icon: Zap,
    title: "High-Velocity Shipping",
    desc: "We don't just write code; we ship solutions. Speed and precision are our currency.",
    color: "yellow"
  },
  {
    type: "small",
    icon: ShieldCheck,
    title: "Integrity First",
    desc: "Transparent workflows for global clients.",
    color: "green"
  },
  {
    type: "small",
    icon: LayoutGrid,
    title: "Scalable Systems",
    desc: "Architectures that grow with your ambition.",
    color: "purple"
  }
];