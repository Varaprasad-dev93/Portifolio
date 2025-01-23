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
       href={{resume}} download="Resume.pdf">Resume</A>
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
      strings:['Web Designer,',"Programmer,",'Developer,','3d-web designer,'],
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
        'color':'black',
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
       <motion.h2
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
       >I am a currenrtly pursuing at 
        <b> Rvr and jc college of engineering </b> 
         Computer Science and Eng department.I am a person who is eager to learn and adapt to new technologies</motion.p>
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
