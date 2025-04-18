
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Users, 
  Package, 
  TrendingUp,
  Calendar,
  DollarSign,
  Plus
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-neutral-800">Panel de Control</h1>
        <Link to="/admin/package-builder">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Paquete
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">
              Ventas Totales
            </CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-800">$45,231.89</div>
            <p className="text-xs text-neutral-500">+20.1% vs mes anterior</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">
              Usuarios Activos
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-800">2,845</div>
            <p className="text-xs text-neutral-500">+18.2% vs mes anterior</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-500">
              Paquetes Vendidos
            </CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-800">845</div>
            <p className="text-xs text-neutral-500">+12.5% vs mes anterior</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
