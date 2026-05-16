import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

import AiImageHubImg from '../../assets/Lovable.jpg'
import ChatImg       from '../../assets/meetme.png'
import RoboImg       from '../../assets/Robo.png'
import flappyBird    from '../../assets/Flappybird.jpg'
import Planets       from '../../assets/planetary.jpeg'

// ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: 'AI Image Hub',
    img: AiImageHubImg,
    type: 'AI-Powered Image Platform',
    tags: ['React', 'AI APIs', 'Node.js', 'Tailwind CSS'],
    description:
      'Combines AI image generation from text prompts with a URL image scraper that packages results into a ZIP. Includes a smart chat assistant for creative prompt suggestions.',
    github: 'https://github.com/Varaprasad-dev93/aiimagehub',
    live:   'https://aiimagehub.netlify.app',
    featured: true,
    accent: '#00d4ff',
  },
  {
    name: 'DevChat',
    img: ChatImg,
    type: 'Full Stack Chat App',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    description:
      'Online code editor + real-time chat in one app. Write and run Python, C, C++, and Java in the browser, chat with other developers, and get help from an AI coding assistant.',
    github: 'https://github.com/Varaprasad-dev93/fullStackChatApp.git',
    live:   'https://fullstackchatapp-3je7.onrender.com',
    featured: true,
    accent: '#8b5cf6',
  },
  {
    name: 'Voice Translator',
    img: RoboImg,
    type: 'Translation · Web App',
    tags: ['React', 'Three.js', 'Web Speech API', 'Zustand'],
    description:
      'Real-time voice translation supporting 10 major Indian languages — Hindi, Telugu, Tamil, Bengali, and more — with an interactive 3D robot interface.',
    github: 'https://github.com/Varaprasad-dev93/Voice-Translation.git',
    live:   'https://voicetranslating.netlify.app/',
    featured: true,
    accent: '#f472b6',
  },
  {
    name: 'Flappy Bird',
    img: flappyBird,
    type: 'Browser Game',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Browser-based recreation of the classic Flappy Bird with smooth canvas animations, precise collision detection, and progressive difficulty scaling.',
    github: 'https://github.com/Varaprasad-dev93/flappyBird.git',
    live:   'https://varaprasad-dev93.github.io/flappyBird/flapBird.html',
    featured: false,
    accent: '#fbbf24',
  },
  {
    name: 'Planetary Model',
    img: Planets,
    type: '3D Simulation',
    tags: ['Three.js', 'WebGL', 'JavaScript'],
    description:
      'Interactive 3D solar system with accurate planet textures, dynamic rotation animations, orbit controls, and customisable lighting effects.',
    github: 'https://github.com/Varaprasad-dev93/Planets.git',
    live:   'https://planets-18f6.onrender.com',
    featured: false,
    accent: '#34d399',
  },
]

// ─────────────────────────────────────────────────────────
function ProjectCard({ p, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 18,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${p.accent}35`
        e.currentTarget.style.boxShadow   = `0 8px 40px ${p.accent}0c`
        e.currentTarget.style.transform   = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow   = 'none'
        e.currentTarget.style.transform   = 'none'
      }}
    >
      {/* ── Thumbnail ── */}
      <div style={{ position: 'relative', height: 188, overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            display: 'block',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 72,
            background: 'linear-gradient(to top, rgba(5,5,16,0.9), transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* Featured badge */}
        {p.featured && (
          <span
            style={{
              position: 'absolute',
              top: 12, right: 12,
              padding: '3px 10px',
              borderRadius: 9999,
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: `${p.accent}18`,
              border: `1px solid ${p.accent}40`,
              color: p.accent,
              backdropFilter: 'blur(8px)',
            }}
          >
            Featured
          </span>
        )}

        {/* Type pill */}
        <span
          style={{
            position: 'absolute',
            bottom: 10, left: 12,
            fontSize: '0.7rem',
            color: '#475569',
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(6px)',
            padding: '2px 8px',
            borderRadius: 6,
          }}
        >
          {p.type}
        </span>
      </div>

      {/* ── Body ── */}
      <div
        style={{
          padding: '20px 22px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.05rem',
            color: '#f1f5f9',
            lineHeight: 1.3,
          }}
        >
          {p.name}
        </h3>

        <p
          style={{
            fontSize: '0.83rem',
            color: '#475569',
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {p.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
          {p.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.7rem',
                padding: '3px 9px',
                borderRadius: 6,
                background: `${p.accent}0a`,
                border: `1px solid ${p.accent}22`,
                color: p.accent,
                fontWeight: 500,
                opacity: 0.88,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 8, paddingTop: 4 }}>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '9px',
              borderRadius: 10,
              fontSize: '0.8rem', fontWeight: 600,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#64748b',
              transition: 'all 0.18s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f1f5f9'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#64748b'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            <Github size={13} /> GitHub
          </a>

          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '9px',
              borderRadius: 10,
              fontSize: '0.8rem', fontWeight: 600,
              background: `${p.accent}0e`,
              border: `1px solid ${p.accent}28`,
              color: p.accent,
              transition: 'background 0.18s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = `${p.accent}1e`)}
            onMouseLeave={(e) => (e.currentTarget.style.background = `${p.accent}0e`)}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

// ─────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className='!px-2 !pt-20 flex flex-col justify-center items-center'>
      <div className="max-w-6xl !mx-auto flex justify-center items-center flex-col">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#00d4ff',
              marginBottom: 12,
            }}
          >
            What I&apos;ve built
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              color: '#f1f5f9',
            }}
          >
            Featured Projects
          </h2>
          <div className="section-divider" style={{ marginTop: 14 }} />
        </motion.div>

        {/* 3-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 22,
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects { padding: 72px 24px !important; }
        }
      `}</style>
    </section>
  )
}
