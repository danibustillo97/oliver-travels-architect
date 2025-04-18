
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, DollarSign } from 'lucide-react';

const PackageBuilder = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-neutral-800 mb-8">Constructor de Paquetes</h1>
      
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Nuevo Paquete Turístico</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre del Paquete</Label>
            <Input id="name" placeholder="Aventura en los Andes..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea 
              id="description" 
              placeholder="Describe el paquete turístico..."
              className="min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="destination">Destino</Label>
              <div className="relative">
                <MapPin className="absolute left-2 top-3 h-4 w-4 text-neutral-500" />
                <Input id="destination" className="pl-8" placeholder="Ciudad, País..." />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duración</Label>
              <div className="relative">
                <Calendar className="absolute left-2 top-3 h-4 w-4 text-neutral-500" />
                <Select>
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
                <Input id="price" type="number" className="pl-8" placeholder="0.00" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Paquete</Label>
              <Select>
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
            <Button className="w-full md:w-auto">
              Crear Paquete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackageBuilder;
