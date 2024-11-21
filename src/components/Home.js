// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Home = ({ isDarkMode }) => {
    const { t } = useTranslation();
    const typedRef = useRef(null);

    useEffect(() => {
        const strings = t('home.typedStrings', { returnObjects: true });

        const typed = new Typed(typedRef.current, {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1500,
        });

        return () => {
            typed.destroy();
        };
    }, [t]);

    return (
        <section id="home" className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-indigo-50'}`}>
            <div className="text-center">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    {t('home.name')}
                </h1>
                <p className={`text-lg md:text-xl lg:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span ref={typedRef}></span>
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a
                        href="#projects"
                        className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-colors ${isDarkMode ? 'bg-indigo-700 hover:bg-indigo-600 text-white' : 'bg-indigo-600 hover:bg-indigo-800 text-white'}`}
                    >
                        {t('home.projectsButton')}
                    </a>
                    <a
                        href="#contact"
                        className={`border px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-colors ${isDarkMode ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-800 hover:text-white'}`}
                    >
                        {t('home.contactButton')}
                    </a>
                    <div className="absolute bottom-10 animate-bounce">
                        <a href="#about" className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'}`}>
                            <FaChevronDown size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;