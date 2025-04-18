
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Heart, 
  Sunrise, 
  Utensils, 
  Plane,
  ArrowRight
} from 'lucide-react';
import Bot from '@/components/icons/Bot';

const TravelArchitect = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Your AI Travel Architect
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our advanced AI-powered travel planner understands your preferences, 
              budget, and travel style to create the perfect itinerary tailored just for you.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                { icon: <Calendar className="text-primary h-5 w-5" />, text: "Smart itinerary planning that optimizes your time" },
                { icon: <MapPin className="text-primary h-5 w-5" />, text: "Local insights and hidden gems recommendations" },
                { icon: <Heart className="text-primary h-5 w-5" />, text: "Personalized to match your emotional state" },
                { icon: <Sunrise className="text-primary h-5 w-5" />, text: "Weather-smart scheduling of activities" },
                { icon: <Utensils className="text-primary h-5 w-5" />, text: "Dining suggestions based on your taste preferences" },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-600">
                Plan My Trip
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-float">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Travel Architect</h3>
                    <p className="text-xs text-gray-500">Your personal AI assistant</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">
                      I've analyzed your preferences and created a personalized 5-day itinerary for your trip to Barcelona.
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Day 1: Arrival & City Introduction</span>
                      <span className="text-xs text-gray-500">June 15</span>
                    </div>
                    <ul className="text-xs space-y-1">
                      <li className="flex items-center">
                        <Plane className="h-3 w-3 mr-1" />
                        <span>Arrival at Barcelona El Prat Airport</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Check-in at Boutique Hotel Gothic Quarter</span>
                      </li>
                      <li className="flex items-center">
                        <Utensils className="h-3 w-3 mr-1" />
                        <span>Dinner at local tapas restaurant</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-primary text-sm">
                      View full itinerary
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 bg-accent/20 h-24 w-24 rounded-full blur-xl z-0"></div>
            <div className="absolute -bottom-6 -left-6 bg-secondary/20 h-32 w-32 rounded-full blur-xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelArchitect;
