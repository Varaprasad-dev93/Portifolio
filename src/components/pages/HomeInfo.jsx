import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Div = styled.div`
  position: absolute;
  top: 55%;
  padding: 5%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 5% 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

const StyledButton = styled(motion.a)`
  padding: 12px 24px;
  color: white;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.3s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: white;
    color: black;
  }
`;

const Buttons = () => {
  const ResumePdf =
    'https://drive.google.com/file/d/1-ghH4RPHl6AcuXt57kcOlN54tS8DAor0/view?usp=drivesdk';
  return (
    <ButtonContainer>
      <StyledButton
        href={ResumePdf}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        Resume
      </StyledButton>
      <StyledButton
        href="mailto:varaprasad3441@gmail.com"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        Hire Me
      </StyledButton>
    </ButtonContainer>
  );
};

const MoveWords = () => {
  const tyRef = useRef(null);
  const tyInsta = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Designer', 'Programmer', 'Full Stack Developer', '3D Web Designer'],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000
    };

    tyInsta.current = new Typed(tyRef.current, options);
    return () => tyInsta.current.destroy();
  }, []);

  return (
    <>
      <motion.h1
        className="text-5xl sm:text-6xl text-white font-bold rounded-lg"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        Vara Prasad K
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl mt-4 text-gray-300"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        I'm a <span ref={tyRef} className="text-white font-semibold" />
      </motion.h2>

      <motion.p
        className="text-gray-300 mt-4 md:w-[70%] leading-relaxed text-sm sm:text-base"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        🎓 I am a Computer Science and Engineering student at{' '}
        <strong>RVR & JC College of Engineering</strong>. With a strong foundation in software
        development, I am passionate about exploring and adapting to new technologies. I thrive on
        solving complex problems, continuously expanding my skill set, and staying updated with the
        latest advancements in the tech world. My enthusiasm for learning drives me to take on new
        challenges and contribute meaningfully to innovative projects.
      </motion.p>

      <motion.blockquote
        className="italic text-gray-400 mt-6 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        “Code is not just logic. It’s art, expressed through problem-solving.”
        <p className='place-self-end'>- Vara</p>
      </motion.blockquote>
    </>
  );
};

export default function HomeInfo() {
  return (
    <Div>
      <MoveWords />
      <Buttons />
    </Div>
  );
}
