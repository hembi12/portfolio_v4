// src/App.js
import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import './i18n';
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark'); // Cambia el modo oscuro en la raíz
  };

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
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      {/* Barra de progreso de desplazamiento */}
      <div 
        className="fixed top-0 left-0 h-1 bg-indigo-500 z-50" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Pasamos toggleDarkMode y isDarkMode a Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-16">
        {/* pt-16 para compensar el navbar fijo */}
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Resume isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
      <Footer />
    </div>
  );
}

export default App;