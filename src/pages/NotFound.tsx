
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.error(
      "Error 404: El usuario intentó acceder a una ruta que no existe"
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">¡Ups! Página no encontrada</p>
        <button 
          onClick={() => router.push('/')} 
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default NotFound;
