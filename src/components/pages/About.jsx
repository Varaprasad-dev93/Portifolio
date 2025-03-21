import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import Main from '../3dAnimations/Main';
const Div=styled.div`
position:absolute;
left:10%;
margin-top:10%;
@media (max-width:768px){
margin-top:20%;
z-index:3;
transition:2s;
width:90%;
}
`
const H4=styled(motion.h4)`
padding:5px;
`
const P=styled(motion.p)`
background-color:blue;
height:4px;
border:1px solid white;
border-right:none;
`
export default function About() {
  const skills=[
    {
      'name':'React js',
      'value':'80%',
      'level':'Intermedialte'
    },
    {
      "name":"scoket.io",
      "value":"70%",
      "level":'Intermediate'
    },
    {
      "name":"express",
      "value":"70%",
      "level":'Intermediate'
    },
    {
      'name':'python',
      'value':'70%',
      'level':'Intermedialte'
    },
    {
      'name':'numpy',
      'value':'80%',
      'level':'Intermediate'
    },
    {
      'name':'pandas',
      'value':'75%',
      'level':'Intermediate'
    },
    {
      'name':'C',
      'value':'70%',
      'level':'Intermediate'
    },
    {
      'name':'Three js',
      'value':'70%',
      'level':'Intermediate'
    },
    {
      'name':'Blender 3d tool',
      'value':'60%',
      'level':'Intermedaite'
    }
  ]
  const Skill=(props)=>{
    const {skill}=props;
    const index=skill.index;
    return(
      <div key={index} style={{
        'marginBottom':'50px'
      }}>
      <H4 className='text-xl'
      initial={{
        x:-25,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:2,
        delay:1
      }}
      >{skill.name}--<span className='text-[10px]'>{skill.level}</span></H4>
      <P style={{'width':`${skill.value}`}}
      initial={{
        scaleX:0,
        originX:0
      }}
      whileInView={{
        scaleX:1,
        opacity:1
      }}
      transition={{
        duration:1,
        delay:1 + index * 0.2
      }}
      ></P>
      </div>
    )
  }
  const Skills=()=>{
    return(
      <div>
        <h1 className='!mt-[20px] !p-[10px] text-2xl !underline'>Skills/Tools</h1>
        {
          skills.map((skill,index)=>(
            // console.log(index);
            <Skill skill={skill} index={index}/>
          ))
        }
      </div>
    )
  }
  const Education=()=>{
    const edu=[
      {
        'name':'RVR and JC college of engineering',
        'course':'Btech',
        'score':'8.7',
        'complete':'2022-2026'
      },
      {
        'name':'Royal jr college  Addanki',
        'course':'Mpc',
        'score':'97%',
        'complete':'2020-2022'
      },
      {
        'name':'ZP High School Thimmayapalem',
        'course':'10th',
        'score':'95%',
        'complete':"2019-2020"
      }
    ]
    const Edu=(props)=>{
        const {course}=props;
        // console.log(course)
        return(
          <div key={course.index} style={{
            'marginBottom':'20px'
          }}>
            <H4 className='text-xl'
             initial={{
              opacity:0
            }}
            whileInView={{
              opacity:1
            }}
            transition={{
              duration:2,
              delay:1
            }}
            >{course.name} -- {course.course}</H4>
            <motion.p
            style={{
              'paddingLeft':'30px'
            }}
             initial={{
              x:-25,
              opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:2,
              delay:1
            }}
            >Score : {course.score}<br/>
            Year of Study : {course.complete}</motion.p>
          </div>
        )
    }
    return(
      <div>
        <h1 className='!mt-[20px] !p-[10px] text-2xl !underline'>Education</h1>
          {
            edu.map((course,index)=>(
              <Edu course={course} index={index}/>
            ))
          }
      </div>
    )
  }
  return (
    <>
    <Div>
      <h1 className="text-4xl !pl-[20%] !pb-[5%] !underline">About Me</h1>
      <p className='md:w-[50%] sm:w-[90%]'>🚀 I am a passionate and eager-to-learn student seeking an internship in web development. I have hands-on experience with frontend technologies like ⚛️ React and 🎨 Three.js for 3D interactions, along with 🏗️ Blender for 3D modeling. On the backend, I am proficient in 🖥️ Express, 🔗 Socket.io, 🔒 bcrypt, and 🗂️ Mongoose for building scalable and secure applications. Currently, I am expanding my knowledge in 📊 data science, 🤖 machine learning, and 🧠 AI. I am always excited to take on new challenges and grow as a developer!</p>
      <Education/>
      <Skills/>
    </Div>
    <Main/>
    </>
  )
}
