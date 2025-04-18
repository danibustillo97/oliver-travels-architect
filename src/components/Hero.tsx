
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-r from-marine/80 to-accent/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Viajes Personalizados para Experiencias Únicas
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-90">
                Paquetes de viaje diseñados con IA para adaptarse a tus preferencias, estado de ánimo y estilo de viaje
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg py-6 px-8">
                Ver Destinos
              </Button>
              <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg py-6 px-8">
                Consultar Precios
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 text-sm md:text-base animate-fade-in-slow pt-4 flex-wrap gap-y-2">
              <span>Popular:</span>
              <Button variant="link" className="text-white p-0 underline">Playa</Button>
              <span>•</span>
              <Button variant="link" className="text-white p-0 underline">Montaña</Button>
              <span>•</span>
              <Button variant="link" className="text-white p-0 underline">Escapada Urbana</Button>
              <span>•</span>
              <Button variant="link" className="text-white p-0 underline">Aventura</Button>
            </div>
          </div>
          
          <div className="mt-8 animate-fade-in-slow lg:mt-0">
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 backdrop-blur-sm bg-white/95">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Planifica tu próxima aventura</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="text-dark font-medium text-sm">Destino</label>
                  <div className="flex items-center border rounded-md border-gray-300 px-3 py-3 focus-within:border-primary transition-colors hover:border-primary">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <input 
                      type="text" 
                      placeholder="¿A dónde quieres ir?" 
                      className="bg-transparent flex-1 outline-none text-dark"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-dark font-medium text-sm">Fechas</label>
                    <div className="flex items-center border rounded-md border-gray-300 px-3 py-3 focus-within:border-primary transition-colors hover:border-primary">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <input 
                        type="text" 
                        placeholder="Selecciona fechas" 
                        className="bg-transparent flex-1 outline-none text-dark"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-dark font-medium text-sm">Viajeros</label>
                    <div className="flex items-center border rounded-md border-gray-300 px-3 py-3 focus-within:border-primary transition-colors hover:border-primary">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <input 
                        type="text" 
                        placeholder="Añadir viajeros" 
                        className="bg-transparent flex-1 outline-none text-dark"
                      />
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-marine hover:bg-marine-600 text-white text-lg py-6">
                  <Search className="h-5 w-5 mr-2" />
                  Encontrar mi Viaje Perfecto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-white bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
