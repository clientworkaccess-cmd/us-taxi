import React from 'react';
import { Shield, Heart, Clock, Globe, Users, Award, BadgeCheck, FileCheck } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "50+", label: "Countries" },
    { value: "10+", label: "Years Experience" },
    { value: "5-7", label: "Day Turnaround" },
  ];

  const differentiators = [
    {
      title: "Expertise",
      description: "Licensed CPAs, Enrolled Agents, and JDs with deep international tax knowledge.",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50"
    },
    {
      title: "Transparency",
      description: "Clear pricing, no surprises, and honest communication every step of the way.",
      icon: <Heart className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50"
    },
    {
      title: "Responsiveness",
      description: "Fast turnaround times and email responses within 24 hours.",
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50"
    },
    {
      title: "Global Experience",
      description: "We've served clients in 50+ countries and understand expat challenges.",
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50"
    }
  ];

  const reasons = [
    {
      title: "Specialized in Expat Tax",
      description: "We don't dabble in international tax—it's all we do. We understand FEIE, FTC, treaties, PFICs, 5471s, and every nuance of expat compliance."
    },
    {
      title: "Transparent Pricing",
      description: "You'll know your cost upfront. No hourly billing mysteries or surprise invoices."
    },
    {
      title: "Secure & Convenient",
      description: "Upload documents securely through our encrypted portal. Review and e-sign your return from anywhere in the world."
    },
    {
      title: "Proactive Communication",
      description: "We keep you updated at every step and respond to questions quickly."
    },
    {
      title: "Proven Track Record",
      description: "Hundreds of satisfied expats trust us with their most important financial compliance."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-12 lg:pt-24 lg:pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-500">Online Expat Tax</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            US tax experts dedicated to making expat tax compliance simple, affordable, and stress-free.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-16">
            We believe that Americans living abroad deserve expert tax help without the hassle, confusion, or sticker shock. Our mission is to provide transparent, high-quality US tax services to expats, non-residents, and global entrepreneurs—so you can focus on living your best life abroad.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {differentiators.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${item.bg}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Team Box */}
          <div className="max-w-4xl mx-auto bg-indigo-50/30 rounded-xl p-10 md:p-12 text-center border border-indigo-50 shadow-sm">
             <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
             </div>
             <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Team</h2>
             <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
               Our team includes licensed Certified Public Accountants (CPAs), Enrolled Agents (EAs), and tax attorneys who specialize in international tax law. We stay current on IRS regulations, tax treaties, and expat-specific compliance requirements so you don't have to.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
               <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-sm font-bold text-slate-800 shadow-sm border border-slate-200">
                 <Award className="w-4 h-4 text-slate-500" /> Licensed CPAs
               </span>
               <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-sm font-bold text-slate-800 shadow-sm border border-slate-200">
                 <Shield className="w-4 h-4 text-slate-500" /> Enrolled Agents
               </span>
               <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-sm font-bold text-slate-800 shadow-sm border border-slate-200">
                 <BadgeCheck className="w-4 h-4 text-slate-500" /> IRS Authorized
               </span>
             </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us List */}
       <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us?</h2>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;