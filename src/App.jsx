import { Suspense, lazy } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'

import Navbar from './components/Navbar'
import Cursor from './components/Cursor'

const ParticleField = lazy(() => import('./components/3d/ParticleField'))
const Hero          = lazy(() => import('./components/sections/Hero'))
const About         = lazy(() => import('./components/sections/About'))
const Projects      = lazy(() => import('./components/sections/Projects'))
const Skills        = lazy(() => import('./components/sections/Skills'))
const Experience    = lazy(() => import('./components/sections/Experience'))
const Contact       = lazy(() => import('./components/sections/Contact'))

function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#050510',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        zIndex: 9998,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,212,255,0.12)',
          borderTopColor: '#00d4ff',
          animation: 'spin 0.85s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      <p
        style={{
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#00d4ff',
          fontWeight: 600,
        }}
      >
        Loading
      </p>
    </div>
  )
}

// Thin invisible spacer — keeps sections separated without visual noise
function Divider() {
  return (
    <div
      style={{
        width: '100%',
        height: 1,
        background: 'rgba(255,255,255,0.04)',
      }}
    />
  )
}

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#050510' }}>
      {/* Toasts */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(10,10,26,0.95)',
            color: '#e2e8f0',
            border: '1px solid rgba(0,212,255,0.18)',
            backdropFilter: 'blur(16px)',
            borderRadius: 12,
            fontSize: '0.85rem',
          },
        }}
      />

      {/* Atmospheric star field (fixed, z=0, pointer-events:none) */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Floating cursor + sound toggle */}
      <Cursor />

      {/* Floating pill navbar */}
      <Navbar />

      {/* Single-page content */}
      <Suspense fallback={<Loader />}>
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Projects />
          <Divider />
          <Skills />
          <Divider />
          <Experience />
          <Divider />
          <Contact />
        </main>
      </Suspense>
    </div>
  )
}
