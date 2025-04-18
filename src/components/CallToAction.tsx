
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Future of Travel?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of happy travelers who have discovered their perfect trips with OLiver Travels. 
              Our AI-powered platform is waiting to create your dream vacation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100">
                Start Planning Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="opacity-90 mb-6">
              Subscribe to our newsletter for travel inspiration, AI features updates, and exclusive deals.
            </p>
            
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent text-white"
                />
              </div>
              <Button className="bg-accent hover:bg-accent-600 text-dark">
                <Send className="h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-sm opacity-70 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
