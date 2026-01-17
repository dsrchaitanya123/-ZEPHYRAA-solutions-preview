"use client";

import { useEffect, useState } from "react";
import { careersData } from "@/data/careers";
import { ArrowRight, Briefcase, Globe, Sparkles,  } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface JobOpening {
  id: string | number;
  role: string;
  dept: string;
  location: string;
  type: string;
}

export default function CareersPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWhatsAppApply = (role: string = "a position") => {
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(`Hello! I'm interested in applying for the ${role} position.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!mounted) return <div className="min-h-screen bg-[#050505]" />;

  const openings = (careersData.openings as JobOpening[]) || [];
  const hasOpenings = openings.length > 0;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-900 dark:text-neutral-200 relative overflow-hidden font-sans selection:bg-blue-500/20">
      
      {/* --- Ambient Background Elements --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
        <div 
            className="absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
            style={{ 
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                filter: 'contrast(150%) brightness(100%)'
            }} 
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-32 pb-24">
        
        {/* --- Hero Section --- */}
        <header className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {careersData.subtitle || "Careers"}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 tracking-tight"
          >
            {careersData.title} <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x">{careersData.highlight}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl"
          >
            {careersData.description}
          </motion.p>
        </header>

        {/* --- Open Positions Section --- */}
        <section className="relative">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
              Available Roles ({openings.length})
            </h2>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-white/10 ml-8" />
          </div>
          
          <div className="grid gap-4">
            <AnimatePresence mode="popLayout">
              {hasOpenings ? (
                openings.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => handleWhatsAppApply(job.role)}
                    className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm p-1 transition-all hover:border-blue-500/50 cursor-pointer"
                  >
                    <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                            {job.dept}
                          </span>
                          <div className="flex items-center gap-1.5 text-neutral-500 text-xs">
                            <Globe className="w-3 h-3" />
                            {job.location}
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                          {job.role}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-sm text-neutral-500 font-medium">{job.type}</span>
                        <div className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <ArrowRight className="w-5 h-5 text-white dark:text-black group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-32 rounded-3xl border-2 border-dashed border-neutral-200 dark:border-white/5"
                >
                  <Briefcase className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">No active openings</h3>
                  <p className="text-neutral-500 mb-8">But we are always looking for amazing people.</p>
                  <button 
                    onClick={() => handleWhatsAppApply("General Application")}
                    className="bg-neutral-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors inline-flex items-center gap-2"
                  >
                    Drop your CV <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* --- Footer Tagline --- */}
        <footer className="mt-32 pt-8 border-t border-neutral-200 dark:border-white/5 text-center">
          <p className="text-neutral-500 text-sm">
            Don't see a role? Reach out to us at <span className="text-neutral-900 dark:text-white font-medium underline underline-offset-4 cursor-pointer">talent@yourbrand.com</span>
          </p>
        </footer>
      </div>
    </div>
  );
}