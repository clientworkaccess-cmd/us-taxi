import React from 'react';
import { Star, Play, ExternalLink } from 'lucide-react';
import { TESTIMONIALS_TEXT } from '../constants';

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg mb-8">Join hundreds of satisfied expats who trust us with their US tax compliance.</p>
          
          <div className="flex justify-center gap-4 mb-12">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded shadow-sm text-sm font-medium hover:bg-gray-50">
              <span className="text-green-500 font-bold">★ Trustpilot</span>
              <span className="text-gray-700">View on Trustpilot</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded shadow-sm text-sm font-medium hover:bg-gray-50">
               <span className="font-bold text-blue-500">G</span>
               <span className="font-bold text-red-500">o</span>
               <span className="font-bold text-yellow-500">o</span>
               <span className="font-bold text-blue-500">g</span>
               <span className="font-bold text-green-500">l</span>
               <span className="font-bold text-red-500">e</span>
              <span className="text-gray-700">View on Google</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Andrea */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg h-full">
            <a 
              href="https://www.youtube.com/shorts/d-tgP7ptwh8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-full md:w-5/12 aspect-[9/16] bg-gray-900 block group flex-shrink-0"
            >
               <img 
                 src="https://img.youtube.com/vi/d-tgP7ptwh8/maxresdefault.jpg" 
                 alt="Andrea" 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                 <div className="w-14 h-14 bg-blue-600/90 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                   <Play className="w-6 h-6 fill-current ml-1" />
                 </div>
               </div>
               <div className="absolute bottom-4 left-4 text-white z-10">
                 <p className="font-bold text-lg shadow-black drop-shadow-md">Andrea</p>
                 <p className="text-xs opacity-90 shadow-black drop-shadow-md">Watch testimonial</p>
               </div>
            </a>
            <div className="w-full md:w-7/12 p-6 bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex flex-col justify-center">
              <h3 className="font-bold text-xl mb-2">Andrea's Story</h3>
              <p className="text-xs font-semibold mb-4 text-blue-100">Non-U.S. tax resident</p>
              <ul className="space-y-2 text-sm text-blue-50">
                <li className="flex items-start gap-2">• Advising on the optimal U.S. entity type</li>
                <li className="flex items-start gap-2">• Forming the U.S. company</li>
                <li className="flex items-start gap-2">• Obtaining the U.S. tax identification number (EIN)</li>
                <li className="flex items-start gap-2">• Consulting on individual taxation of pass-through income</li>
                <li className="flex items-start gap-2">• Ongoing U.S. tax compliance and filings</li>
              </ul>
            </div>
          </div>

          {/* Nadia */}
           <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg h-full">
            <a 
              href="https://www.youtube.com/shorts/KMoj4cAb6RA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-full md:w-5/12 aspect-[9/16] bg-gray-900 block group flex-shrink-0"
            >
               <img 
                 src="https://img.youtube.com/vi/KMoj4cAb6RA/maxresdefault.jpg" 
                 alt="Nadia" 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                 <div className="w-14 h-14 bg-blue-600/90 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                   <Play className="w-6 h-6 fill-current ml-1" />
                 </div>
               </div>
               <div className="absolute bottom-4 left-4 text-white z-10">
                 <p className="font-bold text-lg shadow-black drop-shadow-md">Nadia</p>
                 <p className="text-xs opacity-90 shadow-black drop-shadow-md">Watch testimonial</p>
               </div>
            </a>
            <div className="w-full md:w-7/12 p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex flex-col justify-center">
              <h3 className="font-bold text-xl mb-2">Nadia's Story</h3>
              <p className="text-xs font-semibold mb-4 text-blue-100">U.S. citizen living abroad</p>
              <ul className="space-y-2 text-sm text-blue-50">
                <li className="flex items-start gap-2">• FEIE (Foreign Earned Income Exclusion) and Foreign Tax Credit (FTC) optimization</li>
                <li className="flex items-start gap-2">• Ongoing tax planning</li>
                <li className="flex items-start gap-2">• U.S. income tax return compliance</li>
                <li className="flex items-start gap-2">• International information reporting, including FBAR and Form 8938</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Text Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_TEXT.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic text-sm mb-6 flex-grow">"{item.quote}"</p>
              <div>
                <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;