"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function CDModel() {
  const groupRef = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/models/cd.glb");

  // Boost material reflectivity so the CD reads as shiny/iridescent
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      mats.forEach((m) => {
        const mat = m as THREE.MeshStandardMaterial;
        if (mat.isMeshStandardMaterial) {
          mat.metalness = Math.max(mat.metalness ?? 0, 0.9);
          mat.roughness = Math.min(mat.roughness ?? 1, 0.12);
          mat.envMapIntensity = 2.8;
          mat.needsUpdate = true;
        }
      });
    }
  });

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    // Primary: continuous Y rotation → shows front AND back of the disk
    groupRef.current.rotation.y = t * 0.6;

    // Secondary: slow sinusoidal tilt so the face catches the lights
    groupRef.current.rotation.x = Math.sin(t * 0.35) * 0.22;

    // Gentle float
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/cd.glb");
