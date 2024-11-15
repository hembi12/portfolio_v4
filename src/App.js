// src/App.js
import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    }, 100); // Ejecuta handleScroll cada 100ms como máximo

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Barra de progreso de desplazamiento */}
      <div 
        className="fixed top-0 left-0 h-1 bg-indigo-500 z-50" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navbar />
      <div className="pt-16">
        {/* pt-16 para compensar el navbar fijo */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;