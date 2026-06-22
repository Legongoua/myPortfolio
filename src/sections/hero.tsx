import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constants/index";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target";
// import { Leva, useControls } from "leva";
import JavascriptLogo from "../components/jsLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  // const x = useControls("Target", {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  //   rotationX: { value: 2.5, min: -10, max: 10 },
  //   rotationY: { value: 2.5, min: -10, max: 10 },
  //   rotationZ: { value: 2.5, min: -10, max: 10 },
  //   scale: { value: 0.05, min: 0.01, max: 1 },
  // });

  // ✅ Détecte la taille de l'écran
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // ✅ Appelle la fonction avec les paramètres
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-white sm:text-3xl text-2xl font-medium text-center font-generalsans">
          Salut, Je suis Mohamed Diarra <span className="waving-hand">👋🏿</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Développeur Fullstack Junior
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
             <HeroCamera isMobile={isMobile}>
            <HackerRoom
              position={sizes.deskPosition as [number, number, number]}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
              </HeroCamera>
            <group>
              <Target
                rotation={[-3.5, -2.3, -3.3]}
                position={sizes.targetPosition as [number, number, number]}
                scale={17}
              />
              <JavascriptLogo position={sizes.reactLogoPosition as [number, number, number]} scale={25} />
              <Cube position={sizes.cubePosition as [number, number, number]} />
              {/* <Rings position={sizes.ringPosition as [number, number, number]} /> */}
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <pointLight position={[14, 3, 0]} intensity={12} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Collaborons ensemble !" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
