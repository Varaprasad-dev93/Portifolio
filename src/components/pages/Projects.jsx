import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import flappyBird from "../../assets/Flappybird.jpg";
import Planets from "../../assets/planetary.jpeg";
import ChatImg from "../../assets/meetme.png";
export default function Projects() {
  const projects = [
    {
      name: "chatAll",
      img: ChatImg,
      type: "Chat application",
      githublink: "https://github.com/Varaprasad-dev93/fullStackChatApp.git",
      link: "https://fullstackchatapp-3je7.onrender.com",
      description: `ChatAll is a versatile web application that combines an online code editor with real-time chat functionality.
🔹 Code Editor – Write, compile, and run Python, C, C++, and Java directly in your browser.
🔹 User Chat – Connect with other programmers and discuss coding ideas.
🔹 AI Chatbot – Get instant coding help from an AI-powered assistant.
🔹 Seamless Login – Securely log in to access personalized features.

Whether you're collaborating on projects, troubleshooting code, or seeking AI-powered coding assistance, ChatAll provides a smooth and interactive experience for developers of all levels! 🚀`,
    },
    {
      name: "Voice Translator",
      img: "",
      type: "Translation",
      link: "https://voicetranslating.netlify.app/",
      githublink: "https://github.com/Varaprasad-dev93/Voice-Translation.git",
      description:
        "An intuitive voice translation web application focused on supporting major Indian languages. With a minimal and modern interface, users can speak and instantly receive translations in their chosen Indian language — ideal for regional communication and accessibility.💡 Core Features:🎙️ Speech Recognition for real-time voice input 🌐 Live Translation between English and popular Indian languages 🇮🇳 Supports: Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Punjabi, Malayalam, Kannada, Odia🤖 Interactive 3D Robot adds a fun, engaging visual element ⚛️ Built using React, Three.js, Tailwind CSS, and Zustand Perfect for users looking to communicate across India’s diverse linguistic landscape, in a stylish and interactive way.",
    },
    {
      name: "Flappy Bird",
      type: "Game",
      img: flappyBird,
      link: "https://varaprasad-dev93.github.io/flappyBird/flapBird.html",
      githublink: "https://github.com/Varaprasad-dev93/flappyBird.git",
      description: `The Flappy Bird game is a browser-based recreation of the original classic, built with HTML, CSS, and JavaScript.

\n🔹 Smooth Animations – Enjoy fluid motion and responsive gameplay.
🔹 Collision Detection – Ensures realistic interactions with obstacles.
🔹 Progressive Difficulty – The game gets harder as you advance.
🔹 Easy Controls – Tap the screen or press the spacebar to flap and avoid obstacles.

Test your reflexes and see how far you can go in this addictive and challenging arcade game! 🎮🚀`,
    },
    {
      name: "Planetary Model",
      img: Planets,
      type: "3D Model",
      githublink: "https://github.com/Varaprasad-dev93/Planets.git",
      link: "https://planets-18f6.onrender.com",
      description: `The Planetary Model is an interactive 3D simulation of the solar system, built using Three.js.

🔹 Realistic Representation – Accurately models planets with detailed textures and smooth animations.
🔹 Rotating Planets – Each planet rotates dynamically, mimicking real-world motion.
🔹 User Interaction – Navigate the solar system, zoom in on planets, and explore celestial bodies.
🔹 Customizable Lighting – Adjust lighting effects for a more immersive experience.

Experience the wonders of space with this visually engaging and educational 3D model! 🚀`,
    },
  ];
  const Mdiv = styled(motion.div)`
    display: flex;
    height: 60vh;
    width: 80%;
    flex-direction: row;
    align-items: flex-start;
    padding: 50px;
    margin: 50px;
    @media (max-width: 769px) {
      flex-direction: column;

      height: 80%;
      width: 80%;
      z-index: 1;
    }
  `;
  const Button = styled.button`
    z-index: 2;
    border-radius: 20%;
    padding: 5px;
    // margin:50px;
    color: white;
    background-color: transparent;
  `;
  const ProjectInfo = (props) => {
    // console.log(props)
    const { project } = props;
    let val = project.index;
    return (
      <Mdiv
        className="flex overflow-y-scroll custom-scrollbar gap-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300"
        key={val}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <img
          src={project.img}
          onClick={() => {
            window.open(project.link, "_blank");
          }}
          className="w-[200px] h-[200px] m-[10px] z-2"
        ></img>
        <div className="z-1">
          <h3 className="text-2xl">{project.name}</h3>
          <p className="mt-[10px] w-[100%] whitespace-pre-line text-white text-sm">
            Type:{project.type}
            <br />
            <br />
            Description:{project.description}
            <br />
            <br />
          </p>
          <div className="flex justify-between">
            <Button
              className="px-6 py-2 border border-white/30 bg-white/10 backdrop-blur-lg text-white rounded-lg shadow-md transition-all hover:bg-white/20 hover:border-white/50"
              onClick={() => window.open(project.githublink, "_blank")}
            >
              Github
            </Button>
            <Button
              className="px-6 py-2 border border-white/30 bg-white/10 backdrop-blur-lg text-white rounded-lg shadow-md transition-all hover:bg-white/20 hover:border-white/50"
              onClick={() => window.open(project.link, "_blank")}
            >
              Live Demo
            </Button>
          </div>
        </div>
      </Mdiv>
    );
  };
  return (
    <>
      <div className="absolute left-[2%] h-[100%] w-[100%] !mt-[10%]">
        {projects.map((project, index) => (
          <ProjectInfo project={project} index={index} />
        ))}
      </div>
    </>
  );
}
