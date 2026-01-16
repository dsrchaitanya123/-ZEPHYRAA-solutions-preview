"use client";

import  { useEffect, useRef, useState } from "react";
import { heroData } from "@/data/homepage";
import VanillaTilt from "vanilla-tilt";

import { Play, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 500,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  if (!mounted) return <section className="min-h-screen bg-white dark:bg-[#050505]" />;

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#050505]">
      

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-cyan-500/10 dark:bg-cyan-900/20 rounded-full blur-[140px] animation-delay-2000" />
        
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none brightness-100 contrast-150" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        

        <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 text-slate-600 dark:text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest mb-8 w-fit backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {heroData.availability || "AVAILABLE FOR NEW PROJECTS"}
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black leading-[0.85] tracking-[-0.04em] mb-8 text-slate-900 dark:text-white">
            {heroData.headline.line1} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x">
              {heroData.headline.highlight}
            </span> <br />
            <span className="text-slate-400 dark:text-slate-500">
              {heroData.headline.line2}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mb-10 font-medium leading-relaxed">
            {heroData.subtext}
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] active:scale-95">
              <span className="relative z-10">{heroData.primaryBtn}</span>
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <button className="group px-10 py-5 border-2 border-slate-200 dark:border-white/10 rounded-2xl font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 flex items-center gap-3 active:scale-95">
               <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-colors">

                 <Play className="w-3 h-3 fill-current ml-0.5" />
               </div>
              {heroData.secondaryBtn}
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block" data-aos="fade-left" data-aos-duration="1200">
          <div className="relative perspective-2000">
             <div ref={tiltRef} className="relative w-full aspect-[4/5] max-w-[500px] ml-auto overflow-hidden rounded-[40px] border border-white/20 shadow-2xl group">
                <img
                  src={heroData.floatingCard.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  alt="Featured Work"
                />
                
                <div className="absolute inset-x-5 bottom-5 p-6 backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-[30px] flex justify-between items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <p className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase mb-1">
                      {heroData.floatingCard.label || "Featured Project"}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {heroData.floatingCard.title || "Modern Dashboard"}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
     
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
             </div>

             <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 -z-10 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}