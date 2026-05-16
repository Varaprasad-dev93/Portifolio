import { useEffect, useRef, useState } from 'react'
import Sound from '../assets/portifiloSound.mp3'
import soundOffImg from '../assets/soundOff.png'
import soundOnImg from '../assets/soundOn.png'

export default function Cursor() {
  const cursorRef = useRef()
  const [soundOff, setSoundOff] = useState(true)
  const audio = useRef(null)

  useEffect(() => {
    audio.current = new Audio(Sound)
    audio.current.volume = 0.4
    audio.current.loop = true
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = cursorRef.current
      if (!el) return

      const tag = e.target.tagName?.toLowerCase()
      const isInteractive = ['button', 'a', 'input', 'textarea', 'img', 'span', 'label'].includes(tag)

      if (isInteractive) {
        el.style.width = '48px'
        el.style.height = '48px'
        el.style.background = 'rgba(0,212,255,0.15)'
        el.style.borderColor = '#00d4ff'
        el.style.mixBlendMode = 'screen'
      } else {
        el.style.width = '28px'
        el.style.height = '28px'
        el.style.background = 'transparent'
        el.style.borderColor = 'rgba(0,212,255,0.7)'
        el.style.mixBlendMode = 'normal'
      }

      el.style.opacity = '1'
      el.style.left = `${e.pageX - parseInt(el.style.width) / 2}px`
      el.style.top = `${e.pageY - parseInt(el.style.height) / 2}px`
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const toggleSound = () => {
    if (!audio.current) return
    if (soundOff) {
      audio.current.play().catch(() => {})
    } else {
      audio.current.pause()
    }
    setSoundOff(!soundOff)
  }

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="transition-all"
        style={{
          position: 'fixed',
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,212,255,0.7)',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'width 0.15s, height 0.15s, background 0.15s, border-color 0.15s',
          boxShadow: '0 0 8px rgba(0,212,255,0.4)',
        }}
      />

      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        aria-label={soundOff ? 'Unmute background music' : 'Mute background music'}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'rgba(0,212,255,0.12)',
          border: '1px solid rgba(0,212,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          cursor: 'pointer',
          boxShadow: '0 0 12px rgba(0,212,255,0.2)',
          transition: 'background 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0,212,255,0.2)'
          e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,212,255,0.12)'
          e.currentTarget.style.boxShadow = '0 0 12px rgba(0,212,255,0.2)'
        }}
      >
        <img
          src={soundOff ? soundOffImg : soundOnImg}
          alt={soundOff ? 'Sound off' : 'Sound on'}
          style={{ width: 18, height: 18, objectFit: 'contain' }}
        />
      </button>
    </>
  )
}
