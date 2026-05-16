import { motion } from 'framer-motion'
import { Briefcase, Award, Code2, BookOpen, ExternalLink } from 'lucide-react'

const EXPERIENCE = [
  {
    icon: Briefcase,
    title: 'Full Stack Engineer',
    org: 'Kyros.Clinic',
    period: 'Nov 2025 – Present',
    color: '#00d4ff',
    badge: 'Full-time',
    description:
      'Developing a startup website from the ground up — handling UI/UX design in Figma and implementing a scalable full-stack system using Next.js, React.js, Node.js, and FastAPI. Leading end-to-end development across frontend, backend, and API layers. Also acquired hands-on experience in digital twin systems, focusing on sensor data processing, transformation pipelines, and real-time analytics.',
    tags: ['Next.js', 'React.js', 'Node.js', 'FastAPI', 'Figma', 'Digital Twins', 'Real-time Analytics'],
  },
  {
    icon: Briefcase,
    title: 'Machine Learning Intern',
    org: 'SkillDzire',
    period: '2024',
    color: '#8b5cf6',
    badge: 'Internship',
    description:
      'Worked on end-to-end ML pipelines — data collection, preprocessing, feature engineering, model training and evaluation. Gained hands-on experience with scikit-learn, Pandas, and NumPy in a real-world context.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'ML Pipelines'],
  },
]

const CERTIFICATIONS = [
  {
    icon: Award,
    title: 'MS SQL Server Certification',
    org: 'Intellipaat',
    period: '2024',
    color: '#f472b6',
    description:
      'Completed comprehensive SQL certification covering advanced queries, stored procedures, indexing strategies, transactions, and database performance optimization.',
    tags: ['SQL', 'T-SQL', 'Database Design', 'Indexing'],
  },
  {
    icon: BookOpen,
    title: 'Joy of Computing Using Python',
    org: 'NPTEL',
    period: '2023',
    color: '#34d399',
    description:
      'NPTEL-certified course on Python programming covering data structures, algorithms, file handling, and problem-solving methodology.',
    tags: ['Python', 'Algorithms', 'Data Structures'],
  },
  {
    icon: Code2,
    title: 'Java Programming',
    org: 'NPTEL',
    period: '2023',
    color: '#fbbf24',
    description:
      'NPTEL-certified Java programming course with focus on Object-Oriented Programming, inheritance, interfaces, exception handling, and the Java standard library.',
    tags: ['Java', 'OOP', 'Inheritance'],
  },
  {
    icon: Award,
    title: 'E-Business',
    org: 'NPTEL',
    period: '2023',
    color: '#a78bfa',
    description:
      'Completed NPTEL E-Business course covering digital commerce, e-payment systems, supply chain management, and enterprise digital transformation.',
    tags: ['E-Commerce', 'Digital Business'],
  },
]

function TimelineItem({ item, index, showBadge = false }) {
  const Icon = item.icon
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="relative"
      style={{ paddingLeft: 64 }}
    >
      {/* Icon circle */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: 0,
          top: 12,
          width: 46,
          height: 46,
          background: `${item.color}12`,
          border: `2px solid ${item.color}50`,
          boxShadow: `0 0 16px ${item.color}25`,
        }}
      >
        <Icon size={18} style={{ color: item.color }} />
      </div>

      {/* Card */}
      <div
        className="glass"
        style={{ padding: '24px', transition: 'border-color 0.3s' }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = `${item.color}30`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')
        }
      >
        <div
          className="flex items-start justify-between flex-wrap gap-2"
          style={{ marginBottom: 10 }}
        >
          <div>
            <h3 className="font-bold text-lg" style={{ color: '#ffffff' }}>
              {item.title}
            </h3>
            <p className="text-sm font-semibold mt-0.5" style={{ color: item.color }}>
              {item.org}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {showBadge && item.badge && (
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}40`,
                  color: item.color,
                }}
              >
                {item.badge}
              </span>
            )}
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#64748b' }}
            >
              {item.period}
            </span>
          </div>
        </div>

        <p
          className="text-sm leading-relaxed"
          style={{ color: '#64748b', marginBottom: 16 }}
        >
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium"
              style={{
                background: `${item.color}0d`,
                border: `1px solid ${item.color}25`,
                color: item.color,
                opacity: 0.9,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function TimelineList({ items, showBadge }) {
  return (
    <div className="relative">
      {/* Vertical spine */}
      <div
        className="absolute"
        style={{
          left: 22,
          top: 8,
          bottom: 24,
          width: 1,
          background:
            'linear-gradient(to bottom, rgba(0,212,255,0.5), rgba(139,92,246,0.25), transparent)',
        }}
      />
      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} showBadge={showBadge} />
        ))}
      </div>
    </div>
  )
}

function SubHeader({ label, title, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ marginBottom: '40px' }}
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-2"
        style={{ color: '#00d4ff' }}
      >
        {label}
      </p>
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          color: '#f1f5f9',
        }}
      >
        {title}
      </h3>
      <div
        style={{
          marginTop: 10,
          width: 40,
          height: 2,
          borderRadius: 2,
          background: 'linear-gradient(90deg, #00d4ff, #8b5cf6)',
        }}
      />
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '96px 48px' }}>
      <div className="max-w-4xl mx-auto flex flex-col justify-center  justify-self-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '72px' }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#00d4ff' }}
          >
            Journey so far
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              color: '#f1f5f9',
            }}
          >
            Experience &amp; Certifications
          </h2>
          <div className="section-divider" style={{ marginTop: '16px' }} />
        </motion.div>

        {/* ── Work Experience ── */}
        <SubHeader label="Work" title="Experience" delay={0.1} />
        <TimelineList items={EXPERIENCE} showBadge={true} />

        {/* Spacer */}
        <div style={{ height: 72 }} />

        {/* ── Certifications ── */}
        <SubHeader label="Credentials" title="Certifications" delay={0.1} />
        <TimelineList items={CERTIFICATIONS} showBadge={false} />
      </div>
    </section>
  )
}
