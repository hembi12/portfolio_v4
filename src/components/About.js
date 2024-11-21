// src/components/About.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = ({ isDarkMode }) => {
    const { t } = useTranslation();

    return (
        <section id="about" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}>
            <div className="container mx-auto max-w-3xl text-center">
                <h2 className={`text-3xl md:text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : ''}`} style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    {t('about.title')}
                </h2>

                {/* Resumen Personal */}
                <p className="text-base md:text-lg mb-6">
                    {t('about.description')}
                </p>

                {/* Valores Clave */}
                <div className="text-base md:text-lg">
                    <h3 className="text-xl font-semibold mb-4">{t('about.coreValuesTitle')}</h3>
                    <ul className="list-none space-y-2">
                        <li>💡 <strong>{t('about.values.innovationTitle')}:</strong> {t('about.values.innovationDescription')}</li>
                        <li>🤝 <strong>{t('about.values.collaborationTitle')}:</strong> {t('about.values.collaborationDescription')}</li>
                        <li>🎯 <strong>{t('about.values.qualityTitle')}:</strong> {t('about.values.qualityDescription')}</li>
                        <li>🚀 <strong>{t('about.values.learningTitle')}:</strong> {t('about.values.learningDescription')}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;