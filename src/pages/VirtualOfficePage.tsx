
import React from 'react';
import { Suspense } from 'react';
import { lazy } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Loader } from 'lucide-react';

const VirtualOffice = lazy(() => import('@/components/VirtualOffice'));

const VirtualOfficePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Oficina Virtual OLiver Travels
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explora nuestra oficina virtual en 3D y conversa con nuestros asistentes virtuales inteligentes 
                para planificar tu próximo viaje de manera interactiva.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-[70vh] mb-8">
              <Suspense fallback={
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <Loader className="h-12 w-12 animate-spin text-primary mb-4" />
                  <p className="text-xl font-medium">Cargando oficina virtual...</p>
                </div>
              }>
                <VirtualOffice />
              </Suspense>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-primary mb-3">Cómo usar la oficina virtual</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                    <span>Usa el ratón para navegar por la oficina virtual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                    <span>Haz clic en los asistentes virtuales para interactuar con ellos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                    <span>Pregunta sobre destinos, paquetes y recibe recomendaciones personalizadas</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-primary mb-3">Nuestros asistentes virtuales</h2>
                <p className="text-gray-700 mb-4">
                  Cada asistente está especializado en diferentes tipos de viajes y destinos. 
                  Ellos pueden ayudarte a encontrar el viaje perfecto según tus preferencias.
                </p>
                <p className="text-gray-700">
                  Los asistentes utilizan inteligencia artificial para proporcionar recomendaciones 
                  personalizadas basadas en tus intereses y requisitos de viaje.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VirtualOfficePage;
