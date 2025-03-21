import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Shipping from './Shipping'
import { OrbitControls } from '@react-three/drei'
const Canva=styled(Canvas)`
width:100%;
top:-5%;
left:25%;
height:100%;
z-index:2;
transition:2s;
  @media (max-width: 768px) {
    left: 15%; // Adjust positioning for smaller screens
    width: 100%;
    display:none;
  }
`
export default function Main() {
  return (
    <>
    <Canva
    style={{
      'position':'absolute',
      'height':'100vh',
      'top':'-3%',
      'left':location.pathname=='/'?'-25%':'30%'
      }} camera={{position:[0,13,10],fov:60}}>
          <Shipping/>
          <OrbitControls enableZoom={false} enableDamping dampingFactor={0.1}
          rotateSpeed={0.2}
          />
    </Canva>
    </>
  )
}
