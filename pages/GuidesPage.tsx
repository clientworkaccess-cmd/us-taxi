
import React, { useState } from 'react';
import { Clock, ArrowRight, Globe, FileText, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuidesPage = () => {
  const [activeTab, setActiveTab] = useState("EUROPE");

  const popularArticles = [
    {
      category: "Tax Planning",
      readTime: "8 min read",
      title: "FEIE vs. Foreign Tax Credit: Which is Right for You?",
      description: "Compare the Foreign Earned Income Exclusion and Foreign Tax Credit to optimize your tax strategy.",
      link: "#"
    },
    {
      category: "Compliance",
      readTime: "6 min read",
      title: "Understanding FBAR: Foreign Bank Account Reporting",
      description: "Learn about FBAR filing requirements, thresholds, deadlines, and penalties for non-compliance.",
      link: "#"
    },
    {
      category: "Business",
      readTime: "12 min read",
      title: "Form 5471: What US Owners of Foreign Corporations Need to Know",
      description: "A detailed guide to Form 5471 requirements, categories, and filing obligations for controlled foreign corporations.",
      link: "#"
    },
    {
      category: "Amnesty",
      readTime: "10 min read",
      title: "Streamlined Procedures: How to Catch Up on Unfiled Returns",
      description: "Step-by-step guide to the Streamlined Filing Compliance Procedures for delinquent expats.",
      link: "#"
    },
    {
      category: "Tax Planning",
      readTime: "9 min read",
      title: "Tax Treaties: Reducing Double Taxation",
      description: "How to use US tax treaties to avoid paying taxes twice on the same income.",
      link: "#"
    }
  ];

  const regionData: Record<string, { name: string; link?: string; code: string }[]> = {
    "EUROPE": [
      { name: "Austria", code: "at" },
      { name: "Belgium", code: "be" },
      { name: "Bulgaria", code: "bg" },
      { name: "Czech Republic", code: "cz" },
      { name: "Denmark", code: "dk" },
      { name: "France", link: "/guides/france", code: "fr" },
      { name: "Germany", link: "/guides/germany", code: "de" },
      { name: "Greece", code: "gr" },
      { name: "Iceland", code: "is" },
      { name: "Ireland", code: "ie" },
      { name: "Italy", code: "it" },
      { name: "Netherlands", code: "nl" },
      { name: "Norway", code: "no" },
      { name: "Poland", code: "pl" },
      { name: "Portugal", link: "/guides/portugal", code: "pt" },
      { name: "Romania", code: "ro" },
      { name: "Russian Federation", code: "ru" },
      { name: "Spain", link: "/guides/spain", code: "es" },
      { name: "Sweden", code: "se" },
      { name: "Switzerland", code: "ch" },
      { name: "Ukraine", code: "ua" },
      { name: "United Kingdom", link: "/guides/united-kingdom", code: "gb" },
    ],
    "ASIA & MIDDLE EAST": [
      { name: "China", code: "cn" },
      { name: "Hong Kong", code: "hk" },
      { name: "India", code: "in" },
      { name: "Indonesia", code: "id" },
      { name: "Japan", link: "/guides/japan", code: "jp" },
      { name: "Malaysia", code: "my" },
      { name: "Philippines", code: "ph" },
      { name: "Singapore", link: "/guides/singapore", code: "sg" },
      { name: "South Korea", code: "kr" },
      { name: "Taiwan", code: "tw" },
      { name: "Thailand", code: "th" },
      { name: "United Arab Emirates", link: "/guides/united-arab-emirates", code: "ae" },
      { name: "Vietnam", code: "vn" }
    ],
    "AMERICAS & OCEANIA": [
      { name: "Argentina", code: "ar" },
      { name: "Australia", link: "/guides/australia", code: "au" },
      { name: "Brazil", code: "br" },
      { name: "Canada", link: "/guides/canada", code: "ca" },
      { name: "Chile", code: "cl" },
      { name: "Colombia", code: "co" },
      { name: "Costa Rica", code: "cr" },
      { name: "Mexico", link: "/guides/mexico", code: "mx" },
      { name: "New Zealand", code: "nz" },
      { name: "Panama", code: "pa" }
    ],
    "AFRICA": [
      { name: "Egypt", code: "eg" },
      { name: "Kenya", code: "ke" },
      { name: "Morocco", code: "ma" },
      { name: "Nigeria", code: "ng" },
      { name: "South Africa", link: "/guides/south-africa", code: "za" }
    ]
  };

  const irsForms = [
    { name: "Form 2555", description: "Foreign Earned Income Exclusion" },
    { name: "Form 1116", description: "Foreign Tax Credit" },
    { name: "Form 8938", description: "FATCA Reporting" },
    { name: "Form 5471", description: "Foreign Corporation Reporting" },
    { name: "Form 8621", description: "PFIC Reporting" },
    { name: "Form 5472", description: "Foreign-Owned US Entity" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-12 lg:pt-24 lg:pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Guides & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-500">Resources</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Expert insights, country guides, and IRS form explanations to help you navigate expat tax compliance.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                Featured
              </span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wide rounded-full">
                Getting Started
              </span>
              <span className="flex items-center text-slate-500 text-xs font-medium ml-2">
                10 min read
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Expat Tax 101: Everything You Need to Know
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-4xl">
              A comprehensive guide to US tax obligations for Americans living abroad, including FEIE, FTC, and common forms.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Read Article
            </button>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wide rounded-full">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {article.description}
                </p>
                <a href={article.link} className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors mt-auto">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Specific Guides - Split Layout */}
      <section className="py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Globe className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">Country-Specific Guides</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Sidebar Regions */}
            <div className="lg:w-1/4 flex-shrink-0">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 hidden lg:block px-2">Select Region</h3>
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:gap-1 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-slate-200 lg:pr-6 scrollbar-hide">
                    {Object.keys(regionData).map((region) => (
                    <button
                        key={region}
                        onClick={() => setActiveTab(region)}
                        className={`whitespace-nowrap px-4 py-3.5 text-left text-sm font-bold rounded-lg transition-all flex items-center justify-between group ${
                        activeTab === region 
                            ? 'bg-indigo-600 text-white shadow-md ring-1 ring-indigo-600' 
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                    >
                        <span>{region}</span>
                        {activeTab === region && <ChevronRight className="w-4 h-4 text-white hidden lg:block" />}
                    </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-3/4 flex-1">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 min-h-[400px]">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-2 h-6 bg-indigo-600 rounded-full inline-block"></span>
                            {activeTab}
                        </h3>
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                            {regionData[activeTab].length} Countries
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                        {regionData[activeTab].map((country, index) => (
                            <div key={index} className="relative group">
                                {country.link ? (
                                    <Link 
                                    to={country.link} 
                                    className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img 
                                              src={`https://flagicons.lipis.dev/flags/4x3/${country.code}.svg`} 
                                              alt={`${country.name} flag`} 
                                              className="w-8 h-6 object-cover rounded-sm shadow-sm flex-shrink-0"
                                            />
                                            <span className="text-slate-700 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                                                {country.name}
                                            </span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform duration-200" />
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-3 p-3 rounded-lg border border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                                        <img 
                                          src={`https://flagicons.lipis.dev/flags/4x3/${country.code}.svg`} 
                                          alt={`${country.name} flag`} 
                                          className="w-8 h-6 object-cover rounded-sm shadow-sm flex-shrink-0"
                                        />
                                        <span className="text-slate-500 font-medium text-sm cursor-default">
                                            {country.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                <p className="text-center text-slate-500 text-sm mt-8">
                    Don't see your country listed? <Link to="/contact" className="text-indigo-600 font-semibold hover:underline">Contact us</Link> for specific tax information.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* IRS Forms Explained */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">IRS Forms Explained</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {irsForms.map((form, index) => (
              <a key={index} href="#" className="group block bg-white border border-slate-100 rounded-lg p-6 hover:border-slate-200 hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-indigo-600 font-bold text-lg mb-1 group-hover:text-indigo-700 transition-colors">{form.name}</h3>
                    <p className="text-slate-600 text-sm">{form.description}</p>
                  </div>
                  <span className="text-slate-400 text-xs font-medium flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                    Learn <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-indigo-50/50 border-t border-indigo-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Our guides cover the basics, but every situation is unique. Get personalized advice from our experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition-colors shadow-lg">
              Book Free Consultation
            </button>
            <button className="px-8 py-3 bg-white text-slate-700 font-bold rounded-md hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm">
              Ask a Question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;
