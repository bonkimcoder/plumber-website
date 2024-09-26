import React from "react";

const History = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gray-50">
      <div className="flex flex-col justify-between items-center text-center gap-10 max-w-7xl w-full mx-auto">
        {/* Section Title */}
        <h2 className="uppercase text-yellow-700 font-semibold text-lg md:text-xl mb-4 md:mb-6">
          Get To Know Us
        </h2>

        {/* Story Title */}
        <h2 className="font-bold text-3xl md:text-5xl leading-tight md:leading-snug mb-6 md:mb-8">
          Our Story
        </h2>

        {/* Decorative Line */}
        <div className="h-1 w-16 bg-yellow-600 mb-8 md:mb-12" />

        {/* Story Text */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose max-w-4xl">
          Prime Construct was founded with a simple mission: to provide
          reliable, high-quality plumbing services to homes and businesses
          across Kenya. Starting as a small family-run business, we’ve grown
          steadily over the years, building a reputation for excellence,
          professionalism, and trust. With over 10 years of experience in the
          industry, we have expanded our services to cover everything from
          residential repairs to large-scale commercial installations. Our
          passion for delivering exceptional service and solving complex
          plumbing issues has made us a leader in the industry, and we continue
          to serve our community with the same dedication and expertise that has
          driven us from the beginning.
        </p>
      </div>
    </section>
  );
};

export default History;
