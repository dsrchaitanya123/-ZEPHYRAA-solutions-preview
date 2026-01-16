"use client"
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { 
  Calendar, Clock, ArrowLeft, Facebook, Twitter, 
  Linkedin, Link as LinkIcon, Share2
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/blog-posts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ params }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFoundError, setNotFoundError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    // Find the post from centralized data
    const foundPost = BLOG_POSTS.find(p => p.slug === params.slug);
    
    if (!foundPost) {
      setNotFoundError(true);
    } else {
      setPost(foundPost);
    }
    
    setLoading(false);
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-slate-600 dark:text-slate-400">Loading article...</div>
      </div>
    );
  }

  if (notFoundError || !post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900/50 selection:text-blue-900 dark:selection:text-blue-100">
      
      {/* --- Navbar --- */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/blog" className="flex items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </a>
          <div className="flex gap-4">
             <button className="text-slate-400 hover:text-slate-900 dark:text-slate-600 dark:hover:text-slate-100" aria-label="Share">
                <Share2 size={20} />
             </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* --- Article Header --- */}
        <header className="mb-10 text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
             <span className="bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
               {post.category}
             </span>
             <span className="text-slate-400 dark:text-slate-600">•</span>
             <span className="text-slate-500 dark:text-slate-400 text-sm font-medium flex items-center">
               <Calendar size={14} className="mr-1" /> {post.date}
             </span>
           </div>

           <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
             {post.title}
           </h1>

           {/* Author Bio */}
           <div className="flex items-center justify-center md:justify-start border-y border-slate-100 dark:border-slate-800 py-6">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-white dark:ring-slate-800 shadow-sm" 
              />
              <div className="text-left">
                <p className="font-bold text-slate-900 dark:text-white">{post.author}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{post.role}</p>
              </div>
              <div className="ml-auto text-slate-500 dark:text-slate-400 text-sm hidden sm:flex items-center">
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
                   <p className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-4">Share</p>
                   <div className="flex flex-col gap-3">
                      <button className="flex items-center text-slate-600 dark:text-slate-400 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] transition-colors gap-3 text-sm font-medium">
                        <Twitter size={18} /> Twitter
                      </button>
                      <button className="flex items-center text-slate-600 dark:text-slate-400 hover:text-[#4267B2] dark:hover:text-[#4267B2] transition-colors gap-3 text-sm font-medium">
                        <Facebook size={18} /> Facebook
                      </button>
                      <button className="flex items-center text-slate-600 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] transition-colors gap-3 text-sm font-medium">
                        <Linkedin size={18} /> LinkedIn
                      </button>
                      <button className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors gap-3 text-sm font-medium">
                        <LinkIcon size={18} /> Copy Link
                      </button>
                   </div>
                 </div>
               </div>
            </aside>

            {/* Content Body */}
            <article className="lg:col-span-9">
               <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                 {post.content.map((block, index) => {
                   switch(block.type) {
                     case 'h2':
                       return <h2 key={index} className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-4">{block.text}</h2>;
                     case 'quote':
                       return (
                         <blockquote key={index} className="border-l-4 border-blue-600 dark:border-blue-500 pl-6 py-2 my-8 italic text-xl text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg">
                           "{block.text}"
                         </blockquote>
                       );
                     default: // paragraph
                       return <p key={index} className="text-slate-600 dark:text-slate-400 leading-8 mb-6 text-lg">{block.text}</p>;
                   }
                 })}
               </div>

               {/* Post-Read Engagement */}
               <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                     {['Architecture', 'Scalability', '2026 Trends', 'DevOps'].map(tag => (
                       <span key={tag} className="px-4 py-2 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                         #{tag}
                       </span>
                     ))}
                  </div>
               </div>
            </article>

        </div>
      </main>

      {/* --- Footer (Simplified) --- */}
      <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 mt-20 py-12 text-center">
         <p className="text-slate-500 dark:text-slate-400 mb-4">Enjoyed this article?</p>
         <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Subscribe to our newsletter</h3>
         <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-600/30">
           Get Updates
         </button>
      </footer>
    </div>
  );
};

export default BlogPostPage;