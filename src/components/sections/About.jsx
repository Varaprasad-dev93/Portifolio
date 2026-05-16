import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, Layers3 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Full Stack",
    desc: "React · Node.js · Express · MongoDB",
    color: "#00d4ff",
  },
  {
    icon: Brain,
    label: "AI / ML",
    desc: "Python · NumPy · Pandas · scikit-learn",
    color: "#8b5cf6",
  },
  {
    icon: Layers3,
    label: "3D Web",
    desc: "Three.js · React Three Fiber · Blender",
    color: "#f472b6",
  },
  {
    icon: GraduationCap,
    label: "Education",
    desc: "B.Tech CSE — 8.7 CGPA",
    color: "#34d399",
  },
];

const education = [
  {
    name: "RVR & JC College of Engineering",
    degree: "B.Tech — Computer Science & Engineering",
    score: "8.7 CGPA",
    years: "2022 – 2026",
  },
  {
    name: "Royal Jr. College, Addanki",
    degree: "Intermediate — MPC",
    score: "97%",
    years: "2020 – 2022",
  },
  {
    name: "ZP High School, Thimmayapalem",
    degree: "10th Grade (SSC)",
    score: "95%",
    years: "2019 – 2020",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col !pt-10 !px-2"
    >
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center flex justify-center flex-col"
        style={{ marginBottom: "64px" }}
      >
        <p
          className="text-sm font-semibold tracking-widest uppercase !mb-3"
          style={{ color: "#00d4ff" }}
        >
          Who I am
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            color: "#f1f5f9",
          }}
        >
          About Me
        </h2>
        <div className="section-divider" style={{ marginTop: "16px" }} />
      </motion.div>

      <div className="max-w-6xl !mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          {/* Main Bio Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="glass relative overflow-hidden rounded-3xl border border-white/10 !p-8 md !mt10"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

            {/* Small intro */}
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 font-semibold !mb5">
              Software Engineer · AI Developer
            </p>

            {/* Heading */}
            <h3
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#f8fafc",
              }}
            >
              Building intelligent digital experiences with{" "}
              <span className="text-cyan-400">AI</span>,{" "}
              <span className="text-cyan-400">3D web</span>, and scalable
              systems.
            </h3>

            {/* Paragraph */}
            <p
              className="mt-6 text-[15px] leading-8"
              style={{ color: "#cbd5e1" }}
            >
              I&apos;m <span className="font-semibold text-white">Vara</span>, a
              Computer Science graduate from{" "}
              <span className="text-cyan-400 font-semibold">
                RVR &amp; JC College of Engineering
              </span>
              . I specialize in full-stack development, AI-powered applications,
              computer vision, automation systems, and immersive 3D web
              experiences.
            </p>

            <p
              className="mt-5 text-[15px] leading-8"
              style={{ color: "#94a3b8" }}
            >
              My focus is not just building projects — but engineering products
              that combine performance, scalability, user experience, and modern
              visual design. I enjoy turning ambitious ideas into real-world
              systems with meaningful impact.
            </p>

            {/* Quote */}
            <div className="mt-8 border-l-2 border-cyan-400 !pl-5">
              <p className="italic text-sm text-slate-400 leading-7">
                “I don&apos;t just build interfaces. I build systems that
                combine intelligence, engineering, and design.”
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i + 1}
                className="glass group rounded-2xl border border-white/5 !p-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center !mb-4"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={20} style={{ color }} />
                </div>

                <h4 className="font-semibold text-white text-sm">{label}</h4>

                <p className="text-xs !mt-2 leading-6 text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="glass rounded-3xl border border-white/10 !p-8 md:!p-10 h-full"
        >
          <div className="flex items-center gap-3 !mb10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
              <GraduationCap size={20} className="text-cyan-400" />
            </div>

            <div>
              <p className="text-white font-bold text-lg">Education</p>
              <p className="text-slate-500 text-sm">
                Academic journey & achievements
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[10px] top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,212,255,0.6), transparent)",
              }}
            />

            <div className="flex flex-col gap-20 !pt-10">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i + 3}
                  className="relative !pl-10"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-cyan-400 bg-[#050816] shadow-[0_0_15px_rgba(0,212,255,0.35)]" />

                  <h4 className="text-white font-semibold leading-6">
                    {edu.name}
                  </h4>

                  <p className="text-cyan-400 text-sm !mt-1">{edu.degree}</p>

                  <div className="flex items-center gap-4 !mt-2 text-xs text-slate-500">
                    <span>{edu.years}</span>

                    <span className="text-emerald-400 font-semibold">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
