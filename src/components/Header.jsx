import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom';
import close from '../assets/rectangle-xmark.png'
import menu from '../assets/menu.png'
import BackGround from '../BackGround';
import Sound from '../assets/portifiloSound.mp3'
//animation
const Img=styled.img`
position:absolute;
z-index:4;
display:none;
pointer-events:auto;
left:90%;
transition:2s;
@media (max-width: 768px){
display:block;
left:85%;
}
`
const Head=styled.div`
display:flex;
position:fixed;
flex-direction:row;
z-index:3;
justify-content:space-between;
width:100%;
margin:0%;
padding:20px;
`;
const Links=styled.div`
display:flex;
position:inherit;
left:65%;
flex-direction:columns;
gap:30px;
transition:2s;
z-index:2;
@media (max-width: 768px){
flex-direction:column;
display:none;
left:60%;
padding:60px;
}
 @media (min-width: 769px) and (max-width: 1200px) {
    gap:2px;
    left: 55%; // Adjust for medium-sized screens
  }
`;
const Span=styled.p`
padding:0 20px;
width:100%;
text-decoration: none;
color:white;
z-index:2;
`;
const Display=()=>{
  const [show,setShow]=useState(true);
  useEffect(()=>{
    const Menu=()=>{
      if(window.innerWidth>0 && window.innerWidth<768){
        setShow(false);
      }
      else{
        setShow(true);
      }
    }
    Menu();
    window.addEventListener('resize',()=>{
      Menu();
      return ()=>{window.removeEventListener('resize',Menu)}
    });
  },[])
  return(
    <>
    <Img title={show?'Close-Menu':'Show-Menu'}
    style={{'cursor':'pointer','backgroundColor':'white','padding':'6px','borderRadius':'15%'}}
    src={show?close:menu} 
    alt="img" width='25px' 
    onClick={()=>{console.log(show);setShow(!show)}}
    />
    <Links style={{'display':show?'flex':'none','zIndex':'5'}}
    >
        <Link to="/"><Span>Home</Span></Link>
        <Link to="/Projects"><Span>Projects</Span></Link>
        <Link to="/About"><Span>About me</Span></Link>
        <Link to="/Contact"><Span>Contact</Span></Link>
    </Links>
    </>
  )
}
export default function Header() {
  return (
    <Head>
        <h1>Portifilo</h1>
        <BackGround/>
        <Display/>
    </Head>
  )
}
