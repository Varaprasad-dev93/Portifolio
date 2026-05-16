import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = [
  {
    label: 'Frontend',
    color: '#00d4ff',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85 },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85 },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 65 },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 90 },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 88 },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', level: 85 },
      { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/ffffff', level: 72 },
      { name: 'Zustand', icon: 'https://cdn.simpleicons.org/react/ffffff', level: 70 },
    ],
  },
  {
    label: 'Backend',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 75 },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 75 },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 72 },
      { name: 'Socket.io', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', level: 70 },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 70 },
      { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/postman/FF6C37', level: 78 },
    ],
  },
  {
    label: 'AI / ML',
    color: '#f472b6',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 78 },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', level: 80 },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', level: 75 },
      { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg', level: 75 },
      { name: 'Seaborn', icon: 'https://cdn.simpleicons.org/python/ffffff', level: 72 },
      { name: 'scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E', level: 65 },
    ],
  },
  {
    label: '3D / WebGL',
    color: '#34d399',
    skills: [
      { name: 'Three.js', icon: 'https://cdn.simpleicons.org/threedotjs/ffffff', level: 72 },
      { name: 'React Three Fiber', icon: 'https://cdn.simpleicons.org/threedotjs/ffffff', level: 75 },
      { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', level: 62 },
    ],
  },
  {
    label: 'Tools',
    color: '#fbbf24',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 78 },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff', level: 80 },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', level: 76 },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 90 },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', level: 70 },
    ],
  },
]

function SkillCard({ skill, color, index }) {
  const r = 28
  const circ = 2 * Math.PI * r
  const offset = circ - (skill.level / 100) * circ

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center gap-2 cursor-default"
    >
      <div className="relative">
        <svg width="68" height="68" viewBox="0 0 68 68">
          {/* Background ring */}
          <circle
            cx="34"
            cy="34"
            r={r}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="3.5"
            fill="none"
          />
          {/* Progress ring */}
          <motion.circle
            cx="34"
            cy="34"
            r={r}
            stroke={color}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.1, delay: 0.15 + index * 0.04 }}
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
              filter: `drop-shadow(0 0 5px ${color}80)`,
            }}
          />
          {/* Icon */}
          <image
            href={skill.icon}
            x="20"
            y="20"
            height="28"
            width="28"
          />
        </svg>
      </div>
      <p
        className="text-xs text-center !px-15 !py-3 font-medium"
        style={{ color: '#cbd5e1', maxWidth: 72 }}
      >
        {skill.name}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend')
  const activeCategory = CATEGORIES.find((c) => c.label === activeTab)

  return (
    <section id="skills"  className='!px-2  !pt-[48px] flex items-center justify-center'>
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '64px' }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase !mb3"
            style={{ color: '#00d4ff' }}
          >
            My toolkit
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              color: '#f1f5f9',
            }}
          >
            Skills
          </h2>
          <div className="section-divider" style={{ marginTop: '16px' }} />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap flex-row justify-center items-center gap-3"
          style={{ marginBottom: '40px' }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              className="!px-5 !py-2 rounded-full text-sm flex font-semibold transition-all duration-200"
              style={
                activeTab === cat.label
                  ? {
                      background: cat.color,
                      color: '#050510',
                      boxShadow: `0 0 20px ${cat.color}50`,
                    }
                  : {
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      color: '#94a3b8',
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="glass"
            style={{ padding: '40px 32px' }}
          >
            <div
              className="grid justify-items-center"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                gap: '28px 16px',
              }}
            >
              {activeCategory?.skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  color={activeCategory.color}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
