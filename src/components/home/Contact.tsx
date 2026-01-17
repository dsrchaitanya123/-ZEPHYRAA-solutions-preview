import React from "react";
import { contactData } from "@/data/homepage";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden bg-white dark:bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent -z-10 dark:block hidden"></div>
      <div className="max-w-7xl mx-auto text-center" data-aos="zoom-in">
        <p className="text-cyan-500 dark:text-cyan-400 font-mono mb-4 md:mb-6">{contactData.label}</p>
        <h2 className="text-5xl md:text-9xl font-bold mb-8 md:mb-12 tracking-tight hover:text-stroke transition duration-700 cursor-default hoverable">
          {contactData.headline.line1} <br /> {contactData.headline.line2}
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center">
          <a
            href={`mailto:${contactData.email}`}
            className="w-full md:w-auto px-10 py-5 bg-cyan-500 text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition shadow-[0_0_40px_rgba(6,182,212,0.6)] hoverable"
          >
            {contactData.email}
          </a>
          <a
            href="/contact"
            className="w-full md:w-auto px-10 py-5 border border-black/20 dark:border-white/20 rounded-full font-bold text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition hoverable"
          >
            {contactData.btn}
          </a>
        </div>
      </div>
    </section>
  );
}