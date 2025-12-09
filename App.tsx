
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import WhoWeHelpPage from './pages/WhoWeHelpPage';
import GuidesPage from './pages/GuidesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UnitedKingdomGuide from './pages/guides/UnitedKingdomGuide';
import CanadaGuide from './pages/guides/CanadaGuide';
import AustraliaGuide from './pages/guides/AustraliaGuide';
import FranceGuide from './pages/guides/FranceGuide';
import GermanyGuide from './pages/guides/GermanyGuide';
import UnitedArabEmiratesGuide from './pages/guides/UnitedArabEmiratesGuide';
import MexicoGuide from './pages/guides/MexicoGuide';
import SingaporeGuide from './pages/guides/SingaporeGuide';
import SpainGuide from './pages/guides/SpainGuide';
import PortugalGuide from './pages/guides/PortugalGuide';
import SouthAfricaGuide from './pages/guides/SouthAfricaGuide';
import JapanGuide from './pages/guides/JapanGuide';
import CompanyFormationPage from './pages/CompanyFormationPage';
import USExpatFilingPage from './pages/USExpatFilingPage';


// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/company-formation" element={<CompanyFormationPage />} />
            <Route path="/services/us-expat-filing" element={<USExpatFilingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/who-we-help" element={<WhoWeHelpPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/guides/united-kingdom" element={<UnitedKingdomGuide />} />
             <Route path="/guides/Canada" element={<CanadaGuide />} />
             <Route path="/guides/united-arab-emirates" element={<UnitedArabEmiratesGuide />} />
             <Route path="/guides/Australia" element={<AustraliaGuide />} />
             <Route path="/guides/France" element={<FranceGuide />} />
             <Route path="/guides/Germany" element={<GermanyGuide />} />
             <Route path="/guides/Mexico" element={<MexicoGuide />} />
            <Route path="/guides/Singapore" element={<SingaporeGuide />} />
            <Route path="/guides/Spain" element={<SpainGuide />} />
            <Route path="/guides/Portugal" element={<PortugalGuide />} />
            <Route path="/guides/South-Africa" element={<SouthAfricaGuide />} />
            <Route path="/guides/Japan" element={<JapanGuide />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyBar />
      </div>
    </HashRouter>
  );
}

export default App;
