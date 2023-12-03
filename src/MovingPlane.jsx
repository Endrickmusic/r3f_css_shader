import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

export default function MovingPlane (){
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }), []
  )

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    mesh.current.rotation.z = clock.getElapsedTime() / 10.;
  })

  return (
    <mesh ref={mesh} 
    position={[0, 0, 0]}  
    rotation={[-Math.PI / 2, 0, 0]} 
    scale={1.5}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        // wireframe
      />
    </mesh>
  )
}