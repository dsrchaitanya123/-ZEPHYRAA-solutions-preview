"use client";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import { showreelData } from "@/data/homepage";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { image, label, title, videoUrl } = showreelData;

  return (
    <section id="Showreel" className="py-12 px-6 lg:py-24 bg-slate-50">
      <div 
        className="group relative mx-auto max-w-7xl cursor-pointer overflow-hidden rounded-[2.5rem] h-[45vh] md:h-[75vh] md:rounded-[3.5rem] bg-slate-200 shadow-2xl shadow-slate-200/50"
        data-aos="fade-up"
        onClick={() => setIsPlaying(true)}
      >
        {/* Cinematic Background */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />

        {/* Dynamic Gradient Overlay - Keeping this dark for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80 transition-opacity duration-700 group-hover:opacity-40" />

        {/* Play Icon Centerpiece */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            
            {/* Outer Ripple */}
            <div className="absolute h-32 w-32 md:h-48 md:w-48 rounded-full border border-white/40 scale-50 opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100" />
            
            {/* Inner Pulsing Rings */}
            <div className="absolute h-24 w-24 md:h-32 md:w-32 animate-ping rounded-full bg-white/30 [animation-duration:3s]" />
            <div className="absolute h-20 w-20 md:h-28 md:w-28 animate-pulse rounded-full bg-white/20" />
            
            {/* The Main Button - Transitions to Brand Color instead of black */}
            <PlayCircle 
              strokeWidth={1.5}
              className="w-12 h-12 md:w-16 md:h-16 text-white transition-all duration-500 group-hover:text-cyan-500 drop-shadow-lg"
            />
          </div>
        </div>

        {/* Floating Typography */}
        <div className="absolute bottom-10 left-8 right-8 md:left-14 md:right-14 text-white">
          <div className="flex flex-col items-start gap-3">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 -translate-x-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0">
              {label}
            </span>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl leading-tight">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Video Modal Logic */}
      {isPlaying && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 transition-all duration-500 backdrop-blur-sm"
          onClick={() => setIsPlaying(false)}
        >
          <div className="w-[92%] max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl scale-95 animate-in zoom-in-95 duration-300 border border-white/10">
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