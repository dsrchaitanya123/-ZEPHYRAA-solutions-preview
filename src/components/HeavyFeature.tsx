// components/HeavyFeature.tsx

export default function HeavyFeature() {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/50">
      
      {/* Icon */}
      <div className="mb-4 rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/30">
        <svg 
          className="h-6 w-6 text-indigo-600 dark:text-indigo-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Text */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
        Interactive Map Region
      </h3>
      <p className="mt-1 max-w-sm text-center text-sm text-neutral-500">
        This component was lazy-loaded! It didn't affect the initial page load speed.
      </p>

    </div>
  );
}