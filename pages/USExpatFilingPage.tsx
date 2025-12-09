
import React, { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Star,
  FileText,
  Users,
  MessageSquare,
  Clock,
  HelpCircle,
  BookOpen,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const USExpatFilingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Form 5472 Filing",
      description: "Form 5472 is required for U.S. corporations that are at least 25% foreign-owned and have reportable transactions with foreign or domestic related parties.",
      features: [
        "Complete Form 5472 preparation",
        "Pro-forma 1120 return filing",
        "Deadline compliance management",
        "IRS correspondence support"
      ],
      icon: <FileText />,
      buttonText: "Get Started",
      image: "https://res.cloudinary.com/djmakoiji/image/upload/v1765279907/form-5472-illustration_wt9cf3.jpg"
    },
    {
      title: "Partnership & Corporate Returns",
      description: "Comprehensive tax return filing for partnerships and corporations with non-U.S. shareholders or partners.",
      features: [
        "Form 1120 corporate returns",
        "Form 1065 partnership returns",
        "K-1 preparation and distribution",
        "K-2 and K-3 preparation",
        "Multi-state filing coordination"
      ],
      icon: <Users />,
      buttonText: "Get Started",
      image: "https://res.cloudinary.com/djmakoiji/image/upload/v1765279907/corporate-tax-illustration_ozwfea.jpg"
    },
    {
      title: "Tax Consultation",
      description: "Professional advisory services to help you navigate complex U.S. non-resident tax requirements.",
      features: [
        "One-on-one consultations",
        "Tax planning strategies",
        "Compliance review",
        "Entity structure guidance"
      ],
      icon: <MessageSquare />,
      buttonText: "Get Started",
      image: "https://res.cloudinary.com/djmakoiji/image/upload/v1765279907/consultation-illustration_djlult.jpg"
    }
  ];

  const pricing = [
    {
      name: "Form 5472 Basic",
      price: "$390",
      description: "Essential Form 5472 filing for single entity",
      features: [
        "Form 5472 preparation",
        "Pro-forma 1120 return",
        "Electronic filing",
        "Basic support",
        "Deadline reminders"
      ],
      highlight: false
    },
    {
      name: "Form 5472 Complete",
      price: "$590",
      description: "Comprehensive filing with advisory",
      features: [
        "Everything in Basic",
        "30-minute consultation",
        "Prior year review",
        "IRS correspondence support",
        "Multi-entity discount available",
        "Priority support"
      ],
      highlight: true
    },
    {
      name: "Corporate/Partnership",
      price: "$1,295+",
      description: "Full corporate or partnership tax returns",
      features: [
        "Complete Form 1120 or 1065",
        "Form 5472 if applicable",
        "K-1 preparation",
        "K-2 and K-3 preparation",
        "State filing coordination",
        "Year-round support"
      ],
      highlight: false
    }
  ];

  const resources = [
    {
      title: "What is Form 5472?",
      description: "Form 5472 is required for U.S. corporations that are at least 25% foreign-owned and have reportable transactions with foreign or domestic related parties.",
      features: [
        "Required for foreign-owned U.S. entities",
        "Reports related party transactions",
        "Must be filed annually with Form 1120",
        "Heavy penalties for non-compliance"
      ],
      icon: <FileText className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Filing Deadlines",
      description: "Understanding and meeting Form 5472 deadlines is crucial to avoid significant IRS penalties.",
      features: [
        "Due with Form 1120 (15th day of 4th month after year-end)",
        "Extensions available with Form 7004",
        "Late filing penalty: $25,000 per form",
        "Additional penalties for continued failure"
      ],
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Common Mistakes to Avoid",
      description: "Many non-residents make critical errors when filing Form 5472. Learn what to watch out for.",
      features: [
        "Failing to file when required",
        "Incomplete related party information",
        "Missing reportable transactions",
        "Not maintaining proper documentation"
      ],
      icon: <AlertTriangle className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Why Professional Help Matters",
      description: "Form 5472 compliance is complex. Expert guidance can save you time, money, and stress.",
      features: [
        "Navigate complex IRS requirements",
        "Avoid costly penalties ($25,000+)",
        "Ensure complete and accurate filing",
        "Get peace of mind and focus on your business"
      ],
      icon: <BookOpen className="w-6 h-6 text-blue-500" />
    }
  ];

  const faqs = [
    {
      question: "Who must file Form 5472?",
      answer: "Form 5472 must be filed by a 25% foreign-owned U.S. corporation or a foreign corporation engaged in a U.S. trade or business that has had a reportable transaction with a foreign or domestic related party."
    },
    {
      question: "What is the penalty for not filing Form 5472?",
      answer: "The penalty for failing to file Form 5472 is $25,000 per form. Additional penalties apply if the failure continues after IRS notification."
    },
    {
      question: "What is a pro forma Form 1120, and why is it needed for Form 5472?",
      answer: "A pro forma Form 1120 is a partially completed tax return filed by foreign-owned U.S. Disregarded Entities (DEs). It's used to attach Form 5472 and provide basic entity information to the IRS, even if the entity doesn't owe income tax."
    },
    {
      question: "When is Form 5472 due?",
      answer: "Form 5472 is due on the same date as the corporation's income tax return, which is generally the 15th day of the 4th month after the end of the tax year (April 15 for calendar year filers). Extensions are available."
    },
    {
      question: "Do I need an EIN to file Form 5472?",
      answer: "Yes, you must have an Employer Identification Number (EIN) to file Form 5472. You cannot file this form without one."
    },
    {
      question: "Can I file Form 5472 if my company had no transactions or income?",
      answer: "Generally, if there were no reportable transactions during the tax year, Form 5472 is not required. However, you should consult with a tax professional to confirm your specific situation."
    },
    {
      question: "What's the difference between Form 5471 and Form 5472?",
      answer: "Form 5471 is filed by U.S. persons who have certain ownership in foreign corporations. Form 5472 is filed by U.S. corporations that are foreign-owned."
    },
    {
      question: "Can I file Form 5472 electronically?",
      answer: "Yes, Form 5472 can be filed electronically when attached to Form 1120. Modern e-filing providers support this."
    },
    {
      question: "What are reportable transactions for Form 5472?",
      answer: "Reportable transactions include sales, rents, royalties, loans, interest, and other exchanges of value between the reporting corporation and a related party."
    },
    {
      question: "Can multiple Form 5472s be required for the same company?",
      answer: "Yes, a separate Form 5472 must be filed for each related party with whom the reporting corporation had reportable transactions during the tax year."
    }
  ];

  const testimonials = [
    {
      text: "\"Form 5472-OET made the complex process of filing my Form 5472 incredibly simple. Their team was professional, responsive, and...\"",
      author: "Sarah M.",
      location: "United Kingdom"
    },
    {
      text: "\"After struggling with Form 5472 on my own, I found this service. They handled everything efficiently and saved me from potential IRS penaltie...\"",
      author: "Michael Chen",
      location: "Singapore"
    },
    {
      text: "\"Excellent service! The consultation helped me understand my tax obligations, and the filing process was seamless. They truly understand non...\"",
      author: "Ana Rodriguez",
      location: "Spain"
    },
    {
      text: "\"I've been using their services for 3 years now. Consistently professional, always on time, and their expertise has been invaluable for my U.S. business...\"",
      author: "David Kim",
      location: "South Korea"
    }
  ];

  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-8">
            <CheckCircle className="w-4 h-4 mr-2" /> Trusted by 5,000+ Clients Worldwide
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Expert U.S. Non-Resident <br />
            <span className="text-blue-600">Tax Compliance</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Specializing in Form 5472 filing, partnership and corporate tax returns for U.S. non-residents
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium">IRS Compliant Form 5472 Filing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium">Expert Non-Resident Tax Guidance</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium">Authorized IRS E-File Provider</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium">CPA Prepared, Reviewed and Signed</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium">15+ Years of Proven Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium">Fast, Reliable Service</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-md transition-colors shadow-lg flex items-center justify-center gap-2">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-gray-800 font-bold rounded-md border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
              View Services
            </button>
          </div>

          <div className="flex justify-center gap-8 md:gap-16 border-t border-gray-200 pt-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">20K+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Returns Filed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">80+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive U.S. tax compliance solutions tailored for non-residents</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 bg-gray-100 overflow-hidden relative group">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                   />
                   <div className="absolute bottom-4 left-4 bg-blue-600 p-3 rounded-lg shadow-md">
                     {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-white" })}
                   </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <ArrowRight className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-[#3B82F6] hover:bg-blue-700 text-white font-bold rounded-md transition-colors flex items-center justify-center gap-2">
                    {service.buttonText} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600">No hidden fees. All prices in USD. VAT charged.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden relative ${plan.highlight ? 'border-2 border-[#F97316] transform scale-105 z-10' : 'border border-gray-200'}`}>
                {plan.highlight && (
                  <div className="bg-[#F97316] text-white text-center py-1 text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="p-8 text-center border-b border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-extrabold text-[#3B82F6] mb-2">{plan.price}</div>
                  <p className="text-xs text-gray-500">{plan.description}</p>
                </div>
                <div className="p-8 bg-gray-50/50">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 font-bold rounded-md transition-colors ${plan.highlight ? 'bg-[#F97316] hover:bg-[#EA580C] text-white' : 'bg-[#3B82F6] hover:bg-blue-700 text-white'}`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Table */}
          <div className="mt-16 max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Services</h3>
            <div className="bg-[#FFE4D6] rounded-lg p-6 mb-6 text-center border border-[#FED7AA]">
              <h4 className="font-bold text-gray-900 mb-1">Up to 1 hour consultation</h4>
              <div className="text-3xl font-bold text-[#3B82F6] mb-3">$280</div>
              <button className="px-6 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold rounded shadow-sm">
                Book Consultation Now
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Delinquent 5472 with reasonable cause statement", price: "$850" },
                { name: "Prior year amendment", price: "$695+" },
                { name: "IRS notice response", price: "$495+" },
                { name: "Multi-year filing discount", price: "20% off" },
                { name: "ITIN Application with CAA", price: "$600" },
                { name: "Individual non-resident tax return form 1040NR", price: "$550+" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white rounded border border-gray-100">
                  <span className="text-sm font-medium text-gray-700 pr-4">{item.name}</span>
                  <span className="text-sm font-bold text-[#3B82F6]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Note */}
          <div className="mt-8 text-center bg-[#FFF7ED] p-6 rounded-lg max-w-4xl mx-auto border border-[#FFEDD5]">
             <h4 className="font-bold text-gray-900 text-sm mb-2">Comparing Prices?</h4>
             <ul className="text-xs text-gray-600 space-y-1">
               <li>✓ All prices in USD - we don't collect VAT</li>
               <li>✓ We could be up to 75% cheaper than competitors when comparing like-for-like</li>
               <li>✓ No hidden fees or surprise charges</li>
             </ul>
          </div>
        </div>
      </section>

      {/* Tax Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Tax Resources</h2>
            <p className="text-lg text-gray-600">Essential information about Form 5472 and U.S. non-resident tax compliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {res.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{res.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{res.description}</p>
                <ul className="space-y-2">
                  {res.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <ArrowRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Banner CTA */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-[#3B82F6] rounded-lg p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-lg">
          <div className="flex-shrink-0 bg-white/20 p-4 rounded-full">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Don't Risk IRS Penalties</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              The U.S. tax code spans over 10 million words, and for expats, it gets even more complex. Form 5472 non-compliance can result in penalties of $25,000 or more per form. Our team of seasoned tax professionals specializes in the full spectrum of expat tax scenarios.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded hover:bg-blue-50 transition-colors text-sm flex items-center gap-2">
              Get Expert Help Today <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Client Reviews</h2>
            <p className="text-lg text-gray-600">See what our clients say about our services</p>
            <div className="mt-4 font-semibold text-sm">We only have 5 star reviews</div>
            <div className="flex justify-center gap-8 mt-4 text-xs font-bold text-gray-800">
               <span className="flex items-center gap-1"><Star className="w-4 h-4 text-green-500 fill-current" /> Trustpilot 4.8</span>
               <span className="flex items-center gap-1">Google 5 <div className="flex"><Star className="w-3 h-3 text-yellow-400 fill-current" /><Star className="w-3 h-3 text-yellow-400 fill-current" /><Star className="w-3 h-3 text-yellow-400 fill-current" /><Star className="w-3 h-3 text-yellow-400 fill-current" /><Star className="w-3 h-3 text-yellow-400 fill-current" /></div></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col h-full">
                <div className="text-4xl text-blue-200 font-serif leading-none mb-4">“</div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-xs text-gray-600 italic mb-4 flex-grow leading-relaxed">{t.text}</p>
                <div>
                  <p className="font-bold text-gray-900 text-xs">{t.author}</p>
                  <p className="text-[10px] text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 text-xs text-gray-400">Join thousands of satisfied clients worldwide</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-sm">Get answers to common questions about Form 5472 filing requirements</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full text-left flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-lg text-gray-600 mb-12">Ready to ensure your Form 5472 compliance? Contact us for a free consultation.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">Let's Talk About Your Tax Needs</h3>
              <p className="text-sm text-gray-600 mb-8">Have questions about Form 5472 or your U.S. tax obligations? We're here to help.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Email</div>
                    <div className="text-sm text-gray-600">hov@troyaccounting.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Phone</div>
                    <div className="text-sm text-gray-600">+ 1 248 872 7754</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Service</div>
                    <div className="text-sm text-gray-600">Serving clients worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Book a Consultation</h3>
              <p className="text-xs text-gray-500 mb-6">Schedule a free 15-minute call to discuss your needs</p>
              <button className="w-full py-3 bg-[#3B82F6] hover:bg-blue-700 text-white font-bold rounded-md shadow-sm transition-colors text-sm">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-like Links (from design) */}
      <div className="bg-slate-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-[#3B82F6] mb-4">Form 5472-OET</div>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">Expert U.S. non-resident tax compliance services. Specializing in Form 5472, partnership, and corporate tax returns.</p>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1"><Mail className="w-3 h-3" /> hov@troyaccounting.com</div>
            <div className="flex items-center gap-2 text-xs text-gray-500"><Phone className="w-3 h-3" /> + 1 248 872 7754</div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-xs mb-4">Services</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>Form 5472 Filing</li>
              <li>Corporate Returns</li>
              <li>Partnership Returns</li>
              <li>Consultation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-xs mb-4">Resources</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>What is Form 5472?</li>
              <li>Filing Deadlines</li>
              <li>Common Mistakes</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-xs mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400">
          <div>© 2025 Form 5472-OET by Online Expat Tax. All rights reserved.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
             {/* Social placeholders */}
             <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
             <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
             <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
          </div>
        </div>
        <div className="text-center mt-4 text-[9px] text-gray-400">✓ 15+ Years Experience • ✓ 20,000+ Returns Filed • ✓ IRS Compliant</div>
      </div>
    </div>
  );
};

export default USExpatFilingPage;
