// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white px-6">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    About Me
                </h2>

                {/* Resumen Personal */}
                <p className="text-base md:text-lg mb-6">
                    I'm a dedicated and passionate Mexican web developer focused on creating efficient, user-centered applications. My expertise spans both frontend and backend development, allowing me to build full-stack solutions that are visually appealing and functionally robust.
                </p>

                {/* Valores Clave */}
                <div className="text-base md:text-lg">
                    <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                    <ul className="list-none space-y-2">
                        <li>💡 <strong>Innovation:</strong> Constantly seeking new and better solutions to improve user experiences.</li>
                        <li>🤝 <strong>Collaboration:</strong> Believing in the power of teamwork and open communication to achieve the best results.</li>
                        <li>🎯 <strong>Commitment to Quality:</strong> Dedicated to writing clean, efficient, and maintainable code.</li>
                        <li>🚀 <strong>Continuous Learning:</strong> Always expanding my skill set to stay at the forefront of web technology.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;