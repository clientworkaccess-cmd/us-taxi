import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-32 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex flex-col items-start">
               <div className="flex items-center gap-1">
                  <span className="text-2xl">🌐</span>
                  <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ET</span>
               </div>
               <span className="text-[0.6rem] text-gray-500 uppercase tracking-widest leading-none mt-1">Online Expat Tax</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Expert US tax services for Americans abroad and non-residents with US obligations.
            </p>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://api.whatsapp.com/send/?phone=12488727754&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a href="mailto:info@onlineexpattax.com" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/services" className="hover:text-blue-600">Streamlined Procedures</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">Non-Resident Filing</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">FBAR & FATCA</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">Tax Planning</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
             <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/guides" className="hover:text-blue-600">Guides & Articles</Link></li>
              <li><Link to="/who-we-help" className="hover:text-blue-600">Who We Help</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><a href="#" className="hover:text-blue-600">Client Portal</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
             <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Online Expat Tax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;