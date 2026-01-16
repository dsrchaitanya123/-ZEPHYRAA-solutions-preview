"use client";

import { ArrowUpRight, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="relative bg-slate-50 dark:bg-[#01040f] border-t border-black/5 dark:border-white/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
          <Link
  href="/"
  className="flex items-center gap-2 group select-none"
>
  <div
    className="relative w-9 h-9 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-[2px]"
  >
    <Image
      src="/images/logo-zephyraa.png"
      alt="Zephyraa Logo"
      fill
      className="object-contain"
    />
  </div>

  <span
    className="
      text-xl md:text-2xl font-extrabold tracking-tight
      bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
      dark:from-pink-400 dark:via-purple-400 dark:to-blue-400
      text-transparent bg-clip-text
      transition-all duration-300
      group-hover:brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]
    "
  >
    ZEPHYRAA
  </span>
</Link>

            <p className="text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
              We help startups and enterprises build world-class software with speed, clarity and precision.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Sitemap</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-1 group hover:text-cyan-500 transition"
                  >
                    {item}
                    <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Social</h4>
            <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400">
              <a href="#" className="hover:text-cyan-500 transition"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-cyan-500 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-cyan-500 transition"><Github size={20} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/5 dark:border-white/10 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-500 gap-4">
          <p>© 2026 Zephyraa Software Pvt Ltd.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-500 transition">Terms of Service</a>
          </div>
        </div>

        {/* Big Text */}
        <div className="mt-16 select-none pointer-events-none">
          <h1 className="text-center text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent opacity-10 dark:opacity-15 animate-[shimmer_4s_linear_infinite]">
            ZEPHYRAA
          </h1>
        </div>
      </div>
    </footer>
  );
}
