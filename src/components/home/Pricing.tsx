import React from "react";
import { pricingData } from "@/data/homepage";

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-50 dark:from-slate-900 dark:to-[#020617] -z-10 transition-colors duration-500"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-widest uppercase">Pricing Models</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Transparent Engagement</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((tier, idx) => (
            <div
              key={idx}
              className={`${
                tier.highlight
                  ? "border border-cyan-500/50 bg-cyan-50 dark:bg-cyan-900/10 hover:scale-[1.02] md:hover:scale-105"
                  : "border border-black/10 dark:border-white/10 bg-white dark:bg-transparent hover:shadow-2xl"
              } rounded-3xl p-6 md:p-8 relative transition duration-300 hoverable`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                  POPULAR
                </div>
              )}
              <h3 className={`text-xl font-bold ${tier.highlight ? "text-cyan-600 dark:text-cyan-400" : "text-slate-500 dark:text-slate-400"}`}>
                {tier.title}
              </h3>

              <div className="my-4 md:my-6">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 md:mb-8 h-auto md:h-12">{tier.description}</p>

              <ul className="space-y-4 mb-8 text-sm text-slate-700 dark:text-slate-300">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex gap-3">
                    <i className="fa-solid fa-check text-cyan-500"></i> {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 text-center rounded-xl font-bold hoverable transition ${
                  tier.highlight
                    ? "bg-cyan-500 text-white dark:text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "border border-black/10 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}