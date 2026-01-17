"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ConsultationForm from '@/components/common/ConsultationForm';
import { CONTACT_INFO } from '@/data/contact';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans bg-[#EFF6FF] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
        
        {/* --- LEFT COLUMN (Text Info) --- */}
        <motion.div 
          className="lg:col-span-6 flex flex-col pt-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            {CONTACT_INFO.title}
          </h1>

          <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
            {CONTACT_INFO.description}
          </p>

          <div className="flex flex-col space-y-3 mb-8 text-slate-700 font-medium text-lg">
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-600 transition-colors flex items-center gap-2">
              {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="hover:text-blue-600 transition-colors">
              {CONTACT_INFO.phone}
            </a>
            <a 
              href={CONTACT_INFO.supportLink} 
              className="underline decoration-slate-400 underline-offset-8 hover:text-blue-600 hover:decoration-blue-600 transition-all"
            >
              Customer Support
            </a>
          </div>

          {/* Bottom 3 Columns Info */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            animate="animate"
          >
            {CONTACT_INFO.highlights.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h3 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                  <item.icon size={16} className="text-blue-600" />
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* --- RIGHT COLUMN (Form Card) --- */}
        <motion.div 
          className="lg:col-span-6 w-full relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Background Decorative Blur */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/40 blur-[100px] -z-10 rounded-full hidden lg:block" 
            aria-hidden="true"
          />
          <div className="w-full  ">
            <ConsultationForm />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ContactSection;