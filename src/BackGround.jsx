import { OrbitControls, Points, useTexture } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Eye from '../src/assets/Eye.png'
import Env from '../src/assets/EyeEnv.png'
import * as THREE from 'three'
import { EquirectangularReflectionMapping, TextureLoader } from 'three';
const Canva=styled(Canvas)`
position:fixed;
left:-5%;
z-index:1;
background-color:transparent;
transition:2s;
@media (min-width: 769px) and (max-width: 1200px) {
    left: -15%; // Adjust for medium-sized screens
  }
`;
export default function BackGround() {
    const Sceen=()=>{
        let Inc=0;
        const texture=useTexture(Eye);
        const EnvMap=useLoader(TextureLoader,Env);
        EnvMap.mapping=EquirectangularReflectionMapping;
        const sphereRef=useRef();
        const mouse=new THREE.Vector2();
        const target=new THREE.Vector3();
        useEffect(()=>{
          const handleEye=(event)=>{
            mouse.x=-(event.clientX/window.innerWidth)*4+1;
            mouse.y=(event.clientY/window.innerHeight)*20-1
          }
          window.addEventListener('mousemove',handleEye)
          return()=>{window.removeEventListener('mousemove',handleEye)};
        },[])
        useFrame(({camera})=>{
          if(sphereRef.current){
            target.set(mouse.x+1,mouse.y,1).unproject(camera);
            sphereRef.current.lookAt(target);
            sphereRef.current.position.y=-0.5+Math.sin(Inc)/8;
            Inc=Inc+0.02;
          }
        })
        return(
            <mesh 
            ref={sphereRef}
            position={[-3,0,0]}
            // onPointerEnter={<a href='www.google.com'></a>} 
            >
                <sphereGeometry args={[2.5,32,32]}></sphereGeometry>
                <meshStandardMaterial 
                map={texture}
                metalness={0.5}
                roughness={1}
                envMap={EnvMap}
                // transparent={true}
                // opacity={1}
                ></meshStandardMaterial>
                <ambientLight intensity={0} color={'white'}/>
            </mesh>
        )
    }
  return (
    <>
    <Canva>
        <Sceen/>
        {/* <Home_interface/> */}
        <OrbitControls enableRotate={false}
        enableZoom={false}
        />
    </Canva>
    </>
  )
}
