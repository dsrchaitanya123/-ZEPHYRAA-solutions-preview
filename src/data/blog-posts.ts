export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  authorImage: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content: ContentBlock[];
}

export type ContentType = 'p' | 'h2' | 'quote';

export interface ContentBlock {
  type: ContentType;
  text: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "evolution-scalable-system-architecture-2026",
    category: "Engineering",
    title: "The Evolution of Scalable System Architecture in 2026",
    excerpt: "Discover how microservices are evolving into modular monoliths and why serverless edge computing is becoming the new standard for high-performance applications.",
    author: "Alex Chen",
    role: "Senior Architect",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    content: [
      { type: 'p', text: "The debate between microservices and monolithic architectures has been raging for over a decade. As we step into 2026, we are seeing a fascinating shift in the industry: the rise of the 'Modular Monolith'." },
      { type: 'h2', text: "Why Microservices Became Too Complex" },
      { type: 'p', text: "While microservices offered strict separation of concerns, they introduced massive operational overhead. Startups that didn't need Google-scale infrastructure were drowning in Kubernetes manifests and service mesh configurations." },
      { type: 'quote', text: "Complexity is the enemy of execution. In 2026, developer experience is prioritizing cohesion over separation." },
      { type: 'p', text: "The new standard focuses on logical separation within a single deployable unit. This allows teams to iterate faster without the network latency penalties of distributed systems." },
      { type: 'h2', text: "The Role of Edge Computing" },
      { type: 'p', text: "Serverless edge functions have matured to the point where they are handling not just routing, but heavy compute logic. By pushing the database closer to the user via Read Replicas, we are seeing sub-50ms latency globally." }
    ]
  },
  {
    slug: "future-of-ai-ui-design",
    category: "Design",
    title: "Generative UI: The End of Static Interfaces?",
    excerpt: "How AI is generating interfaces on the fly tailored to user intent.",
    author: "Sarah Jenkins",
    role: "Product Designer",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "Feb 02, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    content: [
      { type: 'p', text: "Static dashboards are becoming a thing of the past. Imagine an interface that redraws itself based on what you are currently working on." },
      { type: 'h2', text: "Context-Aware Components" },
      { type: 'p', text: "With the latest LLM integrations, front-end components can now predict the next user action and pre-load necessary modal windows or data tables." },
      { type: 'quote', text: "The best UI is the one you didn't know you needed until it appeared." }
    ]
  },
  {
    slug: "minimalism-why-less-is-more",
    category: "Design",
    title: "Minimalism: Why Less is Still More",
    excerpt: "Exploring the psychological impact of whitespace in user interfaces and how it improves conversion rates.",
    author: "Sarah Jones",
    role: "Design Lead",
    authorImage: "https://randomuser.me/api/portraits/women/32.jpg",
    date: "Jan 12, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    content: [
      { type: 'p', text: "Minimalism is more than just removing visual clutter. It's a philosophy that respects users' cognitive load and attention span." },
      { type: 'h2', text: "The Psychology of Whitespace" },
      { type: 'p', text: "Empty space is not wasted space. When done right, it guides the user's eye and focuses attention on what matters." }
    ]
  },
  {
    slug: "4-day-work-week-case-study",
    category: "Productivity",
    title: "The 4-Day Work Week: A Case Study",
    excerpt: "We analyzed 50 tech companies that switched to a shorter work week. The results on code quality were surprising.",
    author: "Mike Ross",
    role: "Engineering Manager",
    authorImage: "https://randomuser.me/api/portraits/men/44.jpg",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    content: [
      { type: 'p', text: "Can productivity increase with fewer hours? Our research into 50 tech companies suggests yes." },
      { type: 'h2', text: "The Results" },
      { type: 'p', text: "Code quality metrics improved, bug reports decreased, and team morale hit all-time highs." }
    ]
  },
  {
    slug: "ethical-considerations-generative-ai",
    category: "AI & Future",
    title: "Ethical Considerations in Generative Models",
    excerpt: "As AI tools become more integrated into our daily workflows, how do we ensure data privacy and prevent bias?",
    author: "Emily Wong",
    role: "AI Ethics Researcher",
    authorImage: "https://randomuser.me/api/portraits/women/50.jpg",
    date: "Jan 08, 2026",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    content: [
      { type: 'p', text: "The rapid adoption of generative AI has brought unprecedented opportunities and challenges." },
      { type: 'h2', text: "Data Privacy and Consent" },
      { type: 'p', text: "Users need to understand what data is being used to train models and have the option to opt out." }
    ]
  }
];
