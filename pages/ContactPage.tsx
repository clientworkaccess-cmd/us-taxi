
import React from 'react';
import { MessageSquare, Mail, Clock, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-white pt-20 pb-12 lg:pt-24 lg:pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-500">Get in Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have questions about your tax situation? We're here to help. Reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 bg-slate-50 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Quick Contact Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Contact</h3>
                <p className="text-slate-500 text-sm mb-6">Choose your preferred method</p>
                
                <div className="space-y-4">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=12488727754&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#ecfdf5] rounded-xl hover:bg-green-100 transition-colors group border border-green-100/50"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm group-hover:scale-110 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">WhatsApp</p>
                      <p className="text-slate-600 text-sm">+1 248-872-7754</p>
                    </div>
                  </a>

                  <a href="mailto:Hov@troyaccounting.com" className="flex items-center gap-4 p-4 bg-[#f3f0ff] rounded-xl hover:bg-indigo-100 transition-colors group border border-indigo-100/50">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm group-hover:scale-110 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Email</p>
                      <p className="text-slate-600 text-sm">Hov@troyaccounting.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <Clock className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Response Time</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        We typically respond to inquiries within 24 hours during business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="mt-1 flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">What to Expect</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        After you reach out, we'll discuss your situation and provide next steps or a quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you shortly</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-slate-400 bg-white text-gray-900"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-slate-400 bg-white text-gray-900"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="residency" className="block text-sm font-semibold text-slate-700 mb-2">Residency Status *</label>
                      <div className="relative">
                        <select 
                          id="residency"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none bg-white text-slate-600"
                          defaultValue=""
                        >
                          <option value="" disabled>Select status</option>
                          <option value="citizen">US Citizen Abroad</option>
                          <option value="greencard">Green Card Holder</option>
                          <option value="nonresident">Non-Resident with US Income</option>
                          <option value="other">Other</option>
                        </select>
                         <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-2">Current Country</label>
                       <input 
                        type="text" 
                        id="country"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-slate-400 bg-white text-gray-900"
                        placeholder="e.g., United Kingdom"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-semibold text-slate-700 mb-2">What can we help you with? *</label>
                     <div className="relative">
                      <select 
                        id="topic"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none bg-white text-slate-600"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="generalquestion">General Question</option>
                        <option value="getaquote">Get a Quote</option>
                        <option value="expacttaxfilling">Expat Tax Filing</option>
                        <option value="nonresidentalfilling">Non-Resident Filing</option>
                        <option value="fbarandfatca">FBAR & FATCA</option>
                        <option value="buisnessforms">Business Forms</option>
                        <option value="taxplanning">Tax Planning</option>
                        <option value="IRSletternotice">IRS Letter Notice</option>

                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Your Message *</label>
                    <textarea 
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-y placeholder-slate-400 bg-white text-gray-900"
                      placeholder="Tell us about your situation and what you need help with..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-[#5552e4] hover:bg-[#4643d3] text-white font-bold rounded-lg shadow-md transition-all transform hover:-translate-y-0.5">
                    Send Message
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
