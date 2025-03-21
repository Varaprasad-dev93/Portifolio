import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom';
import close from '../assets/rectangle-xmark.png'
import menu from '../assets/menu.png'
import { FileUser, FolderKanban, HeartPulse, House, Rows2 } from 'lucide-react';
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
left:52%;
flex-direction:columns;
gap:30px;
transition:2s;
z-index:2;
@media (max-width: 768px){
    flex-direction:column;
    display:none;
    left:60%;
    padding:60px;
    margin-top:60px;
    backdrop-filter: blur(16px); 
    background: rgba(255, 255, 255, 0.1); 
    border: 1px solid rgba(255, 255, 255, 0.2); 
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    transition: transform 0.3s ease-in-out;
}
 @media (min-width: 769px) and (max-width: 1200px) {
    gap:2px;
    left: 55%; 
  }
`;
const Span=styled.span`
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
    className="cursor-pointer bg-white !p-[6px] rounded-[15%] z-6 "
    src={show?close:menu} 
    alt="img" width='25px' 
    onClick={()=>{console.log(show);setShow(!show)}}
    />
    <Links style={{'display':show?'flex':'none'}} className='list-none !gap-15'
    >
      {/* Home */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center transition-all gap-3 duration-300 rounded-lg ${
                isActive ? "underline text-white" : "text-gray-400"
              } hover:text-gray-100`
            }
          >
            <House /> <span>Home</span>
          </NavLink>
        </li>

        {/* Projects */}
        <li>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              `flex items-center transition-all gap-3 duration-300 rounded-lg ${
                isActive ? " text-white" : "text-gray-400"
              } hover:text-gray-100`
            }
          >
            <FolderKanban /> <span>Projects</span>
          </NavLink>
        </li>

        {/* About Me */}
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `flex items-center transition-all gap-3 duration-300 rounded-lg ${
                isActive ? "underline text-white" : "text-gray-400"
              } hover:text-gray-100`
            }
          >
            <Rows2 /> <span>About Me</span>
          </NavLink>
        </li>

        {/* Contact */}
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `flex items-center transition-all gap-3 duration-300 rounded-lg ${
                isActive ? "underline text-white" : "text-gray-400"
              } hover:text-gray-100`
            }
          >
            <FileUser /> <span>Contact</span>
          </NavLink>
        </li>
      </Links>
    </>
  )
}
export default function Header() {
  return (
    <Head className=' h-[12%] backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg transition-transform duration-300'>
        <h1 className='text-3xl flex'>Portifilo<HeartPulse className='animate-pulse !mt-2 font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'/></h1>
        {/* <BackGround/> */}
        <Display/>
    </Head>
  )
}
