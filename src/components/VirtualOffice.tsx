
import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  Environment, 
  OrbitControls,
  useGLTF,
  useAnimations,
  Html,
  Stars
} from '@react-three/drei';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircleQuestion } from 'lucide-react';

const VirtualAssistant = ({ position = [0, 0, 0], name, role, onClick }) => {
  const group = useRef();
  // Placeholder model - in a real implementation, you'd use actual avatar models
  const { scene, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot/model.gltf');
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    // Play idle animation if available
    const idle = actions["Idle"] || actions["idle"] || Object.values(actions)[0];
    if (idle) {
      idle.reset().fadeIn(0.5).play();
    }
    
    return () => {
      if (idle) idle.fadeOut(0.5);
    };
  }, [actions]);
  
  return (
    <group ref={group} position={position} scale={0.7} onClick={onClick}>
      <primitive object={scene.clone()} />
      <Html position={[0, 2.2, 0]} center>
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg text-center pointer-events-none transform -translate-y-1/2">
          <p className="text-primary font-bold whitespace-nowrap">{name}</p>
          <p className="text-sm text-gray-600 whitespace-nowrap">{role}</p>
        </div>
      </Html>
    </group>
  );
};

const Office = () => {
  // Placeholder for an office model
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/office-chair/model.gltf');
  
  return (
    <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
  );
};

const VirtualOffice = () => {
  const [activeAssistant, setActiveAssistant] = useState(null);
  
  const handleAssistantClick = (assistant) => {
    setActiveAssistant(assistant);
  };
  
  return (
    <div className="relative w-full h-full">
      <Canvas shadows>
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
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        
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
