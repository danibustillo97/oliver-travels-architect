
import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TravelTypes from '@/components/TravelTypes';
import TravelArchitect from '@/components/TravelArchitect';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

// Lazy load the 3D office component to improve initial page load
const VirtualOffice = lazy(() => import('@/components/VirtualOffice'));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <TravelTypes />
      <TravelArchitect />
      
      {/* Virtual Office Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestra Oficina Virtual
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Visita nuestra oficina virtual en 3D y conoce a nuestros asistentes virtuales inteligentes
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden h-[500px] mb-8">
            <Suspense fallback={
              <div className="h-full w-full flex items-center justify-center">
                <Loader className="h-10 w-10 animate-spin text-primary" />
                <p className="ml-2 text-xl font-medium">Cargando oficina virtual...</p>
              </div>
            }>
              <VirtualOffice />
            </Suspense>
          </div>
          
          <div className="text-center">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary-600 text-white py-6 px-8 text-lg"
              onClick={() => window.location.href = '/virtual-office'}
            >
              Explora la oficina completa
            </Button>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
