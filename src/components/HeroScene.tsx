"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#818CF8";
const ACCENT_STRONG = "#6366F1";
const NODE_COUNT = 42;
const CONNECT_DIST = 2.1;

function useNetwork() {
  return useMemo(() => {
    const rng = (seed: { v: number }) => {
      // deterministic pseudo-random so SSR/CSR match
      seed.v = (seed.v * 16807) % 2147483647;
      return (seed.v - 1) / 2147483646;
    };
    const seed = { v: 1234567 };

    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      // distribute on a sphere shell with some radial variance
      const theta = rng(seed) * Math.PI * 2;
      const phi = Math.acos(2 * rng(seed) - 1);
      const r = 2.1 + rng(seed) * 1.1;
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }

    const edgePositions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < CONNECT_DIST) {
          edgePositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
        }
      }
    }

    return { nodes, edgePositions: new Float32Array(edgePositions) };
  }, []);
}

function NeuralNetwork() {
  const group = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const { nodes, edgePositions } = useNetwork();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      // slow auto-rotation
      group.current.rotation.y += delta * 0.12;
      // gentle parallax toward pointer
      const targetX = state.pointer.y * 0.25;
      const targetZ = state.pointer.x * 0.15;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
      group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.04;
    }

    if (nodesRef.current) {
      nodes.forEach((pos, i) => {
        const pulse = 1 + Math.sin(t * 1.6 + i * 1.7) * 0.35;
        dummy.position.copy(pos);
        dummy.scale.setScalar(0.055 * pulse);
        dummy.updateMatrix();
        nodesRef.current!.setMatrixAt(i, dummy.matrix);
      });
      nodesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={group}>
      {/* connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.22} />
      </lineSegments>

      {/* nodes */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.9} />
      </instancedMesh>

      {/* central core */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial
            color={ACCENT_STRONG}
            wireframe
            emissive={ACCENT_STRONG}
            emissiveIntensity={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.55, 2]} />
          <meshStandardMaterial
            color={ACCENT_STRONG}
            emissive={ACCENT}
            emissiveIntensity={1.4}
            roughness={0.25}
          />
        </mesh>
      </Float>

      {/* outer orbit ring */}
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[3.9, 0.006, 8, 96]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, 0.5, 0]}>
        <torusGeometry args={[4.3, 0.004, 8, 96]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const seed = { v: 987654 };
    const rng = () => {
      seed.v = (seed.v * 16807) % 2147483647;
      return (seed.v - 1) / 2147483646;
    };
    const arr = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      arr[i * 3] = (rng() - 0.5) * 14;
      arr[i * 3 + 1] = (rng() - 0.5) * 12;
      arr[i * 3 + 2] = (rng() - 0.5) * 8 - 2;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={ACCENT}
        size={0.035}
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={30} color={ACCENT} />
        <pointLight position={[-5, -3, 2]} intensity={12} color={ACCENT_STRONG} />
        <NeuralNetwork />
        <Particles />
      </Canvas>
    </div>
  );
}
