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

const SouthAfricaGuide = () => {
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
                 style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1EhnvRSZEPV7ENnllfumVILiW7ByoxxCxvA&s')"}}>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-2xl opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="text-xl">🇿🇦</span> South Africa Tax Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Simple Tax Guide for Americans <br className="hidden md:block" /> Living in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">South Africa</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
            As a U.S. citizen or green card holder, you're legally required to file a U.S. tax return each year regardless of whether you already pay taxes in South Africa. We'll help you understand both tax systems.
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
                { id: 'comparison', label: 'US vs South Africa System' },
                { id: 'filing', label: 'Filing & Deadlines' },
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
                    <p className="text-xs text-green-700 mb-3">Our US-South Africa tax experts can review your situation and ensure compliance while minimizing your tax burden.</p>
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
                 Understanding the South African tax system is essential for American expats to ensure compliance and optimize your tax position. South Africa operates on a residency-based taxation model with progressive income tax rates up to 45%. Here are the key elements you need to know:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <Calendar className="w-6 h-6 text-green-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Tax Year</p>
                      <p className="text-slate-900 font-semibold">March 1 – February 28</p>
                      <p className="text-xs text-slate-500 mt-2">South Africa's tax year ends on February 28.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <FileText className="w-6 h-6 text-red-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">South African Filing</p>
                      <p className="text-slate-900 font-semibold">Annual Tax Return</p>
                      <p className="text-xs text-slate-500 mt-2">Filed by date published by Commissioner.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <Clock className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Due Date</p>
                      <p className="text-slate-900 font-semibold">Varies by Year</p>
                      <p className="text-xs text-slate-500 mt-2">Date published by Commissioner each year.</p>
                  </div>
                   <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-green-300 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-500 mb-3" />
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wide">Residency Test</p>
                      <p className="text-slate-900 font-semibold">Ordinarily Resident</p>
                      <p className="text-xs text-slate-500 mt-2">Based on physical presence or economic ties.</p>
                  </div>
               </div>
            </section>

            {/* Residency */}
            <section id="residency">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Your Residency</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    In South Africa, your tax residency determines what income you must report and where you pay tax. Residents are taxed on worldwide income, while non-residents are only taxed on South African-source income.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50/50 border border-green-100 p-6 rounded-xl">
                        <h3 className="font-bold text-green-900 mb-2">South Africa Resident</h3>
                        <p className="text-sm text-green-800/80">
                            <strong>Taxed on worldwide income:</strong> As a resident, you pay taxes on all income regardless of where it's earned. Tax rates are progressive, ranging from 18% to 45%.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                        <h3 className="font-bold text-slate-900 mb-2">Non-Resident</h3>
                        <p className="text-sm text-slate-600">
                             Only pay taxes on <strong>South African-source income</strong> and capital gains from disposal of immovable property and assets of a permanent establishment in South Africa.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Residency Requirements</h3>
                <p className="text-slate-600 mb-4">You'll be considered a tax resident in South Africa if you meet either of these conditions:</p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Ordinarily resident:</strong> You are considered ordinarily resident in South Africa based on your physical presence and intentions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Physical presence test:</strong> You are physically present in South Africa for more than 91 days during each of the current and preceding 5 tax years.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700"><strong>Aggregate presence test:</strong> You are physically present in South Africa for a period exceeding 915 days in aggregate across the relevant years.</span>
                    </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
                            <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                As a US citizen in South Africa, you still have tax obligations to the United States. The US-South Africa tax treaty helps prevent double taxation, but careful planning is essential.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taxation Types */}
            <section id="taxation">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Taxation in South Africa</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    South Africa has several taxes that residents and non-residents must be aware of, including income tax, VAT, estate duty, and other taxes. Understanding these taxes can help you plan your finances and avoid unexpected liabilities.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Income Tax Rates (2025)</h3>
                    <p className="text-slate-600 mb-4">South Africa has a progressive income tax system, meaning the more you earn, the higher your tax rate.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Taxable Income (ZAR)</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">1 – 195,850</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">18% of taxable income</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">195,851 – 305,850</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">35,253 + 26% of taxable income above 195,850</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">305,851 – 423,300</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">63,853 + 31% of taxable income above 305,850</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">423,301 – 555,600</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">100,263 + 36% of taxable income above 423,300</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">555,601 – 708,310</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">147,891 + 39% of taxable income above 555,600</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">708,311 – 1,500,000</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">207,448 + 41% of taxable income above 708,310</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-700">1,500,001 and above</td>
                                    <td className="px-4 py-3 text-sm font-medium text-slate-900">532,041 + 45% of taxable income above 1,500,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-slate-500 mt-3">Note: Tax rebates are available: Primary rebate (R14,220), Secondary rebate (65 and older: R7,794), Tertiary rebate (75 and older: R2,601).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Value Added Tax (VAT)</h3>
                        <p className="text-sm text-slate-600 mb-4">VAT is levied on the sale of goods and services in South Africa.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Standard Rate</span>
                                <span className="font-bold text-slate-900">15%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Registration Threshold</span>
                                <span className="font-bold text-slate-900">ZAR 1 million/year</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Other Taxes</h3>
                        <p className="text-sm text-slate-600 mb-4">South Africa has several other taxes that may affect you.</p>
                        <ul className="text-sm space-y-2">
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Corporate Tax</span>
                                <span className="font-bold text-slate-900">28% (companies)</span>
                            </li>
                             <li className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-600">Estate Duty</span>
                                <span className="font-bold text-slate-900">20%</span>
                            </li>
                             <li className="flex justify-between pb-2">
                                <span className="text-slate-600">Property Transfer Tax</span>
                                <span className="font-bold text-slate-900">Up to 8%</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 bg-green-50 border border-green-100 rounded-xl p-6">
                    <h3 className="font-bold text-green-900 mb-3">Corporate Tax</h3>
                    <p className="text-sm text-green-800 mb-4">South Africa corporate income tax rates are 28% for companies and 33% for branches.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Resident companies:</strong> Taxed on worldwide income</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Non-resident companies:</strong> Taxed on South African-source income</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Dividends:</strong> Exempt from corporation tax between South African companies</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Capital gains:</strong> Taxed at normal income tax rate on 50% of gains</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Comparison */}
            <section id="comparison">
                <div className="bg-slate-900 rounded-2xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-green-400" /> US vs South Africa Tax Systems
                    </h2>
                    <p className="text-slate-300 mb-6">Understanding the fundamental differences between the US and South Africa tax systems is crucial for American expats to ensure compliance and optimize your tax position.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Category</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">South Africa</th>
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
                                    <td className="px-4 py-3 text-sm text-slate-300">VAT/Sales Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">15%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Varies by state (avg. 7.25%)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Capital Gains Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Up to 45%</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Dividend Tax Rate</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Exempt (between SA companies)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">0% to 20%</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-sm text-slate-300">Estate/Inheritance Tax</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Estate duty (20%)</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">Estate tax (up to 40%)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                        <p className="text-sm text-slate-300">
                            <strong>Key Takeaway:</strong> As a US citizen in South Africa, you must navigate both tax systems. The US-South Africa tax treaty helps prevent double taxation, but careful planning is essential to minimize your overall tax burden.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filing */}
            <section id="filing">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Filing Requirements & Deadlines</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Understanding the filing requirements and deadlines for both US and South African taxes is crucial to avoid penalties and ensure compliance. As a US citizen living in South Africa, you have obligations to both countries.
                </p>
                
                <div className="relative border-l-4 border-green-200 pl-8 space-y-8 my-8">
                    <div className="relative">
                        <div className="absolute -left-[41px] bg-green-500 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">February 28</h4>
                        <p className="text-sm text-slate-600">South African tax year end date.</p>
                    </div>
                    <div className="relative">
                         <div className="absolute -left-[41px] bg-green-300 rounded-full w-5 h-5 border-4 border-white"></div>
                        <h4 className="font-bold text-slate-900">April 15</h4>
                        <p className="text-sm text-slate-600">US tax filing deadline for all citizens. Expats receive an automatic extension until June 15.</p>
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
                    <h4 className="font-bold text-green-900 mb-2">Important Deadlines for South Africa</h4>
                    <p className="text-sm text-green-800 mb-4">Tax returns must be filed by a date published by Commissioner of South African Revenue Service.</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-green-700">
                         <li className="bg-white/50 p-2 rounded"><strong>Provisional tax:</strong> Paid at 6-month intervals during tax year</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Final payment:</strong> Due 6 months after tax year end</li>
                         <li className="bg-white/50 p-2 rounded"><strong>VAT returns:</strong> Generally submitted every 2 months</li>
                         <li className="bg-white/50 p-2 rounded"><strong>Corporate returns:</strong> Within 12 months of company's financial year end</li>
                     </ul>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Does South Africa have taxes for foreigners?</h3>
                        <p className="text-sm text-slate-600">Yes, South Africa taxes foreigners based on their residency status. Residents are taxed on worldwide income, while non-residents are only taxed on South African-source income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Is there a US-South Africa tax treaty?</h3>
                        <p className="text-sm text-slate-600">Yes, the US and South Africa have a tax treaty that helps prevent double taxation and determines which country taxes certain types of income.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">Do I need to pay US taxes while living in South Africa?</h3>
                        <p className="text-sm text-slate-600">Yes, as a US citizen, you must file US taxes regardless of where you live. However, you may be able to use the Foreign Earned Income Exclusion or Foreign Tax Credit to reduce your US tax liability.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-3">What forms do I need to file?</h3>
                        <p className="text-sm text-slate-600">US citizens must file Form 1040, FBAR (FinCEN Form 114), and Form 8938 (FATCA). In South Africa, residents file annual tax returns with the South African Revenue Service.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-green-600 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your US-South Africa Taxes?</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                    At Taxes for Expats, we have been preparing U.S. tax returns for U.S. citizens and green card holders working in South Africa for over 8 years. We offer professional tax services tailored to your needs.
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

export default SouthAfricaGuide;