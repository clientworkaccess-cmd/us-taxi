import React from 'react';
import { Shield, Lock, FileCheck, Clock } from 'lucide-react';

const Security = () => {
  const features = [
    {
      title: "Bank-Level Encryption",
      description: "All data transmitted and stored using 256-bit SSL encryption.",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Secure Portal",
      description: "Two-factor authentication and encrypted document storage.",
      icon: <Lock className="w-6 h-6 text-purple-600" />
    },
    {
      title: "IRS Authorized",
      description: "Licensed CPAs and Enrolled Agents with PTIN and EFIN.",
      icon: <FileCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Fast Turnaround",
      description: "Most returns completed within 5-7 business days.",
      icon: <Clock className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security & Trust</h2>
          <p className="text-gray-600 text-lg">Your sensitive tax information deserves the highest level of protection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 mb-6">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;