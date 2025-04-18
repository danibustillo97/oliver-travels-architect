
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const travelTypes = [
  {
    title: "Beach Escapes",
    description: "Relax on pristine beaches with crystal-clear waters and golden sand.",
    image: "beach.jpg",
    color: "from-blue-500/70 to-blue-700/70",
  },
  {
    title: "Mountain Adventures",
    description: "Explore majestic peaks and breathtaking mountain landscapes.",
    image: "mountain.jpg",
    color: "from-emerald-500/70 to-emerald-700/70",
  },
  {
    title: "Urban Expeditions",
    description: "Discover the vibrant culture and architecture of world-class cities.",
    image: "city.jpg",
    color: "from-purple-500/70 to-purple-700/70",
  },
  {
    title: "Cultural Journeys",
    description: "Immerse yourself in rich traditions and historical wonders.",
    image: "cultural.jpg",
    color: "from-amber-500/70 to-amber-700/70",
  },
];

const TravelTypes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Travel Styles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover unique experiences tailored to your preferences and travel style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelTypes.map((type, index) => (
            <div 
              key={index} 
              className="relative rounded-lg overflow-hidden h-80 card-hover-effect"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(/images/${type.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${type.color}`} />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-white/90 mb-4">{type.description}</p>
                <Button 
                  variant="outline" 
                  className="bg-white/20 text-white border-white/40 hover:bg-white/30 w-fit"
                >
                  Explore <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTypes;
