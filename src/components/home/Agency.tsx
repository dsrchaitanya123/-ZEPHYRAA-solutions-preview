import React from "react";
import { agencyData } from "@/data/homepage";

export default function Agency() {
  return (
    <section id="agency" className="py-16 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-slate-900" data-aos="fade-up">
            We are the <span className="italic font-serif text-cyan-600">anti-boring</span> software agency. We don't just write code; we engineer competitive advantages.
          </h2>
          <div className="space-y-6 md:space-y-8" data-aos="fade-up" data-aos-delay="200">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {agencyData.description}
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              {agencyData.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm font-mono text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}