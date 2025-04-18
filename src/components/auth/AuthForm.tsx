
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        toast.success('¡Bienvenido de nuevo!');
        navigate('/admin');
      } else {
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
        navigate('/admin');
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
            {' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-primary hover:text-primary/80"
            >
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </button>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {!isLogin && (
            <div>
              <Label htmlFor="fullName">Nombre Completo</Label>
              <Input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Cargando...' : isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
