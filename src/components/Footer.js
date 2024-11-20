// src/components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-indigo-950 text-white py-4">
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} Héctor Martil. {t('footer.rightsReserved')}
            </div>
        </footer>
    );
}

export default Footer;