// /components/StorySection.tsx

const StorySection = ({ tag, title, image, reversed, children }: any) => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
      {/* image */}
      {/* content */}
    </div>
  </section>
);

export default StorySection;
