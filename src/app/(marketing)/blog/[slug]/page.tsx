"use client"
import React, { useEffect, useState } from 'react';
import { 
  Calendar, Clock, ArrowLeft, Facebook, Twitter, 
  Linkedin, Link as LinkIcon, Share2
} from 'lucide-react';

// --- Types & Interfaces ---

type ContentType = 'p' | 'h2' | 'quote';

interface ContentBlock {
  type: ContentType;
  text: string;
}

interface BlogPost {
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

interface BlogPostPageProps {
  // In a real Next.js app, this might come from params.slug
  slug?: string; 
}

// --- Mock Data ---

const postsDatabase: BlogPost[] = [
  {
    slug: "evolution-scalable-system-architecture-2026",
    category: "Engineering",
    title: "The Evolution of Scalable System Architecture in 2026",
    excerpt: "Discover how microservices are evolving into modular monoliths...",
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
  }
];

// --- Component ---

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  // Default to the first post if no slug is provided (for demo purposes)
  const targetSlug = slug || "evolution-scalable-system-architecture-2026";
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const foundPost = postsDatabase.find(p => p.slug === targetSlug);
      setPost(foundPost || null);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [targetSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-500">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-4 bg-slate-400 rounded-full mb-2"></div>
          Loading Article...
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Post not found</h2>
        <p className="text-slate-500 mb-8">The article you are looking for doesn't exist.</p>
        <a href="/blog" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- Navbar --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/blog" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </a>
          <div className="flex gap-4">
             <button className="text-slate-400 hover:text-slate-900" aria-label="Share">
                <Share2 size={20} />
             </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* --- Article Header --- */}
        <header className="mb-10 text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
             <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
               {post.category}
             </span>
             <span className="text-slate-400">•</span>
             <span className="text-slate-500 text-sm font-medium flex items-center">
               <Calendar size={14} className="mr-1" /> {post.date}
             </span>
           </div>

           <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
             {post.title}
           </h1>

           {/* Author Bio */}
           <div className="flex items-center justify-center md:justify-start border-y border-slate-100 py-6">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-white shadow-sm" 
              />
              <div className="text-left">
                <p className="font-bold text-slate-900">{post.author}</p>
                <p className="text-slate-500 text-sm">{post.role}</p>
              </div>
              <div className="ml-auto text-slate-500 text-sm hidden sm:flex items-center">
                 <Clock size={16} className="mr-2" />
                 {post.readTime}
              </div>
           </div>
        </header>

        {/* --- Featured Image --- */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- Main Content Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar (Share & TOC) */}
            <aside className="hidden lg:block lg:col-span-3">
               <div className="sticky top-24 space-y-8">
                 <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Share</p>
                   <div className="flex flex-col gap-3">
                      <button className="flex items-center text-slate-600 hover:text-[#1DA1F2] transition-colors gap-3 text-sm font-medium">
                        <Twitter size={18} /> Twitter
                      </button>
                      <button className="flex items-center text-slate-600 hover:text-[#4267B2] transition-colors gap-3 text-sm font-medium">
                        <Facebook size={18} /> Facebook
                      </button>
                      <button className="flex items-center text-slate-600 hover:text-[#0077b5] transition-colors gap-3 text-sm font-medium">
                        <Linkedin size={18} /> LinkedIn
                      </button>
                      <button className="flex items-center text-slate-600 hover:text-slate-900 transition-colors gap-3 text-sm font-medium">
                        <LinkIcon size={18} /> Copy Link
                      </button>
                   </div>
                 </div>
               </div>
            </aside>

            {/* Content Body */}
            <article className="lg:col-span-9">
               <div className="prose prose-lg prose-slate max-w-none">
                 {post.content.map((block, index) => {
                   switch(block.type) {
                     case 'h2':
                       return <h2 key={index} className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-4">{block.text}</h2>;
                     case 'quote':
                       return (
                         <blockquote key={index} className="border-l-4 border-blue-600 pl-6 py-2 my-8 italic text-xl text-slate-700 bg-slate-50 rounded-r-lg">
                           "{block.text}"
                         </blockquote>
                       );
                     default: // paragraph
                       return <p key={index} className="text-slate-600 leading-8 mb-6 text-lg">{block.text}</p>;
                   }
                 })}
               </div>

               {/* Post-Read Engagement */}
               <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                     {['Architecture', 'Scalability', '2026 Trends', 'DevOps'].map(tag => (
                       <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">
                         #{tag}
                       </span>
                     ))}
                  </div>
               </div>
            </article>

        </div>
      </main>

      {/* --- Footer (Simplified) --- */}
      <footer className="bg-slate-50 border-t border-slate-200 mt-20 py-12 text-center">
         <p className="text-slate-500 mb-4">Enjoyed this article?</p>
         <h3 className="text-2xl font-bold text-slate-900 mb-6">Subscribe to our newsletter</h3>
         <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
           Get Updates
         </button>
      </footer>
    </div>
  );
};

export default BlogPostPage;