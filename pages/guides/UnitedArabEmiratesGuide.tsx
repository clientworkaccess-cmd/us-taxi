import React from 'react';
import { 
  Calendar, 
  FileText, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  Globe, 
  Scale, 
  Calculator, 
  ArrowRight,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UAEGuide = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-24 pb-16 lg:pt-32 lg:pb-24 text-center relative overflow-hidden">
         {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-sm" 
                 style={{backgroundImage: "url('https://e7.pngegg.com/pngimages/391/685/png/clipart-flag-of-the-united-arab-emirates-flag-day-flag-of-japan-uae-flag-angle-flag.png')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-full blur-2xl opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇦🇪</span> UAE Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-400">United Arab Emirates</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Navigate the complexities of UAE taxation with confidence. From residency determination to understanding corporate tax, we ensure you stay compliant on both sides of the Gulf while optimizing your tax position.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact" className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors shadow-lg">
              Get Expert Tax Help
            </Link>
             <button onClick={() => scrollToSection('overview')} className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-colors backdrop-blur-sm">
              Read the Guide
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation (Desktop) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-1">
              <h3 className="font-bold text-slate-900 mb-4 px-3">On this page</h3>
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'residency', label: 'Residency Status' },
                { id: 'taxation', label: 'Taxation Types' },
                { id: 'comparison', label: 'US vs UAE System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'corporate', label: 'Corporate Tax' },
                { id: 'faq', label: 'FAQ' },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2 text-sm">Need personalized help?</h4>
                    <p className="text-xs text-red-700 mb-3">Our US-UAE tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
                    <Link to="/contact" className="block w-full py-2 bg-red-600 text-white text-xs font-bold text-center rounded hover:bg-red-700 transition-colors">
                        Book Consultation
                    </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-9 space-y-16">

            {/* Quick Overview */}
            <section id="overview">
               <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                 <Info className="w-8 h-8 text-red-600" /> Quick Overview
               </h2>
               <p className="text-slate-600 mb-8 leading-relaxed">
                 Understanding the UAE tax system is essential for American expats to ensure compliance and optimize your tax position. The UAE operates on a residency-based taxation model with no personal income tax, making it an attractive destination for expats. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Calendar className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">January 1 – December 31</p>
                      <p className="text-xs text-slate-500 mt-2">The UAE follows the calendar year for tax purposes, similar to the US system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <FileText className="w-6 h-6 text-green-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">US Filing</p>
                      <p className="text-slate-900 font-semibold">Form 1040</p>
                      <p className="text-xs text-slate-500 mt-2">Standard US individual income tax return for all citizens and residents.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">April 15</p>
                      <p className="text-xs text-slate-500 mt-2">US tax filing deadline, with automatic extension to June 15 for expats.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">Visa-Based</p>
                      <p className="text-xs text-slate-500 mt-2">Residency in the UAE is primarily determined by your visa status, not by physical presence or financial ties.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Determining your tax residency in the UAE is straightforward compared to other countries. The UAE system primarily considers your visa status rather than physical presence or financial ties. Understanding your residency status is crucial for navigating both UAE and US tax obligations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-2">UAE Resident</h3>
                        <p className="text-sm text-red-800/80">
                            <strong>No Personal Income Tax:</strong> The UAE does not impose personal income tax on residents, making it an attractive destination for expats. However, as a US citizen, you still need to file US taxes reporting your worldwide income.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Still subject to <strong>US tax obligations</strong> as a US citizen, but not liable for UAE personal income tax. Your tax obligations will primarily be to the US government.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Residency Requirements</h3>
                <p className="text-slate-600 mb-4">To be considered a UAE resident for tax purposes, you generally need to:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Hold a valid residency visa:</strong> Your visa status is the primary determinant of residency in the UAE.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Spend at least 183 days per year:</strong> While not the primary factor, this traditional rule still applies in many cases.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Prove primary residence:</strong> Demonstrate that your main home and financial interests are in the UAE.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                Even if you're a UAE resident, your home country (the US) may still consider you a tax resident. This can potentially lead to double taxation issues that require careful planning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Taxation in the UAE</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    The UAE tax system is unique compared to other countries, with no personal income tax but various other taxes that affect both individuals and businesses. Understanding these taxes is crucial for financial planning in the UAE.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax</h3>
                    <p className="text-slate-600 mb-4">The UAE does not impose personal income tax on residents, making it one of the most tax-friendly countries in the world for individuals.</p>
                    <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                        <p className="text-sm text-green-800">
                            <strong>Key Advantage:</strong> Tax-free personal income allows expats to maximize their earnings and build wealth without local tax deductions.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Value-Added Tax (VAT)</h3>
                        <p className="text-sm text-slate-600 mb-4">A 5% VAT applies to most goods and services in the UAE.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">5%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Essential Items</span>
                                <span className="font-bold text-slate-900">0% or Exempt</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Excise Tax</h3>
                        <p className="text-sm text-slate-600 mb-4">Applied to specific products deemed harmful to health or environment.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Tobacco</span>
                                <span className="font-bold text-slate-900">100%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Sweetened Beverages</span>
                                <span className="font-bold text-slate-900">50%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Energy Drinks</span>
                                <span className="font-bold text-slate-900">100%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Corporate Tax Section */}
            <section id="corporate">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Corporate Tax Changes (2023)</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    In 2023, the UAE introduced significant changes to its corporate tax system, affecting businesses operating in the region. These changes align the UAE with international tax practices while maintaining its competitive business environment.
                </p>
                
                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                    <h3 className="font-bold text-red-900 mb-3">New Corporate Tax Rate</h3>
                    <p className="text-sm text-red-800 mb-4">A 9% corporate tax rate now applies to companies earning more than AED 375,000 annually.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Oil & Gas Sector</h3>
                        <p className="text-sm text-slate-600 mb-4">Companies in oil and gas exploration and production face a progressive tax rate of up to 55%.</p>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Foreign Banks</h3>
                        <p className="text-sm text-slate-600 mb-4">Branches of foreign banks operating in the UAE are now taxed at a flat rate of 20%.</p>
                    </div>
                </div>

                <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
                    <p className="text-sm text-green-800">
                        <strong>Business Advantage:</strong> The UAE's free zones and competitive corporate tax rates continue to make it an attractive location for international businesses.
                    </p>
                </div>
            </section>

            {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-red-400" /> US vs UAE Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and UAE tax systems is crucial for American expats to ensure compliance and optimize their tax position.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                                <span className="text-2xl">🇺🇸</span>
                                <span className="font-bold text-lg">United States</span>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>• <strong>Citizenship-based</strong> taxation (taxed worldwide regardless of residence). All US citizens must file annual tax returns reporting worldwide income.</li>
                                <li>• Top federal rate: 37% (plus state taxes, which can add 0-13% more).</li>
                                <li>• Sales tax varies by state (typically lower than VAT and not included in displayed prices).</li>
                                <li>• Standard deduction: ~$14,600 (Single) for 2025, with additional deductions possible.</li>
                                <li>• Complex reporting requirements for foreign assets and accounts (FBAR, FATCA).</li>
                            </ul>
                        </div>
                        <div>
                             <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                                <span className="text-2xl">🇦🇪</span>
                                <span className="font-bold text-lg">United Arab Emirates</span>
                            </div>
                             <ul className="space-y-3 text-sm text-slate-300">
                                <li>• <strong>Residency-based</strong> taxation (determined by visa status, not by physical presence or financial ties).</li>
                                <li>• No personal income tax for residents.</li>
                                <li>• 5% VAT on most goods and services.</li>
                                <li>• 9% corporate tax rate for businesses earning over AED 375,000.</li>
                                <li>• No capital gains tax or inheritance tax for individuals.</li>
                                <li>• More streamlined reporting requirements for most taxpayers with straightforward finances.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in the UAE, you enjoy significant tax advantages locally but must still comply with US tax obligations. The lack of a tax treaty with the UAE means careful planning is essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filing */}
            <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Requirements & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the filing requirements and deadlines for both US and UAE taxes is crucial to avoid penalties and ensure compliance. While the UAE offers tax advantages, US citizens still have strict obligations to their home country.
                </p>
                
                <div className="relative border-l-4 border-red-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 15</h4>
                        <p className="text-sm text-slate-600">US tax filing deadline for all citizens. Expats receive an automatic extension until June 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">June 15</h4>
                        <p className="text-sm text-slate-600">Extended deadline for US expatriate taxes. If taxes are owed, interest begins to accrue from April 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-red-700">October 15</h4>
                        <p className="text-sm text-slate-600">Final deadline for US expatriate taxes. If you have received an extension, this is your final deadline.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-red-700">June 30</h4>
                        <p className="text-sm text-slate-600">FBAR filing deadline. Required for US citizens with foreign bank accounts exceeding $10,000.</p>
                    </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h4 className="font-bold text-red-900 mb-2">Penalties for Non-Compliance</h4>
                    <p className="text-sm text-red-800 mb-4">Both the US and UAE impose penalties for failure to comply with tax regulations.</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-red-700">
                         <li className="bg-white/50 p-2 rounded">US Failure to File: Minimum $210 penalty, plus interest charges.</li>
                         <li className="bg-white/50 p-2 rounded">FBAR Non-Compliance: Penalties up to $12,910 per violation.</li>
                         <li className="bg-white/50 p-2 rounded">VAT Non-Compliance: Fines and potential business suspension.</li>
                     </ul>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Does the UAE have taxes for foreigners?</h3>
                        <p className="text-sm text-slate-600">Yes, the UAE is largely tax-free for foreigners, especially when it comes to personal income and capital gains. However, there are other taxes to consider.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Is there a US-UAE tax treaty?</h3>
                        <p className="text-sm text-slate-600">No, the United States does not have a tax treaty with the United Arab Emirates. This lack of a treaty can complicate matters for US citizens living in the UAE.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Do I need to pay US taxes while living in the UAE?</h3>
                        <p className="text-sm text-slate-600">Yes, as a US citizen, you must file US taxes regardless of where you live. The UAE's tax-free status doesn't eliminate your US tax obligations.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">What forms do I need to file?</h3>
                        <p className="text-sm text-slate-600">US citizens must file Form 1040, FBAR (FinCEN Form 114), and Form 8938 (FATCA). UAE requirements depend on your business activities.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-UAE Taxes?</h2>
                <p className="text-red-100 mb-8 max-w-2xl mx-auto">
                    Our dual-qualified experts specialize in complex cross-border situations. We can help you navigate the intricacies of both tax systems, ensure compliance, and optimize your tax position to minimize your overall burden.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-red-50 transition-colors shadow-md">
                    Schedule Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UAEGuide;