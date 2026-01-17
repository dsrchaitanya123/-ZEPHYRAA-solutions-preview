"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_DATA, PROCESS_STEPS, ABOUT_SECTIONS } from '@/data/about';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-gray-900 selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-1.5 border border-gray-200 rounded-full bg-white/50 backdrop-blur-sm"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              Est. {BRAND_DATA.founded} — {BRAND_DATA.location}
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-8 tracking-tighter"
          >
            {BRAND_DATA.name}<span className="text-blue-600">.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {BRAND_DATA.tagline} {BRAND_DATA.heroDescription}
          </motion.p>
        </div>
      </header>

      {/* --- STORY SECTIONS (DYNAMIC) --- */}
      {ABOUT_SECTIONS.map((section, index) => (
        <StorySection 
          key={index}
          tag={section.tag}
          title={section.title}
          image={section.image}
          reversed={section.reversed}
          stats={section.stats}
        >
          {section.paragraphs.map((p, pIdx) => (
            <p key={pIdx}>{p}</p>
          ))}
        </StorySection>
      ))}

      {/* --- THE BLUEPRINT (PROCESS) --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">The Blueprint</h2>
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Our operational DNA</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="relative group">
                <div className="text-6xl font-black text-gray-200 mb-4 group-hover:text-blue-500/20 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

// --- Reusable Components ---
const StorySection = ({ tag, title, image, children, reversed, stats }: any) => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        viewport={{ once: true }}
        className={`relative group ${reversed ? 'md:order-2' : ''}`}
      >
        <div className="absolute -inset-4 bg-gray-50 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
        <img 
          src={image} 
          alt={title} 
          className="relative rounded-xl shadow-xl z-10 grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/3] object-cover"
        />
      </motion.div>
      
      <motion.div {...fadeInUp} className={reversed ? 'md:order-1' : ''}>
        <p className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4">{tag}</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">{title}</h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          {children}
        </div>
        {stats && (
          <div className="flex gap-12 pt-8 border-t border-gray-100 mt-8">
            {stats.map((stat: any, sIdx: number) => (
              <CounterStat key={sIdx} value={stat.value} label={stat.label} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

const CounterStat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <p className="text-4xl font-bold text-gray-900">{value}</p>
    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{label}</p>
  </div>
);

export default AboutPage;