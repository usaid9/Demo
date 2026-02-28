import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function FloatingShape({ position, scale, speed, distort }) {
  const mesh = useRef()

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.3
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.5}
          metalness={0.8}
          opacity={0.05}
          transparent
          wireframe
        />
      </mesh>
    </Float>
  )
}

function TorusShape({ position, scale, speed }) {
  const mesh = useRef()

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.15
    mesh.current.rotation.z = state.clock.elapsedTime * speed * 0.1
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          opacity={0.03}
          transparent
          wireframe
        />
      </mesh>
    </Float>
  )
}

function OctahedronShape({ position, scale, speed }) {
  const mesh = useRef()

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.2
    mesh.current.rotation.z = state.clock.elapsedTime * speed * 0.15
  })

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#ffffff"
          opacity={0.035}
          transparent
          wireframe
        />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[10, 10, 10]} intensity={0.2} />

        {/* Main floating icosahedron */}
        <FloatingShape position={[-5, 2, -3]} scale={1.8} speed={0.4} distort={0.3} />

        {/* Torus on right side */}
        <TorusShape position={[6, -1, -4]} scale={1.5} speed={0.3} />

        {/* Small octahedron */}
        <OctahedronShape position={[4, 3, -2]} scale={0.8} speed={0.5} />

        {/* Another icosahedron bottom left */}
        <FloatingShape position={[-4, -3, -5]} scale={1.2} speed={0.35} distort={0.2} />

        {/* Small torus top */}
        <TorusShape position={[-2, 4, -6]} scale={0.9} speed={0.25} />
      </Canvas>
    </div>
  )
}
