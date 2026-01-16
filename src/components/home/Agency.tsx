import React from "react";
import { agencyData } from "@/data/homepage";

export default function Agency() {
  return (
    <section id="agency" className="py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight" data-aos="fade-up">
            We are the <span className="italic font-serif text-cyan-500 dark:text-cyan-400">anti-boring</span> software agency. We don't just write code; we engineer competitive advantages.
          </h2>
          <div className="space-y-6 md:space-y-8" data-aos="fade-up" data-aos-delay="200">
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              {agencyData.description}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-black/10 dark:border-white/10 pt-8">
              {agencyData.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
                  <p className="text-xs md:text-sm font-mono text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}