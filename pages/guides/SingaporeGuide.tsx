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
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SingaporeGuide = () => {
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
                 style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1280px-Flag_of_Singapore.svg.png')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-red-500 rounded-full blur-2xl opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇸🇬</span> Singapore Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">Singapore</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Balancing obligations from both the US and Singapore can be challenging. This guide simplifies the tax intricacies for American expats, offering clear insights into taxes in Singapore and strategies for efficient tax management.
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
                { id: 'comparison', label: 'US vs Singapore System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'forms', label: 'Tax Forms' },
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
                    <p className="text-xs text-red-700 mb-3">Our US-Singapore tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
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
                 Understanding the Singapore tax system is essential for American expats to ensure compliance and optimize your tax position. Singapore operates on a residency-based taxation model with progressive income tax rates and no capital gains tax. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Calendar className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">January 1 – December 31</p>
                      <p className="text-xs text-slate-500 mt-2">Singapore follows the calendar year for tax purposes, similar to the US system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <FileText className="w-6 h-6 text-white mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Singapore Filing</p>
                      <p className="text-slate-900 font-semibold">Form B1/B</p>
                      <p className="text-xs text-slate-500 mt-2">Individual tax return filed with the Inland Revenue Authority of Singapore (IRAS).</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">April 15</p>
                      <p className="text-xs text-slate-500 mt-2">Singapore tax filing deadline, with slight extension for e-filing.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">Physical Presence</p>
                      <p className="text-xs text-slate-500 mt-2">Generally considered a resident if you spend at least 183 days in Singapore.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Determining your tax residency in Singapore is crucial for understanding your tax obligations. Singapore's tax rules treat residents and non-residents differently, with residents benefiting from progressive tax rates and various reliefs, while non-residents are taxed at a flat rate.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-2">Singapore Resident</h3>
                        <p className="text-sm text-red-800/80">
                            <strong>Progressive tax rates:</strong> Residents enjoy tax rates ranging from 0% to 24% and are entitled to various personal reliefs and deductions that can significantly reduce their tax liability.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Taxed at a <strong>flat rate of 22%</strong> on Singapore-sourced income. Non-residents are not eligible for personal reliefs and deductions that residents can claim.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Paths to Singapore Residency</h3>
                <p className="text-slate-600 mb-4">There are several options for becoming a Singapore tax resident:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Employment Pass:</strong> Designed for foreign professionals, managers, and executives with a job offer in Singapore. Requires a minimum monthly salary of 4,500 SGD and recognized qualifications.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Global Investor Program (GIP):</strong> For high-net-worth individuals willing to invest significantly in Singapore's economy. Grants permanent resident status and tax residency.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Building className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>EntrePass:</strong> For foreign entrepreneurs starting and operating a new business in Singapore in qualifying sectors like technology or healthcare.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                There is no US-Singapore tax treaty. As a US citizen in Singapore, you still have tax obligations to the United States, and careful planning is essential to minimize your overall tax burden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Taxation in Singapore</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Singapore's tax system is known for its simplicity and competitiveness. The city-state offers a range of tax types, each designed to cater to different segments of the population and business community.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax Rates (2025)</h3>
                    <p className="text-slate-600 mb-4">Singapore has a progressive tax system where rates increase with higher income levels.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Taxable Income (SGD)</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tax Rate (%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">0 - 20,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">0</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">20,001 - 30,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">2</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">30,001 - 40,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">3.5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">40,001 - 80,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">7</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">80,001 - 120,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">11.5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">120,001 - 160,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">15</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">160,001 - 200,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">18</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">200,001 - 240,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">19</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">240,001 - 280,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">19.5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">280,001 - 320,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">20</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">320,001 - 500,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">22</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">500,001 - 1,000,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">23</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">1,000,001 and above</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Goods and Services Tax (GST)</h3>
                        <p className="text-sm text-slate-600 mb-4">Similar to VAT in other countries, GST is currently set at 9%.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">9%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Business Credits</span>
                                <span className="font-bold text-slate-900">Available</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Other Taxes</h3>
                        <p className="text-sm text-slate-600 mb-4">Singapore has several other taxes that may affect you.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Capital Gains Tax</span>
                                <span className="font-bold text-slate-900">None</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Property Tax</span>
                                <span className="font-bold text-slate-900">0% - 20%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Corporate Tax</span>
                                <span className="font-bold text-slate-900">17%</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 bg-green-50 border border-green-100 rounded-xl p-6">
                    <h3 className="font-bold text-green-900 mb-3">Non-Taxable Income in Singapore</h3>
                    <p className="text-sm text-green-800 mb-4">Several types of income are exempt from taxation in Singapore:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Retrenchment benefits</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Foreign-sourced income (with exceptions)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Annuities (with exceptions)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Alimony/maintenance payments</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Winnings from betting and games of chance</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Dividend income from local companies</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-red-400" /> US vs Singapore Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and Singapore tax systems is crucial for American expats to ensure compliance and optimize their tax position.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Category</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Singapore</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">USA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Corporate Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">17%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">21%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Top Individual Income Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">24%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">37%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">GST/Sales Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">9%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Varies by state (avg. 7.25%)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Capital Gains Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">None</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Dividend Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">None (one-tier system)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in Singapore, you must navigate both tax systems. While Singapore offers competitive tax rates and no capital gains tax, you still have US tax obligations. The lack of a tax treaty makes careful planning essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filing */}
            <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Requirements & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the filing requirements and deadlines for both US and Singapore taxes is crucial to avoid penalties and ensure compliance. As a US citizen living in Singapore, you have obligations to both countries.
                </p>
                
                <div className="relative border-l-4 border-red-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 15</h4>
                        <p className="text-sm text-slate-600">US tax filing deadline for all citizens. Expats receive an automatic extension until June 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 15</h4>
                        <p className="text-sm text-slate-600">Singapore tax filing deadline for individuals. E-filing provides a slight extension to April 18.</p>
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
                    <h4 className="font-bold text-red-900 mb-2">Important Deadlines for Businesses</h4>
                    <p className="text-sm text-red-800 mb-4">If you own a business in Singapore, additional deadlines apply:</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-red-700">
                         <li className="bg-white/50 p-2 rounded"><strong>ECI Submission:</strong> Within 3 months from financial year-end</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Corporate Tax Filing:</strong> By November 30 of the following year</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Form IR21:</strong> At least 1 month before employee departure</li>
                     </ul>
                </div>
            </section>

            {/* Tax Forms */}
            <section id="forms">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Tax Forms for US Expats</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    As a US expat in Singapore, you need to be familiar with tax forms from both countries. Here are the most common forms you'll encounter:
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
                                <span><strong>Form 2555:</strong> Foreign Earned Income Exclusion</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form 8938:</strong> Statement of Specified Foreign Financial Assets</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>FBAR (FinCEN Form 114):</strong> Foreign Bank Account Report</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Singapore Tax Forms</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form B1:</strong> Standard income tax return for employees</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form B:</strong> For those with business income in addition to employment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form P:</strong> For expats who own and rent out property</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Form M:</strong> For non-residents working in Singapore</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Form IR8A</h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                Employers in Singapore provide Form IR8A to their employees, summarizing all earnings and benefits-in-kind provided during the year. This form is essential for accurately filing your Singapore tax return.
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
                        <h3 className="font-bold text-slate-900 mb-3">Does Singapore have taxes for foreigners?</h3>
                        <p className="text-sm text-slate-600">Yes, Singapore taxes foreigners based on their residency status. Residents enjoy progressive tax rates, while non-residents are taxed at a flat rate of 22% on Singapore-sourced income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Is there a US-Singapore tax treaty?</h3>
                        <p className="text-sm text-slate-600">No, the United States does not have a tax treaty with Singapore. This lack of a treaty can make tax planning more complex for US citizens living in Singapore.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Do I need to pay US taxes while living in Singapore?</h3>
                        <p className="text-sm text-slate-600">Yes, as a US citizen, you must file US taxes regardless of where you live. However, you may be able to use the Foreign Earned Income Exclusion or Foreign Tax Credit to reduce your US tax liability.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">What forms do I need to file?</h3>
                        <p className="text-sm text-slate-600">US citizens must file Form 1040, FBAR (FinCEN Form 114), and Form 8938 (FATCA). In Singapore, residents file Form B1 or Form B with the IRAS.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-Singapore Taxes?</h2>
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

export default SingaporeGuide;