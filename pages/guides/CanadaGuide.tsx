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

const CanadaGuide = () => {
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
                 style={{backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/004/757/303/small/canada-flag-free-vector.jpg')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇨🇦</span> Canada Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Canada</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Navigate the complexities of Canadian taxation with confidence. From residency determination to the US-Canada Tax Treaty, we ensure you stay compliant on both sides of the border while optimizing your tax position.
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
                { id: 'taxation', label: 'Canadian Taxation' },
                { id: 'comparison', label: 'US vs Canada System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'treaty', label: 'Tax Treaty' },
                { id: 'forms', label: 'Common Forms' },
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
                    <p className="text-xs text-red-700 mb-3">Our US-Canada tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
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
                 Understanding the Canadian tax system is essential for American expats to ensure compliance and optimize your tax position. Canada operates on a residency-based taxation model similar to the UK, but with its own unique characteristics and provincial variations. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Calendar className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">January 1 – December 31</p>
                      <p className="text-xs text-slate-500 mt-2">Canada follows the calendar year for tax purposes, unlike the UK's April to April system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <FileText className="w-6 h-6 text-purple-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Primary Form</p>
                      <p className="text-slate-900 font-semibold">T1 General</p>
                      <p className="text-xs text-slate-500 mt-2">The T1 General Income Tax and Benefit Return is the main document Canadian residents use to report their income to the CRA.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">April 30</p>
                      <p className="text-xs text-slate-500 mt-2">Tax returns must be filed by April 30 of the following year, with a June 15 deadline for self-employed individuals.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-red-300 transition-colors">
                      <MapPin className="w-6 h-6 text-green-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">Significant Ties</p>
                      <p className="text-xs text-slate-500 mt-2">Residency is determined by residential ties to Canada, including home, family, and social connections.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Determining your tax residency is the first and most critical step in the Canadian tax system. Like the UK, Canada uses a residency-based taxation model where your tax obligations depend on your connections to the country. The Canada Revenue Agency (CRA) evaluates various factors to establish your residency status.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                        <h3 className="font-bold text-red-900 mb-2">Canadian Resident</h3>
                        <p className="text-sm text-red-800/80">
                            Taxed on <strong>worldwide income</strong>. This includes income from both Canada and abroad (including the US). As a resident, you're eligible for various tax benefits and credits not available to non-residents, such as the basic personal amount and various refundable tax credits.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Only taxed on <strong>Canadian-source income</strong>. This includes employment income in Canada, business income from Canadian operations, or rental income from Canadian properties. Non-residents have limited access to tax benefits and credits.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Determining Canadian Residency</h3>
                <p className="text-slate-600 mb-4">The CRA considers several residential ties to determine your residency status:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Permanent home in Canada:</strong> Owning or renting a home in Canada that's available for your use is a significant residential tie.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Spouse or common-law partner in Canada:</strong> If your spouse or partner lives in Canada, this strongly indicates residency.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Dependents in Canada:</strong> Having children or other dependents who live in Canada is another important residential tie.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Social and economic ties:</strong> Canadian driver's license, bank accounts, memberships in Canadian organizations, and other connections can establish residency.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">183-Day Rule</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                Generally, if you spend <strong>183 days or more</strong> in Canada during a tax year, you may be considered a resident for tax purposes, even if you have significant residential ties to another country. However, the 183-day rule is not the sole determinant of residency, as the CRA also considers the nature and quality of your ties to Canada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Canadian Taxation Types & Rates</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Canada's tax system includes both federal and provincial/territorial components, creating a complex but comprehensive framework. Understanding these taxes and their rates is crucial for proper financial planning and compliance as an American living in Canada.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Federal Income Tax Rates (2025)</h3>
                    <p className="text-slate-600 mb-4">Federal income tax in Canada is progressive, with higher rates applying to higher income brackets. These rates are consistent across the country, but provincial taxes vary significantly by region.</p>
                    <div className="overflow-x-auto border border-slate-200 rounded-lg">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Taxable Income (CAD)</th>
                                    <th className="px-6 py-4">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">$0 – $57,375</td>
                                    <td className="px-6 py-4 text-slate-900">15%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">$57,376 – $114,750</td>
                                    <td className="px-6 py-4 text-slate-900">20.5%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">$114,751 – $177,882</td>
                                    <td className="px-6 py-4 text-slate-900">26%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">$177,883 – $253,414</td>
                                    <td className="px-6 py-4 text-slate-900">29%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">Over $253,414</td>
                                    <td className="px-6 py-4 text-slate-900">33%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">*Note: Provincial taxes are calculated in addition to these federal rates, with combined marginal rates ranging from 20% to 54% depending on your province and income level.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Alternative Minimum Tax (AMT)</h3>
                        <p className="text-sm text-slate-600 mb-4">A parallel tax system ensuring all individuals pay at least a minimum amount of tax, regardless of deductions and credits.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">AMT Rate</span>
                                <span className="font-bold text-slate-900">20.5%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Applied to</span>
                                <span className="font-bold text-slate-900">Adjusted taxable income</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Capital Gains Tax</h3>
                         <p className="text-sm text-slate-600 mb-4">Tax on profit from selling capital assets like property or stocks.</p>
                         <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Inclusion Rate</span>
                                <span className="font-bold text-slate-900">50%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Taxed at</span>
                                <span className="font-bold text-slate-900">Marginal tax rate</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Goods and Services Tax (GST)</h3>
                        <p className="text-sm text-slate-600 mb-4">Federal value-added tax applied to most goods and services sold in Canada.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">5%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">GST/HST Credit Increase (2025)</span>
                                <span className="font-bold text-slate-900">2.7%</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Provincial Sales Taxes</h3>
                        <p className="text-sm text-slate-600 mb-4">Additional sales taxes vary by province, either as PST or harmonized with GST as HST.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">HST Range</span>
                                <span className="font-bold text-slate-900">5% - 15%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Quebec Sales Tax (QST)</span>
                                <span className="font-bold text-slate-900">9.975%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-red-400" /> US vs Canada Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and Canadian tax systems is crucial for American expats to ensure compliance and optimize their tax position.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                                <span className="text-2xl">🇺🇸</span>
                                <span className="font-bold text-lg">United States</span>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>• <strong>Citizenship-based</strong> taxation (taxed worldwide regardless of residence). All US citizens must file annual tax returns reporting worldwide income.</li>
                                <li>• Top federal rate: 37% (plus state taxes, which can add 0-13% more).</li>
                                <li>• Sales tax varies by state (typically lower than GST/HST and not included in displayed prices).</li>
                                <li>• Standard deduction: ~$14,600 (Single) for 2025, with additional deductions possible.</li>
                                <li>• Complex reporting requirements for foreign assets and accounts (FBAR, FATCA).</li>
                            </ul>
                        </div>
                        <div>
                             <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                                <span className="text-2xl">🇨🇦</span>
                                <span className="font-bold text-lg">Canada</span>
                            </div>
                             <ul className="space-y-3 text-sm text-slate-300">
                                <li>• <strong>Residency-based</strong> taxation (determined by residential ties to Canada).</li>
                                <li>• Combined federal and top provincial rates: up to 54% (varies by province).</li>
                                <li>• Federal GST of 5% plus provincial sales taxes (HST, PST, or QST), typically included in price.</li>
                                <li>• Basic personal amount: ~$15,000 of tax-free income for most taxpayers (varies by province).</li>
                                <li>• More streamlined reporting requirements for most taxpayers with straightforward finances.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in Canada, you may be subject to both tax systems. The US-Canada Tax Treaty helps prevent double taxation, but proper planning is essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

             {/* Filing */}
             <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Your Return & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the Canadian tax filing process and deadlines is crucial to avoid penalties. The Canada Revenue Agency (CRA) has established specific timelines for filing tax returns and paying taxes due. Here's what you need to know about filing your Canadian tax return.
                </p>
                
                <div className="relative border-l-4 border-red-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-red-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">January 1</h4>
                        <p className="text-sm text-slate-600">Canadian tax year begins. Canada follows the calendar year for tax purposes, running from January 1 to December 31.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">December 31</h4>
                        <p className="text-sm text-slate-600">End of the Canadian tax year. All income earned between January 1 and December 31 must be reported on your tax return.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-red-700">April 30</h4>
                        <p className="text-sm text-slate-600">Deadline for most individuals to file their tax return and pay any taxes owed. This is the most important deadline for most taxpayers.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-red-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-red-700">June 15</h4>
                        <p className="text-sm text-slate-600">Filing deadline for self-employed individuals. Note that even though the filing deadline is June 15, any taxes owed must still be paid by April 30 to avoid interest charges.</p>
                    </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h4 className="font-bold text-red-900 mb-2">Penalties for Late Filing</h4>
                    <p className="text-sm text-red-800 mb-4">The CRA imposes penalties for late filing and late payment. The penalty for filing late is 5% of your balance owing, plus 1% of your balance owing for each full month your return is late, to a maximum of 12 months.</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-red-700">
                         <li className="bg-white/50 p-2 rounded">Late Filing Penalty: 5% of balance owing, plus 1% per month (max 12 months).</li>
                         <li className="bg-white/50 p-2 rounded">Repeated Late Filing: Increased penalty of 10% of balance owing, plus 2% per month (max 20 months).</li>
                         <li className="bg-white/50 p-2 rounded">Late Payment Penalty: 1% of balance owing per month, starting May 1.</li>
                         <li className="bg-white/50 p-2 rounded">Interest: Charged on unpaid taxes from due date until date of payment.</li>
                     </ul>
                </div>
            </section>

            {/* Treaty */}
            <section id="treaty">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">US-Canada Tax Treaty</h2>
                <p className="text-slate-600 mb-6">
                    The tax treaty between the United States and Canada is designed to prevent double taxation and provide clarity on which country has the primary right to tax specific types of income. Understanding this treaty is essential for American expats to optimize their tax position.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                        <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4"><Globe className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Residency Rules</h3>
                        <p className="text-xs text-slate-500">The treaty provides tie-breaker rules to determine residency when an individual has connections to both countries, considering factors like permanent home, center of vital interests, and habitual abode.</p>
                    </div>
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                         <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4"><Calculator className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Foreign Tax Credit</h3>
                        <p className="text-xs text-slate-500">Allows you to offset US tax liability with taxes paid to the CRA (and vice versa). This prevents the same income from being taxed by both countries, though limitations may apply.</p>
                    </div>
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                         <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4"><Scale className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Non-Discrimination</h3>
                        <p className="text-xs text-slate-500">Ensures that citizens and residents of one country are not subject to more burdensome tax requirements in the other country than their own citizens.</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Totalization Agreement</h4>
                    <p className="text-xs text-slate-600">
                        The US-Canada Totalization Agreement helps you avoid paying Social Security taxes to both countries on the same earnings. Generally, you pay into the system of the country where you are working. This agreement also allows you to combine work credits from both countries to qualify for benefits.
                    </p>
                </div>
            </section>

             {/* Forms */}
            <section id="forms">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Forms</h2>
                 <p className="text-slate-600 mb-6">
                    As an American expat in Canada, you'll need to familiarize yourself with various tax forms for both Canadian and US filing requirements. These forms are essential for reporting your income, claiming benefits, and ensuring compliance with both tax systems.
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
                                 <td className="px-6 py-4 font-medium text-slate-900">Canadian Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">T1 General</td>
                                 <td className="px-6 py-4 text-slate-600">Main income tax and benefit return for individuals in Canada.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">Canadian Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">T1135</td>
                                 <td className="px-6 py-4 text-slate-600">Foreign Income Verification Statement for specified foreign property over $100,000 CAD.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">Canadian Filing</td>
                                 <td className="px-6 py-4 text-red-600 font-medium">T4 / T5</td>
                                 <td className="px-6 py-4 text-slate-600">T4 reports employment income; T5 reports investment income such as interest and dividends.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Form 1040</td>
                                 <td className="px-6 py-4 text-slate-600">Standard US individual income tax return for all citizens and residents.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Form 2555</td>
                                 <td className="px-6 py-4 text-slate-600">Used to claim the Foreign Earned Income Exclusion (FEIE) for qualifying expats.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Form 1116</td>
                                 <td className="px-6 py-4 text-slate-600">Claim Foreign Tax Credit for Canadian taxes paid to avoid double taxation.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">FinCEN 114 (FBAR)</td>
                                 <td className="px-6 py-4 text-slate-600">Report Canadian bank accounts if aggregate value > $10k at any time during the year.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">Form 8938</td>
                                 <td className="px-6 py-4 text-slate-600">Statement of Specified Foreign Financial Assets under FATCA requirements.</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-Canada Taxes?</h2>
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

export default CanadaGuide;