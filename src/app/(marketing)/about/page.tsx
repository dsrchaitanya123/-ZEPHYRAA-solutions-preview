"use client";
import React, { useState } from 'react';
import { 
  ArrowRight, Globe, Code, Cpu, Layers, Zap, Shield, Target, 
  CheckCircle, ChevronDown, ChevronUp, Terminal, Database, Smartphone 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const brandData = {
    name: "Zephyraa Software Private Limited",
    founded: 2026,
    tagline: "Breezing Through Complexity.",
    contactEmail: "pasupuladharaniswarreddy@outlook.com",
    instagram: "https://www.instagram.com/zephyraa_solutions?igsh=MW0wZmY0d3gxdzQ2aA=="
  };

  const processSteps = [
    { number: "01", title: "Discovery", desc: "We dissect your problem statement, understanding the core business logic before writing code." },
    { number: "02", title: "Architecture", desc: "Designing scalable schemas and selecting the right tech stack for future-proof performance." },
    { number: "03", title: "Development", desc: "Agile sprints with regular updates. We build, test, and refine in real-time loops." },
    { number: "04", title: "Deployment", desc: "Seamless CI/CD pipelines ensuring your product hits the market with zero downtime." }
  ];

  

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-gray-900 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Office architecture" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 border border-gray-200 rounded-full bg-white/50 backdrop-blur-sm">
            <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
              Est. {brandData.founded} — Kavali, India
            </p>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x mb-8 tracking-tighter">
            Zephyraa<span className="text-blue-600">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            {brandData.tagline} We turn technical friction into fluid digital experiences.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-12 bg-gray-300"></div>
        </div>
      </header>

      {/* --- BRAND STORY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gray-50 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Team collaborating" 
              className="relative rounded-xl shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Our Genesis</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
              <p>
                Founded in {brandData.founded}, {brandData.name} emerged to bridge the gap between complex technical possibilities and real-world application. 
              </p>
              <p>
                The name <strong>"Zephyraa"</strong> is inspired by a gentle, persistent breeze—a force that changes landscapes through fluid movement rather than friction.
              </p>
              <div className="flex gap-12 pt-8 border-t border-gray-100 mt-8">
                <div>
                  <p className="text-4xl font-bold text-gray-900">100%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Delivery Rate</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-900">24/7</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Support Cycle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE BLUEPRINT (PROCESS) --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">The Blueprint</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Our operational DNA</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx: number) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-black text-gray-200 mb-4 group-hover:text-blue-100 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-[2px] bg-gray-200 -z-10 translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE COMPETENCIES --- */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Technical Canvas</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Expertise in execution</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {[
              { icon: <Globe />, title: "Web Architecture", desc: "Immersive, high-performance web applications built for scale." },
              { icon: <Cpu />, title: "IT Solutions", desc: "Holistic consultancy including legacy migration and automation." },
              { icon: <Layers />, title: "Skill-Based Services", desc: "Specialized technical services tailored to niche requirements." },
              { icon: <Code />, title: "Custom Engineering", desc: "Translating your unique business logic into executable reality." },
              { icon: <Zap />, title: "Rapid Deployment", desc: "Agile methodologies that ensure your product reaches market faster." },
              { icon: <Shield />, title: "Future Proofing", desc: "Security and scalability built into the DNA of every project." }
            ].map((item, idx: number) => (
              <div key={idx} className="bg-white p-12 hover:bg-gray-50 transition-colors group">
                <div className="mb-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                  {React.cloneElement(item.icon as React.ReactElement<{ size?: number | string }>, { 
        size: 32 
      })}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH ECOSYSTEM --- */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-6">Our Tech Ecosystem</h2>
            <p className="text-gray-400 mb-8">We use battle-tested technologies that guarantee performance and security.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400 font-bold">
                <CheckCircle size={18} /> <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-3 text-blue-400 font-bold">
                <CheckCircle size={18} /> <span>Cloud Native Architecture</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Terminal className="text-blue-500 mb-4" size={24} />
              <h4 className="font-bold mb-2">Frontend</h4>
              <p className="text-gray-400 text-sm">React, Next.js, Tailwind, TypeScript.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Database className="text-blue-500 mb-4" size={24} />
              <h4 className="font-bold mb-2">Backend</h4>
              <p className="text-gray-400 text-sm">Node.js, Python, PostgreSQL, MongoDB.</p>
            </div>
          </div>
        </div>
      </section>
 

      {/* --- CTA --- */}
      <section className="bg-blue-600 py-24 px-6 text-center text-white relative">
        <div className="relative z-10 max-w-3xl mx-auto">
          <Target className="w-12 h-12 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to breeze through the complexity?</h2>
          <a 
            href={`mailto:${brandData.contactEmail}`}
            className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Start a Conversation <ArrowRight size={20} />
          </a>
        </div>
      </section>
 
     
    </div>
  );
};

export default AboutPage;