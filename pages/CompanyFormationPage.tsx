
import React, { useState } from 'react';
import { 
  Globe, 
  Shield, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  Building, 
  FileText, 
  Landmark, 
  Headphones, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Star,
  Mail,
  Calendar,
  MessageSquare,
  Check,
  Users,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyFormationPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      title: "Global Market Access",
      description: "Reach international investors and customers with US credibility",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "Strong Legal Protection",
      description: "Benefit from world-class IP protection and legal framework",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50"
    },
    {
      title: "Tax Optimization",
      description: "Structure your business for optimal international tax efficiency",
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50"
    },
    {
      title: "Fast Formation",
      description: "Get your company up and running in just 2-3 weeks",
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50"
    }
  ];

  const features = [
    {
      title: "Company Formation",
      description: "Expert guidance on choosing between LLC and Corporation structures tailored to your business needs.",
      icon: <Building className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "EIN Registration",
      description: "We handle all paperwork to obtain your Employer Identification Number from the IRS.",
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50"
    },
    {
      title: "Banking Assistance",
      description: "Strategic guidance for opening US business bank accounts and payment processing.",
      icon: <Landmark className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50"
    },
    {
      title: "Compliance Management",
      description: "Year-round bookkeeping, tax return filing, and regulatory compliance support.",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50"
    },
    {
      title: "Registered Agent",
      description: "Professional registered agent service with a physical US address for your company.",
      icon: <Users className="w-6 h-6 text-cyan-600" />,
      bg: "bg-cyan-50"
    },
    {
      title: "Dedicated Support",
      description: "Personal account manager and support team available via chat, email, and phone.",
      icon: <Headphones className="w-6 h-6 text-rose-600" />,
      bg: "bg-rose-50"
    }
  ];

  const faqs = [
    {
      question: "Can non-US residents form a US company?",
      answer: "Yes, absolutely. You do not need to be a US citizen or resident to form a US company (LLC or C-Corporation). You can own and operate a US company from anywhere in the world."
    },
    {
      question: "What's the difference between an LLC and a Corporation?",
      answer: "An LLC (Limited Liability Company) is a flexible structure that offers liability protection and pass-through taxation (profits are taxed at the owner's level). A C-Corporation is a separate taxable entity that can issue stock and is often preferred by companies seeking venture capital."
    },
    {
      question: "How long does the formation process take?",
      answer: "The timeline varies by state, but typically it takes 2-3 weeks to form the company and obtain the EIN. We offer expedited services for faster processing."
    },
    {
      question: "Which state should I incorporate in?",
      answer: "Delaware and Wyoming are popular choices for non-residents due to their business-friendly laws and tax structures. However, the best state depends on your specific business goals. We can help you decide during a consultation."
    },
    {
      question: "Do I need a US address?",
      answer: "Yes, a US registered agent address is required for legal correspondence. Our package includes a professional registered agent service with a physical US address."
    }
  ];

  const testimonials = [
    {
      quote: "Company-OET made the entire process seamless. From formation to compliance, they handled everything professionally and efficiently.",
      author: "Sarah Johnson",
      role: "Tech Entrepreneur"
    },
    {
      quote: "Outstanding service! They guided me through every step of incorporating my US company. Highly recommended for international entrepreneurs.",
      author: "Michael Chen",
      role: "E-commerce Business Owner"
    },
    {
      quote: "Professional, fast, and reliable. The team made US incorporation simple and stress-free. Worth every penny!",
      author: "Emma Williams",
      role: "Digital Marketing Agency"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 pb-16 lg:pt-28 lg:pb-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
            <CheckCircle className="w-3.5 h-3.5" /> Trusted by 2,000+ entrepreneurs worldwide
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Form Your US Company <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-500">From Anywhere</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            Professional company formation services for non-US residents. LLC and Corporation setup, EIN registration, bank account guidance, and ongoing compliance—all in one place.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="px-8 py-3.5 bg-white text-slate-700 font-bold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
              Schedule Consultation
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-slate-200 pt-8">
            <div>
              <div className="text-3xl font-bold text-blue-600">2,000+</div>
              <div className="text-xs text-slate-500 font-medium uppercase mt-1">Companies Formed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-xs text-slate-500 font-medium uppercase mt-1">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">80+</div>
              <div className="text-xs text-slate-500 font-medium uppercase mt-1">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">Incorporate Your US Company</h2>
            <p className="text-slate-600">Join thousands of entrepreneurs who chose the United States for their global business</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Representation */}
            <div className="relative">
               <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                  <div className="text-6xl font-black text-slate-900 mb-2">US</div>
                  <div className="text-xl font-bold text-slate-900 mb-2">United States</div>
                  <div className="text-sm text-slate-500">Most trusted jurisdiction worldwide</div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-2 border-4 border-white shadow-lg">
                     <Check className="w-6 h-6 text-white" />
                  </div>
               </div>
               {/* Decorative background blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className={`p-3 rounded-lg flex-shrink-0 ${benefit.bg}`}>
                            {benefit.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-sm mb-1">{benefit.title}</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">US</h2>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">United States Company Formation</h3>
                <p className="text-slate-600">Form a US company and access global markets with international credibility</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                {/* Header */}
                <div className="bg-[#6366f1] p-8 text-white">
                    <h3 className="text-xl font-bold mb-2">Complete Formation Package</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-extrabold">$397</span>
                        <span className="text-blue-100 text-sm">Plus state fees</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-xs text-blue-100">
                        <Clock className="w-4 h-4" /> Formation time: 2-3 weeks
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
                    <div className="p-6 text-center">
                        <div className="text-blue-600 mb-2 flex justify-center"><Globe className="w-6 h-6" /></div>
                        <div className="font-bold text-slate-900 text-sm">Market Access</div>
                        <div className="text-[10px] text-slate-500 mt-1">Access to US markets and investors</div>
                    </div>
                    <div className="p-6 text-center">
                        <div className="text-blue-600 mb-2 flex justify-center"><Shield className="w-6 h-6" /></div>
                        <div className="font-bold text-slate-900 text-sm">Legal Protection</div>
                        <div className="text-[10px] text-slate-500 mt-1">Strong legal framework and IP protection</div>
                    </div>
                    <div className="p-6 text-center">
                        <div className="text-blue-600 mb-2 flex justify-center"><DollarSign className="w-6 h-6" /></div>
                        <div className="font-bold text-slate-900 text-sm">Tax Benefits</div>
                        <div className="text-[10px] text-slate-500 mt-1">Optimize international tax structure</div>
                    </div>
                </div>

                {/* Checklist */}
                <div className="p-8">
                    <h4 className="font-bold text-slate-900 mb-6">What's Included</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">LLC or C-Corp formation</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">US business address with mail forwarding (Extra Fee)</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">Registered agent service (Extra Fee)</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">EIN (Tax ID) application</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">US business bank account guidance</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">Custom operating agreement</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">Custom operating agreement</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700">Annual compliance reminder service</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link to="/contact" className="block w-full py-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-center rounded-lg transition-colors shadow-md">
                            Start Your United States Company Formation
                        </Link>
                        <p className="text-xs text-slate-400 text-center mt-3">Priority processing • Dedicated support • Money-back guarantee</p>
                    </div>
                </div>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-8">
                ✓ Trusted by 2000+ entrepreneurs worldwide • ✓ 100% satisfaction guarantee
            </p>
        </div>
      </section>

      {/* Consultation Box */}
      <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                      <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Need Expert Guidance?</h3>
                  <p className="text-sm text-slate-600 mb-6 max-w-lg mx-auto">
                      Not sure which entity type is best, or need guidance on structuring and next steps? Begin with a comprehensive consultation with a CPA to ensure you make the right choice for your business.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6366f1] text-white font-bold rounded hover:bg-[#4f46e5] transition-colors text-sm">
                      Schedule Your CPA Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>
          </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Everything You Need to <span className="text-[#a855f7]">Succeed</span>
            </h2>
            <p className="text-slate-600">Comprehensive services to establish and maintain your business with confidence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all bg-white">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${feature.bg}`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />)}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Rated 4.9 stars by entrepreneurs worldwide</h3>
                <div className="flex justify-center gap-4 mt-4 text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 text-green-500 fill-current" /> Trustpilot Reviews</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 text-orange-500 fill-current" /> Google Reviews</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 text-amber-400 fill-current" />)}
                        </div>
                        <p className="text-xs text-slate-600 italic mb-4 leading-relaxed">"{t.quote}"</p>
                        <div>
                            <p className="font-bold text-slate-900 text-xs">{t.author}</p>
                            <p className="text-[10px] text-slate-400">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-center text-slate-600 mb-12">Find answers to common questions about forming your US company</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                <button
                  className="w-full text-left flex justify-between items-center py-4 focus:outline-none group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="pb-4 text-sm text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 mb-12">Have questions? We're here to help you get started. Reach out through any of these channels.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a href="mailto:hov@troyaccounting.com" className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                          <Mail className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">Email Us</h3>
                      <p className="text-xs text-slate-500 mb-2">Send us an email anytime</p>
                      <span className="text-blue-600 text-xs font-medium">hov@troyaccounting.com</span>
                  </a>

                  <a href="https://api.whatsapp.com/send/?phone=12488727754&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                          <MessageSquare className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">WhatsApp Chat</h3>
                      <p className="text-xs text-slate-500 mb-2">Get instant support via WhatsApp</p>
                      <span className="text-blue-600 text-xs font-medium">Start Chat</span>
                  </a>

                  <Link to="/contact" className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                          <Calendar className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">Book a Consultation</h3>
                      <p className="text-xs text-slate-500 mb-2">Schedule a free 15-minute call</p>
                      <span className="text-blue-600 text-xs font-medium">View Calendar</span>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default CompanyFormationPage;
