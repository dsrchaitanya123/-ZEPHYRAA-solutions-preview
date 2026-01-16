
import { marqueeData } from "@/data/homepage";

export default function Marquee() {
  // Abstract the list items to keep the code DRY
  const MarqueeContent = () => (
    <div className="flex shrink-0 items-center justify-around gap-10 md:gap-16 px-4 whitespace-nowrap">
      {marqueeData.map((text, idx) => (
        <span
          key={idx}
          className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors duration-300 cursor-pointer ${
            idx % 2 === 0
              ? "text-slate-300 dark:text-slate-700 hover:text-orange-500"
              : "text-slate-900 dark:text-white hover:text-orange-500"
          }`}
        >
          {text}
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative py-10 overflow-hidden bg-slate-50 dark:bg-slate-950 border-y border-black/5 dark:border-white/5">
      <div 
        className="flex w-max flex-nowrap animate-marquee group [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        style={{ animationDuration: '30s' }}
      >
        <div className="flex group-hover:[animation-play-state:paused]">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
}