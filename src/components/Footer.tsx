
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              OLiver<span className="text-accent">Travels</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Reinventing travel planning with AI for personalized, seamless experiences that match your unique preferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Travel Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Travel Styles</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Beach Escapes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Mountain Adventures</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Urban Expeditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Cultural Journeys</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Wellness Retreats</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Food & Wine Tours</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span className="text-gray-300">
                  123 Travel Plaza, Suite 500<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span className="text-gray-300">info@olivertravels.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} OLiver Travels. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
