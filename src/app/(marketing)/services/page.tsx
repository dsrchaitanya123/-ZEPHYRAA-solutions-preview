"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRight, ArrowUpRight, LucideIcon } from "lucide-react";

import { HERO_CONTENT, SERVICES, TECH_STACK, PROCESS_STEPS } from "@/data/services";

// --- Interfaces ---
interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  desc: string;
  tags: string[];
}

interface TechStackColumnProps {
  title: string;
  items: string[];
  icon: LucideIcon;
}

interface ProcessStepProps {
  num: string;
  title: string;
  desc: string;
}

// --- Animation Variants ---
// Fixed: Removed duration and viewport from inside the variant
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 } // Transition can stay inside the variant target
  }
};

const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 max-w-[1400px] mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              {HERO_CONTENT.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1]">
              {HERO_CONTENT.title}<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
                {HERO_CONTENT.titleAccent}
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-lg mb-12 leading-relaxed font-medium">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              {HERO_CONTENT.stats.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-slate-200 text-indigo-600 rounded-xl shadow-sm">
                    <s.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{s.label}</h4>
                    <p className="text-sm text-slate-500 mt-1">{s.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.9, scale: 1.8 }} transition={{ duration: 1.2 }} className="relative">
            <DotLottieReact
              src="https://lottie.host/c05b00bf-1031-42c0-baab-bf751a1ebd28/EEYLqk5syy.lottie"
              loop autoplay className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }} // Fixed: 'once' belongs here on the component
            variants={fadeInUp} 
            className="mb-16 md:flex justify-between items-end"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Technical Capabilities</h2>
              <p className="text-slate-500 max-w-xl">Full-cycle development services designed for scalability and security.</p>
            </div>
            <a href="/blog" className="hidden md:flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all">
              View Case Studies <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUp} 
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Technology Ecosystem</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              We don't chase trends. We choose battle-tested, enterprise-grade technologies that ensure your software lasts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECH_STACK.map((col, i) => (
              <TechStackColumn key={i} {...col} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <motion.h2 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUp} 
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-20"
        >
          The Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={i} {...step} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-[1400px] mx-auto bg-slate-900 rounded-3xl p-12 md:p-20 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to build something serious?</h2>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2">
            Schedule Strategy Call <ArrowUpRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

// --- Sub-Components ---

function ServiceCard({ title, icon: Icon, desc, tags }: ServiceCardProps) {
  return (
    <motion.div 
      variants={fadeInUp} 
      whileHover={{ y: -8 }} 
      className="group p-8 bg-white border border-slate-200 rounded-xl hover:border-indigo-600/30 transition-all hover:shadow-xl flex flex-col"
    >
      <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-8 flex-grow">{desc}</p>
      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
        {tags.map((t) => (
          <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

function TechStackColumn({ title, items, icon: Icon }: TechStackColumnProps) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="flex items-center gap-2 text-indigo-400 mb-4">
        <Icon size={20} />
        <h4 className="font-bold text-white">{title}</h4>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProcessStep({ num, title, desc }: ProcessStepProps) {
  return (
    <motion.div whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }} className="bg-white p-10 group">
      <span className="block text-4xl font-black text-slate-200 mb-6 group-hover:text-indigo-600/20">{num}</span>
      <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}