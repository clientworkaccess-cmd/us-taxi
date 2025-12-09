
import { 
  FileText, 
  Mail, 
  Upload, 
  Clock, 
  CheckCircle, 
  Shield, 
  Globe, 
  BarChart, 
  DollarSign, 
  Users, 
  Building,
  MapPin,
  FileDigit,
  Scale,
  Zap,
  Check,
  Search
} from 'lucide-react';
import React from 'react';

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Tell Us Your Situation",
    description: "Complete our quick online claim form.",
    icon: <FileText className="w-8 h-8 text-white" />,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Get Your Quote",
    description: "We'll provide a fair price upfront.",
    icon: <Mail className="w-8 h-8 text-white" />,
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: 3,
    title: "Upload Documents",
    description: "Securely share your tax files with us.",
    icon: <Upload className="w-8 h-8 text-white" />,
    gradient: "from-purple-500 to-fuchsia-600"
  },
  {
    id: 4,
    title: "We Prepare Your Return",
    description: "We handle all forms and compliance.",
    icon: <Clock className="w-8 h-8 text-white" />,
    gradient: "from-fuchsia-500 to-pink-600"
  },
  {
    id: 5,
    title: "Review & File",
    description: "Submit your return with confidence.",
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    gradient: "from-pink-500 to-rose-500"
  }
];

// Simple list for Home Page
export const SERVICES = [
  {
    title: "US Expat Tax Filing",
    description: "Complete 1040 preparation with FEIE, FTC, and all required international forms.",
    icon: <FileText className="w-8 h-8 text-white" />,
    gradient: "from-indigo-500 to-blue-600",
    link: "/services/us-expat-filing"
  },
  {
    title: "Streamlined Procedures",
    description: "Catch up on unfiled returns through IRS amnesty programs with minimal penalties.",
    icon: <Shield className="w-8 h-8 text-white" />,
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    title: "Non-Resident Filing (1040NR)",
    description: "Specialized filing for non-residents with US income sources.",
    icon: <Globe className="w-8 h-8 text-white" />,
    gradient: "from-fuchsia-500 to-purple-600"
  },
  {
    title: "FBAR & FATCA (Form 8938)",
    description: "Foreign account reporting compliance to avoid steep penalties.",
    icon: <BarChart className="w-8 h-8 text-white" />,
    gradient: "from-indigo-400 to-blue-500"
  },
  {
    title: "Tax Planning Consultation",
    description: "Strategic advice on FEIE vs FTC, residency, treaties, and optimization.",
    icon: <DollarSign className="w-8 h-8 text-white" />,
    gradient: "from-sky-400 to-blue-500"
  },
  {
    title: "Business & Investment Forms",
    description: "Form 5471, 5472, 8621 (PFIC), 3520/3520-A for foreign entities.",
    icon: <Users className="w-8 h-8 text-white" />,
    gradient: "from-purple-400 to-pink-500"
  },
  {
    title: "US Company Formation",
    description: "Professional LLC and Corporation setup for non-US residents with full compliance support.",
    icon: <Building className="w-8 h-8 text-white" />,
    gradient: "from-purple-500 to-pink-500",
    link: "/services/company-formation"
  }
];

// Detailed list for Services Page
export const DETAILED_SERVICES = [
  {
    title: "US Expat Tax Filing",
    description: "Complete 1040 preparation for Americans living abroad, including FEIE (Form 2555), Foreign Tax Credit (Form 1116), and state returns.",
    icon: <FileText />,
    gradient: "from-[#6366f1] to-[#8b5cf6]", // Indigo to Purple
    features: ["Form 1040", "Form 2555 (FEIE)", "Form 1116 (FTC)", "State returns", "FBAR included"],
    tag: "Popular",
    link: "/services/us-expat-filing"
  },
  {
    title: "Streamlined Procedures",
    description: "Catch up on unfiled returns through IRS amnesty programs. For taxpayers with 1-6 years of unfiled returns who qualify for penalty relief.",
    icon: <Shield />,
    gradient: "from-[#3b82f6] to-[#60a5fa]", // Blue
    features: ["3-6 years of returns", "FBAR & FATCA", "Certification letter", "Penalty mitigation", "Risk assessment"]
  },
  {
    title: "Non-Resident Filing (1040NR)",
    description: "Specialized filing for non-resident aliens with US income sources, including proper treaty applications and withholding.",
    icon: <Globe />,
    gradient: "from-[#d946ef] to-[#a855f7]", // Fuchsia to Purple
    features: ["Form 1040NR", "Treaty benefits", "FDAP income", "ECI reporting", "State filing"]
  },
  {
    title: "FBAR & FATCA",
    description: "Foreign Bank Account Report (FBAR) and Form 8938 filing to report foreign financial accounts and avoid penalties up to $10,000.",
    icon: <BarChart />,
    gradient: "from-[#4f46e5] to-[#6366f1]", // Indigo
    features: ["FBAR (FinCEN 114)", "Form 8938", "Threshold analysis", "Multiple accounts", "Penalty avoidance"]
  },
  {
    title: "Tax Planning Consultation",
    description: "Strategic planning for FEIE vs FTC optimization, residency issues, treaty analysis, and multi-year tax strategy.",
    icon: <DollarSign />,
    gradient: "from-[#3b82f6] to-[#2563eb]", // Blue
    features: ["FEIE vs FTC analysis", "Residency planning", "Treaty optimization", "RSU/stock options", "Written memo"],
    tag: "Recommended"
  },
  {
    title: "Business & Investment Forms",
    description: "Complex international forms for foreign corporations, partnerships, trusts, and investments including 5471, 5472, 8621, 3520.",
    icon: <Users />,
    gradient: "from-[#e879f9] to-[#d946ef]", // Pink
    features: ["Form 5471", "Form 5472", "Form 8621 (PFIC)", "Form 3520/3520-A", "Schedule C"]
  },
  {
    title: "IRS Letters & Representation",
    description: "Respond to IRS notices, CP2000, audits, and other correspondence. We'll represent you and handle all communications.",
    icon: <Scale />,
    gradient: "from-[#ec4899] to-[#db2777]", // Pink/Rose
    features: ["Notice review", "Response drafting", "IRS communication", "Audit representation", "Penalty abatement"]
  },
  {
    title: "Amended Returns",
    description: "Correct errors on previously filed returns, claim missed deductions or credits, or update your filing status.",
    icon: <FileDigit />,
    gradient: "from-[#0ea5e9] to-[#0284c7]", // Sky/Blue
    features: ["Form 1040-X", "Error correction", "Refund recovery", "Missed deductions", "Status updates"]
  },
  {
    title: "Expatriation Services",
    description: "Guidance for US citizens renouncing citizenship, including exit tax calculations, dual-status returns, and Form 8854.",
    icon: <Users />,
    gradient: "from-[#6366f1] to-[#818cf8]", // Indigo
    features: ["Exit tax calculation", "Form 8854", "Dual-status return", "Net worth analysis", "Compliance review"]
  },
  {
    title: "US Company Formation",
    description: "Professional company formation services for non-US residents. LLC and Corporation setup, EIN registration, bank account guidance, and ongoing compliance.",
    icon: <Building />,
    gradient: "from-[#8b5cf6] to-[#7c3aed]", // Purple
    features: ["LLC or C-Corp formation", "EIN (Tax ID) application", "Registered agent service", "US business address", "Bank account guidance"],
    link: "/services/company-formation"
  },
  {
    title: "Form 5472 with Pro Forma 1120",
    description: "Required annual filing for foreign-owned US disregarded entities. Form 5472 reports transactions between the entity and foreign owners.",
    icon: <FileText />,
    gradient: "from-[#06b6d4] to-[#0891b2]", // Cyan
    features: ["Form 5472 preparation", "Pro Forma 1120 filing", "Foreign owner reporting", "Related party transactions", "Compliance assurance"]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Expert Guidance",
    description: "Certified tax professionals specialized in expat tax law",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50"
  },
  {
    title: "Fast Processing",
    description: "Most returns completed within 5-7 business days",
    icon: <Clock className="w-8 h-8 text-purple-600" />,
    bg: "bg-purple-50"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees, know exactly what you'll pay upfront",
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50"
  },
  {
    title: "Personalized Service",
    description: "Dedicated tax professional for your unique situation",
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    bg: "bg-indigo-50"
  },
  {
    title: "Accuracy Guaranteed",
    description: "We stand behind our work with audit support",
    icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
    bg: "bg-indigo-50"
  },
  {
    title: "Global Experience",
    description: "Serving expats in 50+ countries worldwide",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50"
  }
];

export const TESTIMONIALS_TEXT = [
  {
    name: "Sarah M.",
    location: "London, UK",
    quote: "After years of dreading tax season, Online Expat Tax made everything simple. They handled my FEIE, FBAR, and even caught errors from my previous preparer. Worth every penny.",
    rating: 5
  },
  {
    name: "David K.",
    location: "Dubai, UAE",
    quote: "I own a business in Dubai and needed help with Form 5471 and PFIC reporting. The team was incredibly knowledgeable and responsive. Highly recommend for complex situations.",
    rating: 5
  },
  {
    name: "Maria R.",
    location: "Barcelona, Spain",
    quote: "The streamlined procedure service was a lifesaver. I was 3 years behind on my returns and terrified of penalties. They walked me through everything and made it stress-free.",
    rating: 5
  },
  {
    name: "James T.",
    location: "Singapore",
    quote: "Transparent pricing was exactly what I needed. No surprises, clear communication, and my return was filed perfectly. I've already referred two colleagues.",
    rating: 5
  },
  {
    name: "Robert L.",
    location: "Berlin, Germany",
    quote: "The peace of mind I get from knowing my taxes are done correctly is priceless. Excellent service and very user-friendly portal.",
    rating: 5
  },
  {
    name: "Jessica W.",
    location: "Sydney, Australia",
    quote: "Fast, efficient, and professional. They explained the treaty benefits clearly which saved me a significant amount of money.",
    rating: 5
  }
];
