"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Newspaper, ArrowRight, Zap, ShieldCheck, Rocket, 
  LayoutGrid, Sparkles, MessageSquare, CheckCircle2 
} from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';
import { GLOBAL_STATS, CORE_FEATURES, TESTIMONIALS, BENTO_VALUES } from '@/data/globals';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function GlobalPage() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Fallback for News
  const latestNews = BLOG_POSTS ? [...BLOG_POSTS].sort(() => 0.5 - Math.random()).slice(0, 3) : [];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-cyan-200">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-20 px-6 h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yRange }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Global network"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/95"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Connect the world <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              without limits.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience ultra-low latency satellite connectivity engineered for the next generation of digital infrastructure. Secure, scalable, and built for speed.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6 text-sm text-slate-400"
          >
            <p>Trusted by industry leaders:</p>
            <div className="flex gap-6 opacity-70 grayscale">
              <span className="font-semibold">ACME Corp</span>
              <span className="font-semibold">Stark Ind</span>
              <span className="font-semibold">Wayne Ent</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="bg-slate-900 text-white py-12 relative -mt-10 rounded-t-[3rem] z-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {GLOBAL_STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-blue-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CORE ENGINE (FEATURES) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Engine</h2>
            <p className="text-slate-600 text-lg">We replace complex legacy infrastructure with high-performance global networks.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {CORE_FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENTO GRID --- */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* High Velocity Card */}
            <motion.div 
              {...fadeInUp}
              className="md:col-span-2 bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl"
            >
              <Zap className="w-12 h-12 text-yellow-400" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">High-Velocity Shipping</h3>
                <p className="text-blue-200 text-lg">We don't just write code; we ship solutions at the speed of thought.</p>
              </div>
            </motion.div>

            {/* Values Cards */}
            {BENTO_VALUES.filter(v => v.type === 'small').map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <val.icon className="w-10 h-10 text-slate-900" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-slate-500 text-sm">{val.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Innovation Card */}
            <motion.div 
              {...fadeInUp}
              className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation for Impact</h3>
                <p className="text-slate-600 mb-6">Whether it's SaaS tools or rural education digitization, our technology solves real-world problems.</p>
                <div className="flex gap-2">
                  {['React', 'Next.js', 'AI/ML'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600">{tag}</span>
                  ))}
                </div>
              </div>
              <Rocket className="w-16 h-16 text-blue-600 animate-bounce" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-slate-900 text-white relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-12 gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs">
            <MessageSquare size={16} /> Community Feedback
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeInUp}
                className="bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl border border-slate-700"
              >
                <p className="text-xl md:text-2xl font-serif text-slate-200 mb-8 leading-relaxed italic">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">{item.author.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-white">{item.author}</div>
                    <div className="text-slate-500 text-sm">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
     
    </main>
  );
}