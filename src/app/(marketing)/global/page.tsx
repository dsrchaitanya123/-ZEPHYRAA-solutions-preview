import React from 'react';
import Image from 'next/image';
import { 
  Globe2, Newspaper, TrendingUp, ArrowRight, MapPin, 
  Users, Zap, ShieldCheck, Rocket, LayoutGrid 
} from 'lucide-react';

// --- Mock Data ---
const stats = [
  { label: "Cities Active", value: "12+" },
  { label: "Enterprise Clients", value: "50+" },
  { label: "Lives Impacted", value: "100k+" },
  { label: "Uptime Global", value: "99.9%" },
];

const newsUpdates = [
  {
    id: 1,
    title: "Zephyraa Launches Initiative to Digitize Rural Education",
    date: "Jan 10, 2026",
    category: "Social Impact",
    summary: "Partnering with local institutions to bring modern IT frameworks to rural classrooms.",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Breezing Through Complexity: New SaaS Tools Unveiled",
    date: "Dec 15, 2025",
    category: "Product Launch",
    summary: "Our latest suite of web development tools is here, embodying our tagline: Innovating for Impact.",
    color: "bg-cyan-500"
  },
  {
    id: 3,
    title: "Zephyraa Recognised as Top Emerging IT Startup of 2026",
    date: "Feb 01, 2026",
    category: "Awards",
    summary: "Listed among the top 50 emerging tech companies driving digital excellence.",
    color: "bg-indigo-500"
  }
];

const locations = [
  { city: "Hyderabad", country: "India", type: "HQ", coordinates: "17°N, 78°E" },
  { city: "Bangalore", country: "India", type: "Dev Center", coordinates: "12°N, 77°E" },
  { city: "Remote", country: "Worldwide", type: "Hub", coordinates: "Global" },
];

export default function GlobalPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-cyan-200">
      
      {/* 1. HERO SECTION: Modern & Clean */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-60" />
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[100px] opacity-60" />
          <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-blue-600 tracking-widest uppercase mb-8">
            <Globe2 className="w-3 h-3" />
            Global Footprint
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Code Without <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x">
              Borders.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            From Hyderabad to the world. We are breezing through complexity to deliver 
            digital excellence across every time zone.
          </p>
        </div>
      </section>

      {/* 2. STATS BAR: High Contrast */}
      <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-blue-200 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LOCATIONS: Tech Card Style */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Strategically Positioned.
            </h2>
            <p className="text-slate-600 text-lg">
              While rooted in India's tech hubs, our digital infrastructure allows us to operate seamlessly as a global entity.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-full font-semibold transition-colors mt-6 md:mt-0">
            <MapPin className="w-4 h-4" /> View Network
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div key={idx} className="group relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-8 right-8 p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{loc.type}</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">{loc.city}</h3>
                <p className="text-slate-500 font-medium mb-4">{loc.country}</p>
                <div className="inline-block px-3 py-1 bg-slate-50 text-slate-400 text-xs rounded font-mono">
                  {loc.coordinates}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALUES BENTO GRID: New Section */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Zephyraa Way</h2>
            <p className="text-slate-600 mt-4">Our core principles that drive global innovation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Zap className="w-12 h-12 text-yellow-400" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">High-Velocity Shipping</h3>
                <p className="text-blue-200 text-lg">We don't just write code; we ship solutions. Speed and precision are our currency in the global market.</p>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Integrity First</h3>
                <p className="text-slate-500 text-sm">Transparent workflows for clients from New York to New Delhi.</p>
              </div>
            </div>

             {/* Small Card 2 */}
             <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Scalable Systems</h3>
                <p className="text-slate-500 text-sm">Building architectures that grow as fast as your ambition.</p>
              </div>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation for Impact</h3>
                <p className="text-slate-600 mb-6">Whether it's SaaS tools or rural education digitization, our technology is designed to solve real-world problems.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold">React</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold">Next.js</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold">AI/ML</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 h-full min-h-[150px] bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                <Rocket className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWS SECTION: Magazine Style */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-wider text-xs mb-4">
          <Newspaper className="w-4 h-4" />
          <span>Newsroom</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Latest from the HQ</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {newsUpdates.map((news) => (
            <article key={news.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-video mb-6">
                 {/* Visual Placeholder */}
                <div className={`absolute inset-0 ${news.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-slate-400" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-2 h-2 rounded-full ${news.color}`}></span>
                <span className="text-xs font-bold uppercase text-slate-500">{news.category}</span>
                <span className="text-xs text-slate-400 border-l border-slate-300 pl-3">{news.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {news.summary}
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Read Story <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </article>
          ))}
        </div>
      </section>

       

    </main>
  );
}