import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-40 p-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
           <span className="font-bold text-gray-900">Ready to get started?</span>
           <span className="text-gray-600 text-sm">File with confidence today</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/contact" className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
            Contact Us
          </Link>
           <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600">
             <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    {/* Chat Widget Icon */}
    <div className="fixed bottom-24 right-6 z-50">
        <a 
          href="https://api.whatsapp.com/send/?phone=12488727754&text&type=phone_number&app_absent=0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 flex"
        >
            <MessageCircle className="w-7 h-7" />
        </a>
    </div>
    </>
  );
};

export default StickyBar;