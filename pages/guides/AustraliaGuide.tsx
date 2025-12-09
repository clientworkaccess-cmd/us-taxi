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

const AustraliaGuide = () => {
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
                 style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/330px-Flag_of_Australia_%28converted%29.svg.png')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇦🇺</span> Australia Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">Australia</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Navigate the complexities of Australian taxation with confidence. From residency determination to the US-Australia Tax Treaty, we ensure you stay compliant on both sides of the Pacific while optimizing your tax position.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact" className="px-8 py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors shadow-lg">
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
                { id: 'taxation', label: 'Australian Taxation' },
                { id: 'comparison', label: 'US vs Australia System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'treaty', label: 'Tax Treaty' },
                { id: 'forms', label: 'Common Forms' },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                    <h4 className="font-bold text-green-900 mb-2 text-sm">Need personalized help?</h4>
                    <p className="text-xs text-green-700 mb-3">Our US-Australia tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
                    <Link to="/contact" className="block w-full py-2 bg-green-600 text-white text-xs font-bold text-center rounded hover:bg-green-700 transition-colors">
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
                 <Info className="w-8 h-8 text-green-600" /> Quick Overview
               </h2>
               <p className="text-slate-600 mb-8 leading-relaxed">
                 Understanding the Australian tax system is essential for American expats to ensure compliance and optimize your tax position. Australia operates on a residency-based taxation model with its own unique characteristics and state variations. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <Calendar className="w-6 h-6 text-green-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">July 1 – June 30</p>
                      <p className="text-xs text-slate-500 mt-2">Australia follows a July to June fiscal year, unlike the US calendar year system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <FileText className="w-6 h-6 text-yellow-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Primary Form</p>
                      <p className="text-slate-900 font-semibold">Australian Tax Return</p>
                      <p className="text-xs text-slate-500 mt-2">The individual tax return form is the main document Australian residents use to report their income to the ATO.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">October 31</p>
                      <p className="text-xs text-slate-500 mt-2">Tax returns must be filed by October 31, with extensions possible when using tax agents.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">4 Tests</p>
                      <p className="text-xs text-slate-500 mt-2">Residency is determined by resides test, domicile test, 183-day test, and superannuation test.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Determining your tax residency is the first and most critical step in the Australian tax system. Australia uses a residency-based taxation model where your tax obligations depend on your connections to the country. The Australian Taxation Office (ATO) evaluates various factors to establish your residency status.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50/50 border border-green-100 p-6 rounded-xl">
                        <h3 className="font-bold text-green-900 mb-2">Australian Resident</h3>
                        <p className="text-sm text-green-800/80">
                            Taxed on <strong>worldwide income</strong>. This includes income from both Australia and abroad (including the US). As a resident, you're eligible for various tax benefits and credits not available to non-residents, such as the tax-free threshold and Medicare benefits.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Only taxed on <strong>Australian-sourced income</strong>. This includes employment income in Australia, business income from Australian operations, or rental income from Australian properties. Non-residents have limited access to tax benefits and credits.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Determining Australian Residency</h3>
                <p className="text-slate-600 mb-4">The ATO considers four tests to determine your residency status:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Resides test:</strong> If you live permanently or for a significant duration in Australia and have a settled or usual home in the country, you are considered a resident.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Domicile test:</strong> You are deemed a resident if your primary permanent domicile or home is in Australia.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>183-day test:</strong> Being in Australia for at least 183 days qualifies you as a resident, unless you can prove your usual place of residence is outside Australia and you have no intention of settling in Australia.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Commonwealth Superannuation Fund test:</strong> If you are employed by the Australian government or an Australian company and are eligible to contribute to specific superannuation schemes, you are considered a resident.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Practical Examples</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                <strong>Resident Example:</strong> John moves to Australia intending to stay long term. He brings his wife and children, rents a house, opens an Australian bank account, and sells his US property. John passes the resides test as he can demonstrate his residency is more closely tied to Australia than the US.
                            </p>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                <strong>Non-Resident Example:</strong> Marco moves to Australia for a career break. He keeps his US bank account open, doesn't sell his US home, and doesn't sign a lease in Australia. Even though Marco was in Australia for more than 183 days, his usual residence is the US, and he made no permanent connections to Australia. Marco would therefore fail the residency tests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Australian Taxation Types & Rates</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Australia's tax system includes both federal and state/territory components, creating a comprehensive framework. Understanding these taxes and their rates is crucial for proper financial planning and compliance as an American living in Australia.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax Rates (2024-25)</h3>
                    <p className="text-slate-600 mb-4">Personal income tax in Australia is progressive, with higher rates applying to higher income brackets. These rates apply to Australian residents, with different rates for non-residents.</p>
                    <div className="overflow-x-auto border border-slate-200 rounded-lg">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Taxable Income (AUD)</th>
                                    <th className="px-6 py-4">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">$0 – $18,200</td>
                                    <td className="px-6 py-4 text-slate-900">0%</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">$18,201 – $45,000</td>
                                    <td className="px-6 py-4 text-slate-900">16% of excess over $18,200</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">$45,001 – $135,000</td>
                                    <td className="px-6 py-4 text-slate-900">$4,288 + 30% of excess over $45,000</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">$135,001 – $190,000</td>
                                    <td className="px-6 py-4 text-slate-900">$31,288 + 37% of excess over $135,000</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 text-slate-600">Over $190,000</td>
                                    <td className="px-6 py-4 text-slate-900">$51,638 + 45% of excess over $190,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">*Note: Non-residents are taxed at different rates, starting at 30% for income up to $135,000, with higher rates for income above that threshold.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Capital Gains Tax (CGT)</h3>
                        <p className="text-sm text-slate-600 mb-4">Tax on profit from selling capital assets like property or shares.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Inclusion Rate</span>
                                <span className="font-bold text-slate-900">100%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Taxed at</span>
                                <span className="font-bold text-slate-900">Marginal tax rate</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Goods and Services Tax (GST)</h3>
                         <p className="text-sm text-slate-600 mb-4">Federal value-added tax applied to most goods and services sold in Australia.</p>
                         <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">10%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Exempt Items</span>
                                <span className="font-bold text-slate-900">Basic food, healthcare, education</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Superannuation</h3>
                        <p className="text-sm text-slate-600 mb-4">Australia's mandatory retirement savings system, similar to a 401(k).</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Employer Contribution</span>
                                <span className="font-bold text-slate-900">9.5% of wages</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">US Tax Treatment</span>
                                <span className="font-bold text-slate-900">Treated as foreign trust</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Medicare Levy</h3>
                        <p className="text-sm text-slate-600 mb-4">A 2% tax on taxable income that funds Australia's public healthcare system.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Rate</span>
                                <span className="font-bold text-slate-900">2%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Applies to</span>
                                <span className="font-bold text-slate-900">Residents only</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-green-400" /> US vs Australia Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and Australian tax systems is crucial for American expats to ensure compliance and optimize their tax position.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                                <span className="text-2xl">🇺🇸</span>
                                <span className="font-bold text-lg">United States</span>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li>• <strong>Citizenship-based</strong> taxation (taxed worldwide regardless of residence). All US citizens must file annual tax returns reporting worldwide income.</li>
                                <li>• Top federal rate: 37% (plus state taxes, which can add 0-13% more).</li>
                                <li>• Sales tax varies by state (typically lower than GST and not included in displayed prices).</li>
                                <li>• Standard deduction: ~$14,600 (Single) for 2025, with additional deductions possible.</li>
                                <li>• Complex reporting requirements for foreign assets and accounts (FBAR, FATCA).</li>
                            </ul>
                        </div>
                        <div>
                             <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                                <span className="text-2xl">🇦🇺</span>
                                <span className="font-bold text-lg">Australia</span>
                            </div>
                             <ul className="space-y-3 text-sm text-slate-300">
                                <li>• <strong>Residency-based</strong> taxation (determined by four residency tests).</li>
                                <li>• Top marginal rate: 45% (plus 2% Medicare levy).</li>
                                <li>• Federal GST of 10% plus state taxes, typically included in price.</li>
                                <li>• Tax-free threshold: $18,200 of tax-free income for most taxpayers.</li>
                                <li>• More streamlined reporting requirements for most taxpayers with straightforward finances.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in Australia, you may be subject to both tax systems. The US-Australia Tax Treaty helps prevent double taxation, but proper planning is essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

             {/* Filing */}
             <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Your Return & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the Australian tax filing process and deadlines is crucial to avoid penalties. The Australian Taxation Office (ATO) has established specific timelines for filing tax returns and paying taxes due. Here's what you need to know about filing your Australian tax return.
                </p>
                
                <div className="relative border-l-4 border-green-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-green-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">July 1</h4>
                        <p className="text-sm text-slate-600">Australian tax year begins. Australia follows a July to June fiscal year for tax purposes.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-green-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">June 30</h4>
                        <p className="text-sm text-slate-600">End of the Australian tax year. All income earned between July 1 and June 30 must be reported on your tax return.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-green-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-green-700">October 31</h4>
                        <p className="text-sm text-slate-600">Deadline for most individuals to file their tax return and pay any taxes owed. Extensions are possible if using a registered tax agent.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-green-600 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-green-700">June 5 (following year)</h4>
                        <p className="text-sm text-slate-600">Extended deadline if you're registered with a tax agent by October 31. This gives you additional time to complete your return.</p>
                    </div>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                    <h4 className="font-bold text-green-900 mb-2">Penalties for Late Filing</h4>
                    <p className="text-sm text-green-800 mb-4">The ATO imposes penalties for late filing and late payment. The penalty amount depends on how late your return is and whether you have a history of compliance.</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-green-700">
                         <li className="bg-white/50 p-2 rounded">Failure to Lodge on Time: Starting at $222 with additional penalties for each 28-day period.</li>
                         <li className="bg-white/50 p-2 rounded">Failure to Pay on Time: Interest charges on unpaid amounts from the due date.</li>
                         <li className="bg-white/50 p-2 rounded">False or Misleading Statements: Penalties up to 75% of the shortfall amount.</li>
                         <li className="bg-white/50 p-2 rounded">Shortfall Interest: Interest charged on any unpaid tax amounts.</li>
                     </ul>
                </div>
            </section>

            {/* Treaty */}
            <section id="treaty">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">US-Australia Tax Treaty</h2>
                <p className="text-slate-600 mb-6">
                    The tax treaty between the United States and Australia is designed to prevent double taxation and provide clarity on which country has the primary right to tax specific types of income. Understanding this treaty is essential for American expats to optimize their tax position.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                        <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4"><Globe className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Residency Rules</h3>
                        <p className="text-xs text-slate-500">The treaty provides tie-breaker rules to determine residency when an individual has connections to both countries, considering factors like permanent home, center of vital interests, and habitual abode.</p>
                    </div>
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                         <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-4"><Calculator className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Foreign Tax Credit</h3>
                        <p className="text-xs text-slate-500">Allows you to offset US tax liability with taxes paid to the ATO (and vice versa). This prevents the same income from being taxed by both countries, though limitations may apply.</p>
                    </div>
                    <div className="p-6 bg-white shadow-sm rounded-xl border border-slate-200">
                         <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4"><Scale className="w-5 h-5"/></div>
                        <h3 className="font-bold text-slate-900 mb-2">Non-Discrimination</h3>
                        <p className="text-xs text-slate-500">Ensures that citizens and residents of one country are not subject to more burdensome tax requirements in the other country than their own citizens.</p>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Totalization Agreement</h4>
                    <p className="text-xs text-slate-600">
                        The US-Australia Totalization Agreement helps you avoid paying Social Security taxes to both countries on the same earnings. Generally, you pay into the system of the country where you are working. This agreement also allows you to combine work credits from both countries to qualify for benefits.
                    </p>
                </div>
            </section>

             {/* Forms */}
            <section id="forms">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Forms</h2>
                 <p className="text-slate-600 mb-6">
                    As an American expat in Australia, you'll need to familiarize yourself with various tax forms for both Australian and US filing requirements. These forms are essential for reporting your income, claiming benefits, and ensuring compliance with both tax systems.
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
                                 <td className="px-6 py-4 font-medium text-slate-900">Australian Filing</td>
                                 <td className="px-6 py-4 text-green-600 font-medium">NAT 2541</td>
                                 <td className="px-6 py-4 text-slate-600">Individual tax return for residents.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">Australian Filing</td>
                                 <td className="px-6 py-4 text-green-600 font-medium">NAT 1040</td>
                                 <td className="px-6 py-4 text-slate-600">Lodgement form for non-residents.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">Australian Filing</td>
                                 <td className="px-6 py-4 text-green-600 font-medium">NAT 2679</td>
                                 <td className="px-6 py-4 text-slate-600">Business activity statement (BAS) for self-employed individuals.</td>
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
                                 <td className="px-6 py-4 text-slate-600">Claim Foreign Tax Credit for Australian taxes paid to avoid double taxation.</td>
                             </tr>
                             <tr>
                                 <td className="px-6 py-4 font-medium text-slate-900">US Filing</td>
                                 <td className="px-6 py-4 text-blue-600 font-medium">FinCEN 114 (FBAR)</td>
                                 <td className="px-6 py-4 text-slate-600">Report Australian bank accounts if aggregate value > $10k at any time during the year.</td>
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
            <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-Australia Taxes?</h2>
                <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                    Our dual-qualified experts specialize in complex cross-border situations. We can help you navigate the intricacies of both tax systems, ensure compliance, and optimize your tax position to minimize your overall burden.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors shadow-md">
                    Schedule Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AustraliaGuide;