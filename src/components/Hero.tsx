
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-6 text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Your Perfect Travel Experience
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              Personalized travel packages powered by AI to match your preferences, mood and travel style
            </p>
          </div>
          
          <div className="mt-8 animate-fade-in-slow">
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-dark font-medium text-sm">Destination</label>
                    <div className="flex items-center border rounded-md border-gray-300 px-3 py-2 focus-within:border-primary transition-colors">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <input 
                        type="text" 
                        placeholder="Where are you going?" 
                        className="bg-transparent flex-1 outline-none text-dark"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-dark font-medium text-sm">Dates</label>
                    <div className="flex items-center border rounded-md border-gray-300 px-3 py-2 focus-within:border-primary transition-colors">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <input 
                        type="text" 
                        placeholder="Add dates" 
                        className="bg-transparent flex-1 outline-none text-dark"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-dark font-medium text-sm">Travelers</label>
                    <div className="flex items-center border rounded-md border-gray-300 px-3 py-2 focus-within:border-primary transition-colors">
                      <Users className="h-5 w-5 text-gray-400 mr-2" />
                      <input 
                        type="text" 
                        placeholder="Add guests" 
                        className="bg-transparent flex-1 outline-none text-dark"
                      />
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-600 text-lg py-6">
                  <Search className="h-5 w-5 mr-2" />
                  Find Your Perfect Trip
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm md:text-base animate-fade-in-slow pt-4">
            <span>Popular:</span>
            <Button variant="link" className="text-white p-0 underline">Beach</Button>
            <span>•</span>
            <Button variant="link" className="text-white p-0 underline">Mountain</Button>
            <span>•</span>
            <Button variant="link" className="text-white p-0 underline">City Break</Button>
            <span>•</span>
            <Button variant="link" className="text-white p-0 underline">Adventure</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
