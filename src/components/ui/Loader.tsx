"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Simulate the progress bar filling up
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment by a random amount to look organic
        return prev + Math.random() * 15; 
      });
    }, 100);

    // 2. Trigger the exit animation once progress is full
    const exitTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 200); 
    }, 1500); 

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-transform duration-1000 cubic-bezier(0.76, 0, 0.24, 1) ${
        loading ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Container for Content - Fades out slightly before the slide up */}
      <div
        className={`flex flex-col items-center transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Logo Container - Clean and Static */}
        <div className="relative mb-8 h-42 w-42  ">
          <Image 
            src="/images/logo-zephyraa.png" 
            alt="Zephyraa Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Progress Bar Container */}
        {/* Uses a light gray track and a dark fill for high contrast */}
        <div className="h-1 w-64 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-slate-900 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Text and Percentage */}
        <div className="mt-4 flex w-64 items-center justify-between text-xs font-medium uppercase tracking-widest text-gray-500">
            <span>Loading</span>
            <span className="text-gray-900 font-semibold">
                {Math.min(100, Math.floor(progress))}%
            </span>
        </div>
      </div>
    </div>
  );
}