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
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MexicoGuide = () => {
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
                 style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHovceL1x_lxxTu_o-nI57DjY0TxJFX9hvBg&s')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-full blur-2xl opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇲🇽</span> Mexico Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Mexico</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            Navigate the complexities of Mexican tax laws with confidence. From residency determination to understanding the US-Mexico tax treaty, we ensure you stay compliant on both sides of the border while optimizing your tax position.
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
                { id: 'taxation', label: 'Taxation Types' },
                { id: 'comparison', label: 'US vs Mexico System' },
                { id: 'filing', label: 'Filing & Deadlines' },
                { id: 'treaty', label: 'US-Mexico Tax Treaty' },
                { id: 'faq', label: 'FAQ' },
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
                    <p className="text-xs text-green-700 mb-3">Our US-Mexico tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
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
                 Understanding the Mexican tax system is essential for American expats to ensure compliance and optimize your tax position. Mexico operates on a residency-based taxation model with progressive income tax rates. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <Calendar className="w-6 h-6 text-green-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">January 1 – December 31</p>
                      <p className="text-xs text-slate-500 mt-2">Mexico follows the calendar year for tax purposes, similar to the US system.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <FileText className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Mexican Filing</p>
                      <p className="text-slate-900 font-semibold">Declaración Anual</p>
                      <p className="text-xs text-slate-500 mt-2">Annual tax return filed with the Mexican tax authority (SAT).</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">April 30</p>
                      <p className="text-xs text-slate-500 mt-2">Mexican tax filing deadline, with extension to May 31 for electronic filing.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">Physical Presence</p>
                      <p className="text-xs text-slate-500 mt-2">Generally considered a resident if you spend more than 183 days in Mexico.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Determining your tax residency in Mexico is crucial for understanding your tax obligations. Mexico's tax rules treat residents and non-residents very differently, with residents taxed on worldwide income while non-residents are only taxed on Mexican-sourced income.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50/50 border border-green-100 p-6 rounded-xl">
                        <h3 className="font-bold text-green-900 mb-2">Mexico Resident</h3>
                        <p className="text-sm text-green-800/80">
                            <strong>Taxed on worldwide income:</strong> As a resident, you pay taxes on all income regardless of where it's earned. You can use tax credits and deductions to lower your tax bill.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Only pay taxes on <strong>Mexican-sourced income</strong> such as wages from a Mexican job or rent from property you own in Mexico. You typically can't use the same deductions and credits as residents.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Residency Requirements</h3>
                <p className="text-slate-600 mb-4">You may be considered a tax resident in Mexico if you meet any of these criteria:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Physical presence:</strong> If you spend more than 183 days in Mexico during a calendar year, you are usually considered a tax resident.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Center of vital interests:</strong> If your main job, business, family, or personal ties are in Mexico, you may be considered a resident.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Permanent home:</strong> Having a home in Mexico can establish residency, especially if you don't have a permanent home elsewhere.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Mexican citizenship:</strong> Being a Mexican citizen can favor residency status, though other factors are also considered.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                Even if you're a Mexico resident, as a US citizen, you still have tax obligations to the United States. The US-Mexico tax treaty helps prevent double taxation, but careful planning is essential.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Taxation in Mexico</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Mexico's tax system includes several types of taxes, each with its own set of rules and rates. Understanding these taxes is essential for anyone living or doing business in Mexico, especially US expats who must navigate both the Mexican and US tax systems.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax Rates (2025)</h3>
                    <p className="text-slate-600 mb-4">Mexico has a progressive tax system where rates increase with higher income levels.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Taxable Income (MXN)</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tax Rate (%)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">0.01 - 8,952.49</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">1.92</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">8,952.50 - 75,984.55</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">6.40</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">75,984.56 - 133,536.07</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">10.88</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">133,536.08 - 155,229.80</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">16.00</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">155,229.81 - 185,852.57</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">17.92</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">185,852.58 - 374,837.88</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">21.36</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">374,837.89 - 590,795.99</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">23.52</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">590,796.00 - 1,127,926.84</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">30.00</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">1,127,926.85 - 1,503,902.46</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">32.00</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">1,503,902.47 - 4,511,707.37</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">34.00</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">4,511,707.38 and above</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">35.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Value Added Tax (VAT)</h3>
                        <p className="text-sm text-slate-600 mb-4">A consumption tax levied on the sale of goods and services in Mexico.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">16%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Border Region Rate</span>
                                <span className="font-bold text-slate-900">Reduced Rate</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Exemptions</span>
                                <span className="font-bold text-slate-900">Basic Foods, Medicine</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Other Taxes</h3>
                        <p className="text-sm text-slate-600 mb-4">Mexico has several other taxes that may affect you.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Property Tax</span>
                                <span className="font-bold text-slate-900">Impuesto Predial</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Inheritance Tax</span>
                                <span className="font-bold text-slate-900">None</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Gift Tax</span>
                                <span className="font-bold text-slate-900">Varies by Relationship</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-green-400" /> US vs Mexico Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and Mexico tax systems is crucial for American expats to ensure compliance and optimize their tax position.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Category</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Mexico</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">USA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Corporate Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">30%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">21%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Top Individual Income Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">35%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">37%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">VAT/Sales Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">16%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Varies by state (avg. 7.25%)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Capital Gains Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">10% to 35%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Dividend Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">10%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in Mexico, you must navigate both tax systems. The US-Mexico tax treaty helps prevent double taxation, but careful planning is essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filing */}
            <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Requirements & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the filing requirements and deadlines for both US and Mexican taxes is crucial to avoid penalties and ensure compliance. As a US citizen living in Mexico, you have obligations to both countries.
                </p>
                
                <div className="relative border-l-4 border-green-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-green-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 15</h4>
                        <p className="text-sm text-slate-600">US tax filing deadline for all citizens. Expats receive an automatic extension until June 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-green-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 30</h4>
                        <p className="text-sm text-slate-600">Mexican tax filing deadline for residents. If filing electronically, you may get an extension until May 31.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-green-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-green-700">June 15</h4>
                        <p className="text-sm text-slate-600">Extended deadline for US expatriate taxes. If taxes are owed, interest begins to accrue from April 15.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-green-500 rounded-full w-5 h-5 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-green-700">October 15</h4>
                        <p className="text-sm text-slate-600">Final deadline for US expatriate taxes if you have received an extension.</p>
                    </div>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                    <h4 className="font-bold text-green-900 mb-2">Important Forms</h4>
                    <p className="text-sm text-green-800 mb-4">US expats in Mexico need to be familiar with tax forms from both countries.</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-green-700">
                         <li className="bg-white/50 p-2 rounded"><strong>US:</strong> Form 1040, Form 2555 (FEIE), Form 1116 (FTC)</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Mexico:</strong> Declaración Anual, Declaración de Pagos Provisionales</li>
                         <li className="bg-white/50 p-2 rounded"><strong>US:</strong> FBAR (FinCEN Form 114), Form 8938 (FATCA)</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Mexico:</strong> Various VAT forms for businesses</li>
                     </ul>
                </div>
            </section>

            {/* Tax Treaty */}
            <section id="treaty">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The US-Mexico Tax Treaty</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    The United States and Mexico have a tax treaty designed to prevent double taxation for individuals and companies operating in both countries. This treaty covers various forms of income and provides specific taxation rules.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Benefits of the Tax Treaty</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Avoids double taxation through credits and exemptions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Provides clearer withholding tax rates for cross-border payments</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Helps determine tax residency status</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>Offers a framework for resolving tax disputes</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Methods of Double Tax Relief</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <Calculator className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Foreign Tax Credit:</strong> Claim credit for taxes paid to Mexico</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Calculator className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Foreign Earned Income Exclusion:</strong> Exclude up to $120,000 (2025) of foreign income</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Calculator className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Treaty Provisions:</strong> Specific exemptions and reduced rates</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                While the tax treaty provides relief from double taxation, you must still file tax returns in both countries. Proper planning is essential to take full advantage of the treaty benefits and minimize your overall tax burden.
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
                        <h3 className="font-bold text-slate-900 mb-3">Does Mexico have taxes for foreigners?</h3>
                        <p className="text-sm text-slate-600">Yes, Mexico taxes foreigners based on their residency status. Residents are taxed on worldwide income, while non-residents are only taxed on Mexican-sourced income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Is there a US-Mexico tax treaty?</h3>
                        <p className="text-sm text-slate-600">Yes, the United States has a tax treaty with Mexico designed to prevent double taxation and provide clarity on tax obligations for individuals and businesses operating in both countries.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Do I need to pay US taxes while living in Mexico?</h3>
                        <p className="text-sm text-slate-600">Yes, as a US citizen, you must file US taxes regardless of where you live. However, you may be able to use the Foreign Earned Income Exclusion or Foreign Tax Credit to reduce your US tax liability.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">What forms do I need to file?</h3>
                        <p className="text-sm text-slate-600">US citizens must file Form 1040, FBAR (FinCEN Form 114), and Form 8938 (FATCA). In Mexico, residents file the Declaración Anual with the SAT.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-Mexico Taxes?</h2>
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

export default MexicoGuide;