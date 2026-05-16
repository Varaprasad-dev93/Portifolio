import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import Aiorb from "./Ai-core";
import * as THREE from "three";
import BloomEffect from "./BloomEffect";
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [-5, 5, -2], fov: 30 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      onCreated={({ gl }) => {
        gl.toneMappingExposure = 1.4;
      }}
    >
      <fog attach="fog" args={["#050816", 8, 20]} />
      <color attach="background" args={["#050816"]} />

      <Environment preset="night" />
      <ambientLight intensity={0.15} color="#1a1d2e" />

      <directionalLight position={[5, 8, 5]} intensity={2} color="#7dd3fc" />

      <pointLight
        position={[-4, 2, 3]}
        intensity={8}
        distance={20}
        color="#00d4ff"
      />

      <pointLight
        position={[4, 1, 2]}
        intensity={4}
        distance={12}
        color="#8b5cf6"
      />

      {/* <EffectComposer>
        <Bloom
          intensity={1.8}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          mipmapBlur
        />

        <Vignette eskil={false} offset={0.15} darkness={1.2} />
      </EffectComposer> */}
      <BloomEffect />

      <Aiorb />
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 4}
      />
    </Canvas>
  );
}
