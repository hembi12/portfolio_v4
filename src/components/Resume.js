// src/components/Resume.js
import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-indigo-50 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    Resume
                </h2>
                <p className="text-gray-600 mb-6">View or download my resume for more details.</p>
                <div className="flex justify-center space-x-4">
                    {/* Botón para ver el resume */}
                    <a
                        href="/Hector_Martil_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white px-6 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-800 hover:text-white hover:shadow-2xl transition-colors"
                    >
                        View
                    </a>
                    {/* Botón para descargar el resume */}
                    <a
                        href="/Hector_Martil_CV.pdf"
                        download
                        className="border border-indigo-600 text-indigo-600 px-6 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-800 hover:text-white hover:shadow-2xl transition-colors"
                    >
                        Download
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;