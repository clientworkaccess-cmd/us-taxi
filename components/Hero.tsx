import React from 'react';
import { ShieldCheck, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-slate-50 pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background blobs/gradients could go here but plain slate-50 matches well enough for the base */}
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Trusted Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
          <span className="flex items-center gap-1">
             <span className="text-blue-500">✓</span> Trusted by 2000+ expats worldwide
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          US Tax Services for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Americans</span>
          <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"> Abroad</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Expert filing for expats, non-residents, and global business owners.
          <br className="hidden md:block" />
          Transparent pricing, zero surprises, and peace of mind.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a href="#" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center">
            Get Started
          </a>
          <a href="#" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-lg font-semibold shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all text-center">
            Get a Quote
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-medium text-gray-700">CPAs & EAs</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="font-medium text-gray-700">2000+ Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="font-medium text-gray-700">80+ Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;