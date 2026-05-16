import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Loader2,
  MessageSquare,
  Phone,
} from 'lucide-react'

const SOCIALS = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@Varaprasad-dev93',
    href: 'https://github.com/Varaprasad-dev93',
    color: '#ffffff',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Varaprasad Kandula',
    href: 'https://www.linkedin.com/in/varaprasad-kandula-23820a291/',
    color: '#0ea5e9',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'varaprasad3441@gmail.com',
    href: 'mailto:varaprasad3441@gmail.com',
    color: '#f472b6',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    handle: '+91 9381110340',
    href: 'https://wa.me/9381110340',
    color: '#34d399',
  },
]

const INPUT_STYLE = {
  padding: '12px 16px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.09)',
  borderRadius: '12px',
  color: '#ffffff',
  fontSize: '0.875rem',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)

  const SERVICE_ID = import.meta.env.VITE_EMAILSERVICEID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILTEMPLATEID
  const PUBLIC_KEY = import.meta.env.VITE_PUBLICAPIKEY

  const set = (key) => (e) =>
    setFormData((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      toast.success("Message sent! I'll get back to you soon 🚀")
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      toast.error('Failed to send. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  const focusStyle = {
    borderColor: 'rgba(0,212,255,0.5)',
    boxShadow: '0 0 0 2px rgba(0,212,255,0.1)',
  }
  const blurStyle = {
    borderColor: 'rgba(255,255,255,0.09)',
    boxShadow: 'none',
  }

  return (
    <section id="contact" className="!px-2 !mt-10 !pt-10 flex flex-col justify-center items-center">
      <div className="max-w-6xl !mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col justify-center items-center gap-3"
          style={{ marginBottom: '64px' }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase !mb3"
            style={{ color: '#00d4ff' }}
          >
            Get in touch
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              color: '#f1f5f9',
            }}
          >
            Contact
          </h2>
          <div className="section-divider" style={{ marginTop: '16px' }} />
          <p
            className="mt-6 max-w-lg  text-base leading-relaxed"
            style={{ color: '#64748b' }}
          >
            Open to internship opportunities, collaborations, and interesting
            conversations. Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── Left: Socials ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass flex flex-col"
            style={{ padding: '32px' }}
          >
            <MessageSquare
              size={28}
              style={{ color: '#00d4ff', marginBottom: '16px' }}
            />
            <h3
              className="text-xl font-bold !mb2"
              style={{ color: '#ffffff' }}
            >
              Let&apos;s Connect
            </h3>
            <p
              className="text-sm leading-relaxed !mb8"
              style={{ color: '#475569' }}
            >
              Whether you have a project in mind, want to discuss ideas, or
              just say hi — my inbox is always open.
            </p>

            <div className="flex flex-col gap-4">
              {SOCIALS.map(({ icon: Icon, label, handle, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl transition-all"
                  style={{
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}30`
                    e.currentTarget.style.background = `${color}08`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      'rgba(255,255,255,0.06)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  }}
                >
                  <div
                    className="p-2 rounded-xl flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#e2e8f0' }}
                    >
                      {label}
                    </p>
                    <p className="text-xs" style={{ color: '#475569' }}>
                      {handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{ padding: '32px' }}
          >
            <h3
              className="text-xl font-bold !mb-6"
              style={{ color: '#ffffff' }}
            >
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={set('name')}
                  required
                  style={INPUT_STYLE}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={set('email')}
                  required
                  style={INPUT_STYLE}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={set('subject')}
                required
                style={INPUT_STYLE}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, blurStyle)}
              />
              <textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={set('message')}
                required
                rows={5}
                className="custom-scrollbar"
                style={{ ...INPUT_STYLE, resize: 'none' }}
                onFocus={(e) => Object.assign(e.target.style, { ...focusStyle })}
                onBlur={(e) => Object.assign(e.target.style, { ...blurStyle })}
              />
              <button
                type="submit"
                disabled={isSending}
                className="flex items-center justify-center gap-2 w-full rounded-xl font-semibold text-sm transition-opacity"
                style={{
                  padding: '14px',
                  background:
                    'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  opacity: isSending ? 0.65 : 1,
                  cursor: isSending ? 'not-allowed' : 'pointer',
                  boxShadow: isSending
                    ? 'none'
                    : '0 0 20px rgba(0,212,255,0.3)',
                }}
              >
                {isSending ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{
          marginTop: '80px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <p className="text-sm" style={{ color: '#374151' }}>
          Designed &amp; Built by{' '}
          <span style={{ color: '#00d4ff' }}>Vara Prasad K</span> &nbsp;·&nbsp;
          2024
        </p>
      </motion.div>
    </section>
  )
}
