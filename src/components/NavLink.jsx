import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './Header';
import styled from 'styled-components';
import Shipping from '../../Shipping';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// Styled component for container with 90vh height and 80% width
const Display = styled.div`
  height: 100vh;
  display:flex;
  justify-content:center;
`;
const Canva=styled(Canvas)`
width:100%;
// height:auto;
position:absolute;
left:-20%;
top:-5%;
height:100%;
z-index:-1;
transition:2s;
  @media (max-width: 768px) {
    left: 0; // Adjust positioning for smaller screens
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    top:-5%;
    left: -5%; // Adjust for medium-sized screens
  }
`;
// Main NavLink component with routing and canvas
export default function NavLink() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Display>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Display> 
    </BrowserRouter>
    </>
  );
}
