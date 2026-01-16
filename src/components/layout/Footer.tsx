"use client";
import { footerData } from "@/data/homepage";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 pt-16 md:pt-24 pb-8 md:pb-12 px-6 bg-slate-50 dark:bg-[#01040f] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6 text-2xl font-bold">
              <i className="fa-solid fa-wind text-cyan-500 dark:text-cyan-400"></i> {footerData.brand}
            </div>
            <p className="text-slate-500 max-w-sm text-base md:text-lg">
              {footerData.description}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">SITEMAP</h4>
            <ul className="space-y-4 text-slate-500">
              {footerData.links.map((link) => (
                <li key={link}><a href="#" className="hover:text-cyan-500 transition hoverable">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">SOCIALS</h4>
            <ul className="space-y-4 text-slate-500">
              {footerData.socials.map((link) => (
                <li key={link}><a href="#" className="hover:text-cyan-500 transition hoverable">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 dark:border-white/5 text-slate-500 text-sm">
          <p>{footerData.copyright}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             {footerData.legal.map(item => (
                 <a key={item} href="#" className="hoverable">{item}</a>
             ))}
          </div>
        </div>

        <div className="mt-12 md:mt-20 overflow-hidden text-slate-200 dark:text-white/5 select-none pointer-events-none">
          <h1 className="text-5xl font-bold text-center tracking-tighter animate-[wiggle_1s_ease-in-out_infinite] hover:scale-150 transition-all duration-500 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {footerData.bigText}
          </h1>
        </div>
      </div>
    </footer>
  );
}