import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js';
import resume from '../../assets/Resume.pdf'
import {motion} from 'framer-motion'
const Div=styled.div`
position:absolute;
top:55%;
padding:5%;
z-index:2;
`;
const Button=styled.div`
  padding:30px;
  z-index:2;
  margin:20px;
`;
const A=styled(motion.a)`
color:white;
padding:10px;
margin:20px;
border:1px solid white;
borderRadius:10%;
`
const Buttons=()=>{
  const ResumePdf=import.meta.env.VITE_RESUMEPDF;
  return (
    <Button>
      <A
      initial={{
        opacity:0,
        y:25,
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:1.5,
        delay:1.5
      }}
       href={{ResumePdf}}>Resume</A>
      <A
      initial={{
        opacity:0,
        y:25,
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:1.5,
        delay:1.5
      }}
       href="mailto:varaprasad3441@gmail.com">Hire Me</A>
    </Button>
  )
}
const MoveWords=()=>{
  const tyRef=useRef(null);
  const tyInsta=useRef(null);
  useEffect(()=>{
    const options={
      strings:['Web Designer,',"Programmer,",'Full Stack Developer,','3d-web designer,'],
      backSpace:50,
      loop:true,
      typeSpeed:50,
      backSpeed:25,
      backDelay:1000,
    };
    tyInsta.current=new Typed(tyRef.current,options);
    return ()=>{
      tyInsta.current.destroy();
    };
  },[])
    return (
      <>
      <motion.h1 style={{
        'fontSize':'50px',
        // 'backgroundColor':'rgba(0,0,0,0.5)',
        'color':'text-gray-200',
        'width':'40%',
        'padding':'10px',
        'borderRadius':'10%'
      }}
        initial={{
          opacity:0,
          y:25,
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1.5,
          delay:1
        }}
        >Vara Prasad K</motion.h1><br/>
       <motion.h2 className="text-2xl md:text-3xl mt-4"
       initial={{
        opacity:0,
        y:25,
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:1.5,
        delay:1.5
      }}
       >I'm a <span ref={tyRef}></span></motion.h2><br/>
       <motion.p style={{'width':'60%'}}
       initial={{
        opacity:0,
        y:25,
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:1.5,
        delay:2
      }}
       >🎓 I am a Computer Science and Engineering student at <b>RVR & JC College of Engineering</b>. With a strong foundation in software development, I am passionate about exploring and adapting to new technologies. I thrive on solving complex problems, continuously expanding my skill set, and staying updated with the latest advancements in the tech world. My enthusiasm for learning drives me to take on new challenges and contribute meaningfully to innovative projects.</motion.p>
      </>
    )
};
export default function HomeInfo() {
  return (
    <Div>
        <MoveWords/>
        <Buttons/>
    </Div>
  )
}
