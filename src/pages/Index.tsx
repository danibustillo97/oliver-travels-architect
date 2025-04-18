
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TravelTypes from '@/components/TravelTypes';
import TravelArchitect from '@/components/TravelArchitect';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <TravelTypes />
      <TravelArchitect />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
