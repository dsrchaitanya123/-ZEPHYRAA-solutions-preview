"use client";
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Loader2, 
  CheckCircle2, 
  User, 
  Mail, 
  MessageSquare,
  Globe,
  MapPin,
  Briefcase,
  Layers
} from 'lucide-react';

// Type definition for country data
interface Country {
  name: string;
  code: string;
  flag: string;
  cca2: string;
}

export default function ProfessionalSquareForm({ className = "" }: { className?: string }) {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [service, setService] = useState("");

  // Country API State
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<string>("+91");

  // Fetch Country Codes on Mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,flags,cca2');
        const data = await response.json();
        
        const formattedCountries = data
          .filter((c: any) => c.idd.root)
          .map((c: any) => ({
            name: c.name.common,
            code: `${c.idd.root}${c.idd.suffixes ? c.idd.suffixes[0] : ''}`, 
            flag: c.flags.svg,
            cca2: c.cca2
          }))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
        setLoadingCountries(false);
      } catch (error) {
        console.error("Failed to fetch country codes", error);
        setCountries([
            { name: "India", code: "+91", flag: "", cca2: "IN" },
            { name: "USA", code: "+1", flag: "", cca2: "US" },
            { name: "UK", code: "+44", flag: "", cca2: "GB" }
        ]);
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    console.log("Service Selected:", service);
    setTimeout(() => setFormState('success'), 2000);
  };

  // --- Success State View ---
  if (formState === 'success') {
    return (
      <div className={`p-4 md:p-0 ${className}`}>
        <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300 max-w-lg mx-auto mt-10">
          <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mb-4 ring-4 ring-violet-100">
            <CheckCircle2 size={32} strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Submission Received</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">Your details have been securely transmitted to our team. We will review your request and respond shortly.</p>
          <button 
            onClick={() => {
              setFormState('idle');
              setService("");
            }}
            className="w-full md:w-auto text-violet-700 text-sm font-semibold hover:text-violet-900 flex items-center justify-center gap-2 transition-colors rounded-md px-6 py-3 bg-violet-50 hover:bg-violet-100"
          >
            Reset Form <ArrowRight size={16}/>
          </button>
        </div>
      </div>
    );
  }

  // --- Optimized Styles for Mobile ---
  // text-base on mobile is CRITICAL to prevent iOS auto-zoom on focus
  const inputClasses = "w-full bg-white border border-slate-300 rounded-lg pl-11 pr-4 py-3.5 md:py-2.5 text-base md:text-sm text-slate-900 focus:border-violet-600 focus:ring-1 focus:ring-violet-600 outline-none transition-all placeholder:text-slate-400 shadow-sm appearance-none";
  
  // Adjusted icon position for taller mobile inputs
  const iconClasses = "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-violet-600 transition-colors";
  
  const labelClasses = "block text-xs font-bold text-slate-700 mb-1.5 ml-1 uppercase tracking-wider";

  return (
    <div className={`w-full flex justify-center ${className}`}>
      
      <div className="w-full max-w-xl bg-white md:border md:border-slate-200 md:rounded-xl md:shadow-lg p-5 pb-10 md:p-8">
        
        {/* Header */}
        <div className="mb-8 border-b border-slate-100 pb-5">
          <h3 className="text-2xl md:text-xl font-bold text-slate-900 tracking-tight">
            Corporate Inquiry
          </h3>
          <p className="text-slate-500 text-sm mt-2">
            Please provide your business details below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Name & Email - Stacks on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
            <div className="group relative">
              <label className={labelClasses}>Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className={iconClasses}>
                  <User size={18} strokeWidth={2} />
                </div>
                <input required type="text" className={inputClasses} placeholder="John Doe" />
              </div>
            </div>

            <div className="group relative">
              <label className={labelClasses}>Work Email <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className={iconClasses}>
                  <Mail size={18} strokeWidth={2} />
                </div>
                <input required type="email" inputMode="email" className={inputClasses} placeholder="john@company.com" />
              </div>
            </div>
          </div>

          {/* Row 2: Phone with API Dropdown */}
          <div>
             <label className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
             <div className="flex gap-3">
                {/* Country Code Select - Fixed Width but flexible content */}
                <div className="relative w-[110px] sm:w-[130px] shrink-0 group">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-violet-600 z-10">
                      {loadingCountries ? <Loader2 size={16} className="animate-spin"/> : <Globe size={18} strokeWidth={2} />}
                   </div>
                   <select 
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-2 py-3.5 md:py-2.5 text-base md:text-sm text-slate-900 focus:border-violet-600 focus:ring-1 focus:ring-violet-600 outline-none appearance-none cursor-pointer transition-all shadow-sm"
                    >
                        {loadingCountries ? (
                          <option>...</option>
                        ) : (
                          countries.map((country, idx) => (
                            <option key={`${country.cca2}-${idx}`} value={country.code}>
                              {country.cca2} ({country.code})
                            </option>
                          ))
                        )}
                   </select>
                </div>

                {/* Phone Input */}
                <div className="relative w-full group">
                   <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-violet-600 transition-colors">
                      <span className="text-xs font-semibold mr-1 text-slate-500 group-focus-within:text-violet-600">{selectedCountry}</span>
                   </div>
                   <input required type="tel" inputMode="tel" className={`${inputClasses} pl-16`} placeholder="98765 43210" />
                </div>
             </div>
          </div>

          {/* Row 3: Service & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
            <div className="group relative">
              <label className={labelClasses}>Service Required <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className={iconClasses}>
                  <Layers size={18} strokeWidth={2} />
                </div>
                
                <select 
                  required
                  value={service} 
                  onChange={(e) => setService(e.target.value)}
                  className={`${inputClasses} cursor-pointer`}
                >
                    <option value="" disabled>Select Service</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo">SEO</option>
                    <option value="app-dev">App Development</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="cloud">Cloud Solutions</option>
                </select>

                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <label className={labelClasses}>Location</label>
              <div className="relative">
                <div className={iconClasses}>
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <input type="text" className={inputClasses} placeholder="City, Country" />
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="group relative">
              <label className={labelClasses}>Company Name</label>
              <div className="relative">
                <div className={iconClasses}>
                  <Briefcase size={18} strokeWidth={2} />
                </div>
                <input type="text" className={inputClasses} placeholder="Organization Name" />
              </div>
          </div>

          {/* Message Area */}
          <div className="group relative">
            <label className={labelClasses}>Project Brief <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="absolute top-3.5 left-3.5 text-slate-400 group-focus-within:text-violet-600 transition-colors pointer-events-none">
                <MessageSquare size={18} strokeWidth={2} />
              </div>
              <textarea 
                rows={4} 
                required
                className={`${inputClasses} resize-y min-h-[120px]`}
                placeholder="Please describe your project requirements..." 
              />
            </div>
          </div>

          {/* Mobile-Optimized Button */}
          <div className="pt-2">
            <button 
              type="submit"
              disabled={formState === 'loading'}
              className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-bold text-base py-4 md:py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed group touch-manipulation"
            >
              {formState === 'loading' ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed px-4">
                By submitting this form, you acknowledge that you agree to our <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}