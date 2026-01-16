export const navbarData = {
  logo: { src: "/ZEPHYRAA-logo.png", alt: "ZEPHYRAA" },
  links: [
    { label: "WORK", href: "#work" },
    { label: "PROCESS", href: "#process" },
    { label: "AGENCY", href: "#agency" },
  ],
  servicesDropdown: [
    { label: "Web Development", href: "#services" },
    { label: "Branding & Design", href: "#services" },
  ],
  cta: "LET'S TALK",
};

export const heroData = {
  availability: "AVAILABLE FOR 2026 PROJECTS",
  headline: {
    line1: "WE BUILD",
    highlight: "DIGITAL",
    line2: "REALITIES.",
  },
  subtext: "Zephyraa is the software architects' playground. We fuse high-end code with visceral design to create applications that don't just work—they perform.",
  primaryBtn: "Start Project",
  secondaryBtn: "Showreel",
  floatingCard: {
    label: "LATEST DROP",
    title: "FinTech Dashboard",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
};

export const marqueeData = [
  "STRATEGY", "DEVELOPMENT", "DESIGN", "ZEPHYRAA", "CLOUD", "AI SOLUTIONS", "SCALING", "STRATEGY"
];

export const agencyData = {
  title: "Agency", // Added for the small tag
  heading: "We are the anti-boring software agency. We don't just write code; we engineer competitive advantages.",
  description: "Most agencies give you a template. We give you a tailored suit of armor. Born in 2026, Zephyraa was founded to bridge the gap between \"looks good\" and \"works brilliantly.\"",
  stats: [
    { value: "100%", label: "CLIENT RETENTION" },
    { value: "Global", label: "REMOTE OPERATIONS" },
  ],
};
// data/homepage.jsimport { Globe, Server, Smartphone, Cpu } from "lucide-react";
import { Globe, Server, Smartphone, Cpu } from "lucide-react";
export const servicesData = {
  topTag: "OUR EXPERTISE",
  heading: "The Zephyraa Ecosystem",
  cta: "View Full Catalog",
  cards: [
    {
      title: "Web Engineering",
      description: "Next.js & React architectures built for speed, SEO, and massive scale.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", // Add your image paths here
      icon: Globe, 
      tags: ["React", "TypeScript", "Tailwind"],
      colSpan: "md:col-span-2 md:row-span-2",
      color: "text-cyan-500",
      bgGradient: "from-cyan-500/10 to-transparent",
    },
    {
      title: "Backend & API",
      description: "Robust Node.js and Python backends integrated with PostgreSQL.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop",
      icon: Server,
      colSpan: "md:col-span-2 md:row-span-1",
      color: "text-purple-500",
      bgGradient: "from-purple-500/10 to-transparent",
    },
    {
      title: "Mobile Native",
      description: "React Native solutions for iOS and Android.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      icon: Smartphone,
      colSpan: "md:col-span-1 md:row-span-1",
      color: "text-pink-500",
      bgGradient: "from-pink-500/10 to-transparent",
    },
    {
      title: "AI Integration",
      description: "LLM Wrappers & custom Chatbots.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      icon: Cpu,
      colSpan: "md:col-span-1 md:row-span-1",
      color: "text-amber-500",
      bgGradient: "from-amber-500/10 to-transparent",
    },
  ],
};
export const showreelData = {
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000",
  label: "WATCH SHOWREEL",
  title: "Future of Interface",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your link
};

export const processData = {
  heading: "The Zephyraa Method",
  subtext: "We don't guess. We execute.",
  steps: [
    {
      number: "01",
      title: "Atomic Discovery",
      description: "We break down your business logic into atomic components. No stone left unturned. We identify pain points you didn't know existed.",
      color: "cyan",
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description: "Wireframes in 48 hours. Interactive prototypes in 1 week. We visualize the solution before writing a single line of production code.",
      color: "purple",
    },
    {
      number: "03",
      title: "Agile Deployment",
      description: "Sprint-based delivery. You see progress every Friday. We deploy to a staging environment so you can touch the product as it grows.",
      color: "slate",
    },
  ],
};

export const workData = {
  heading: "SELECTED WORK",
  projects: [
    {
      title: "Logistics ERP",
      category: "SAAS / DASHBOARD",
      description: "A complete fleet management system handling 500+ trucks in real-time.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      color: "cyan",
    },
  
  {
    title: "NeoBank App",
    category: "FINTECH / MOBILE",
    description: "Secure, high-frequency trading platform with AI insights.",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=800", 
    color: "purple",
    accent: "#A855F7"
  },
  {
    title: "Fashion E-Comm",
    category: "WEB3 / COMMERCE",
    description: "Headless Shopify implementation with 3D product configurator.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    color: "pink",
    accent: "#EC4899"
  },

  ],
};

export const stackData = {
  heading: "Our Arsenal.",
  subtext: "We don't rely on legacy code. We use the bleeding edge.",
  techs: [
    { name: "React", icon: "fab fa-react", color: "blue" },
    { name: "Node.js", icon: "fab fa-node", color: "green" },
    { name: "Python", icon: "fab fa-python", color: "yellow" },
    { name: "AWS", icon: "fab fa-aws", color: "orange" },
    { name: "Docker", icon: "fab fa-docker", color: "blue" },
    { name: "Postgres", icon: "fa-solid fa-database", color: "teal" },
  ],
};

export const pricingData = [
  {
    title: "MVP Sprint",
    price: "$2k+",
    description: "Perfect for startups needing a proof of concept quickly.",
    features: ["2-4 Weeks Delivery", "Core Features", "Basic UI/UX"],
    cta: "Start MVP",
    highlight: false,
  },
  {
    title: "Full Product",
    price: "Custom",
    description: "End-to-end development for scalable business applications.",
    features: ["2-4 Months", "Advanced Architecture", "3 Months Support"],
    cta: "Get Quote",
    highlight: true,
  },
  {
    title: "Dedicated Team",
    price: "Monthly",
    description: "Hire our developers to augment your existing workforce.",
    features: ["Full-time devs", "Senior PM included", "Flexible contracts"],
    cta: "Hire Team",
    highlight: false,
  },
];

export const faqData = [
  {
    question: "What is your typical timeline?",
    answer: "Small MVPs take 2-4 weeks. Large enterprise systems take 3-6 months. We work in 2-week agile sprints so you see progress constantly.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes. All projects come with 30 days of free bug fixing. We also offer monthly retainer packages for updates, server monitoring, and feature additions.",
  },
  {
    question: "How do we communicate?",
    answer: "We use Slack/Discord for daily chats, Trello/Jira for task tracking, and weekly Google Meet video calls for demos. You are never in the dark.",
  },
];

export const contactData = {
  label: "READY TO START?",
  headline: { line1: "LET'S BUILD", line2: "THE FUTURE." },
  email: "hello@zephyraa.com",
  btn: "Book a Call",
};

export const footerData = {
  brand: "ZEPHYRAA",
  description: "We are a digital product agency helping startups and enterprises launch high-quality software.",
  links: ["Work", "Services", "About", "Contact"],
  socials: ["LinkedIn", "Instagram", "Twitter / X", "GitHub"],
  legal: ["Privacy Policy", "Terms of Service"],
  copyright: "© 2026 Zephyraa Software Pvt Ltd.",
  bigText: "ZEPHYRAA",
};