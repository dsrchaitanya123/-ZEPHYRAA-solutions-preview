import React from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import ConsultationForm from '@/components/common/ConsultationForm';

const ContactSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden bg-slate-50">
      
      {/* 1. Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* 2. Ambient Gradient Blobs */}
      <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      
      {/* 3. Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-violet-100/20 blur-[120px] pointer-events-none" />


      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          
          <div className="inline-flex items-center gap-2 self-start px-4 py-2 mb-8 bg-white border border-violet-100 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-violet-700 uppercase">Contact Our Team</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Let’s build <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">
              something legendary.
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
            Ready to disrupt the market? At <span className="font-bold text-slate-900">Vdigtech</span>, we turn complex challenges into elegant, high-performance digital solutions.
          </p>

          <div className="space-y-4">
            <ContactCard 
              icon={MapPin}
              label="Visit Our HQ"
              value="Bhubaneswar, Odisha 751024"
              href="#"
            />
            <ContactCard 
              icon={Mail}
              label="Drop us a line"
              value="info@vdigtech.com"
              href="mailto:info@vdigtech.com"
            />
            <ContactCard 
              icon={Phone}
              label="24/7 Support"
              value="+91 70081 66042"
              href="tel:+917008166042"
            />
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/40 blur-3xl -z-10 rounded-full opacity-0 lg:opacity-100" />
            <div className="w-full">
                <ConsultationForm />
            </div>
        </div>

      </div>
    </section>
  );
};

// --- HELPER COMPONENT WITH TYPES ---

interface ContactCardProps {
  icon: React.ElementType; // Allows passing a component like MapPin
  label: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon: Icon, label, value, href }: ContactCardProps) => (
  <a 
    href={href}
    className="group flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-violet-100/50 hover:border-violet-100 transition-all duration-300 ease-out transform hover:-translate-y-1"
  >
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 text-slate-500 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
      <Icon className="w-5 h-5" />
    </div>
    <div className="flex-grow">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-slate-800 font-semibold text-lg group-hover:text-violet-700 transition-colors">{value}</p>
    </div>
    <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
      <ArrowRight className="w-5 h-5 text-violet-400" />
    </div>
  </a>
);

export default ContactSection;