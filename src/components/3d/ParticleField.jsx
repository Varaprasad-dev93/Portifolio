import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars({ count }) {
  const ref = useRef()

  const [positions, sizes, colors] = useMemo(() => {
    const pos  = new Float32Array(count * 3)
    const sz   = new Float32Array(count)
    const col  = new Float32Array(count * 3)
    const cyan   = new THREE.Color('#00d4ff')
    const purple = new THREE.Color('#8b5cf6')
    const white  = new THREE.Color('#e2e8f0')

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 50
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20

      sz[i] = Math.random() * 0.6 + 0.2   // varied point sizes

      const r = Math.random()
      const c = r < 0.55 ? white : r < 0.78 ? cyan : purple
      col[i * 3]     = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, sz, col]
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    // Very slow drift rotation
    ref.current.rotation.y = state.clock.elapsedTime * 0.008
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        vertexColors
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleField() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  // 70% fewer than before: desktop 180, mobile 55
  const count = isMobile ? 55 : 180

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'low-power',
        }}
        style={{ background: 'transparent' }}
      >
        <Stars count={count} />
      </Canvas>
    </div>
  )
}
