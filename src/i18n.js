// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar los archivos de traducción
import en from './locales/en.json';
import esMX from './locales/es-MX.json';

i18n
    .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
    .use(initReactI18next) // Enlaza i18next con React
    .init({
        resources: {
            en: { translation: en },
            'es-MX': { translation: esMX }
        },
        fallbackLng: 'en', // Lenguaje predeterminado si la detección falla
        interpolation: {
            escapeValue: false // React ya maneja la protección contra XSS
        }
    });

export default i18n;