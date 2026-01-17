"use client";
import { useEffect, useState } from "react"; // Added useState
import AOS from "aos";
import "aos/dist/aos.css"; 

// Components
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
import Loader from "@/components/ui/Loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // 1. Check if the user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (!hasSeenLoader) {
      setShowLoader(true);
      // 2. Set the flag so it doesn't show again until the tab is closed
      sessionStorage.setItem("hasSeenLoader", "true");
    }

    // Initialize AOS
    AOS.init({
      once: false,
      mirror: true,
      offset: 50,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* 3. Only render Loader if showLoader is true */}
      {showLoader && <Loader />} 
      
      <main className="overflow-hidden bg-white text-slate-900 selection:bg-cyan-500 selection:text-white">
        <Noise />
        <div className="watermark-repeated"></div>

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
    </>
  );
}