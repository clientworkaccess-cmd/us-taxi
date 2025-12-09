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

const UnitedKingdomGuide = () => {
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
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-600 rounded-full blur-3xl"></div>
            {/* UK Flag Background Element */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-800"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white transform rotate-45"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-red-600 transform rotate-45 scale-75"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-red-600 transform -rotate-45 scale-75"></div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇬🇧</span> UK Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">United Kingdom</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Navigate the complexities of UK taxation with confidence. From the Statutory Residence Test to the US-UK Tax Treaty, we ensure you stay compliant on both sides of the Atlantic while optimizing your tax position.
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
                { id: 'taxation', label: 'UK Taxation Types' },
                { id: 'comparison', label: 'US vs UK System' },
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
                <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-2 text-sm">Need personalized help?</h4>
                    <p className="text-xs text-indigo-700 mb-3">Our US-UK tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
                    <Link to="/contact" className="block w-full py-2 bg-indigo-600 text-white text-xs font-bold text-center rounded hover:bg-indigo-700 transition-colors">
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
                 Understanding the UK tax system is essential for American expats to ensure compliance and optimize your tax position. The UK operates on a residency-based taxation model, which differs significantly from the US citizenship-based approach. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                      <Calendar className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">April 6 – April 5</p>
                      <p className="text-xs text-slate-500 mt-2">The UK tax year runs from April 6 to April 5 of the following year, unlike the US calendar year system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                      <FileText className="w-6 h-6 text-purple-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Primary Form</p>
                      <p className="text-slate-900 font-semibold">SA100</p>
                      <p className="text-xs text-slate-500 mt-2">The Self Assessment tax return form is the main document UK residents use to report their income to HMRC.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date (Online)</p>
                      <p className="text-slate-900 font-semibold">January 31</p>
                      <p className="text-xs text-slate-500 mt-2">Online tax returns must be filed by midnight on January 31 following the end of the tax year.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                      <MapPin className="w-6 h-6 text-green-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">SRT Test</p>
                      <p className="text-xs text-slate-500 mt-2">The Statutory Residence Test determines your tax residency status based on days spent in the UK and other connections.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Determining your tax residency is the first and most critical step in the UK tax system. Unlike the US citizenship-based model where all citizens are taxed on worldwide income regardless of where they live, the UK uses the <strong>Statutory Residence Test (SRT)</strong> to determine who is subject to UK taxes. Your residency status significantly impacts which income is taxable and how you're taxed.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-indigo-50/50 border border-indigo-100 p-6 rounded-xl">
                        <h3 className="font-bold text-indigo-900 mb-2">UK Resident</h3>
                        <p className="text-sm text-indigo-800/80">
                            Typically taxed on <strong>worldwide income</strong>. This means income from both the UK and abroad (including the US) is subject to UK tax. As a UK resident, you'll need to report all your income, regardless of where it's earned, though tax treaties may prevent double taxation.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Generally taxed only on <strong>UK-sourced income</strong>. Income earned outside the UK is usually exempt from UK taxation. This includes employment income, rental income, and business profits connected to the UK.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">The Statutory Residence Test (SRT)</h3>
                <p className="text-slate-600 mb-4">The SRT is a comprehensive test used to determine your UK tax residency status. You are likely a UK resident if you meet any of these automatic tests:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">You spend <strong>183 days or more</strong> in the UK during the tax year. Days count as whole days when you're physically present in the UK at midnight.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">Your only home is in the UK (and you've owned/rented it for 91+ days). This applies if you have a home in the UK for at least 91 days of the tax year and you're present there for at least 30 days.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">You work full-time in the UK (average 35+ hours/week). This applies if you work full-time in the UK for any period of 365 days and more than 75% of your work is in the UK.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Domicile Status Warning</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                Your domicile (often your father's birth country) impacts inheritance tax and the "remittance basis" of taxation. Domicile is a legal concept that determines your permanent home for tax purposes, which may differ from your residency status. 
                                <strong> Note:</strong> Rules regarding non-domiciled residents ("non-doms") are tightening as of April 2025. Long-term residents (15 of last 20 years) become "deemed domiciled" for tax purposes, meaning they'll be taxed on worldwide income and gains.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">UK Taxation Types & Rates</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    The UK tax system includes several types of taxes that may affect American expats. Understanding these taxes and their rates is crucial for proper financial planning and compliance. Here's a comprehensive overview of the main taxes you'll encounter as a US citizen living in the UK.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Income Tax Rates (2025/2026)</h3>
                    <p className="text-slate-600 mb-4">Income tax in the UK is progressive, with higher rates applying to higher income brackets. The rates differ for Scottish taxpayers compared to the rest of the UK.</p>
                    <div className="overflow-x-auto border border-slate-200 rounded-lg">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Tax Band</th>
                                    <th className="px-6 py-4">Taxable Income (GBP)</th>
                                    <th className="px-6 py-4">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 font-medium text-slate-900">Personal Allowance</td>
                                    <td className="px-6 py-4 text-slate-600">£0 – £12,570</td>
                                    <td className="px-6 py-4 text-slate-900">0%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 font-medium text-slate-900">Basic Rate</td>
                                    <td className="px-6 py-4 text-slate-600">£12,571 – £50,270</td>
                                    <td className="px-6 py-4 text-slate-900">20%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 font-medium text-slate-900">Higher Rate</td>
                                    <td className="px-6 py-4 text-slate-600">£50,271 – £125,140</td>
                                    <td className="px-6 py-4 text-slate-900">40%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 font-medium text-slate-900">Additional Rate</td>
                                    <td className="px-6 py-4 text-slate-600">Over £125,140</td>
                                    <td className="px-6 py-4 text-slate-900">45%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">*Note: Scottish income tax bands differ for earned income, with rates ranging from 19% to 48%.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Capital Gains Tax (CGT)</h3>
                        <p className="text-sm text-slate-600 mb-4">Charged on profit from selling assets like property or stocks. The annual allowance has been reduced to £3,000 for the 2025/26 tax year.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Allowance</span>
                                <span className="font-bold text-slate-900">£3,000</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Basic Rate</span>
                                <span className="font-bold text-slate-900">18%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Higher Rate</span>
                                <span className="font-bold text-slate-900">24%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Value-Added Tax (VAT)</h3>
                         <p className="text-sm text-slate-600 mb-4">Consumption tax added to most goods and services. Unlike US sales tax, VAT is typically included in the displayed price.</p>
                         <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard</span>
                                <span className="font-bold text-slate-900">20%</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Reduced</span>
                                <span className="font-bold text-slate-900">5%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Zero</span>
                                <span className="font-bold text-slate-900">0%</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">National Insurance Contributions (NICs)</h3>
                        <p className="text-sm text-slate-600 mb-4">Mandatory contributions that fund state benefits, including the National Health Service (NHS) and state pension.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Class 1 (Employees)</span>
                                <span className="font-bold text-slate-900">12% above £12,570</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Class 2 (Self-employed)</span>
                                <span className="font-bold text-slate-900">£3.45/week</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Class 4 (Self-employed)</span>
                                <span className="font-bold text-slate-900">9% on profits £12,570-£50,270</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Inheritance Tax (IHT)</h3>
                        <p className="text-sm text-slate-600 mb-4">Tax on the estate of someone who has died. The standard rate is 40% above the nil-rate threshold.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Nil-Rate Band</span>
                                <span className="font-bold text-slate-900">£325,000</span>
                            </li>
                            <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Residence Nil-Rate Band</span>
                                <span className="font-bold text-slate-900">£175,000</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">40%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-blue-400" /> US vs UK Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and UK tax systems is crucial for American expats to ensure compliance and optimize their tax position.</p>
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
                                <span className="text-2xl">🇬🇧</span>
                                <span className="font-bold text-lg">United Kingdom</span>
                            </div>
                             <ul className="space-y-3 text-sm text-slate-300">
                                <li>• <strong>Residency-based</strong> taxation (SRT test determines tax obligations).</li>
                                <li>• Top tax rate: 45% (48% in Scotland for top earners).</li>
                                <li>• Standard VAT: 20% included in price (reduced rates for certain goods/services).</li>
                                <li>• Personal Allowance: £12,570 of tax-free income for most taxpayers.</li>
                                <li>• Simpler reporting requirements for most taxpayers with straightforward finances.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in the UK, you may be subject to both tax systems. The US-UK Tax Treaty helps prevent double taxation, but proper planning is essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

             {/* Filing */}
             <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Your Return & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the UK tax filing process and deadlines is crucial to avoid penalties. The UK tax system uses a Self Assessment process where taxpayers report their income and calculate their tax liability. Here's what you need to know about filing your UK tax return.
                </p>
                
                <div className="relative border-l-4 border-blue-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-blue-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 6</h4>
                        <p className="text-sm text-slate-600">UK tax year begins. This is the start date for the tax year, which runs until April 5 of the following year.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-blue-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">October 31</h4>
                        <p className="text-sm text-slate-600">Deadline for filing <strong>paper</strong> tax returns. Paper returns must be received by HMRC by this date.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-indigo-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-indigo-700">January 31</h4>
                        <p className="text-sm text-slate-600">Deadline for filing <strong>online</strong> tax returns and paying tax due. This is the most important deadline for most taxpayers.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-indigo-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-indigo-700">July 31</h4>
                        <p className="text-sm text-slate-600">Second payment on account deadline. If you pay tax through Self Assessment and your previous year's bill was over £1,000, you'll need to make advance payments.</p>
                    </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h4 className="font-bold text-red-900 mb-2">Penalties for Late Filing</h4>
                    <p className="text-sm text-red-800 mb-4">HMRC is strict with deadlines. An automatic <strong>£100 penalty</strong> applies immediately if you miss the filing deadline, even if you owe no tax. Additional penalties accrue over time:</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-red-700">
                         <li className="bg-white/50 p-2 rounded">3 Months Late: Daily penalties of £10 (up to 90 days), totaling up to £900.</li>
                         <li className="bg-white/50 p-2 rounded">6 Months Late: Additional 5% of tax due or £300, whichever is greater.</li>
                         <li className="bg-white/50 p-2 rounded">12 Months Late: Further 5% of tax due or £300, whichever is greater.</li>
                         <li className="bg-white/50 p-2 rounded">Late Payment: Interest charged on unpaid tax from the due date until payment date.</li>
                     </ul>
                </div>
            </section>

            {/* Treaty */}
            <section id="treaty">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">US-UK Tax Treaty</h2>
                <p className="text-slate-600 mb-6">
                    The tax treaty between the United States and the United Kingdom protects you from double taxation and provides clarity on which country has the primary right to tax specific types of income. Understanding this treaty is essential for American expats to optimize their tax position.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4"><Globe className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Tie-Breaker Rules</h3>
                        <p className="text-xs text-slate-500">Determines strict residency if you qualify as a resident in both countries simultaneously. The treaty considers factors like permanent home, center of vital interests, habitual abode, and nationality to break ties.</p>
                    </div>
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                         <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4"><Calculator className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Foreign Tax Credit</h3>
                        <p className="text-xs text-slate-500">Allows you to offset US tax liability with taxes paid to HMRC (and vice versa). This prevents the same income from being taxed by both countries, though limitations may apply.</p>
                    </div>
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                         <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4"><Scale className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Pension Provisions</h3>
                        <p className="text-xs text-slate-500">Protects pension contributions and growth from immediate taxation in the other country. The treaty provides special rules for pension distributions, Social Security payments, and other retirement benefits.</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Totalization Agreement</h4>
                    <p className="text-xs text-slate-600">
                        Prevents you from paying Social Security taxes to both countries on the same earnings. Generally, you pay into the system of the country where you are working. This agreement also allows you to combine work credits from both countries to qualify for benefits.
                    </p>
                </div>
            </section>

             {/* Forms */}
            <section id="forms">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Forms</h2>
                 <p className="text-slate-600 mb-6">
                    As an American expat in the UK, you'll need to familiarize yourself with various tax forms for both UK and US filing requirements. These forms are essential for reporting your income, claiming benefits, and ensuring compliance with both tax systems.
                 </p>
                 <div className="overflow-hidden border border-slate-200 rounded-xl">
                     <table className="w-full text-left text-sm">
                         <thead className="bg-slate-50">
                             <tr>
                                 <th className="px-6 py-4 font-semibold text-slate-900 w-1/4">Form Type</th>
                                 <th className="px-6 py-4 font-semibold text-slate-900 w-1/4">Form Name</th>
                                 <th className="px-6 py-4 font-semibold text-slate-900">Purpose</th>
                             </tr>
                         </thead>
                         <tbody className="divide-y divide-slate-100 bg-white">
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">UK Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">SA100</td>
                                 <td className="px-6 py-4 text-slate-600">Main Self Assessment tax return used to report income and calculate tax liability.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">UK Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">SA105 / SA109</td>
                                 <td className="px-6 py-4 text-slate-600">Supplementary pages for property income (SA105) or residency status (SA109).</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">UK Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">P60 / P45</td>
                                 <td className="px-6 py-4 text-slate-600">P60 summarizes annual pay and tax deducted; P45 is provided when leaving a job.</td>
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
                                 <td className="px-6 py-4 text-slate-600">Claim Foreign Tax Credit for UK taxes paid to avoid double taxation.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">FinCEN 114 (FBAR)</td>
                                 <td className="px-6 py-4 text-slate-600">Report UK bank accounts if aggregate value > $10k at any time during the year.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">Form 8938</td>
                                 <td className="px-6 py-4 text-slate-600">Statement of Specified Foreign Financial Assets under FATCA requirements.</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-UK Taxes?</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                    Our dual-qualified experts specialize in complex cross-border situations. We can help you navigate the intricacies of both tax systems, ensure compliance, and optimize your tax position to minimize your overall burden.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md">
                    Schedule Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitedKingdomGuide;