import { workData } from "@/data/homepage";

export default function Work() {
  return (
    <section id="work" className="py-12 md:py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-10 md:mb-16">
          <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
            Selected Projects
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            {workData.heading}
          </h2>
        </div>

        <div className="flex flex-col">
          {workData.projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative border-t border-white/10 last:border-b py-8 md:py-10 cursor-pointer overflow-visible transition-all duration-300 hover:bg-white/[0.02]"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-10 relative">
                <div className="flex items-center gap-6">
                  <span className="hidden md:block text-slate-500 font-mono text-base">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-semibold group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    {project.title}
                  </h3>
                </div>
                <p className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-wider">
                  {project.category}
                </p>
              </div>

              <div className="mt-4 flex justify-between items-end">
                <p className="max-w-md text-slate-400 text-sm md:text-base leading-relaxed opacity-100 md:opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {project.description}
                </p>
                
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:rotate-45">
                  <svg 
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              {project.image && (
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] aspect-[4/3] pointer-events-none opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 z-50">
                   <img
                    src={project.image}
                    className="w-full h-full object-cover rounded-xl shadow-2xl rotate-2 group-hover:rotate-3 transition-transform duration-500"
                    alt={project.title}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}