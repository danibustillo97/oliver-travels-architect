
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Menu, 
  X, 
  Globe, 
  User, 
  Heart,
  LogOut
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  
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
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        console.error('Error al cargar perfil de usuario:', error);
        return;
      }
      
      if (data) {
        setUserProfile(data);
      }
    };
    
    fetchUserProfile();
  }, [user]);
  
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Sesión cerrada exitosamente');
      router.push('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  
  const getInitials = (name: string) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

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
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-marine' : 'text-white'}`}>
              OLiver<span className="text-accent">Travels</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#destinations" className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-accent transition-colors`}>
            Destinos
          </a>
          <a href="#packages" className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-accent transition-colors`}>
            Paquetes
          </a>
          <Link href="/virtual-office" className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-accent transition-colors`}>
            Oficina Virtual
          </Link>
          <a href="#about" className={`${isScrolled ? 'text-dark' : 'text-white'} hover:text-accent transition-colors`}>
            Nosotros
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
          
          {user ? (
            <div className="relative flex items-center">
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src={userProfile?.avatar_url || ''} />
                <AvatarFallback className="bg-marine text-white">
                  {getInitials(userProfile?.full_name || user.email || '')}
                </AvatarFallback>
              </Avatar>
              
              <div className="ml-2">
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className={`text-xs ${isScrolled ? 'text-dark' : 'text-white'} hover:bg-red-600 hover:text-white p-1`}
                >
                  <LogOut className="h-4 w-4 mr-1" /> 
                  Salir
                </Button>
              </div>
            </div>
          ) : (
            <Button 
              className="bg-marine hover:bg-marine-600"
              onClick={() => router.push('/auth')}
            >
              <User className="h-4 w-4 mr-2" />
              Ingresar
            </Button>
          )}
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
                Destinos
              </a>
              <a href="#packages" className="text-white text-xl hover:text-accent transition-colors">
                Paquetes
              </a>
              <Link href="/virtual-office" 
                className="text-white text-xl hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Oficina Virtual
              </Link>
              <a href="#about" className="text-white text-xl hover:text-accent transition-colors">
                Nosotros
              </a>
              
              {user ? (
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={userProfile?.avatar_url || ''} />
                    <AvatarFallback className="bg-marine text-white text-lg">
                      {getInitials(userProfile?.full_name || user.email || '')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-white">{userProfile?.full_name || user.email}</span>
                  <Button 
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    <LogOut className="h-4 w-4 mr-2" /> 
                    Cerrar Sesión
                  </Button>
                </div>
              ) : (
                <Button 
                  className="bg-marine hover:bg-marine-600 mt-4 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    router.push('/auth');
                  }}
                >
                  <User className="h-4 w-4 mr-2" />
                  Ingresar
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
