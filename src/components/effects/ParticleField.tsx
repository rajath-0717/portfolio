"use client";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1200 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.cbrt(Math.random()) * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.04;
    points.current.rotation.x += delta * 0.015;
    const t = state.clock.elapsedTime;
    points.current.position.y = Math.sin(t * 0.4) * 0.15;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        sizeAttenuation
        color="#a78bfa"
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <torusKnotGeometry args={[1.2, 0.18, 180, 24]} />
      <meshBasicMaterial
        color="#7c3aed"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

export function ParticleField() {
  const [isMobile, setIsMobile] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mobileMq = window.matchMedia("(max-width: 640px)");
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setIsMobile(mobileMq.matches);
      setReduced(reduceMq.matches);
    };
    apply();
    mobileMq.addEventListener("change", apply);
    reduceMq.addEventListener("change", apply);
    return () => {
      mobileMq.removeEventListener("change", apply);
      reduceMq.removeEventListener("change", apply);
    };
  }, []);

  if (reduced || isMobile) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <Particles count={1200} />
          <FloatingTorus />
        </Suspense>
      </Canvas>
    </div>
  );
}
