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
@media (max-width : 768px){
top:40%;
}
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
      'name':'Html',
      'value':'90%',
      'level':'Intermedialte'
    },
    {
      'name':'Css',
      'value':'90%',
        'level':'Intermedialte'
    },
    {
      'name':'Javascript',
      'value':'85%',
      'level':'Intermedialte'
    },
    {
      'name':'React js',
      'value':'80%',
      'level':'Intermedialte'
    },
    {
      'name':'python',
      'value':'70%',
      'level':'Intermedialte'
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
      <H4
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
      >{skill.name}--{skill.level}</H4>
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
        <h1 style={{'padding':'10px','marginTop':'10px','textDecoration':'underline'}}>Skills/Tools</h1>
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
        'score':'8.8',
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
        'course':'',
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
            <H4
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
        <h1 style={{'padding':'10px','marginTop':'10px','textDecoration':'underline'}}>Education</h1>
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
    <Div >
      <Education/>
      <Skills/>
    </Div>
    <Main/>
    </>
  )
}
