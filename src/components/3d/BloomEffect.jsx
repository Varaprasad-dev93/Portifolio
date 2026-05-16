import { useThree, useFrame } from "@react-three/fiber"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"
import { Vector2 } from "three"
import { useEffect, useRef } from "react"

export default function BloomEffect() {
  const { gl, scene, camera, size } = useThree()

  const composer = useRef()

  useEffect(() => {
    gl.autoClear = false

    composer.current = new EffectComposer(gl)

    const renderPass = new RenderPass(scene, camera)

    composer.current.addPass(renderPass)

    const bloomPass = new UnrealBloomPass(
      new Vector2(size.width, size.height),

      1.2, // strength
      0.4, // radius
      0.85 // threshold
    )

    composer.current.addPass(bloomPass)

    return () => {
      composer.current?.dispose()
    }
  }, [gl, scene, camera, size])

  useFrame(() => {
    composer.current?.render()
  }, 1)

  return null
}