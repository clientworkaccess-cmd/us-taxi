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
  Info,
  Users,
  DollarSign,
  Receipt,
  Building,
  CreditCard,
  Home,
  Briefcase,
  TrendingUp,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PortugalGuide = () => {
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
                 style={{backgroundImage: "url('https://flagpedia.net/data/flags/w580/pt.png')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-yellow-500 rounded-full blur-2xl opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇵🇹</span> Portugal Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-400">Portugal</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Thinking of moving to Portugal? Before you settle in, it's important to understand the tax system - not only to stay compliant but also to avoid paying more than necessary.
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
                { id: 'comparison', label: 'US vs Portugal System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'forms', label: 'Tax Forms' },
                { id: 'treaty', label: 'US-Portugal Treaty' },
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
                    <p className="text-xs text-red-700 mb-3">Our US-Portugal tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
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
                 Understanding the Portuguese tax system is essential for American expats to ensure compliance and optimize your tax position. Portugal operates on a residency-based taxation model with progressive income tax rates and special programs like the Non-Habitual Resident (NHR) program. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Calendar className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">January 1 – December 31</p>
                      <p className="text-xs text-slate-500 mt-2">Portugal follows the calendar year for tax purposes, similar to the US system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <FileText className="w-6 h-6 text-green-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Portuguese Filing</p>
                      <p className="text-slate-900 font-semibold">Modelo 3</p>
                      <p className="text-xs text-slate-500 mt-2">Portuguese income tax return covering employment, business, and investment income.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">April 1 - June 30</p>
                      <p className="text-xs text-slate-500 mt-2">Portuguese tax filing window for the prior year's return.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">183 Days</p>
                      <p className="text-xs text-slate-500 mt-2">Generally considered a resident if you spend 183+ days in Portugal.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Portugal taxes residents and non-residents differently. Residents must declare their worldwide income, while non-residents pay tax only on income from Portuguese sources. Some expats may qualify for the Non-Habitual Resident (NHR) program, which offers significant tax benefits.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-2">Portugal Resident</h3>
                        <p className="text-sm text-red-800/80">
                            <strong>Taxed on worldwide income:</strong> As a resident, you pay taxes on all income regardless of where it's earned. Tax rates are progressive, ranging from 13% to 48%.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Only pay taxes on <strong>Portuguese-source income</strong> at a flat rate of 25% for most income types. Non-residents are not eligible for the same deductions as residents.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Residency Requirements</h3>
                <p className="text-slate-600 mb-4">You'll be considered a tax resident in Portugal if you meet at least one of these conditions:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>183-day presence:</strong> You're in Portugal for 183+ days in a tax year (they don't have to be consecutive).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Permanent home:</strong> You own or rent a home in Portugal and use it as your main residence.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Work on ship/aircraft:</strong> You work on a ship or aircraft based in Portugal or carry out public duties abroad for Portugal.</span>
                    </li>
                </ul>

                <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
                    <h3 className="font-bold text-green-900 mb-3">Non-Habitual Resident (NHR) Program</h3>
                    <p className="text-sm text-green-800 mb-4">Portugal's NHR program offers 10 years of tax benefits to expats, retirees, and professionals moving to Portugal.</p>
                    <ul className="space-y-3 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>0% flat tax</strong> on Portuguese income for certain highly qualified professionals</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Foreign income exemptions</strong> for pensions, dividends, and royalties</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>10% flat tax</strong> on foreign pensions (US government pensions remain taxable only in US)</span>
                        </li>
                    </ul>
                    <p className="text-xs text-green-600 mt-4">To qualify: Not have been a tax resident in Portugal for the last five years, become a tax resident by staying 183+ days or having a permanent home, and apply for NHR status upon arrival or by December 31 of the following year.</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                The US-Portugal tax treaty helps prevent double taxation, but as a US citizen, you still have tax obligations to the United States. The Totalization Agreement prevents duplicate social security contributions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Taxation in Portugal</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Portugal has several taxes that residents and non-residents must be aware of, including income tax, social security, capital gains, inheritance, and property taxes. Understanding these taxes can help you plan your finances and avoid unexpected liabilities.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax Rates (2025)</h3>
                    <p className="text-slate-600 mb-4">Portugal has a progressive income tax system for residents, meaning the more you earn, the higher the tax rate applied to your income.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Taxable Income (EUR)</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tax Rate (%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">0 - 8,059</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">13</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">8,060 - 12,160</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">16.5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">12,161 - 17,233</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">22</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">17,234 - 22,306</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">25</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">22,307 - 28,400</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">32</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">28,401 - 41,629</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">35.5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">41,630 - 44,987</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">43.5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">44,988 - 83,696</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">45</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">83,697 and above</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">48</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-3">Note: A solidarity tax of between 2.5% and 5% applies to taxpayers earning more than €80,000 per year.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Value Added Tax (IVA)</h3>
                        <p className="text-sm text-slate-600 mb-4">VAT is levied on goods and services in Portugal, with rates varying by region.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">23% (Mainland)</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Reduced Rate</span>
                                <span className="font-bold text-slate-900">6% (Essentials)</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Intermediate Rate</span>
                                <span className="font-bold text-slate-900">13% (Restaurants)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Other Taxes</h3>
                        <p className="text-sm text-slate-600 mb-4">Portugal has several other taxes that may affect you.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Corporation Tax</span>
                                <span className="font-bold text-slate-900">21%</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Property Tax (IMI)</span>
                                <span className="font-bold text-slate-900">0.3% - 0.45%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Wealth Tax (AIMI)</span>
                                <span className="font-bold text-slate-900">0.7% - 1.5%</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 bg-green-50 border border-green-100 rounded-xl p-6">
                    <h3 className="font-bold text-green-900 mb-3">Crypto Tax in Portugal</h3>
                    <p className="text-sm text-green-800 mb-4">Portugal no longer fully exempts crypto gains from taxation.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Short-term gains:</strong> 28% for non-residents, progressive rates for residents</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Long-term gains:</strong> May be tax-free for residents</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Crypto as income:</strong> Taxed according to income tax rules</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-red-400" /> US vs Portugal Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and Portugal tax systems is crucial for American expats to ensure compliance and optimize your tax position.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Category</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Portugal</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">USA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Taxation Basis</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Residency-based</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Citizenship-based</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Top Individual Income Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">48%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">37%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">VAT/Sales Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">23% (standard)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Varies by state (avg. 7.25%)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Capital Gains Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">28% (short-term)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Dividend Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">25% (or exempt for NHR)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Wealth Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Yes (AIMI on property)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">No (federal level)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in Portugal, you must navigate both tax systems. The US-Portugal tax treaty and Totalization Agreement help prevent double taxation and duplicate social security contributions, but careful planning is essential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filing */}
            <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Requirements & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Both residents and non-residents are required to file a tax return if they meet certain income thresholds. Understanding deadlines, filing options, and penalties is key to staying compliant and avoiding fines.
                </p>
                
                <div className="relative border-l-4 border-red-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 1 - June 30</h4>
                        <p className="text-sm text-slate-600">Portuguese tax filing window for the prior year's return (Modelo 3).</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 15</h4>
                        <p className="text-sm text-slate-600">US tax filing deadline for all citizens. Expats receive an automatic extension until June 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-red-700">June 15</h4>
                        <p className="text-sm text-slate-600">Extended deadline for US expatriate taxes. If taxes are owed, interest begins to accrue from April 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-red-700">October 15</h4>
                        <p className="text-sm text-slate-600">Final deadline for US expatriate taxes if you have received an extension.</p>
                    </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h4 className="font-bold text-red-900 mb-2">How to File in Portugal</h4>
                    <p className="text-sm text-red-800 mb-4">Follow these steps to file your Portuguese tax return:</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-red-700">
                         <li className="bg-white/50 p-2 rounded"><strong>1. Obtain NIF:</strong> Register with tax authorities to get your tax identification number</li>
                         <li className="bg-white/50 p-2 rounded"><strong>2. Gather documents:</strong> Income statements, deductions, and foreign tax certificates</li>
                         <li className="bg-white/50 p-2 rounded"><strong>3. File online:</strong> Submit your return through Portal das Finanças</li>
                         <li className="bg-white/50 p-2 rounded"><strong>4. Pay by deadline:</strong> Avoid penalties for late payment</li>
                     </ul>
                </div>
            </section>

            {/* Tax Treaty */}
            <section id="treaty">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">US-Portugal Tax Treaty</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    The US-Portugal tax treaty helps expats avoid double taxation by allowing US citizens in Portugal to claim foreign tax credits for Portuguese taxes paid. Likewise, Portuguese residents with US income can offset their US tax obligations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Tax Treaty Benefits</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Employment income:</strong> Taxed where work is performed</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Pension income:</strong> Taxed in resident country (NHR may apply 10% rate)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Dividends, interest, royalties:</strong> May be taxed in both countries, but withholding rates are reduced</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Totalization Agreement</h3>
                        <p className="text-sm text-slate-600 mb-4">The US-Portugal Totalization Agreement prevents duplicate social security contributions and ensures expats receive benefits from both systems.</p>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Avoid double payments:</strong> Continue paying into US Social Security and be exempt from Portuguese contributions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Combine contributions:</strong> Work history from both countries can qualify for Social Security benefits</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Tie-Breaker Rules</h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                For dual residents, tie-breaker rules determine tax residency based on permanent residence, financial interests, or nationality. However, the US saving clause allows the US to tax its citizens regardless of treaty provisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tax Forms */}
            <section id="forms">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Tax Forms for US Expats</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    In addition to US tax forms, American expats in Portugal will need to understand Portuguese tax forms, especially if they earn income in Portugal or become tax residents.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">US Tax Forms</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 1040:</strong> Required for all US citizens, reporting worldwide income</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 2555:</strong> Foreign Earned Income Exclusion</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 1116:</strong> Foreign Tax Credit for Portuguese taxes paid</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>FBAR (FinCEN 114):</strong> Foreign Bank Account Report</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 8938:</strong> FATCA reporting for foreign assets</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Portuguese Tax Forms</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Modelo 3:</strong> Main individual income tax return</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Anexo G & G1:</strong> Capital gains from property, shares, or other assets</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Anexo H:</strong> Deductions and tax benefits</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Anexo J:</strong> Foreign income (important for NHR beneficiaries)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Portuguese NIF</h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                A crucial part of living, working, or doing business in Portugal is obtaining a Portuguese NIF (Número de Identificação Fiscal). This number is required for opening a bank account, signing contracts, buying property, or setting up a business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Does Portugal have taxes for foreigners?</h3>
                        <p className="text-sm text-slate-600">Yes, Portugal taxes foreigners based on their residency status. Residents are taxed on worldwide income, while non-residents are only taxed on Portuguese-source income at a flat rate of 25%.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Is there a US-Portugal tax treaty?</h3>
                        <p className="text-sm text-slate-600">Yes, the US and Portugal have a tax treaty that helps prevent double taxation and determines which country taxes certain types of income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Do I need to pay US taxes while living in Portugal?</h3>
                        <p className="text-sm text-slate-600">Yes, as a US citizen, you must file US taxes regardless of where you live. However, you may be able to use the Foreign Earned Income Exclusion or Foreign Tax Credit to reduce your US tax liability.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">What is the Non-Habitual Resident (NHR) program?</h3>
                        <p className="text-sm text-slate-600">The NHR program offers 10 years of tax benefits to expats, retirees, and professionals moving to Portugal, including 0% tax on certain Portuguese income and exemptions on foreign income.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-red-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-Portugal Taxes?</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                    Moving to Portugal for work or retirement? Our dual-qualified experts can help you navigate both tax systems, ensure compliance, and optimize your tax position to minimize your overall burden.
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

export default PortugalGuide;