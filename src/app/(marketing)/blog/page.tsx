"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User, Mail, Search, Menu, X, Github, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';

// Use the first post as featured, and the rest as the post list
const featuredPost = BLOG_POSTS[0];
const posts = BLOG_POSTS.slice(1);

const categories = ["All", "Engineering", "Design", "Productivity", "AI & Future"];

const BlogPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Subtle Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

     

      {/* --- Main Content (Widened Container) --- */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        
        {/* --- Hero Section --- */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
        
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-7">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                  activeCategory === cat 
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 ring-2 ring-slate-900 ring-offset-2" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Featured Post (Full Width Card) --- */}
        <section className="mb-24">
          <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-[2rem] p-6 lg:p-10 shadow-2xl shadow-slate-200/50 hover:shadow-slate-300/50 transition-all duration-500 border border-slate-100 overflow-hidden">
            
            {/* Image Side */}
            <div className="relative h-64 lg:h-[500px] w-full overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
              <img 
                src={featuredPost.imageUrl} 
                alt="Featured" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center lg:pr-8">
              <div className="flex items-center space-x-3 text-sm font-bold mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full">{featuredPost.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{featuredPost.date}</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              
              <p className="text-slate-600 mb-8 text-lg lg:text-xl leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 mr-4">
                     <User size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{featuredPost.author}</p>
                    <p className="text-xs text-slate-500 font-medium">{featuredPost.readTime}</p>
                  </div>
                </div>
                {/* Read More Button */}
                <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- Recent Posts Grid --- */}
        <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-6">
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Recent Articles</h3>
          <a href="/blog" className="group text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
            View archive <ChevronRight size={20} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-32">
          {posts.map((post) => (
            <article key={post.slug} className="group flex flex-col h-full bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 border border-slate-100 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm shadow-lg text-xs font-bold px-3 py-1.5 rounded-full text-slate-900 uppercase tracking-wider z-20">
                  {post.category}
                </span>
              </div>
              
              <div className="flex-1 flex flex-col px-1">
                <div className="flex items-center text-xs font-medium text-slate-500 mb-3 space-x-3">
                   <div className="flex items-center"><Calendar size={14} className="mr-1.5"/> {post.date}</div>
                   <div className="flex items-center"><Clock size={14} className="mr-1.5"/> {post.readTime}</div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 text-sm lg:text-base leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                   <span className="text-sm font-bold text-slate-800">{post.author}</span>
                   <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center">
                     Read article <ArrowRight size={14} className="ml-1" />
                   </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- Newsletter Section --- */}
        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">
           {/* Abstract Background Effects */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
           <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="relative z-10 max-w-3xl mx-auto">
             <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-slate-800 text-blue-400 mb-8 shadow-2xl shadow-blue-900/20 ring-1 ring-slate-700/50">
               <Mail className="h-8 w-8" />
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Stay ahead of the curve</h2>
             <p className="text-slate-400 mb-10 text-lg md:text-xl leading-relaxed">
                 Join 15,000+ developers receiving the latest trends in tech, design, and architecture directly in their inbox.
             </p>
             
             <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                 <input 
                     type="email" 
                     placeholder="Enter your email address" 
                     className="flex-1 px-6 py-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                 />
                 <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transform hover:-translate-y-0.5">
                     Subscribe
                 </button>
             </form>
             <p className="mt-6 text-sm text-slate-500">No spam. Unsubscribe anytime.</p>
           </div>
        </section>

      </main>

 
    </div>
  );
};

export default BlogPage;