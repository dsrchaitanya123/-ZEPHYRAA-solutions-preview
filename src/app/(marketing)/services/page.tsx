"use client";
import React from 'react';
import ConsultationForm from '@/components/common/ConsultationForm';  
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Bot, 
  ArrowRight, 
  Code2, 
  LayoutTemplate, 
  ArrowUpRight,
  Database,
  Server,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- TECHNICAL GRID BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 max-w-[1400px] mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Professional Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Engineering Division
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1]">
              Scale your vision <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x">with precision.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg mb-12 leading-relaxed font-medium">
              We architect high-performance digital ecosystems. No templates. No shortcuts. Just robust code and scalable infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
               <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white border border-slate-200 text-indigo-600 rounded-xl group-hover:border-indigo-200 transition-colors shadow-sm">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Clean Architecture</h4>
                    <p className="text-sm text-slate-500 mt-1">Maintainable, testable codebases.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white border border-slate-200 text-indigo-600 rounded-xl group-hover:border-indigo-200 transition-colors shadow-sm">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">High Availability</h4>
                    <p className="text-sm text-slate-500 mt-1">99.9% uptime SLAs.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right: The REUSABLE Form Component */}
          <div className="relative">
            {/* Background decoration specifically for the hero placement */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
            
            <ConsultationForm />
          </div>

        </div>
      </section>

      {/* --- MAIN SERVICES GRID --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
             <div>
                <h2 className="text-4xl font-bold mb-4 text-slate-900">Technical Capabilities</h2>
                <p className="text-slate-500 max-w-xl">Full-cycle development services designed for scalability and security.</p>
             </div>
             <button className="hidden md:flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
               View Case Studies <ArrowRight size={18} />
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Web Engineering" 
              icon={<Globe />}
              desc="Next.js & React applications optimized for Core Web Vitals and SEO dominance."
              tags={["Next.js", "TypeScript", "Tailwind"]}
            />
            <ServiceCard 
              title="Backend Architecture" 
              icon={<Server />}
              desc="Microservices and serverless architectures handling millions of requests per day."
              tags={["Node.js", "Postgres", "Redis"]}
            />
            <ServiceCard 
              title="Native Mobile" 
              icon={<Smartphone />}
              desc="Cross-platform excellence using React Native for near-native performance."
              tags={["React Native", "Expo", "Swift"]}
            />
            <ServiceCard 
              title="AI & Automation" 
              icon={<Bot />}
              desc="Custom LLM integration and vector search systems for intelligent workflows."
              tags={["OpenAI", "Python", "Pinecone"]}
            />
            <ServiceCard 
              title="SaaS Product Design" 
              icon={<LayoutTemplate />}
              desc="Data-rich dashboards and complex UI logic simplified for better UX."
              tags={["Figma", "Prototyping", "Design System"]}
            />
            <ServiceCard 
              title="API Development" 
              icon={<Code2 />}
              desc="Secure REST and GraphQL APIs serving as the backbone of your platform."
              tags={["GraphQL", "Apollo", "Swagger"]}
            />
          </div>
        </div>
      </section>

      {/* --- TECH STACK ECOSYSTEM --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Technology Ecosystem</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              We don't chase trends. We choose battle-tested, enterprise-grade technologies that ensure your software lasts for decades, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechStackColumn 
              title="Frontend" 
              icon={<LayoutTemplate size={20}/>} 
              items={['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit']}
            />
            <TechStackColumn 
              title="Backend" 
              icon={<Database size={20}/>} 
              items={['Node.js / Express', 'Python / Django', 'PostgreSQL', 'Redis / Elastic', 'GraphQL']}
            />
            <TechStackColumn 
              title="DevOps & Cloud" 
              icon={<Server size={20}/>} 
              items={['AWS / Google Cloud', 'Docker / Kubernetes', 'CI/CD Pipelines', 'Terraform', 'Vercel']}
            />
            <TechStackColumn 
              title="Quality & Testing" 
              icon={<ShieldCheck size={20}/>} 
              items={['Jest / Cypress', 'SonarQube', 'Performance Testing', 'Security Audits', 'Accessibility']}
            />
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x">
            The Process
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-2xl">
           <ProcessStep num="01" title="Discovery" desc="Requirements gathering and technical feasibility analysis." />
           <ProcessStep num="02" title="Blueprint" desc="System architecture, database schema, and UI wireframes." />
           <ProcessStep num="03" title="Build" desc="Bi-weekly sprints with continuous integration and testing." />
           <ProcessStep num="04" title="Deploy" desc="Production launch, monitoring setup, and knowledge transfer." />
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="pb-24 px-6">
         <div className="max-w-[1400px] mx-auto bg-slate-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 p-20 bg-blue-500/10 rounded-full blur-3xl"></div>

            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient-x mb-8 relative z-10 ">Ready to build something serious?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                Stop struggling with technical debt. Let's architect a solution that scales with your business.
            </p>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-2 relative z-10">
               Schedule Strategy Call <ArrowUpRight size={20} />
            </button>
         </div>
      </section>

    </div>
  );
}
 

function ServiceCard({ title, icon, desc, tags }: any) {
  return (
    <div className="group p-8 bg-white border border-slate-200 hover:border-indigo-600/30 transition-all hover:shadow-xl hover:shadow-indigo-900/5 rounded-xl flex flex-col h-full">
      <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-8 flex-grow">{desc}</p>
      
      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ num, title, desc }: any) {
    return (
        <div className="bg-white p-10 hover:bg-slate-50 transition-colors group h-full">
            <span className="block text-4xl font-black text-slate-200 mb-6 group-hover:text-indigo-100 transition-colors">{num}</span>
            <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function TechStackColumn({ title, items, icon }: any) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-indigo-400 mb-4">
                {icon}
                <h4 className="font-bold text-white">{title}</h4>
            </div>
            <ul className="space-y-3">
                {items.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}