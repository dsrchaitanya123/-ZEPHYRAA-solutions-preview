import { processData } from "@/data/homepage";

const stepStyles = [
  { bg: 'bg-white', text: 'text-cyan-600' },
  { bg: 'bg-slate-50', text: 'text-purple-600' },
  { bg: 'bg-slate-100', text: 'text-amber-600' },
];

export default function Process() {
  return (
    // Changed bg to bg-white and removed dark classes
    <section id="process" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            {processData.heading}
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">
            {processData.subtext}
          </p>
        </div>

        <div className="relative flex flex-col gap-6">
          {processData.steps.map((step, idx) => {
            const style = stepStyles[idx % stepStyles.length];
            
            // Refined scale: The last card is 1, previous ones are slightly smaller
            const scaleValue = 1 - (processData.steps.length - 1 - idx) * 0.03;

            return (
              <div
                key={idx}
                className={`sticky top-28 w-full 
                  ${style.bg} 
                  border border-slate-200 
                  p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] 
                  shadow-xl transition-all duration-500`}
                style={{ 
                  zIndex: 10 + idx,
                  transform: `scale(${scaleValue})`,
                }}
                data-aos="fade-up"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  
                  {/* Numbering - Simplified opacity */}
                  <div className="shrink-0">
                    <span className="text-5xl md:text-7xl font-black opacity-10 leading-none text-slate-900">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-2xl md:text-3xl font-bold ${style.text} mb-3`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}