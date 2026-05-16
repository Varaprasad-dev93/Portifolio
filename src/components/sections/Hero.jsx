import { useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const HeroScene = lazy(() => import("../3d/HeroScene"));

const RESUME =
  "https://drive.google.com/file/d/1-ghH4RPHl6AcuXt57kcOlN54tS8DAor0/view?usp=drivesdk";

const SOCIALS = [
  {
    icon: Github,
    href: "https://github.com/Varaprasad-dev93",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/varaprasad-kandula-23820a291/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:varaprasad3441@gmail.com", label: "Email" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "AI Full Stack Developer",
        "3D Web Engineer",
        "Digital Twin Enthusiast",
        "Software Developer",
      ],
      loop: true,
      typeSpeed: 52,
      backSpeed: 26,
      backDelay: 2000,
    });
    return () => typedInstance.current?.destroy();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Single subtle gradient fog — very restrained */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,212,255,0.04) 0%, transparent 100%)",
        }}
      />

      <div
        className=" max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center !pt-28 !pb-16"
      >
        {/* ── Left: Copy ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 relative z-10 order-2 lg:order-1 !px-16"
        >
          {/* Availability badge */}
          <motion.div variants={fadeUp} style={{ display: "flex" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 9999,
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.18)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#00d4ff",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00d4ff",
                  boxShadow: "0 0 6px #00d4ff",
                  animation: "pulse 2s infinite",
                }}
              />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUp}>
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              <span style={{ color: "#f1f5f9" }}>Vara</span>
              <br />
              <span className="gradient-text">Prasad K</span>
            </h1>
          </motion.div>

          {/* Typed role */}
          <motion.p
            variants={fadeUp}
            style={{ fontSize: "1.15rem", color: "#64748b", fontWeight: 500 }}
          >
            <span
              ref={typedRef}
              style={{ color: "#00d4ff", fontWeight: 600 }}
            />
          </motion.p>

          {/* Description — max 2 lines */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "0.95rem",
              color: "#475569",
              lineHeight: 1.7,
              maxWidth: 440,
            }}
          >
            Building immersive 3D web experiences, AI-powered products, and
            scalable full-stack systems that stand out.
          </motion.p>

          {/* CTA — exactly 2 buttons */}
          <motion.div
            variants={fadeUp}
            className="flex gap-6 flex-nowrap w-full"
          >
            {/* Primary */}
            <button
              onClick={() => scrollTo("projects")}
              className="flex-1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 12,
                background: "#00d4ff",
                color: "#050510",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "0 0 0 rgba(0,212,255,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 24px rgba(0,212,255,0.45)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(0,212,255,0)";
                e.currentTarget.style.transform = "none";
              }}
            >
              View Projects <ArrowRight size={15} />
            </button>

            {/* Secondary */}
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "#f1f5f9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.transform = "none";
              }}
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: 10, marginTop: 4 }}
          >
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#475569",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00d4ff";
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                  e.currentTarget.style.background = "rgba(0,212,255,0.06)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#475569";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: 3D scene ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            height: "clamp(400px, 55vh, 620px)",
            position: "relative",
          }}
          className="order-1 lg:order-2 w-full"
        >
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    animation: "spin 0.9s linear infinite",
                  }}
                />
              </div>
            }
          >
            <HeroScene />
          </Suspense>

          {/* Bottom fade */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background: "linear-gradient(to top, #050510, transparent)",
              pointerEvents: "none",
            }}
          />

          {/* Left fade */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "22%",
              background: "linear-gradient(to right, #050510 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "18%",
              background: "linear-gradient(to left, #050510 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; }
          50% { opacity:0.4; }
        }
            
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
            
        @media (max-width: 768px) {
          #home {
            padding-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}
