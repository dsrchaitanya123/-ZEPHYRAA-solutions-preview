"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Loader2, 
  CheckCircle2, 
  Search,
  ChevronDown,
  X
} from 'lucide-react';

// --- Types ---
interface Country {
  name: string;
  code: string;
  flag: string;
  cca2: string;
}

// --- Constants ---
const PRIORITY_COUNTRIES = ['IN', 'US', 'GB', 'AE', 'CA', 'AU'];

export default function WhiteModernForm({ className = "" }: { className?: string }) {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    businessType: '',
    location: '',
    message: ''
  });

  // Country API & Search State
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<Country>({ name: "India", code: "+91", flag: "https://flagcdn.com/in.svg", cca2: "IN" });
  
  // Dropdown specific state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- Fetch Countries ---
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,flags,cca2');
        const data = await response.json();
        
        const formatted: Country[] = data
          .filter((c: any) => c.idd.root)
          .map((c: any) => ({
            name: c.name.common,
            code: `${c.idd.root}${c.idd.suffixes ? c.idd.suffixes[0] : ''}`, 
            flag: c.flags.svg,
            cca2: c.cca2
          }));

        // Sort: Priority first, then Alphabetical
        formatted.sort((a, b) => {
          const indexA = PRIORITY_COUNTRIES.indexOf(a.cca2);
          const indexB = PRIORITY_COUNTRIES.indexOf(b.cca2);
          if (indexA !== -1 && indexB !== -1) return indexA - indexB;
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;
          return a.name.localeCompare(b.name);
        });

        setCountries(formatted);
        const defaultCountry = formatted.find(c => c.cca2 === 'IN') || formatted[0];
        if (defaultCountry) setSelectedCountry(defaultCountry);
        
      } catch (error) {
        console.error("Failed to load countries", error);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  // --- Click Outside to Close Dropdown ---
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Filtering Logic ---
  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.code.includes(searchQuery) ||
    c.cca2.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    await new Promise(r => setTimeout(r, 2000)); // Simulate API
    setFormState('success');
  };

  // --- Styles (Light Mode) ---
  const inputGroupStyles = "relative group";
  // Border bottom only, light colors
  const inputStyles = "w-full bg-transparent border-b border-slate-300 text-slate-900 text-sm py-3 focus:border-emerald-500 outline-none transition-colors placeholder:text-slate-400";

  // --- Success View ---
  if (formState === 'success') {
    return (
      <div className={`flex justify-center items-center min-h-[400px] bg-white p-6  border border-slate-200 shadow-xl ${className}`}>
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
          <p className="text-slate-500 text-sm mb-6">Our team will connect with you shortly.</p>
          <button 
            onClick={() => setFormState('idle')}
            className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      
      {/* Container - White BG, clean shadow */}
      <div className="relative bg-white p-8 md:p-10   border border-slate-200 shadow-xl shadow-slate-200/50">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Drop Us a Message
        </h2>
        <p className="text-slate-500 text-xs mb-8">
          We'd love to hear from you. Fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name */}
          <div className={inputGroupStyles}>
            <input 
              name="name" 
              required 
              placeholder="Name*" 
              className={inputStyles} 
              onChange={handleChange}
            />
          </div>

          {/* Phone Row (Custom Dropdown + Number) */}
          <div className="flex items-end gap-4">
            
            {/* Custom Country Dropdown */}
            <div className="relative w-[110px] shrink-0" ref={dropdownRef}>
              <div 
                onClick={() => !loadingCountries && setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-between gap-2 py-3 border-b ${isDropdownOpen ? 'border-emerald-500' : 'border-slate-300'} cursor-pointer hover:border-emerald-400 transition-colors`}
              >
                {loadingCountries ? (
                  <Loader2 size={16} className="animate-spin text-emerald-500" />
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <img 
                        src={selectedCountry.flag} 
                        alt="Flag" 
                        className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm" 
                      />
                      <span className="text-slate-900 text-sm font-medium">{selectedCountry.code}</span>
                    </div>
                    <ChevronDown size={14} className={`text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </>
                )}
              </div>

              {/* The Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 z-50 mt-1 w-[260px] bg-white rounded-lg shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
                  {/* Search Box */}
                  <div className="p-2 border-b border-slate-100 sticky top-0 bg-white rounded-t-lg">
                    <div className="relative">
                      <Search size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
                      <input 
                        autoFocus
                        type="text"
                        placeholder="Search country..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-md py-1.5 pl-8 pr-3 text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* List */}
                  <div className="max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((c, i) => (
                        <div 
                          key={i}
                          onClick={() => {
                            setSelectedCountry(c);
                            setIsDropdownOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-3 px-3 py-2 hover:bg-emerald-50 cursor-pointer transition-colors"
                        >
                          <img src={c.flag} alt="" className="w-5 h-3.5 object-cover rounded-[1px]" />
                          <span className="text-slate-600 text-xs">{c.name}</span>
                          <span className="text-slate-400 text-xs ml-auto">{c.code}</span>
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-4 text-center text-xs text-slate-400">
                        No countries found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Phone Number Input */}
            <div className={`${inputGroupStyles} w-full`}>
               <input 
                 name="phone" 
                 required 
                 type="tel"
                 placeholder="Phone No*" 
                 className={inputStyles} 
                 onChange={handleChange}
               />
            </div>
          </div>

          {/* Email & Service Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-4">
            <div className={`${inputGroupStyles} w-full md:w-1/2`}>
              <input 
                name="email" 
                required 
                type="email"
                placeholder="Email*" 
                className={inputStyles} 
                onChange={handleChange}
              />
            </div>
            
            <div className={`${inputGroupStyles} w-full md:w-1/2`}>
               <select 
                 name="service"
                 required
                 className={`${inputStyles} cursor-pointer appearance-none text-slate-500 focus:text-emerald-600`}
                 onChange={handleChange}
                 defaultValue=""
               >
                 <option value="" disabled hidden>Service*</option>
                 <option value="web">Web Design & Dev</option>
                 <option value="app">App Development</option>
                 <option value="seo">SEO & Marketing</option>
                 <option value="uiux">UI/UX Design</option>
               </select>
               {/* Custom Arrow for Select */}
               <div className="absolute right-0 bottom-4 pointer-events-none text-slate-400">
                 <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                   <path d="M5 6L0 0H10L5 6Z"/>
                 </svg>
               </div>
            </div>
          </div>

          {/* Business Type */}
          <div className={inputGroupStyles}>
            <input 
              name="businessType" 
              placeholder="Which Business do you have?*" 
              className={inputStyles} 
              onChange={handleChange}
            />
          </div>

          {/* Location */}
          <div className={inputGroupStyles}>
            <input 
              name="location" 
              required
              placeholder="Location*" 
              className={inputStyles} 
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div className={inputGroupStyles}>
            <textarea 
              name="message" 
              required
              rows={1}
              placeholder="Message*" 
              className={`${inputStyles} resize-none min-h-[40px]`} 
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit"
              disabled={formState === 'loading'}
              // Using emerald-400 for that "Neon-ish" look but readable on white, or stick to the exact green from the image
              className="w-full   bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x hover:bg-[#3ecf73] text-emerald-950 font-bold py-4 px-6 rounded-md transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-pink-500"
            >
              {formState === 'loading' ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <>
                  <span className="uppercase tracking-wide text-sm text-white">Connect With Zephyraa Today</span>
                  <ArrowUpRight size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform text-white   " />
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}