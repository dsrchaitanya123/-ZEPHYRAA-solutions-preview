"use client";

import { useEffect, useState } from "react";
import { careersData } from "@/data/careers";
import { ArrowRight, Briefcase, Zap, Globe, Sparkles } from "lucide-react";
 
export default function CareersPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white pt-32 pb-20 relative overflow-hidden">
 
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} 
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
     
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-xs font-bold tracking-widest mb-8 uppercase animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            {careersData.subtitle}
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter mb-10">
            {careersData.title} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x">
              {careersData.highlight}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
            {careersData.description}
          </p>
        </div>
 
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {careersData.perks.map((perk, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[32px] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white transition-colors group-hover:text-cyan-400">
                {perk.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
 
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black tracking-tight">Open Positions</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10 ml-8" />
          </div>
          
          {careersData.openings.map((job) => (
            <div
              key={job.id}
              className="group relative p-10 rounded-[32px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-all duration-500 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-8 overflow-hidden"
            >
           
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="text-cyan-500 py-1 px-2 bg-cyan-500/5 rounded">{job.dept}</span>
                  <span className="opacity-30">•</span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" /> {job.location}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {job.role}
                </h3>
              </div>

              <div className="flex items-center gap-6 relative z-10">
                <span className="hidden sm:block px-6 py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-sm font-bold uppercase tracking-tighter">
                  {job.type}
                </span>
                <div className="w-16 h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-cyan-500/20">
                  <ArrowRight className="w-7 h-7 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}