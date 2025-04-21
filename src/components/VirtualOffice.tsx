
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  Environment, 
  OrbitControls,
  Html,
  Stars
} from '@react-three/drei';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircleQuestion } from 'lucide-react';

// Define TypeScript interfaces for clarity
interface AssistantProps {
  position: [number, number, number];
  name: string;
  role: string;
  onClick: () => void;
}

interface AssistantInfo {
  name: string;
  role: string;
  description: string;
}

// Simple component for creating a box
const SimpleBox = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Simple component for creating a sphere
const SimpleSphere = ({ position, radius, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Simple component for creating a torus
const SimpleTorus = ({ position, args, color, rotation }) => {
  return (
    <mesh position={position} rotation={rotation || [0, 0, 0]}>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const VirtualAssistant = ({ position, name, role, onClick }: AssistantProps) => {
  const group = useRef(null);
  
  return (
    <group ref={group} position={position} scale={0.7} onClick={onClick}>
      {/* Simple robot-like shape */}
      <group>
        {/* Body */}
        <SimpleBox position={[0, 0, 0]} size={[0.5, 0.8, 0.4]} color="#3498db" />
        {/* Head */}
        <SimpleSphere position={[0, 0.6, 0]} radius={0.3} color="#2980b9" />
        {/* Eyes */}
        <SimpleBox position={[-0.1, 0.65, 0.25]} size={[0.05, 0.05, 0.05]} color="#ecf0f1" />
        <SimpleBox position={[0.1, 0.65, 0.25]} size={[0.05, 0.05, 0.05]} color="#ecf0f1" />
      </group>
      
      <Html position={[0, 1.2, 0]} center>
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-center pointer-events-none transform -translate-y-1/2">
          <p className="text-primary font-bold whitespace-nowrap">{name}</p>
          <p className="text-sm text-gray-600 whitespace-nowrap">{role}</p>
        </div>
      </Html>
    </group>
  );
};

const Office = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Floor */}
      <SimpleBox position={[0, -0.1, 0]} size={[10, 0.2, 10]} color="#e0e0e0" />
      
      {/* Desk */}
      <SimpleBox position={[0, 0.7, 0]} size={[3, 0.1, 1.5]} color="#8B4513" />
      
      {/* Chair base */}
      <SimpleBox position={[0, 0.3, 1.5]} size={[0.8, 0.1, 0.8]} color="#2c3e50" />
      
      {/* Chair back */}
      <SimpleBox position={[0, 1, 1.8]} size={[0.7, 1, 0.1]} color="#2c3e50" />
      
      {/* Decorative elements */}
      <SimpleTorus 
        position={[-1, 0.8, 0]} 
        args={[0.3, 0.1, 16, 32]} 
        color="#e74c3c" 
        rotation={[Math.PI/2, 0, 0]} 
      />
      
      <SimpleBox 
        position={[1, 0.85, 0]} 
        size={[0.3, 0.3, 0.3]} 
        color="#3498db" 
      />
    </group>
  );
};

const VirtualOffice = () => {
  const [activeAssistant, setActiveAssistant] = useState<AssistantInfo | null>(null);
  
  const handleAssistantClick = (assistant: AssistantInfo) => {
    setActiveAssistant(assistant);
  };
  
  return (
    <div className="relative w-full h-full">
      <Canvas>
        <color attach="background" args={['#f0f8ff']} />
        
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Office />
          
          <VirtualAssistant 
            position={[-2, 0, 0]} 
            name="María" 
            role="Especialista en Aventuras" 
            onClick={() => handleAssistantClick({
              name: "María",
              role: "Especialista en Aventuras",
              description: "Experta en destinos de aventura y actividades al aire libre."
            })}
          />
          
          <VirtualAssistant 
            position={[2, 0, 0]} 
            name="Carlos" 
            role="Asesor de Lujo" 
            onClick={() => handleAssistantClick({
              name: "Carlos",
              role: "Asesor de Lujo",
              description: "Especialista en experiencias premium y hoteles 5 estrellas."
            })}
          />
          
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Suspense>
      </Canvas>
      
      {activeAssistant && (
        <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg p-4 max-w-xs">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-primary">{activeAssistant.name}</h3>
              <p className="text-sm text-gray-600">{activeAssistant.role}</p>
            </div>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setActiveAssistant(null)}
            >
              ✕
            </button>
          </div>
          <p className="mt-2 text-sm">{activeAssistant.description}</p>
          <Button size="sm" className="mt-3 w-full bg-primary hover:bg-primary-600">
            <MessageCircleQuestion className="mr-2 h-4 w-4" />
            Hablar con {activeAssistant.name}
          </Button>
        </div>
      )}
    </div>
  );
};

export default VirtualOffice;
