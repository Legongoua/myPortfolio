import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import type { JSX } from "react";
import * as THREE from "three";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Target = (props: JSX.IntrinsicElements['mesh']) => {
  const targetRef = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF('/models/laravel.glb');

    useGSAP(() => {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y +0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    })

  return (
    <mesh ref={targetRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

useGLTF.preload('/models/laravel.glb');
export default Target;