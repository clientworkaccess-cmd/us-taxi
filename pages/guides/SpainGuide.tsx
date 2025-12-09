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

const SpainGuide = () => {
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
                 style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDmlbxqMPiukELmeeFx9y-coF0XSgOA310A&s')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-full blur-2xl opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇪🇸</span> Spain Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">Spain</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Living in Spain as a US citizen means navigating two overlapping systems. Understanding how taxes in Spain work is essential to avoid double taxation, claim the right exclusions or credits, and stay compliant on both sides of the Atlantic.
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
                { id: 'comparison', label: 'US vs Spain System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'forms', label: 'Tax Forms' },
                { id: 'strategies', label: 'Strategies' },
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
                    <p className="text-xs text-red-700 mb-3">Our US-Spain tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
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
                 Understanding the Spanish tax system is essential for American expats to ensure compliance and optimize your tax position. Spain operates on a residency-based taxation model with progressive income tax rates that vary by region. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Calendar className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">January 1 – December 31</p>
                      <p className="text-xs text-slate-500 mt-2">Spain follows the calendar year for tax purposes, similar to the US system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <FileText className="w-6 h-6 text-yellow-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Spanish Filing</p>
                      <p className="text-slate-900 font-semibold">Modelo 100</p>
                      <p className="text-xs text-slate-500 mt-2">Declaración de la Renta (IRPF) - Individual income tax return.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">June 30</p>
                      <p className="text-xs text-slate-500 mt-2">Spanish tax filing deadline for the prior year's return.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">183 Days</p>
                      <p className="text-xs text-slate-500 mt-2">Generally considered a resident if you spend more than 183 days in Spain.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    In Spain, your income taxation depends on whether you are resident or non-resident for the calendar year. Residents are taxed on worldwide income, while non-residents are taxed only on Spanish-source income. The law sets objective tests to decide residency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-2">Spain Resident</h3>
                        <p className="text-sm text-red-800/80">
                            <strong>Taxed on worldwide income:</strong> As a resident, you pay taxes on all income regardless of where it's earned. Tax rates vary by autonomous community, with progressive scales for general income and savings income.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Only pay taxes on <strong>Spanish-source income</strong> at a flat rate of 24% (19% for EU/EEA residents). Non-residents are not eligible for the same deductions and reliefs as residents.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Residency Requirements</h3>
                <p className="text-slate-600 mb-4">You may be considered a tax resident in Spain if you meet any of these criteria:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>183-day presence:</strong> Spend more than 183 days in Spain during the calendar year to meet the residency threshold. Temporary absences are generally counted as days in Spain.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Center of economic interests:</strong> If your principal place of work, business, or economic interests is based in Spain, you're considered a resident even if you spent fewer than 183 days.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Family tie presumption:</strong> If your legally non-separated spouse and dependent minor children habitually live in Spain, you are presumed resident unless you prove otherwise.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                The US-Spain tax treaty helps prevent double taxation, but the US saving clause allows the US to tax its citizens regardless of treaty provisions. Careful planning is essential to minimize your overall tax burden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Taxation in Spain</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Spain's tax system blends national rules with powerful regional levers, so the effective tax range you face depends on where you live. Below is a quick tour of the Spanish tax landscape and the key threshold figures US expats should know for 2025.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax (IRPF)</h3>
                    <p className="text-slate-600 mb-4">Residents are taxed on worldwide income, split between general income (salary, business, rental) and savings income (interest, dividends, capital gains).</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Savings Taxable Base (EUR)</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tax Rate (%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">Up to 6,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">19</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">6,000 - 50,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">21</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">50,000 - 200,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">23</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">200,000 - 300,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">27</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">Over 300,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-3">Note: General income rates on salary/business income vary by autonomous community (state + regional scales).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">VAT (IVA)</h3>
                        <p className="text-sm text-slate-600 mb-4">Spain applies three IVA bands on goods and services.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">21%</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Reduced Rate</span>
                                <span className="font-bold text-slate-900">10%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Super-Reduced Rate</span>
                                <span className="font-bold text-slate-900">4%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Other Taxes</h3>
                        <p className="text-sm text-slate-600 mb-4">Spain has several other taxes that may affect you.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Wealth Tax</span>
                                <span className="font-bold text-slate-900">0.2% - 3.5%</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Inheritance Tax</span>
                                <span className="font-bold text-slate-900">7.65% - 34%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Property Tax (IBI)</span>
                                <span className="font-bold text-slate-900">0.4% - 1.10%</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 bg-green-50 border border-green-100 rounded-xl p-6">
                    <h3 className="font-bold text-green-900 mb-3">Beckham Regime</h3>
                    <p className="text-sm text-green-800 mb-4">Spain's impatriate tax regime lets eligible newcomers pay tax only on Spanish-source income for six years.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Flat rate of 24% up to €600,000</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>47% on income above €600,000</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Election must be made within six months</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-red-400" /> US vs Spain Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and Spain tax systems is crucial for American expats to ensure compliance and optimize your tax position.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Category</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Spain</th>
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
                                    <td className="px-4 py-3 text-sm text-slate-300">47% (Beckham regime)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">37%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">VAT/Sales Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">21% (standard)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Varies by state (avg. 7.25%)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Capital Gains Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">19% - 30%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Dividend Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">19% - 30%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Wealth Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Yes (0.2% - 3.5%)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">No (federal level)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in Spain, you must navigate both tax systems. The US-Spain tax treaty helps prevent double taxation, but the US saving clause allows the US to tax its citizens regardless of treaty provisions. Careful planning is essential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filing */}
            <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Requirements & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the filing requirements and deadlines for both US and Spanish taxes is crucial to avoid penalties and ensure compliance. As a US citizen living in Spain, you have obligations to both countries.
                </p>
                
                <div className="relative border-l-4 border-red-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 15</h4>
                        <p className="text-sm text-slate-600">US tax filing deadline for all citizens. Expats receive an automatic extension until June 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 2 - June 30</h4>
                        <p className="text-sm text-slate-600">Spanish tax filing window for Modelo 100 (resident income tax return).</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-red-700">June 15</h4>
                        <p className="text-sm text-slate-600">Extended deadline for US expatriate taxes. If taxes are owed, interest begins to accrue from April 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-red-700">March 31</h4>
                        <p className="text-sm text-slate-600">Deadline for Modelo 720 (reporting foreign assets over €50,000).</p>
                    </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h4 className="font-bold text-red-900 mb-2">Important Deadlines for Businesses</h4>
                    <p className="text-sm text-red-800 mb-4">If you're self-employed in Spain, additional deadlines apply:</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-red-700">
                         <li className="bg-white/50 p-2 rounded"><strong>Modelo 130/131:</strong> Quarterly self-employed income (20th of Apr, Jul, Oct, Jan)</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Modelo 714:</strong> Wealth tax (filed with income return)</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Modelo 718:</strong> Solidarity Tax (July 1-31)</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Modelo 210:</strong> Nonresident income (quarterly or Dec 31)</li>
                     </ul>
                </div>
            </section>

            {/* Tax Forms */}
            <section id="forms">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Tax Forms for US Expats</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    As a US expat in Spain, you need to be familiar with tax forms from both countries. Here are the most common forms you'll encounter:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">US Tax Forms</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 1040:</strong> Standard US individual income tax return</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 2555:</strong> Foreign Earned Income Exclusion (2025 limit: $130,000)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 1116:</strong> Foreign Tax Credit for Spanish taxes paid</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>FBAR (FinCEN Form 114):</strong> Foreign Bank Account Report</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 8938:</strong> Statement of Specified Foreign Financial Assets</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Spanish Tax Forms</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Modelo 100:</strong> Resident income tax return</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Modelo 130/131:</strong> Quarterly self-employed income</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Modelo 714:</strong> Wealth tax return</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Modelo 720:</strong> Foreign assets reporting</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Modelo 210:</strong> Nonresident income tax</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Reporting Requirements</h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                Americans in Spain must report foreign financial accounts and assets in both countries. In Spain, residents file Modelo 720 to disclose foreign assets when any category exceeds €50,000. In the US, FATCA Form 8938 and FBAR have different thresholds and requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategies */}
            <section id="strategies">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Strategies for Living in Spain</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Even after you've sorted your income taxes, there are several important strategies to consider. From how Spain treats trusts to cross-border money movements and expat tax breaks, knowing the fine print can save you stress and money.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Trusts: Rare in Spain, Taxable Nonetheless</h3>
                        <p className="text-sm text-slate-600 mb-4">Spain doesn't recognize trusts under domestic law, but it may still tax trust income if you're a resident beneficiary. Even discretionary trusts can trigger tax if income is deemed attributed.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>Spain's focus is on transparency and reporting</span>
                            </li>
                             <li className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>Tax planning is crucial for complex structures</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Exchange Controls: Report, Don't Restrict</h3>
                        <p className="text-sm text-slate-600 mb-4">Spain allows free capital movement, but you must report major transfers. Foreign investments by nonresidents must be registered with the Directorate of Commerce.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Declare €10,000+ cross-border transfers</span>
                            </li>
                             <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Report foreign holdings via Modelo 720</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                    <h3 className="font-bold text-green-900 mb-3">Smart Tax Credits for US Expats in Spain</h3>
                    <p className="text-sm text-green-800 mb-4">Spain's IRPF offers targeted relief that can trim your final Spanish tax without gimmicks, even when you also pay taxes in Spain on worldwide income.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>International double-tax relief:</strong> Deduct lower of foreign tax paid or Spanish tax rate</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Start-up investment deduction:</strong> 50% up to €100,000</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Donations under Law 49/2002:</strong> 80% of first €250, then 40% of rest</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Regional add-ons:</strong> Check your comunidad for extra credits</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Does Spain have taxes for foreigners?</h3>
                        <p className="text-sm text-slate-600">Yes, Spain taxes foreigners based on their residency status. Residents are taxed on worldwide income, while non-residents are only taxed on Spanish-source income at a flat rate of 24% (19% for EU/EEA residents).</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Is there a US-Spain tax treaty?</h3>
                        <p className="text-sm text-slate-600">Yes, the US and Spain have a tax treaty signed in 1990 and updated in 2013. It sets rules to prevent double taxation and applies the 183-day employment test, but the US saving clause allows the US to tax its citizens regardless of treaty provisions.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Do I need to pay US taxes while living in Spain?</h3>
                        <p className="text-sm text-slate-600">Yes, as a US citizen, you must file US taxes regardless of where you live. However, you may be able to use the Foreign Earned Income Exclusion or Foreign Tax Credit to reduce your US tax liability.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">What forms do I need to file?</h3>
                        <p className="text-sm text-slate-600">US citizens must file Form 1040, FBAR (FinCEN Form 114), and Form 8938 (FATCA). In Spain, residents file Modelo 100 with the Spanish tax authority.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-Spain Taxes?</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                    Living in Spain doesn't mean you can forget about your US tax obligations – and Spanish tax rules are anything but simple. Whether you're navigating IRPF brackets, Modelo 720, or choosing between FEIE and FTC, expert guidance saves time, money, and stress.
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

export default SpainGuide;