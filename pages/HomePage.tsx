import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Security from '../components/Security';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Security />
      <CTASection />
    </>
  );
};

export default HomePage;