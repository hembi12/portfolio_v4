// src/components/Skills.js
import React from 'react';
import { skillsData } from '../data/data'; // Importa skillsData desde data.js

// Importación de íconos individuales
import { FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaPython, FaJava, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiVisualstudiocode, SiPostgresql, SiJenkins, SiTypescript } from 'react-icons/si';

// Mapeo de íconos
const icons = {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaBootstrap,
    FaPython,
    FaJava,
    FaDocker,
    SiJavascript,
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiFirebase,
    SiVisualstudiocode,
    SiPostgresql,
    SiJenkins,
    SiTypescript,
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-indigo-50 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    Skills
                </h2>

                <p className="text-center text-gray-700 mb-8">
                    Technologies and tools I've used in my projects.
                </p>

                {Object.keys(skillsData).map((category) => (
                    <div key={category} className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {skillsData[category].map((skill, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-full shadow-lg ${skill.color} flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90`}
                                >
                                    <div className="text-4xl mb-2">
                                        {React.createElement(icons[skill.icon])} {/* Creación dinámica del ícono */}
                                    </div>
                                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;