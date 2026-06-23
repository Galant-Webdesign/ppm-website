"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import type { Group } from "three";

function buildLinePositions() {
  const points: number[] = [];

  for (let index = -4; index <= 4; index += 1) {
    const offset = index * 0.42;

    points.push(-2.2, offset, -0.15, 2.2, offset, -0.15);
    points.push(offset, -1.7, -0.15, offset, 1.7, -0.15);
  }

  const panels = [
    [-1.25, 0.45, 0.05, -0.15, 1.08, 0.05],
    [0.35, -0.85, 0.02, 1.55, -0.1, 0.02],
    [-1.5, -1.05, 0.08, -0.55, -0.5, 0.08],
  ];

  for (const [x1, y1, z1, x2, y2, z2] of panels) {
    points.push(x1, y1, z1, x2, y1, z1);
    points.push(x2, y1, z1, x2, y2, z2);
    points.push(x2, y2, z2, x1, y2, z2);
    points.push(x1, y2, z2, x1, y1, z1);
  }

  points.push(-1.85, -1.35, 0.12, 1.85, 1.25, 0.12);
  points.push(-1.65, 1.25, 0.12, 1.75, -1.2, 0.12);

  return new Float32Array(points);
}

function BlueprintLineSystem() {
  const groupRef = useRef<Group>(null);
  const reduceMotion = useReducedMotion();
  const positions = useMemo(() => buildLinePositions(), []);

  useFrame((state) => {
    if (!groupRef.current || reduceMotion) {
      return;
    }

    const time = state.clock.elapsedTime;
    groupRef.current.rotation.x = -0.32 + Math.sin(time * 0.28) * 0.018;
    groupRef.current.rotation.y = -0.24 + Math.sin(time * 0.2) * 0.02;
    groupRef.current.position.y = Math.sin(time * 0.34) * 0.025;
  });

  return (
    <group ref={groupRef} rotation={[-0.32, -0.24, 0.04]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            args={[positions, 3]}
            attach="attributes-position"
          />
        </bufferGeometry>
        <lineBasicMaterial color="#cbcbcb" opacity={0.48} transparent />
      </lineSegments>
      <mesh position={[-0.7, 0.16, -0.08]} rotation={[0, 0, -0.04]}>
        <boxGeometry args={[1.35, 0.03, 0.03]} />
        <meshBasicMaterial color="#ffffff" opacity={0.55} transparent />
      </mesh>
      <mesh position={[0.66, -0.43, -0.02]} rotation={[0, 0, 0.55]}>
        <boxGeometry args={[1.75, 0.025, 0.025]} />
        <meshBasicMaterial color="#0f2c4d" opacity={0.85} transparent />
      </mesh>
    </group>
  );
}

export default function BlueprintAccentScene() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 4.8], zoom: 82 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        orthographic
      >
        <BlueprintLineSystem />
      </Canvas>
    </div>
  );
}
