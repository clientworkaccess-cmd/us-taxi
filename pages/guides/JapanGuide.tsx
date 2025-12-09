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

const JapanGuide = () => {
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
                 style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-red-500 rounded-full blur-2xl opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇯🇵</span> Japan Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">Japan</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Moving to Japan offers a unique blend of opportunity and adventure, but one area that often surprises American expatriates is the complexity of Japanese taxes. Understanding how the Japanese tax system works is essential for anyone living or working in the country.
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
                { id: 'comparison', label: 'US vs Japan System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'treaty', label: 'US-Japan Tax Treaty' },
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
                    <p className="text-xs text-red-700 mb-3">Our US-Japan tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
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
                 Understanding the Japanese tax system is essential for American expats to ensure compliance and optimize your tax position. Japan operates on a residency-based taxation model with progressive income tax rates up to 45%. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Calendar className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">January 1 – December 31</p>
                      <p className="text-xs text-slate-500 mt-2">Japan follows the calendar year for tax purposes.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <FileText className="w-6 h-6 text-white mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Japanese Filing</p>
                      <p className="text-slate-900 font-semibold">Kakutei Shinkoku</p>
                      <p className="text-xs text-slate-500 mt-2">Japanese individual tax return.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">March 15</p>
                      <p className="text-xs text-slate-500 mt-2">Japanese tax filing deadline for the prior year.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">183 Days</p>
                      <p className="text-xs text-slate-500 mt-2">Generally considered a resident if you spend 183+ days in Japan.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    When it comes to paying taxes in Japan, your residency status matters. Japan divides people into three categories: non-resident, non-permanent resident, and permanent resident. Each category has different tax implications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-red-800/80">
                            <strong>Limited tax obligations:</strong> Just moved to Japan? Haven't been here a full year? You're probably a non-resident. Japan will only tax you on money you earn in Japan.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Permanent Resident</h3>
                        <p className="text-sm text-slate-600">
                             <strong>Partial tax obligations:</strong> Lived in Japan for less than five of the last ten years and don't have Japanese citizenship? You'll pay tax on income from Japan and some foreign income.
                        </p>
                    </div>
                    <div className="bg-green-50/50 border border-green-100 p-6 rounded-xl">
                        <h3 className="font-bold text-green-900 mb-2">Permanent Resident</h3>
                        <p className="text-sm text-green-800/80">
                            <strong>Full tax obligations:</strong> If you've been here five out of the last ten years, you're in this group. Japan will tax your worldwide income - just like the US does.
                        </p>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                As a US citizen or green card holder, you must file and pay US taxes, even if you're already a tax resident of Japan. The US-Japan tax treaty helps prevent double taxation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Taxation in Japan</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Japan has a comprehensive tax system that affects both residents and non-residents. Here's a breakdown of the key taxes you should be aware of as an American expat living in Japan.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax Rates (2025)</h3>
                    <p className="text-slate-600 mb-4">Japan's income tax is progressive, meaning the rate increases as your income increases.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Taxable Income (JPY)</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tax Rate (%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">0 - 1,950,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">1,950,000 - 3,300,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">10</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">3,300,000 - 6,950,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">20</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">6,950,000 - 9,000,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">23</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">9,000,000 - 18,000,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">33</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">18,000,000 - 40,000,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">40</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">40,000,000 and above</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">45</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Local Income Tax</h3>
                        <p className="text-sm text-slate-600 mb-4">In addition to national income tax, you'll also pay local income tax in Japan.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">~10%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Based on</span>
                                <span className="font-bold text-slate-900">Last year's income</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Surtax</h3>
                        <p className="text-sm text-slate-600 mb-4">On top of regular income tax, Japan adds a small extra charge.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Rate</span>
                                <span className="font-bold text-slate-900">2.1%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Applied to</span>
                                <span className="font-bold text-slate-900">Total income tax</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Property Tax</h3>
                        <p className="text-sm text-slate-600 mb-4">If you own real estate in Japan, you'll need to pay property tax.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">1.4%</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">City Planning Tax</span>
                                <span className="font-bold text-slate-900">~0.3%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Consumption Tax</h3>
                        <p className="text-sm text-slate-600 mb-4">Japan levies a consumption tax on most goods and services.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">10%</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Reduced Rate</span>
                                <span className="font-bold text-slate-900">8%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Essentials</span>
                                <span className="font-bold text-slate-900">Food, newspapers, transport</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 bg-green-50 border border-green-100 rounded-xl p-6">
                    <h3 className="font-bold text-green-900 mb-3">Inheritance Tax</h3>
                    <p className="text-sm text-green-800 mb-4">Japan's inheritance tax applies to assets passed on after someone's death.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Progressive rates:</strong> Ranging from 10% to 55% based on total value</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Family discounts:</strong> Close family members often face lower effective tax rates</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-red-400" /> US vs Japan Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and Japan tax systems is crucial for American expats to ensure compliance and optimize your tax position.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Category</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Japan</th>
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
                                    <td className="px-4 py-3 text-sm text-slate-300">45%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">37%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">VAT/Consumption Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">10%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Varies by state (avg. 7.25%)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Capital Gains Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Up to 45%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Dividend Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">20.315%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Estate/Inheritance Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Up to 55%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Estate tax (up to 40%)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in Japan, you must navigate both tax systems. The US-Japan tax treaty helps prevent double taxation, but careful planning is essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filing */}
            <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Requirements & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the filing requirements and deadlines for both US and Japanese taxes is crucial to avoid penalties and ensure compliance. As a US citizen living in Japan, you have obligations to both countries.
                </p>
                
                <div className="relative border-l-4 border-red-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">March 15</h4>
                        <p className="text-sm text-slate-600">Japanese tax filing deadline for the prior year's return.</p>
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
                    <h4 className="font-bold text-red-900 mb-2">Important Deadlines for Japan</h4>
                    <p className="text-sm text-red-800 mb-4">Japan's tax year follows the calendar - January 1 to December 31.</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-red-700">
                         <li className="bg-white/50 p-2 rounded"><strong>Provisional tax:</strong> Paid at 6-month intervals during tax year</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Final payment:</strong> Due 6 months after tax year end</li>
                         <li className="bg-white/50 p-2 rounded"><strong>VAT returns:</strong> Generally submitted every 2 months</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Corporate returns:</strong> Within 2 months of company's financial year end</li>
                     </ul>
                </div>
            </section>

            {/* Tax Treaty */}
            <section id="treaty">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">US-Japan Tax Treaty</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    The US-Japan tax treaty is designed to make it easier and fairer for Americans living in Japan. It sets rules for who taxes what, so you don't pay taxes on the same income in both countries.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Treaty Benefits</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>No double taxation:</strong> Sets rules for who taxes what, so you don't pay taxes on the same income in both countries.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Lower withholding rates:</strong> If you receive dividends, interest, or royalties from Japan or US, treaty may reduce the amount that is withheld.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Foreign tax credits:</strong> Have you paid taxes in one country on income that is also taxed in the other? You may be eligible for a tax credit.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Social Security Coordination</h3>
                        <p className="text-sm text-slate-600 mb-4">The treaty also covers pensions and Social Security, so retirees know what to expect when it comes to taxes on these payments.</p>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Coverage:</strong> Both countries provide health care, retirement, unemployment, and work-related injury coverage.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Coordination:</strong> The treaty ensures you don't lose benefits from either system.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Does Japan have taxes for foreigners?</h3>
                        <p className="text-sm text-slate-600">Yes, Japan taxes foreigners based on their residency status. Non-residents are only taxed on Japanese-source income, while permanent residents are taxed on worldwide income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Is there a US-Japan tax treaty?</h3>
                        <p className="text-sm text-slate-600">Yes, the US and Japan have a tax treaty that helps prevent double taxation and determines which country taxes certain types of income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Do I need to pay US taxes while living in Japan?</h3>
                        <p className="text-sm text-slate-600">Yes, as a US citizen, you must file US taxes regardless of where you live. However, you may be able to use the Foreign Earned Income Exclusion or Foreign Tax Credit to reduce your US tax liability.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">What forms do I need to file?</h3>
                        <p className="text-sm text-slate-600">US citizens must file Form 1040, FBAR (FinCEN Form 114), and Form 8938 (FATCA). In Japan, residents file annual tax returns using forms like Kakutei Shinkoku.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-red-600 to-white rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Got Questions About Your US Taxes in Japan?</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                    We're ready to assist you – start with a free consultation. Our team has been preparing U.S. tax returns for U.S. citizens and green card holders working in Japan for over 8 years.
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

export default JapanGuide;