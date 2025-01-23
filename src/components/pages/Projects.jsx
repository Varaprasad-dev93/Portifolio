import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import flappyBird from '../../assets/Flappybird.jpg'
import Planets from '../../assets/planetary.jpeg'
export default function Projects() {
  const projects=[
    {
      'name':'Flappy Bird',
      'type':'Game',
      'img':flappyBird,
      'link':'#',
      'githublink':'#',
      'description':'This was designed using html,css and javascript'
    },
    {
      'name':'Planatery Model',
      'img':Planets,
      'type':'3d-model',
      'githublink':'#',
      'link':'#',
      'description':'This is designed using thress js library'
    }
  ]
  const Mdiv=styled(motion.div)`
          display:flex;
          height:50vh;
          flex-direction:row;
          align-items:flex-start;
          padding:50px;
          margin:50px;
          @media (max-width: 769px) {
          flex-direction:column;
          margin-bottom:150px;
          z-index:1;
        }
  `
  const Button = styled.button`
  z-index:2;
  border-radius:20%;
  padding:5px;
  margin:50px;
  color:white;
  background-color:transparent;
  `
  const ProjectInfo=(props)=>{
    console.log(props)
    const {project}=props;
    let val=project.index
    return(
        <Mdiv
        initial={
          {
            opacity:0,
            x:-50
          }
        }
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:2,
          delay:2
        }}
          >
        <img 
        src={project.img} 
        onClick={project.link} 
        style={{
          'width':'300px',
          'height':'300px',
          'margin':'50px',
          'zIndex':'2'
        }}
        ></img>
        <div style={{'zIndex':'1'}}>
          <p style={{'margin':'50px','width':'60%'}}>
            Type:{project.type}<br/><br/>
            Description:{project.description}<br/><br/>
          </p>
          <Button onClick={project.githublink}>Github</Button>
        </div>
        </Mdiv>
    )
  }
  return (
    <div style={{'position':'absolute','left':'2%'}}>
      {projects.map((project,index)=>(
        <ProjectInfo project={project} index={index}/>
      ))}
    </div>
  )
}
