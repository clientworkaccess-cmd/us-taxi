import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="flex flex-col items-center">
             <div className="text-2xl font-bold text-blue-600 leading-none tracking-tighter flex items-center gap-1 group-hover:scale-105 transition-transform">
                <span className="text-3xl">🌐</span>
                <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ET</span>
             </div>
             <span className="text-[0.6rem] text-gray-500 uppercase tracking-widest leading-none mt-1 group-hover:text-blue-600 transition-colors">Online Expat Tax</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors ${isActive('/pricing') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/who-we-help" 
              className={`text-sm font-medium transition-colors ${isActive('/who-we-help') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Who We Help
            </Link>
            <Link 
              to="/guides" 
              className={`text-sm font-medium transition-colors ${isActive('/guides') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Guides
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=12488727754&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-colors p-2 hover:bg-green-50 rounded-full"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-900 font-medium hover:text-blue-600 text-sm border border-gray-300 px-4 py-2.5 rounded-md hover:border-blue-600 hover:bg-blue-50 transition-all">
              Get a Quote
            </a>
            <a href="#" className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full left-0 top-20 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/services"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive('/services') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive('/pricing') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/who-we-help"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive('/who-we-help') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Help
            </Link>
             <Link
              to="/guides"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive('/guides') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Guides
            </Link>
             <Link
              to="/about"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive('/about') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive('/contact') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-3 px-1">
               <a href="#" className="w-full text-center text-gray-900 font-medium border border-gray-300 px-4 py-3.5 rounded-lg hover:bg-gray-50">
                Get a Quote
              </a>
              <a href="#" className="w-full text-center bg-blue-600 text-white font-medium px-4 py-3.5 rounded-lg hover:bg-blue-700 shadow-sm">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;