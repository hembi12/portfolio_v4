// src/components/Resume.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Resume = ({ isDarkMode }) => {
    const { t } = useTranslation();

    return (
        <section id="resume" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-indigo-50 text-gray-900'}`}>
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : ''}`} style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    {t('resume.title')}
                </h2>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t('resume.description')}</p>
                <div className="flex justify-center space-x-4">
                    {/* Botón para ver el resume */}
                    <a
                        href="/Hector_Martil_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-4 text-lg font-semibold rounded-full shadow-lg transition-colors ${
                            isDarkMode 
                                ? 'bg-indigo-700 text-gray-200 hover:bg-indigo-600 hover:text-white' 
                                : 'bg-indigo-600 text-white hover:bg-indigo-800'
                        }`}
                    >
                        {t('resume.viewButton')}
                    </a>
                    {/* Botón para descargar el resume */}
                    <a
                        href="/Hector_Martil_CV.pdf"
                        download
                        className={`border px-6 py-4 text-lg font-semibold rounded-full shadow-lg transition-colors ${
                            isDarkMode 
                                ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white' 
                                : 'border-indigo-600 text-indigo-600 hover:bg-indigo-800 hover:text-white'
                        }`}
                    >
                        {t('resume.downloadButton')}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;