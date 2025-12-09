import React, { useState } from 'react';
import { 
  FileText, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield, 
  Building, 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Home,
  Briefcase,
  FileCheck,
  Clock,
  Landmark,
  Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pricingCards = [
    {
      title: "Domestic Individual Tax Return",
      description: "Complete US tax filing for domestic taxpayers",
      price: "$500",
      buttonText: "Get Started",
      icon: <FileText className="w-8 h-8 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
      colSpan: "md:col-span-1"
    },
    {
      title: "Expat Tax Return (Federal)",
      description: "Complete US tax filing for Americans living abroad",
      price: "$550",
      buttonText: "Get Started",
      icon: <Globe className="w-8 h-8 text-white" />,
      gradient: "from-fuchsia-500 to-pink-500",
      isPopular: true,
      colSpan: "md:col-span-1"
    },
    {
      title: "Nonresident Tax Return (1040NR)",
      description: "Tax filing for non-resident aliens with US income",
      price: "$550",
      buttonText: "Get Started",
      icon: <Users className="w-8 h-8 text-white" />,
      gradient: "from-blue-500 to-indigo-500",
      colSpan: "md:col-span-1"
    },
    {
      title: "Dual Status Tax Returns",
      description: "For taxpayers who changed residency status during the year",
      price: "$900+",
      buttonText: "Get Started",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      gradient: "from-pink-500 to-rose-500",
      colSpan: "md:col-span-1"
    },
    {
      title: "Amended Tax Return",
      description: "In addition to the original return fee",
      price: "$150",
      buttonText: "Get Started",
      icon: <FileText className="w-8 h-8 text-white" />,
      gradient: "from-blue-400 to-cyan-500",
      colSpan: "md:col-span-1"
    },
    {
      title: "Corporation/Partnership Tax Return",
      description: "Corporate and partnership tax return preparation (1120 or 1065)",
      price: "$1,200",
      buttonText: "Get Started",
      icon: <Building className="w-8 h-8 text-white" />,
      gradient: "from-purple-500 to-fuchsia-500",
      colSpan: "md:col-span-1"
    },
    {
      title: "Streamlined Foreign Procedures",
      description: "Catch up on unfiled returns through IRS amnesty programs",
      price: "Custom Quote",
      buttonText: "Get Started",
      icon: <Shield className="w-8 h-8 text-white" />,
      gradient: "from-pink-600 to-rose-500",
      colSpan: "md:col-span-1 lg:col-span-1" // Adjusted for grid layout if needed
    }
  ];

  const addOns = [
    { name: "Business Income (Schedule C)", price: "$150", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Rental Income (Schedule E)", price: "$150", icon: <Home className="w-4 h-4" /> },
    { name: "Treaty Position (Nonresident/Dual Status)", price: "$150", icon: <Globe className="w-4 h-4" /> },
    { name: "State/City Tax Return", price: "$180", icon: <Building className="w-4 h-4" /> },
    { name: "FINCEN Form 114 (FBAR) up to 4 accounts", price: "$125", icon: <Shield className="w-4 h-4" /> },
    { name: "FATCA Form 8938 up to 4 accounts", price: "$150", icon: <Shield className="w-4 h-4" /> },
    { name: "PFIC Form 8621", price: "$350", icon: <FileText className="w-4 h-4" /> },
    { name: "Form 5471 and Schedules", price: "$1,200 - $4,000", icon: <FileText className="w-4 h-4" /> },
    { name: "Form 926", price: "$150", icon: <FileText className="w-4 h-4" /> },
    { name: "Entity Classification Form 8832", price: "$200", icon: <FileText className="w-4 h-4" /> },
    { name: "Articles of Organization/Incorporation", price: "$397", icon: <FileText className="w-4 h-4" /> },
    { name: "Income Tax Return of Foreign Corporation (1120-F)", price: "$800+", icon: <FileText className="w-4 h-4" /> },
    { name: "Foreign Partnership Form 8865", price: "$800 - $1,200", icon: <Users className="w-4 h-4" /> },
    { name: "Foreign Disregarded Entity Form 8858", price: "$800", icon: <Globe className="w-4 h-4" /> },
    { name: "Consulting with CPA", price: "$280/Hour", icon: <Clock className="w-4 h-4" /> },
    { name: "Out of Scope Hourly", price: "$280/Hour", icon: <Clock className="w-4 h-4" /> },
  ];

  const factors = [
    {
      title: "Number of Income Sources",
      description: "Single W-2 vs. multiple employers, self-employment, rental income, investments.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      bg: "bg-blue-500"
    },
    {
      title: "Forms Required",
      description: "5471 (foreign corporation), 8621 (PFIC), 5472, 3520 (foreign gifts/trusts).",
      icon: <FileText className="w-6 h-6 text-white" />,
      bg: "bg-fuchsia-500"
    },
    {
      title: "Number of Foreign Accounts",
      description: "FBAR and Form 8938 complexity increases with more accounts.",
      icon: <Landmark className="w-6 h-6 text-white" />,
      bg: "bg-indigo-500"
    },
    {
      title: "State Returns",
      description: "Some states require filing even while abroad. Complexity varies by state.",
      icon: <Globe className="w-6 h-6 text-white" />,
      bg: "bg-pink-500"
    },
    {
      title: "Prior Year Filings",
      description: "Catching up on multiple years (e.g., Streamlined Procedures) requires additional work.",
      icon: <Clock className="w-6 h-6 text-white" />,
      bg: "bg-cyan-500"
    },
    {
      title: "Business Ownership",
      description: "Sole proprietorships, partnerships, S-corps, and foreign entities add complexity.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      bg: "bg-purple-500"
    }
  ];

  const faqs = [
    {
      question: "Do you charge for consultations?",
      answer: "We offer a free initial 15-minute consultation to assess your situation and provide a quote. For detailed tax planning and specific advice, we offer paid consultations with our CPAs."
    },
    {
      question: "When do I pay?",
      answer: "We require payment before we begin working on your tax return. This ensures we can dedicate our resources to completing your filing efficiently and accurately."
    },
    {
      question: "What if my situation changes?",
      answer: "If your tax situation becomes more complex after we've started (e.g., you discover additional accounts or income sources), we will communicate any necessary price adjustments before proceeding."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No. We pride ourselves on transparent pricing. The quote you receive covers preparation, e-filing, and our standard support. Any potential add-ons will be discussed upfront."
    },
    {
      question: "Do you offer refunds?",
      answer: "Due to the nature of professional services, we typically do not offer refunds once work has commenced. However, customer satisfaction is our priority, and we work to resolve any issues."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Transparent</span> Pricing
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            No hidden fees. Know exactly what you'll pay before you start. All packages include expert preparation, e-filing, and support.
          </p>
        </div>
      </section>

      {/* Main Pricing Grid */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Tax Preparation Services</h2>
            <p className="text-slate-600 mt-2">Choose the package that fits your situation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCards.map((card, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 text-white shadow-lg transition-transform hover:-translate-y-1 bg-gradient-to-br ${card.gradient} flex flex-col`}
              >
                {card.isPopular && (
                  <div className="absolute top-0 right-0 mt-4 mr-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mb-6">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 min-h-[56px] flex items-center">{card.title}</h3>
                <p className="text-white/90 text-sm mb-8 min-h-[40px]">{card.description}</p>
                
                <div className="mt-auto">
                  <div className="text-4xl font-bold mb-6">{card.price}</div>
                  <button className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    {card.buttonText} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 shadow-lg">
                <Calculator className="w-8 h-8 text-white -rotate-12" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Add-On Services & Forms</h2>
            <p className="text-slate-600">Additional services priced separately</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            {addOns.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-md text-blue-600">
                    {item.icon}
                  </div>
                  <span className="text-slate-800 font-medium text-sm md:text-base">{item.name}</span>
                </div>
                <span className="text-blue-600 font-bold text-sm md:text-base whitespace-nowrap ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-[2rem] p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-xl">
            <div className="bg-slate-50 rounded-[1.9rem] py-16 px-8 text-center relative overflow-hidden">
                {/* Decorative Icon Bubble */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg rotate-3">
                        <Calculator className="w-10 h-10 text-white -rotate-3" />
                    </div>
                </div>

                <div className="mt-6 relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Not Sure Which Package Fits?</h2>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                        Get an instant estimate based on your specific situation, or book a free consultation to discuss your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                            Get a Quote
                        </button>
                        <button className="px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm">
                            Book Free Consultation
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Affects Your Price?</h2>
            <p className="text-lg text-slate-600">Understanding the factors that influence your tax preparation costs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factors.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${item.bg}`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                 <div className="w-14 h-14 bg-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">?</span>
                 </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Pricing FAQs</h2>
                <p className="text-slate-600">Common questions about our pricing</p>
            </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-blue-50 text-lg mb-10 max-w-2xl mx-auto">
                Join 2,000+ expats who trust us with their US tax filings. Expert preparation, transparent pricing, and peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md flex items-center justify-center gap-2">
                    Get Started Today <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 bg-blue-600 border border-blue-400 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                    Contact Us
                </button>
                </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
