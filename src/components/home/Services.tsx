import React from "react";
import { servicesData } from "@/data/homepage";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between md:items-end gap-6" data-aos="fade-up">
        <div className="space-y-2">
          <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase font-bold">
            {servicesData.topTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {servicesData.heading}
          </h2>
        </div>
        <a href="#" className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all font-medium">
          {servicesData.cta}
          <span className="block w-5 h-[1px] bg-current transition-all group-hover:w-8"></span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
        {servicesData.cards.map((card, idx) => {
  const Icon = card.icon;
  return (
    <div
      key={idx}
      className={`${card.colSpan} group relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-1`}
      data-aos="fade-up"
      data-aos-delay="0" 
      data-aos-offset="50" 
    >
            
              <div className="absolute inset-0 z-0">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                />
              
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

           
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 mb-4`}>
                      <Icon className={`w-6 h-6 text-white`} />
                   </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {card.description}
                  </p>

                  {card.tags && (
                    <div className="flex gap-2 flex-wrap">
                      {card.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-wider text-white border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15)_0%,transparent_80%)]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}