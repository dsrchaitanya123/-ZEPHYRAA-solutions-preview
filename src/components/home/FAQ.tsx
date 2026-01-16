import React, { useState } from "react";
import { faqData } from "@/data/homepage";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
          Common Questions
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Everything you need to know about our product and billing.
        </p>
      </div>

      <div className="space-y-4" data-aos="fade-up">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          
          return (
            <div
              key={idx}
              className={`group rounded-2xl border transition-all duration-300 ${
                isOpen 
                  ? "bg-slate-50 border-slate-200 dark:bg-white/10 dark:border-white/20" 
                  : "bg-white border-black/5 dark:bg-white/5 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                className="flex justify-between items-center p-6 w-full text-left outline-none"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`w-5 h-5 transition-colors ${isOpen ? "text-cyan-500" : "text-slate-400"}`} />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {item.question}
                  </span>
                </div>
                
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-180 text-cyan-500" : ""
                  }`} 
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-15 pl-[3.5rem] pr-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}