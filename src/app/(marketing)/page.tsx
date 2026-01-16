"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

// Components
// Loader import removed
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Agency from "@/components/home/Agency";
import Services from "@/components/home/Services";
import Showreel from "@/components/home/Showreel";
import Process from "@/components/home/Process";
import Work from "@/components/home/Work";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Noise from "@/components/ui/Noise";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      offset: 50,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white selection:bg-cyan-500 selection:text-white transition-colors duration-500">
      {/* UI Utilities */}
      {/* Loader removed from here */}
      
      <Noise />
      <div className="watermark-repeated"></div>

      {/* Page Sections */}
      <Hero />
      <Marquee />
      <Agency />
      <Services />
      <Showreel />
      <Process />
      <Work />

      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}