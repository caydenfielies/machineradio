"use client";

import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function HeroShader() {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  useFrame(({ clock, size }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
    materialRef.current.uniforms.u_resolution.value.set(
      size.width,
      size.height,
    );
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2() },
        }}
        vertexShader={`
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          precision highp float;

          uniform vec2 u_resolution;
          uniform float u_time;

          void main() {
            float mr = min(u_resolution.x, u_resolution.y);
            vec2 uv = (gl_FragCoord.xy * 1.6 - u_resolution.xy) / mr;

            float d = -u_time * 0.5;
            float a = 0.0;

            for (float i = 0.0; i < 8.0; ++i) {
              a += cos(i - d - a * uv.x);
              d += sin(uv.y * i + a);
            }

            d += u_time * 0.15;

            vec3 col = vec3(
              cos(uv * vec2(d, a)) * 0.9 + 0.4,
              cos(a + d) * 0.8 + 0.5
            );

            col = cos(col * cos(vec3(d, a, 4)) * 0.5 + 0.5);

            gl_FragColor = vec4(col, 1.0);
          }
        `}
      />
    </mesh>
  );
}
