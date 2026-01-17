import React from "react";
import { contactData } from "@/data/homepage";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden bg-white">
      {/* Optional subtle background accent for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-50/50 via-transparent to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto text-center" data-aos="zoom-in">
        <p className="text-cyan-600 font-mono font-semibold mb-4 md:mb-6 uppercase tracking-wider">
          {contactData.label}
        </p>
        
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-8 md:mb-12 tracking-tighter text-slate-900 transition duration-700 cursor-default">
          {contactData.headline.line1} <br /> {contactData.headline.line2}
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center">
          {/* Primary CTA */}
          <a
            href={`mailto:${contactData.email}`}
            className="w-full md:w-auto px-10 py-5 bg-cyan-500 text-white rounded-full font-bold text-lg hover:bg-cyan-600 hover:scale-105 transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
          >
            {contactData.email}
          </a>

          {/* Secondary CTA */}
          <a
            href="/contact"
            className="w-full md:w-auto px-10 py-5 border border-slate-200 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-white transition-all active:scale-95"
          >
            {contactData.btn}
          </a>
        </div>
      </div>
    </section>
  );
}