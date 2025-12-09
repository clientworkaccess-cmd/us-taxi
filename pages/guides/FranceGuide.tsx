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

const FranceGuide = () => {
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
                 style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYRxB08c95jWXLDveyWg9MgqUOVmZIHqjaA&s')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇫🇷</span> France Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">France</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Navigate the complexities of French taxation with confidence. From residency determination to the US-France Tax Treaty, we ensure you stay compliant on both sides of the Atlantic while optimizing your tax position.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors shadow-lg">
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
                { id: 'taxation', label: 'French Taxation' },
                { id: 'comparison', label: 'US vs France System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'treaty', label: 'Tax Treaty' },
                { id: 'forms', label: 'Common Forms' },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2 text-sm">Need personalized help?</h4>
                    <p className="text-xs text-blue-700 mb-3">Our US-France tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
                    <Link to="/contact" className="block w-full py-2 bg-blue-600 text-white text-xs font-bold text-center rounded hover:bg-blue-700 transition-colors">
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
                 <Info className="w-8 h-8 text-blue-600" /> Quick Overview
               </h2>
               <p className="text-slate-600 mb-8 leading-relaxed">
                 Understanding the French tax system is essential for American expats to ensure compliance and optimize your tax position. France operates on a residency-based taxation model with its own unique characteristics and regional variations. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                      <Calendar className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">January 1 – December 31</p>
                      <p className="text-xs text-slate-500 mt-2">France follows the calendar year for tax purposes, similar to the US system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                      <FileText className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Primary Form</p>
                      <p className="text-slate-900 font-semibold">Déclaration des revenus (Form 2042)</p>
                      <p className="text-xs text-slate-500 mt-2">The standard French individual tax return form used to report income to tax authorities.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Filing Window</p>
                      <p className="text-slate-900 font-semibold">April 10 – June 5</p>
                      <p className="text-xs text-slate-500 mt-2">Online portal opens April 10; deadlines vary by department from May 20 to June 5.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                      <MapPin className="w-6 h-6 text-green-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">4 Criteria</p>
                      <p className="text-xs text-slate-500 mt-2">Home, principal abode, 183 days, or center of economic interests.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Determining your tax residency is the first and most critical step in the French tax system. France uses a residency-based taxation model where your tax obligations depend on your connections to the country. The French tax authorities evaluate various factors to establish your residency status.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl">
                        <h3 className="font-bold text-blue-900 mb-2">French Resident</h3>
                        <p className="text-sm text-blue-800/80">
                            Taxed on <strong>worldwide income</strong>. This includes income from both France and abroad (including the US). As a resident, you're eligible for various tax benefits and credits not available to non-residents, such as the quotient familial system and personal allowances.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Only taxed on <strong>French-sourced income</strong>. This includes employment income in France, business income from French operations, or rental income from French properties. Non-residents have limited access to tax benefits and credits.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Determining French Residency</h3>
                <p className="text-slate-600 mb-4">Under Article 4B of the French General Tax Code, meeting just one of the tests below makes you a French tax resident:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Main Home or Habitual Residence (Foyer):</strong> If your primary dwelling or place where your immediate family resides is in France, you are generally considered a resident.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Principal Place of Stay:</strong> You spend at least 183 days in France during a calendar year, or more days here than in any other country.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Primary Professional Activity:</strong> If your main employment or self-employment takes place in France, you're typically treated as a tax resident.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Centre of Economic Interests:</strong> France is where you manage your finances, hold bank accounts, direct investments, or derive the majority of your income.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                By default, US expats in France need to file a French tax return if they have multiple income streams, are self-employed, or benefit from foreign assets. However, if your only income is from employment, taxes will be automatically withheld, and you may not need to file an individual tax return.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">French Taxation Types & Rates</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    France's tax system includes various components that affect individuals, including income tax, social levies, and value-added tax. Understanding these taxes and their rates is crucial for proper financial planning and compliance as an American living in France.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax Rates (2025)</h3>
                    <p className="text-slate-600 mb-4">Personal income tax in France is progressive, with higher rates applying to higher income brackets. The French tax system uses the quotient familial method, which divides household income by parts to determine the effective tax rate.</p>
                    <div className="overflow-x-auto border border-slate-200 rounded-lg">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Taxable Income (€)</th>
                                    <th className="px-6 py-4">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">Up to €11,497</td>
                                    <td className="px-6 py-4 text-slate-900">0%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">€11,498 – €29,315</td>
                                    <td className="px-6 py-4 text-slate-900">11%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">€29,316 – €83,823</td>
                                    <td className="px-6 py-4 text-slate-900">30%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">€83,824 – €180,294</td>
                                    <td className="px-6 py-4 text-slate-900">41%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">Over €180,294</td>
                                    <td className="px-6 py-4 text-slate-900">45%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">*Note: Social levies and exceptional contributions may apply, affecting the effective tax rate.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Value Added Tax (VAT)</h3>
                        <p className="text-sm text-slate-600 mb-4">French VAT (TVA) is applied to most goods and services sold in France.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">20%</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Reduced Rate</span>
                                <span className="font-bold text-slate-900">10%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Super-Reduced Rate</span>
                                <span className="font-bold text-slate-900">5.5%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Essentials</span>
                                <span className="font-bold text-slate-900">2.1%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Social Security Contributions</h3>
                        <p className="text-sm text-slate-600 mb-4">Compulsory contributions to the French social security system.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Employee Contribution</span>
                                <span className="font-bold text-slate-900">15-24%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Employer Contribution</span>
                                <span className="font-bold text-slate-900">35-47%</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Capital Gains Tax</h3>
                        <p className="text-sm text-slate-600 mb-4">Tax on profit from selling capital assets like property or shares.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Listed & Unlisted Securities</span>
                                <span className="font-bold text-slate-900">12.8% + 17.2% social charges</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Real Estate (Main Residence)</span>
                                <span className="font-bold text-slate-900">0% + 0% social charges</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Real Estate (Other Residence)</span>
                                <span className="font-bold text-slate-900">19% + 17.2% social charges</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Property Taxes</h3>
                        <p className="text-sm text-slate-600 mb-4">Annual taxes levied by municipalities on property owners.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Taxe Foncière (TFPB)</span>
                                <span className="font-bold text-slate-900">Based on rental value</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Taxe d'Habitation</span>
                                <span className="font-bold text-slate-900">On secondary homes</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Wealth Tax (IFI)</h3>
                        <p className="text-sm text-slate-600 mb-4">Annual tax on high-value real estate assets.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Threshold</span>
                                <span className="font-bold text-slate-900">€1.3 million</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Rate</span>
                                <span className="font-bold text-slate-900">0% - 1.5% (progressive)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Inheritance & Gift Taxes</h3>
                        <p className="text-sm text-slate-600 mb-4">Taxes on transfers of assets between individuals.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Spouses & Children</span>
                                <span className="font-bold text-slate-900">Exempt</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Other Beneficiaries</span>
                                <span className="font-bold text-slate-900">5% - 60%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-blue-400" /> US vs France Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and French tax systems is crucial for American expats to ensure compliance and optimize their tax position.</p>
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
                                <span className="text-2xl">🇫🇷</span>
                                <span className="font-bold text-lg">France</span>
                            </div>
                             <ul className="space-y-3 text-sm text-slate-300">
                                <li>• <strong>Residency-based</strong> taxation (determined by home, physical presence, professional activity, and economic interests).</li>
                                <li>• Top marginal rate: 45% (plus social levies and exceptional contributions).</li>
                                <li>• VAT of 20% (with reduced rates for essentials), typically included in price.</li>
                                <li>• Quotient familial system that divides household income by parts for tax calculation.</li>
                                <li>• More structured reporting requirements with specific forms for different types of income.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in France, you may be subject to both tax systems. The US-France Tax Treaty helps prevent double taxation, but proper planning is essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

             {/* Filing */}
             <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Your Return & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the French tax filing process and deadlines is crucial to avoid penalties. The French tax authorities have established specific timelines for filing tax returns and paying taxes due. Here's what you need to know about filing your French tax return.
                </p>
                
                <div className="relative border-l-4 border-blue-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-blue-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 10</h4>
                        <p className="text-sm text-slate-600">Online tax portal opens for the 2025 tax year.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-blue-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">May 20</h4>
                        <p className="text-sm text-slate-600">Paper income tax returns due nationwide (departments 01-19).</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-blue-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-blue-700">May 22</h4>
                        <p className="text-sm text-slate-600">Online filing deadline for departments 01-19.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-blue-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-blue-700">May 28</h4>
                        <p className="text-sm text-slate-600">Online filing deadline for departments 20-54.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-blue-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-blue-700">June 5</h4>
                        <p className="text-sm text-slate-600">Online filing deadline for departments 55-976.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-blue-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-blue-700">Mid-September</h4>
                        <p className="text-sm text-slate-600">IFI return (real estate wealth tax) submitted with income return.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-blue-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-blue-700">Mid-October</h4>
                        <p className="text-sm text-slate-600">Taxe foncière payment deadline for property owners.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-blue-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-blue-700">Mid-December</h4>
                        <p className="text-sm text-slate-600">Taxe d'habitation deadline for secondary residences.</p>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h4 className="font-bold text-blue-900 mb-2">Penalties for Late Filing</h4>
                    <p className="text-sm text-blue-800 mb-4">The French tax authorities impose penalties for late filing and late payment. The penalty amount depends on how late your return is and whether you have a history of compliance.</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-blue-700">
                         <li className="bg-white/50 p-2 rounded">Late Filing Penalty: 10% surcharge on the tax due.</li>
                         <li className="bg-white/50 p-2 rounded">Late Payment Penalty: Interest charges on unpaid amounts from due date.</li>
                         <li className="bg-white/50 p-2 rounded">Incorrect Information: Penalties up to 100% of the shortfall amount.</li>
                         <li className="bg-white/50 p-2 rounded">Extension Benefits: Avoid penalties by filing for an extension before the original deadline.</li>
                     </ul>
                </div>
            </section>

            {/* Treaty */}
            <section id="treaty">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">US-France Tax Treaty</h2>
                <p className="text-slate-600 mb-6">
                    The tax treaty between the United States and France is designed to prevent double taxation and provide clarity on which country has the primary right to tax specific types of income. Understanding this treaty is essential for American expats to optimize their tax position.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4"><Globe className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Residency Rules</h3>
                        <p className="text-xs text-slate-500">The treaty provides tie-breaker rules to determine residency when an individual has connections to both countries, considering factors like permanent home, center of vital interests, and habitual abode.</p>
                    </div>
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                         <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-4"><Calculator className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Foreign Tax Credit</h3>
                        <p className="text-xs text-slate-500">Allows you to offset US tax liability with taxes paid to French authorities (and vice versa). This prevents the same income from being taxed by both countries, though limitations may apply.</p>
                    </div>
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                         <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4"><Scale className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Pension Provisions</h3>
                        <p className="text-xs text-slate-500">The treaty determines which country has the right to tax pension income, generally allowing only one country to tax such income based on the retiree's residence. This is particularly beneficial for retired expats.</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Totalization Agreement</h4>
                    <p className="text-xs text-slate-600">
                        The US-France Totalization Agreement helps you avoid paying Social Security taxes to both countries on the same earnings. Generally, you pay into the system of the country where you are working. This agreement also allows you to combine work credits from both countries to qualify for benefits.
                    </p>
                </div>
            </section>

             {/* Forms */}
            <section id="forms">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Forms</h2>
                 <p className="text-slate-600 mb-6">
                    As an American expat in France, you'll need to familiarize yourself with various tax forms for both French and US filing requirements. These forms are essential for reporting your income, claiming benefits, and ensuring compliance with both tax systems.
                 </p>
                 <div className="overflow-hidden border border-slate-200 rounded-xl">
                     <table className="w-full text-left text-sm">
                         <thead className="bg-slate-50">
                             <tr>
                                 <th className="px-6 py-4 font-semibold text-slate-900 w-1/4">Form Type</th>
                                 <th className="px-6 py-4 font-semibold text-slate-900 w-1/4">Form Name</th>
                                 <th className="px-6 py-4 font-semibold text-slate-900 w-1/4">Purpose</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-100 bg-white">
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">French Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Formulaire 2042</td>
                                 <td className="px-6 py-4 text-slate-600">Core French income tax return form for residents.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">French Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Formulaire 2047</td>
                                 <td className="px-6 py-4 text-slate-600">Details any income received outside France (wages, pensions, dividends).</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">French Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Formulaire 3916/3916-bis</td>
                                 <td className="px-6 py-4 text-slate-600">Declares every foreign bank, brokerage, or life-insurance account.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">French Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Formulaire 2044</td>
                                 <td className="px-6 py-4 text-slate-600">Itemizes rental income and deductible expenses for unfurnished French property.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">French Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Formulaire 2074</td>
                                 <td className="px-6 py-4 text-slate-600">Tracks capital gains and losses on shares, funds, and other securities.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">Form 1040</td>
                                 <td className="px-6 py-4 text-slate-600">Standard US individual income tax return for all citizens and residents.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">Form 2555</td>
                                 <td className="px-6 py-4 text-slate-600">Used to claim the Foreign Earned Income Exclusion (FEIE) for qualifying expats.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">Form 1116</td>
                                 <td className="px-6 py-4 text-slate-600">Claim Foreign Tax Credit for French taxes paid to avoid double taxation.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">Form 8938</td>
                                 <td className="px-6 py-4 text-slate-600">Statement of Specified Foreign Financial Assets under FATCA requirements.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">FinCEN Form 114 (FBAR)</td>
                                 <td className="px-6 py-4 text-slate-600">Report French bank accounts if aggregate value > $10k at any time during the year.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">Form 8833</td>
                                 <td className="px-6 py-4 text-slate-600">Discloses any treaty position you take under the France-US income tax treaty.</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
            </section>

             {/* CTA */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-France Taxes?</h2>
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

export default FranceGuide;