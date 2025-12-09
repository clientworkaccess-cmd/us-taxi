import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500"></div>
      
      {/* Overlay Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to File with Confidence?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Get started today or schedule a free 15-minute consultation to discuss your situation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition-colors shadow-lg border border-purple-500">
            Get Started Now
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-md hover:bg-white/10 transition-colors backdrop-blur-sm">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;