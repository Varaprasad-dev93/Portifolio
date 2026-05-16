import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home',       id: 'home' },
  { label: 'About',      id: 'about' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact',    id: 'contact' },
]

const RESUME = 'https://drive.google.com/file/d/1-ghH4RPHl6AcuXt57kcOlN54tS8DAor0/view?usp=drivesdk'

export default function Navbar() {
  const [active, setActive]     = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible]   = useState(true)
  const lastY = { current: 0 }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // Hide on fast scroll down, reveal on scroll up
      setVisible(y < 80 || y < lastY.current)
      lastY.current = y

      // Active section detection
      const offset = y + 140
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id)
        if (el && el.offsetTop <= offset) {
          setActive(NAV_ITEMS[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* ── Desktop floating pill ── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="md:flex hidden items-center justify-self-end backdrop-blur-xl bg-[#050816]/90 border border-white/10 shadow-2xl"
        style={{
          position: 'fixed',
          top: 20,
          transform: 'translateX(-50%)',
          zIndex: 100,
          padding: '6px 8px',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="font-bold text-sm mr-2"
          style={{ padding: '4px 10px', color: '#f1f5f9' }}
        >
          vara<span style={{ color: '#00d4ff' }}>.</span>
        </button>

        {/* Separator */}
        <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.1)', marginRight: 4 }} />

        {/* Nav links */}
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className="relative text-sm font-medium transition-colors duration-200"
            style={{
              padding: '6px 12px',
              borderRadius: 9999,
              color: active === item.id ? '#00d4ff' : '#64748b',
              background: active === item.id ? 'rgba(0,212,255,0.08)' : 'transparent',
            }}
            onMouseEnter={(e) => {
              if (active !== item.id) e.currentTarget.style.color = '#f1f5f9'
            }}
            onMouseLeave={(e) => {
              if (active !== item.id) e.currentTarget.style.color = '#64748b'
            }}
          >
            {item.label}
          </button>
        ))}

        {/* Separator */}
        <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.1)', marginLeft: 4 }} />

        {/* Resume CTA */}
        <a
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold ml-1 transition-all"
          style={{
            padding: '6px 16px',
            borderRadius: 9999,
            background: 'rgba(0,212,255,0.1)',
            border: '1px solid rgba(0,212,255,0.25)',
            color: '#00d4ff',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00d4ff'
            e.currentTarget.style.color = '#050510'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,212,255,0.1)'
            e.currentTarget.style.color = '#00d4ff'
          }}
        >
          Resume
        </a>
      </motion.div>

      {/* ── Mobile pill ── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="glass-pill md:hidden flex items-center justify-between !ml-5"
        style={{
          position: 'fixed',
          top: 16,
          left: 20,
          right: 16,
          zIndex: 100,
          padding: '10px 16px',
          borderRadius: 16,
        }}
      >
        <button onClick={() => go('home')} className="font-bold text-sm" style={{ color: '#f1f5f9' }}>
          vara<span style={{ color: '#00d4ff' }}>.</span>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Menu"
          style={{ padding: '4px', color: '#64748b' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </motion.div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className=" md:hidden backdrop-blur-2xl bg-[#050816]/95 border border-white/10 shadow-2xl"
            style={{
              position: 'fixed',
              top: 72,
              left: 16,
              right: 16,
              zIndex: 99,
              padding: '12px',
              borderRadius: 16,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="w-full text-left text-sm font-medium transition-colors"
                style={{
                  padding: '11px 14px',
                  borderRadius: 10,
                  color: active === item.id ? '#00d4ff' : '#94a3b8',
                  background: active === item.id ? 'rgba(0,212,255,0.07)' : 'transparent',
                  display: 'block',
                }}
              >
                {item.label}
              </button>
            ))}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-semibold"
              style={{
                padding: '10px',
                borderRadius: 10,
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.2)',
                color: '#00d4ff',
              }}
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
