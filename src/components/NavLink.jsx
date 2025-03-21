import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './Header';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// Styled component for container with 90vh height and 80% width
const Display = styled.div`
  height: 100vh;
  display:flex;
  justify-content:center;
`;
// Main NavLink component with routing and canvas
export default function NavLink() {
  return (
    <>
    <BrowserRouter >
      <Header />
      <Display >
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
