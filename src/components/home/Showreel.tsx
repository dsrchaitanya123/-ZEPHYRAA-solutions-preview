"use client";
import { PlayCircle } from "lucide-react";

import { useState } from "react";
import { showreelData } from "@/data/homepage";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { image, label, title, videoUrl } = showreelData;

  return (
    <section id="Showreel" className="py-12 px-6 lg:py-24">
      <div 
        className="group relative mx-auto max-w-7xl cursor-pointer overflow-hidden rounded-[2.5rem] h-[45vh] md:h-[75vh] md:rounded-[3.5rem] bg-zinc-900"
        data-aos="fade-up"
        onClick={() => setIsPlaying(true)}
      >
        {/* Cinematic Background */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 transition-opacity duration-700 group-hover:opacity-40" />

        {/* Lucid Play Icon Centerpiece */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            
            {/* Outer Ripple: Animates on Hover */}
            <div className="absolute h-32 w-32 md:h-48 md:w-48 rounded-full border border-white/20 scale-50 opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100" />
            
            {/* Inner Pulsing Rings */}
            <div className="absolute h-24 w-24 md:h-32 md:w-32 animate-ping rounded-full bg-white/20 [animation-duration:3s]" />
            <div className="absolute h-20 w-20 md:h-28 md:w-28 animate-pulse rounded-full bg-white/10" />
            
            {/* The Main Glassmorphic Button */}
           <PlayCircle 
  strokeWidth={1.5}
  className="w-10 h-10 md:w-14 md:h-14 text-white transition-all duration-500 group-hover:text-black"
/>

          </div>
        </div>

        {/* Floating Typography */}
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <div className="flex flex-col items-start gap-2">
            <span className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0">
              {label}
            </span>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl leading-none">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Video Modal Logic */}
      {isPlaying && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-all duration-500"
          onClick={() => setIsPlaying(false)}
        >
          <div className="w-[90%] max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl scale-95 animate-in zoom-in-95 duration-300">
            <iframe
              src={`${videoUrl}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}