"use client";

import { ArrowUpRight, Instagram, Linkedin, Github, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-slate-200 transition-colors duration-500 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Section - 5 Columns */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-2 group select-none">
              <div className="relative w-10 h-10 transition-all duration-500 group-hover:rotate-[360deg]">
                <Image src="/images/logo-zephyraa.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text group-hover:brightness-110 transition-all">
                ZEPHYRAA
              </span>
            </Link>
            <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
              We help startups and enterprises build world-class software with speed, clarity, and precision.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/zephyraa_solutions?igsh=MW0wZmY0d3gxdzQ2aA==" },
                { icon: <Github size={20} />, href: "#" },
              ].map((social, i) => (
                <Link key={i} href={social.href} className="p-3 rounded-full bg-slate-100 text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links - 3 Columns */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              {["Work", "Services", "About", "Contact", "Careers"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="group flex items-center gap-1 text-slate-600 hover:text-cyan-600 transition-colors">
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 4 Columns */}
          <div className="lg:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-200/60">
            <h4 className="font-bold text-slate-900 mb-6">Let&apos;s build something great.</h4>
            <div className="space-y-4 text-slate-600">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-cyan-600" />
                <p>hello@zephyraa.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-purple-600" />
                <p>Silicon Valley, CA<br />Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Background Text with Masking */}
        <div className="mt-20 relative select-none pointer-events-none">
          <h1 className="text-center text-[08vw] font-black tracking-tighter opacity-[0.07] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
            ZEPHYRAA
          </h1>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-200 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-500">
          <p>© {currentYear} Zephyraa Software Pvt Ltd.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-cyan-600 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-600 transition">Terms</Link>
            <Link href="/cookies" className="hover:text-cyan-600 transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}