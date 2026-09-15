import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Torus, Box, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

function Shapes() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#2563eb" />
      <pointLight position={[-4, -4, 2]} intensity={1.5} color="#7c3aed" />

      <Float speed={2} floatIntensity={2} rotationIntensity={1.5}>
        <Sphere args={[0.65, 32, 32]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#3b82f6"
            distort={0.45}
            speed={2.5}
            metalness={0.3}
            roughness={0.1}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>

      <Float speed={3} floatIntensity={1.5} rotationIntensity={3}>
        <Torus args={[0.9, 0.08, 12, 64]} position={[0, 0, 0]} rotation={[0.6, 0, 0]}>
          <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.1} transparent opacity={0.6} />
        </Torus>
      </Float>

      <Float speed={1.5} floatIntensity={1} rotationIntensity={2}>
        <Box args={[0.3, 0.3, 0.3]} position={[1, 0.6, 0.3]} rotation={[0.4, 0.6, 0]}>
          <meshStandardMaterial color="#60a5fa" metalness={0.6} roughness={0.2} />
        </Box>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} gl={{ alpha: true, antialias: true }} style={{ background: 'transparent' }}>
      <Suspense fallback={null}>
        <Shapes />
      </Suspense>
    </Canvas>
  );
}
