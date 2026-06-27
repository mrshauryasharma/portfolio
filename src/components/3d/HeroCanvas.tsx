"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingSphere({ position, color, size = 1, speed = 1 }: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} position={position} args={[size, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <Torus ref={meshRef} position={position} args={[1.2, 0.2, 16, 64]}>
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.4}
        />
      </Torus>
    </Float>
  );
}

function FloatingBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={2} floatIntensity={1}>
      <Box ref={meshRef} position={position} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.5}
        />
      </Box>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#7c3aed" intensity={2} />
        <pointLight position={[10, -10, 5]} color="#06b6d4" intensity={1} />

        <FloatingSphere position={[-4, 2, -2]} color="#7c3aed" size={1.2} speed={0.8} />
        <FloatingSphere position={[4, -1, -1]} color="#06b6d4" size={0.8} speed={1.2} />
        <FloatingSphere position={[3, 3, -3]} color="#ec4899" size={0.5} speed={1.5} />
        <FloatingSphere position={[-3, -2, -2]} color="#8b5cf6" size={0.6} speed={1} />
        <FloatingTorus position={[5, 1, -4]} />
        <FloatingBox position={[-5, -1, -3]} />
        <FloatingBox position={[2, -3, -2]} />
      </Suspense>
    </Canvas>
  );
}
