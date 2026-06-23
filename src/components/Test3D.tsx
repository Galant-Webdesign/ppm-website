"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#0f2c4d" />
    </mesh>
  );
}

export default function Test3D() {
  return (
    <section className="min-h-screen bg-ppm-navy px-10 py-20 text-white">
      <h1 className="mb-8 text-4xl font-bold">Test React Three Fiber</h1>

      <div className="h-[500px] w-full rounded-3xl border border-white/20 bg-white/5">
        <Canvas camera={{ position: [3, 3, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 3]} intensity={2} />
          <Box />
          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
}
