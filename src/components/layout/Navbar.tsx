"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Briefcase, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { 
    name: 'Resources', 
    href: '#', 
    dropdown: [
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'Global', href: '/global', icon: Globe },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out h-16
      ${scrolled 
        ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm' 
        : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl h-full flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group select-none">
          <div className="relative w-13 h-13 transition-transform duration-300 ">
            <Image
              src="/images/logo-zephyraa.png"
              alt="Zephyraa Logo"
              fill
              className="object-contain"
            />
          </div>

        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <div key={item.name} className="relative group px-1">
              <Link 
                href={item.href} 
                className={`flex items-center gap-1 text-sm font-bold transition-all duration-300 px-3 py-2 rounded-full
                  ${isActive(item.href) 
                    ? 'text-cyan-600 bg-cyan-50' 
                    : 'text-slate-600 hover:bg-slate-100'
                  }`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </Link>

              {item.dropdown && (
                <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-2">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent rounded-xl transition-all group/item"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 group-hover/item:text-cyan-500 transition-colors">
                          <subItem.icon className="w-4 h-4" />
                        </div>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-4">
          <Link 
            href="/services" 
            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-cyan-500/20 group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 text-slate-900 transition-all active:scale-90"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div className={`
        absolute top-full left-0 w-full bg-white backdrop-blur-xl border-b border-slate-200 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden
        ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-6 py-8 flex flex-col space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="space-y-2">
                  <button 
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex w-full items-center justify-between py-2 text-lg font-bold text-slate-800"
                  >
                    {item.name}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180 text-cyan-500' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 rounded-2xl ${mobileDropdownOpen ? 'max-h-64 bg-slate-50 py-2' : 'max-h-0'}`}>
                    {item.dropdown.map(subItem => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        className="flex items-center gap-4 px-6 py-3 text-slate-600 font-semibold"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <subItem.icon className="w-5 h-5 text-cyan-500" />
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className={`block py-2 text-lg font-bold ${isActive(item.href) ? 'text-cyan-600' : 'text-slate-800'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <Link 
            href="/get-started" 
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-cyan-500/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}