import { OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import HomeInfo from './HomeInfo'
import Home_interface from '../3dAnimations/Home_interface'
import Main from '../3dAnimations/Main'
const Div=styled.div`
width:100%;
display:flex;
flex-direction:column;
`
const Canva=styled(Canvas)`
width:100%;
height:auto;
position:absolute;
// top:50%;
// pointer-events:none;
// background-color:white;
left:30%;
z-index:1;
transition:2s;
  @media (max-width: 768px) {
    left: 0; // Adjust positioning for smaller screens
    // top:-5%;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    top:-5%;
    left: -5%; // Adjust for medium-sized screens
  }
`;
export default function Home() {
  console.log(location.pathname)
  return (
    <Div>
      <HomeInfo/>
    <Canva camera={{position:[0,3,10],fov:60}}>
      <OrbitControls/>
      <Home_interface/>
    </Canva>
    <Main/>
    </Div>
  )
}
