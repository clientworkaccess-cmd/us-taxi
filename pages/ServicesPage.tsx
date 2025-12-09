
import React, { useState } from 'react';
import { DETAILED_SERVICES, WHY_CHOOSE_US, TESTIMONIALS_TEXT } from '../constants';
import { CheckCircle, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % (Math.ceil(TESTIMONIALS_TEXT.length / 3)));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + Math.ceil(TESTIMONIALS_TEXT.length / 3)) % (Math.ceil(TESTIMONIALS_TEXT.length / 3)));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-8">
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 mx-auto">
              <Star className="w-3 h-3 fill-current" /> Comprehensive Tax Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Expert Tax Services for <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-500">Global Citizens</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            From simple returns to complex international filings, we provide specialized US tax services with transparent pricing and expert guidance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-200 pt-8">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-indigo-600">2,000+</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Happy Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-indigo-600">80+</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Countries Served</span>
            </div>
             <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-indigo-600">15+</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Years Experience</span>
            </div>
             <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-indigo-600">98%</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DETAILED_SERVICES.map((service, index) => {
              const CardContent = (
                <>
                  {service.tag && (
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20 uppercase tracking-wide">
                      {service.tag}
                    </div>
                  )}

                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-6">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6 text-white" })}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6 h-20">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-white/80 flex-shrink-0" />
                        <span className="text-sm font-medium text-white/95">{feature}</span>
                      </div>
                    ))}
                  </div>
                </>
              );

              const className = `relative rounded-3xl p-8 text-white shadow-xl transition-transform hover:-translate-y-1 bg-gradient-to-br ${service.gradient} block`;

              if ((service as any).link) {
                return (
                  <Link to={(service as any).link} key={index} className={className}>
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div key={index} className={className}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto bg-slate-50 rounded-[2.5rem] p-12 md:p-16 text-center border border-slate-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Not sure which service you need?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Book a free 15-minute consultation with our tax experts or get a personalized quote tailored to your situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg flex items-center justify-center gap-2">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-lg hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Tax Services</h2>
            <p className="text-lg text-slate-600">Professional expat tax services built on trust, expertise, and dedication to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow bg-white text-center flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.bg}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Join hundreds of satisfied expats who trust us with their US tax compliance</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-md hover:bg-slate-50 z-10 text-slate-600 border border-slate-100 hidden md:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-md hover:bg-slate-50 z-10 text-slate-600 border border-slate-100 hidden md:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Display 3 testimonials based on current index for mockup loop */}
              {[0, 1, 2].map((offset) => {
                const index = (currentTestimonial * 3 + offset) % TESTIMONIALS_TEXT.length;
                const item = TESTIMONIALS_TEXT[index];
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full animate-in fade-in duration-500">
                     <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-6 flex-grow leading-relaxed">"{item.quote}"</p>
                    <div className="mt-auto">
                      <p className="font-bold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
             {/* Mobile Controls */}
             <div className="flex justify-center gap-4 mt-8 md:hidden">
              <button onClick={prevTestimonial} className="bg-white rounded-full p-3 shadow-md border border-slate-100"><ChevronLeft className="w-5 h-5 text-slate-600" /></button>
              <button onClick={nextTestimonial} className="bg-white rounded-full p-3 shadow-md border border-slate-100"><ChevronRight className="w-5 h-5 text-slate-600" /></button>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
