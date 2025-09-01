import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Sphere, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Rotating Dodecahedron
function RotatingDodecahedron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[1]} />
      <meshStandardMaterial 
        color="hsl(var(--primary))" 
        transparent 
        opacity={0.8}
        emissive="hsl(var(--primary))"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Wireframe Sphere
function WireframeSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshBasicMaterial 
        color="hsl(var(--accent))" 
        wireframe 
        transparent 
        opacity={0.6}
      />
    </mesh>
  );
}

// Floating Holographic Tech Model
function HolographicTechModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main body */}
      <Box args={[1.5, 0.8, 0.3]} position={[0, 0, 0]}>
        <MeshDistortMaterial 
          color="hsl(var(--brand))" 
          transparent 
          opacity={0.7}
          distort={0.1}
          speed={2}
        />
      </Box>
      
      {/* Screen */}
      <Box args={[1.2, 0.6, 0.02]} position={[0, 0, 0.16]}>
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#003333"
          emissiveIntensity={0.5}
        />
      </Box>
      
      {/* Floating elements */}
      <Sphere args={[0.1]} position={[-0.8, 0.5, 0.5]}>
        <meshStandardMaterial 
          color="hsl(var(--primary))" 
          emissive="hsl(var(--primary))"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      <Sphere args={[0.08]} position={[0.8, -0.4, 0.6]}>
        <meshStandardMaterial 
          color="hsl(var(--accent))" 
          emissive="hsl(var(--accent))"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  );
}

// Holographic Text
function HolographicText() {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (textRef.current) {
      textRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Text3D
      ref={textRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.5}
      height={0.1}
      position={[0, 2.5, 0]}
      curveSegments={12}
    >
      REVUZIA 3D
      <meshStandardMaterial 
        color="#00ffaa" 
        emissive="#002211"
        emissiveIntensity={0.4}
        transparent
        opacity={0.9}
      />
    </Text3D>
  );
}

// Ambient particles
function FloatingParticles() {
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01;
        particle.rotation.x += delta * 0.1;
        particle.rotation.y += delta * 0.15;
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 20 }, (_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 10
          ]}
        >
          <octahedronGeometry args={[0.05]} />
          <meshStandardMaterial 
            color={`hsl(${180 + Math.random() * 60}, 70%, 60%)`}
            emissive={`hsl(${180 + Math.random() * 60}, 70%, 30%)`}
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HolographicDisplay() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-background to-muted rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#00ffff" intensity={0.5} />
        <pointLight position={[10, -10, 5]} color="#ff00ff" intensity={0.3} />
        
        {/* 3D Objects */}
        <RotatingDodecahedron position={[-3, 1, 0]} />
        <WireframeSphere position={[3, -1, 0]} />
        <HolographicTechModel position={[0, -1, 0]} />
        <HolographicText />
        <FloatingParticles />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      <div className="absolute top-4 left-4 text-primary/70 font-mono text-sm">
        Drag to rotate • Scroll to zoom • Auto-rotating enabled
      </div>
    </div>
  );
}