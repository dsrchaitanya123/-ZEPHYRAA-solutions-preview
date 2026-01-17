"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion
import { Calendar, Clock, ArrowRight, User, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';

const featuredPost = BLOG_POSTS[0];
const posts = BLOG_POSTS.slice(1);
const categories = ["All", "Engineering", "Design", "Productivity", "AI & Future"];

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <main className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-3 pt-7">
            {categories.map((cat) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 ring-2 ring-slate-900 ring-offset-2" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* --- Featured Post --- */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-[2rem] p-6 lg:p-10 shadow-2xl shadow-slate-200/50 hover:shadow-slate-300/50 transition-all duration-500 border border-slate-100 overflow-hidden">
            
            <div className="relative h-64 lg:h-[500px] w-full overflow-hidden rounded-3xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={featuredPost.imageUrl} 
                alt="Featured" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center lg:pr-8">
              <div className="flex items-center space-x-3 text-sm font-bold mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full">{featuredPost.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{featuredPost.date}</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
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
                <motion.div whileHover={{ x: 5 }}>
                  <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-slate-200 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Recent Posts Grid --- */}
        <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-6">
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Recent Articles</h3>
          <Link href="/blog" className="group text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
            View archive <ChevronRight size={20} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-32"
        >
          {posts.map((post) => (
            <motion.article 
              variants={fadeInUp}
              key={post.slug} 
              className="group flex flex-col h-full bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 border border-slate-100 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
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
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
            </motion.article>
          ))}
        </motion.div>

        {/* --- Newsletter Section --- */}
        
      </main>
    </div>
  );
};

export default BlogPage;