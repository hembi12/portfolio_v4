// src/components/home.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Web Developer", "Frontend Developer", "Backend Developer", "Junior Developer", "Full Stack Enthusiast"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1500,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    Héctor Martil
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                    <span ref={typedRef}></span>
                </p>
                {/* Botones de Call to Action */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a
                        href="#projects"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-800 hover:text-white hover:shadow-2xl transition-colors"
                    >
                        My Projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-800 hover:text-white hover:shadow-2xl transition-colors"
                    >
                        Contact Me
                    </a>
                    <div className="absolute bottom-10 animate-bounce">
                        <a href="#about" className="text-indigo-600 hover:text-indigo-800">
                            <FaChevronDown size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;