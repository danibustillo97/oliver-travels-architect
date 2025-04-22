
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/integrations/supabase/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';
import { Check, X, Loader2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const AuthForm = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });
  
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    number: false,
    uppercase: false,
    lowercase: false
  });
  
  useEffect(() => {
    // If user is already logged in, redirect to home page
    if (user) {
      router.push('/');
    }
    
    // Check password requirements
    if (formData.password) {
      setPasswordRequirements({
        length: formData.password.length >= 8,
        number: /\d/.test(formData.password),
        uppercase: /[A-Z]/.test(formData.password),
        lowercase: /[a-z]/.test(formData.password)
      });
    }
  }, [user, router, formData.password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login flow
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        toast.success('¡Bienvenido de nuevo!');
        
        // Check user role to redirect appropriately
        const { data } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', (await supabase.auth.getUser()).data.user?.id)
          .single();
          
        if (data?.role === 'admin' || data?.role === 'manager') {
          router.push('/admin');
        } else {
          router.push('/');
        }
      } else {
        // Validate password requirements
        const isPasswordValid = Object.values(passwordRequirements).every(Boolean);
        if (!isPasswordValid) {
          toast.error('La contraseña no cumple con los requisitos mínimos');
          setLoading(false);
          return;
        }
        
        // Register flow
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        });
        if (error) throw error;
        toast.success('¡Cuenta creada exitosamente!');
        router.push('/');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const RequirementCheck = ({ met, label }: { met: boolean, label: string }) => (
    <div className="flex items-center space-x-2">
      {met ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <X className="h-4 w-4 text-red-500" />
      )}
      <span className={`text-sm ${met ? 'text-green-500' : 'text-red-500'}`}>{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-marine/5 to-accent/10">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-marine">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
            {' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-marine hover:text-marine-600 transition-colors"
            >
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </button>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {!isLogin && (
            <div>
              <Label htmlFor="fullName" className="text-gray-700">Nombre Completo</Label>
              <Input
                id="fullName"
                type="text"
                required
                className="mt-1 border-gray-300 focus:ring-marine focus:border-marine"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email" className="text-gray-700">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              required
              className="mt-1 border-gray-300 focus:ring-marine focus:border-marine"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-gray-700">Contraseña</Label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1 border-gray-300 focus:ring-marine focus:border-marine"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            
            {!isLogin && formData.password && (
              <div className="mt-2 space-y-1">
                <RequirementCheck met={passwordRequirements.length} label="Al menos 8 caracteres" />
                <RequirementCheck met={passwordRequirements.uppercase} label="Una letra mayúscula" />
                <RequirementCheck met={passwordRequirements.lowercase} label="Una letra minúscula" />
                <RequirementCheck met={passwordRequirements.number} label="Un número" />
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-marine hover:bg-marine-600 text-white py-6" 
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                {isLogin ? 'Iniciando Sesión...' : 'Creando Cuenta...'}
              </>
            ) : (
              isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'
            )}
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-marine hover:text-marine-600 transition-colors">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
