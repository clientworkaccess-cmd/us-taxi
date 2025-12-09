import React from 'react';
import { PROCESS_STEPS } from '../constants';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">HOW IT WORKS</h2>
          <p className="text-lg text-gray-600">Simple, transparent and stress-free process</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 -translate-y-1/2 z-0 transform -mt-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Number Circle */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-6 shadow-md bg-gradient-to-br ${step.gradient}`}>
                  {step.id}
                </div>
                
                {/* Card */}
                <div className={`w-full h-full p-6 rounded-2xl bg-gradient-to-br ${step.gradient} text-white text-center shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center min-h-[220px]`}>
                  <div className="mb-4 bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 leading-tight">{step.title}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;