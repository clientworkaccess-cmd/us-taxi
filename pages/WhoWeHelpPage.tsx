import React from 'react';
import { Plane, Building2, GraduationCap, Users, AlertTriangle, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeHelpPage = () => {
  const personas = [
    {
      title: 'Americans Working Abroad',
      description: 'US citizens and green card holders living and working outside the United States',
      icon: <Plane className="w-8 h-8 text-indigo-600" />,
      challenges: [
        'Determining FEIE vs. Foreign Tax Credit eligibility',
        'Meeting physical presence or bona fide residence tests',
        'Reporting foreign employer income and benefits',
        'Filing FBAR and Form 8938 for foreign accounts',
        'Coordinating with foreign tax returns'
      ],
      help: 'We handle your complete 1040 filing, optimize your FEIE/FTC choice, and ensure all international forms are filed correctly.'
    },
    {
      title: 'Entrepreneurs & Investors',
      description: 'Business owners with foreign entities, real estate investors, and shareholders in foreign corporations',
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
      challenges: [
        'Form 5471 reporting for controlled foreign corporations',
        'Form 8621 for PFIC investments (foreign mutual funds)',
        'Form 5472 for foreign-owned US disregarded entities',
        'Form 3520/3520-A for foreign trusts and gifts',
        'Self-employment tax on foreign business income'
      ],
      help: 'Our experts navigate complex business forms, minimize double taxation, and advise on optimal entity structures.'
    },
    {
      title: 'Non-Residents with US Income',
      description: 'Foreign nationals with US-source income including students, scholars, investors, and property owners',
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      challenges: [
        'Determining resident vs. non-resident status',
        'Form 1040NR preparation',
        'Applying tax treaty benefits',
        'Withholding on FDAP income vs. ECI',
        'State tax filing requirements'
      ],
      help: 'We specialize in 1040NR returns, treaty analysis, and ensuring you pay only what you legally owe.'
    },
    {
      title: 'Families & Educators',
      description: 'Expat families with children, teachers abroad, and couples with cross-border situations',
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      challenges: [
        'Child Tax Credit and Additional Child Tax Credit eligibility',
        'Education credits and 529 plan complications',
        'Filing status optimization for married couples',
        'Dual-status returns for partial-year residents',
        'Coordinating spousal foreign income reporting'
      ],
      help: 'We maximize family credits, advise on joint vs. separate filing, and handle dual-status complexities.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Who We <span className="text-fuchsia-500">Help</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            Specialized US tax services for expats, non-residents, entrepreneurs, and families with international tax obligations.
          </p>
        </div>
      </section>

      {/* Personas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {personas.map((persona, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* Left Column: Identity */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    {persona.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {persona.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {persona.description}
                  </p>
                </div>

                {/* Right Column: Challenges & Solutions */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Challenges */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <h3 className="font-bold text-slate-900 text-lg">Common Challenges</h3>
                    </div>
                    <ul className="space-y-3">
                      {persona.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How We Help Box */}
                  <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-slate-900">How We Help</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {persona.help}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Not Sure If We Can Help?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Every expat situation is unique. Book a free 15-minute consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
              Book Free Consultation
            </button>
            <button className="px-8 py-3.5 bg-white text-slate-700 font-bold rounded-lg hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeHelpPage;