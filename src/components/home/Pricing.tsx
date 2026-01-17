import React from "react";
import { pricingData } from "@/data/homepage";
import { Check, ArrowRight, Zap, Sparkles, Shield } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-white dark:bg-[#020617]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-200/20 via-transparent to-transparent dark:from-cyan-900/20 -z-10"></div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://shared-assets.adobe.com/link/f3a4693a-446a-497a-59c4-954f9a3994e0')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Pricing Models</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">Engagement</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Scalable solutions designed for every stage of growth. No hidden costs, just world-class execution.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((tier, idx) => {
            const isMiddle = tier.highlight;
            
            return (
              <div
                key={idx}
                className={`relative flex flex-col rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 group ${
                  isMiddle
                    ? "bg-white dark:bg-slate-900 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 scale-105 z-20"
                    : "bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50"
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {/* Popular Badge */}
                {isMiddle && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-[11px] font-bold tracking-tighter px-6 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-cyan-500/40">
                    <Zap className="w-3 h-3 fill-current" />
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-4 ${isMiddle ? "text-cyan-600 dark:text-cyan-400" : "text-slate-900 dark:text-white"}`}>
                    {tier.title}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="text-slate-500 font-medium text-lg">/project</span>
                    )}
                  </div>
                  <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {tier.description}
                  </p>
                </div>

                <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-8"></div>

                {/* Features List */}
                <ul className="space-y-5 mb-10 flex-grow">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4 text-slate-700 dark:text-slate-300 group/item">
                      <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                        isMiddle ? "bg-cyan-500 text-white" : "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                      }`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-[15px] font-medium leading-tight group-hover/item:text-cyan-600 transition-colors">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`group relative flex items-center justify-center gap-2 w-full py-5 text-center rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 ${
                    isMiddle
                      ? "bg-cyan-500 text-white shadow-xl shadow-cyan-500/30 hover:bg-cyan-600"
                      : "bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:shadow-lg"
                  }`}
                >
                  <span className="relative z-10">{tier.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Trust Footer */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-slate-400 dark:text-slate-500">
           <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold">Secure Payments</span>
           </div>
           <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden md:block"></div>
           <p className="text-sm font-medium">Need a custom quote? <a href="/contact" className="text-cyan-500 underline underline-offset-4">Talk to us</a></p>
        </div>
      </div>
    </section>
  );
}