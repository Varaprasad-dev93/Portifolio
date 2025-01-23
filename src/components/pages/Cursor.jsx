import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Sound from '../../assets/portifiloSound.mp3'
import soundOff from '../../assets/soundOff.png'
import soundOn from '../../assets/soundOn.png'
const Div=styled(motion.div)`
  position:absolute;
  width:30px;
  height:30px;
  z-index:4;
  pointer-events:none;
  background-color:transparent;
  border-radius:50%;
  border:1px solid white;
  box-shadow:0px 0px 10px white;
  opacity:0;
  font-size:8px;
  color:black;
  transition:-2s;
  text-align:center;
`
export default function Cursor() {
  const mouseRef=useRef();
  const [off,setOff]=useState(1);
  const audio = useRef(new Audio(Sound)).current;
  audio.volume=0.5;
  useEffect(()=>{
    const mouseListener=window.addEventListener('mousemove',(e)=>{
      let x=mouseRef.current.offsetHeight;
      let y=mouseRef.current.offsetWidth;
      // console.log(e.target.tagName)
      if(e.target.tagName.toLowerCase()=='button'||
      e.target.tagName.toLowerCase()=='img'||
      e.target.tagName.toLowerCase()=='a'||
      e.target.style.cursor=='pointer'
    ){
        mouseRef.current.style.scale=2;
        mouseRef.current.style.backgroundColor='white'
      }
      else{
        mouseRef.current.style.scale=1;
        mouseRef.current.innerHTML='';
        mouseRef.current.style.backgroundColor='transparent'
      }
      setTimeout(()=>{
        mouseRef.current.style.opacity=1;
        mouseRef.current.style.left=`${e.pageX-x/2}px`;
        mouseRef.current.style.top=`${e.pageY-y/2}px`;
      },10)
    }
    )
    return()=>{window.removeEventListener('mousemove',mouseListener)}
  },[])
  return (
    <>
    <Div 
    ref={mouseRef}
    ></Div>
    <img 
    style={{'backgroundColor':'white',
      'boxShadow':'0px 0px 5px 5px white',
      'width':'30px',
      'height':'auto',
      'position':'fixed',
      'bottom':'0%',
      'right':'0%',
      'borderRadius':'50%',
      'zIndex':'6',
      'cursor':'pointer'
    }}
    src={off?soundOff:soundOn} 
    onClick={
      ()=>{
        setOff(!off);
        if(off){
          console.log('Hit1');
          audio.play();
        }
        else{
          console.log('Hit2');
          audio.pause();
        }
       
      }}
    ></img>
    </>
  )
}

