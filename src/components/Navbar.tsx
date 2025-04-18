
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Menu, 
  X, 
  Globe, 
  User, 
  Heart 
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              OLiver<span className="text-accent">Travels</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#destinations" className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-accent transition-colors`}>
            Destinations
          </a>
          <a href="#packages" className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-accent transition-colors`}>
            Packages
          </a>
          <a href="#experiences" className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-accent transition-colors`}>
            Experiences
          </a>
          <a href="#about" className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-accent transition-colors`}>
            About
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className={isScrolled ? 'text-dark' : 'text-white'}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className={isScrolled ? 'text-dark' : 'text-white'}>
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className={isScrolled ? 'text-dark' : 'text-white'}>
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className={isScrolled ? 'text-dark' : 'text-white'}>
            <User className="h-5 w-5" />
          </Button>
          <Button className="bg-secondary hover:bg-secondary-600">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className={`h-6 w-6 ${isScrolled ? 'text-dark' : 'text-white'}`} />
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-dark bg-opacity-90 z-50 flex flex-col animate-fade-in">
            <div className="flex justify-between items-center p-4">
              <span className="text-2xl font-bold text-white">
                OLiver<span className="text-accent">Travels</span>
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-grow space-y-8 p-4">
              <a href="#destinations" className="text-white text-xl hover:text-accent transition-colors">
                Destinations
              </a>
              <a href="#packages" className="text-white text-xl hover:text-accent transition-colors">
                Packages
              </a>
              <a href="#experiences" className="text-white text-xl hover:text-accent transition-colors">
                Experiences
              </a>
              <a href="#about" className="text-white text-xl hover:text-accent transition-colors">
                About
              </a>
              <Button className="bg-secondary hover:bg-secondary-600 mt-4 w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
