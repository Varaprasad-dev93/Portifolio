import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Main from "../3dAnimations/Main";
import SkillDzire from "../../assets/certificates/Skilldzireintern.jpg";
import python from "../../assets/certificates/Python Nptel.jpg";
import nptelJava from "../../assets/certificates/Java Nptel.jpg";
import nptelEbusiness from "../../assets/certificates/Nptel-EBusiness.jpg";
import IntellipaatSQL from "../../assets/certificates/intellipaat-SQL.jpg";
import restapi from "../../assets/Rest Api.png";
import zustand from "../../assets/Zustand.jpeg";
import seaborn from "../../assets/Seaborn.png";
import framermotion from "../../assets/Framer-motion.png";
const Div = styled.div`
  position: absolute;
  left: 10%;
  margin-top: 10%;
  max-width: 80%;
  @media (max-width: 768px) {
    margin-top: 20%;
    width: 90%;
  }
`;

const H4 = styled(motion.h4)`
  padding: 5px;
  font-weight: bold;
`;

const P = styled(motion.p)`
  background-color: #60a5fa;
  height: 4px;
  border-radius: 10px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 20px;
  margin-top: 30px;
`;

export default function About() {
  const [selectedImg, setSelectedImg] = useState(null);

  const education = [
    {
      name: "RVR and JC College of Engineering",
      course: "B.Tech",
      score: "8.7",
      complete: "2022–2026",
    },
    {
      name: "Royal Jr. College, Addanki",
      course: "MPC",
      score: "97%",
      complete: "2020–2022",
    },
    {
      name: "ZP High School, Thimmayapalem",
      course: "10th",
      score: "95%",
      complete: "2019–2020",
    },
  ];

  const certificates = [
    {
      title: "MS SQL Certification",
      platform: "Intellipaat",
      year: "2024",
      image: IntellipaatSQL,
      link: "",
    },
    {
      title: "Joy of Computing Using Python",
      platform: "NPTEL",
      year: "2023",
      image: python,
      link: "",
    },
    {
      title: "Machine Learning Internship",
      platform: "SkillDzire",
      year: "2024",
      image: SkillDzire,
      link: "",
    },
    {
      title: "Java Programming",
      platform: "Nptel",
      year: "2023",
      image: nptelJava,
      link: "",
    },
    {
      title: "E-Business",
      platform: "Nptel",
      year: "2023",
      image: nptelEbusiness,
      link: "",
    },
  ];

  const skills = [
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      value: 80,
    },
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      value: 70,
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      value: 80,
    },
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      value: 70,
    },
    {
      name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      value: 80,
    },
    {
      name: "Matplotlib",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
      value: 75,
    },
    {
      name: "Framer Motion",
      image: framermotion,
      value: 70,
    },
    {
      name: "Zustand",
      image: zustand,
      value: 70,
    },
    {
      name: "Seaborn",
      image: seaborn,
      value: 75,
    },
    {
      name: "RESTful APIs",
      image: restapi, // generic API icon
      value: 70,
    },
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      value: 80,
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      value: 80,
    },
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      value: 70,
    },
    {
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      value: 70,
    },
    {
      name: "Postman",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      value: 70,
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      value: 60,
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      value: 70,
    },
    {
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      value: 70,
    },
    {
      name: "Mongoose",
      image: "https://cdn.simpleicons.org/mongoose",
      value: 70,
    },
    {
      name: "Bcrypt",
      image: "https://cdn.simpleicons.org/bcrypt",
      value: 70,
    },
    {
      name: "Socket.io",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      value: 70,
    },
    {
      name: "Express",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      value: 70,
    },
    {
      name: "NumPy",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      value: 80,
    },
    {
      name: "Pandas",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      value: 75,
    },
    {
      name: "C",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      value: 70,
    },
    {
      name: "Three.js",
      image: "https://cdn.simpleicons.org/three.js",
      value: 70,
    },
    {
      name: "Blender",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      value: 60,
    },
  ];

  const Edu = ({ course, index }) => (
    <div key={index} className="!mb-4">
      <H4
        className="text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 * index }}
      >
        {course.name} — {course.course}
      </H4>
      <motion.p
        className="!pl-6 text-sm"
        initial={{ x: -25, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
      >
        Score: {course.score}
        <br />
        Year of Study: {course.complete}
      </motion.p>
    </div>
  );

  const CircularSkill = ({ skill, index }) => {
    const baseSize = 100;
    const smallSize = 80;
    const radius = 35; // reduced for smaller layout
    const stroke = 5;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.value / 100) * circumference;

    return (
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 * index, duration: 0.6 }}
      >
        <svg
          className="!w-[80px] !h-[80px] sm:!w-[100px] sm:h-[100px]"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#555"
            strokeWidth={stroke}
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="white"
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1 + index * 0.2 }}
          />
          <image href={skill.image} x="30" y="30" height="40" width="40" />
        </svg>
        <p className="text-white !mt-2 text-xs sm:text-sm text-center">
          {skill.name}
        </p>
      </motion.div>
    );
  };

  const Certificates = () => (
    <Card>
      <h1 className="text-2xl font-semibold !underline !mb-4">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            onClick={() => setSelectedImg(cert.image)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto rounded-md border border-gray-300 shadow-md"
              loading="lazy"
            />
            <p className="text-sm text-white !mt-2">
              {cert.title} — {cert.platform} ({cert.year})
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!ml-2 !underline text-blue-300"
                >
                  View
                </a>
              )}
            </p>
          </motion.div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </Card>
  );

  return (
    <>
      <Div>
        <h1 className="text-4xl font-bold !underline !mb-6">About Me</h1>
        <p className="text-white leading-relaxed md:w-[70%] sm:w-[90%] !mb-10">
          I am a passionate and eager-to-learn student seeking an internship in
          web development. I have hands-on experience with frontend technologies
          like React and Three.js for 3D interactions, and Blender for 3D
          modeling. On the backend, I work with Express, Socket.io, bcrypt, and
          Mongoose to build scalable, secure applications. I am currently
          exploring data science, machine learning, and AI, and love taking on
          new challenges as a developer.
        </p>

        <Card>
          <h1 className="text-2xl font-semibold !underline !mb-4 ">
            Education
          </h1>
          {education.map((course, index) => (
            <Edu key={index} course={course} index={index} />
          ))}
        </Card>

        <Card>
          <h1 className="text-2xl font-semibold !underline !mb-4">Skills</h1>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 place-items-center">
            {skills.map((skill, index) => (
              <CircularSkill key={index} skill={skill} index={index} />
            ))}
          </div>
        </Card>

        <Certificates />
      </Div>

      <Main />
    </>
  );
}
