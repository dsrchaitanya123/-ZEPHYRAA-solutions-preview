import React, { useState } from "react";
import { faqData } from "@/data/homepage";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Added bg-white and ensured container is clean
    <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
          Common Questions
        </h2>
        <p className="text-slate-500 max-w-lg mx-auto">
          Everything you need to know about our product and billing.
        </p>
      </div>

      <div className="space-y-3">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 ${
                isOpen 
                  ? "bg-slate-50/50 border-slate-200 shadow-sm" 
                  : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                className="flex justify-between items-center p-5 md:p-6 w-full text-left outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${isOpen ? "bg-cyan-100 text-cyan-600" : "bg-slate-100 text-slate-400"}`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className={`font-medium md:font-semibold transition-colors ${isOpen ? "text-slate-900" : "text-slate-700"}`}>
                    {item.question}
                  </span>
                </div>
                
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-cyan-600" : ""
                  }`} 
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-[4.25rem] pr-6 pb-6 text-slate-600 leading-relaxed text-sm md:text-base">
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