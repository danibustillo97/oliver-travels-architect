
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

// Define the type for package types based on the Supabase schema
type PackageType = Database['public']['Enums']['package_type'];

const PackageBuilder = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    destination: '',
    duration: '',
    price: '',
    type: '' as PackageType | ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Ensure type is a valid PackageType before inserting
      if (!formData.type) {
        throw new Error('Debe seleccionar un tipo de paquete');
      }

      const { error } = await supabase
        .from('packages')
        .insert({
          name: formData.name,
          description: formData.description,
          destination: formData.destination,
          duration: parseInt(formData.duration),
          price: parseFloat(formData.price),
          type: formData.type as PackageType
        });

      if (error) throw error;

      toast.success('Paquete creado exitosamente');
      navigate('/admin');
    } catch (error: any) {
      toast.error('Error al crear el paquete: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-neutral-800 mb-8">Constructor de Paquetes</h1>
      
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Nuevo Paquete Turístico</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Paquete</Label>
              <Input
                id="name"
                placeholder="Aventura en los Andes..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea 
                id="description" 
                placeholder="Describe el paquete turístico..."
                className="min-h-[100px]"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="destination">Destino</Label>
                <div className="relative">
                  <MapPin className="absolute left-2 top-3 h-4 w-4 text-neutral-500" />
                  <Input
                    id="destination"
                    className="pl-8"
                    placeholder="Ciudad, País..."
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duración</Label>
                <div className="relative">
                  <Calendar className="absolute left-2 top-3 h-4 w-4 text-neutral-500" />
                  <Select 
                    value={formData.duration} 
                    onValueChange={(value) => setFormData({ ...formData, duration: value })}
                  >
                    <SelectTrigger id="duration" className="pl-8">
                      <SelectValue placeholder="Selecciona la duración" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 días</SelectItem>
                      <SelectItem value="5">5 días</SelectItem>
                      <SelectItem value="7">7 días</SelectItem>
                      <SelectItem value="10">10 días</SelectItem>
                      <SelectItem value="14">14 días</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Precio por persona</Label>
                <div className="relative">
                  <DollarSign className="absolute left-2 top-3 h-4 w-4 text-neutral-500" />
                  <Input
                    id="price"
                    type="number"
                    className="pl-8"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Paquete</Label>
                <Select 
                  value={formData.type} 
                  onValueChange={(value) => setFormData({ ...formData, type: value as PackageType })}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Aventura</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="relax">Relax</SelectItem>
                    <SelectItem value="family">Familiar</SelectItem>
                    <SelectItem value="luxury">Lujo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full md:w-auto" disabled={loading}>
                {loading ? 'Creando...' : 'Crear Paquete'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackageBuilder;
