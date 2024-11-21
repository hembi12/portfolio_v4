// src/components/Navbar.js
import React, { useState, useEffect, useMemo } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Lista de enlaces de navegación con ID para cada sección
    const navLinks = useMemo(() => [
        { href: "#home", id: "home", label: t('navbar.home') },
        { href: "#about", id: "about", label: t('navbar.about') },
        { href: "#skills", id: "skills", label: t('navbar.skills') },
        { href: "#projects", id: "projects", label: t('navbar.projects') },
        { href: "#resume", id: "resume", label: t('navbar.resume') },
        { href: "#contact", id: "contact", label: t('navbar.contact') },
    ], [t]);

    // Detectar la sección activa al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            const currentSection = navLinks.find(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [navLinks]);

    return (
        <nav className="fixed w-full z-20 top-0 shadow-2xl bg-indigo-950">
            <div className="container mx-auto px-5 py-4 flex justify-between items-center">
                <div
                    className="text-white text-2xl font-bold cursor-pointer relative group"
                    onClick={toggleDarkMode}
                >
                    HM
                    {/* Tooltip */}
                    <span className="absolute top-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-indigo-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {isDarkMode ? t('navbar.tooltipLightMode') : t('navbar.tooltipDarkMode')}
                    </span>
                </div>

                <button
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                    className="text-gray-300 hover:text-white focus:outline-none md:hidden"
                >
                    <FiMenu className="w-6 h-6" />
                </button>

                {/* Menú principal visible en pantallas medianas y grandes */}
                <ul className="hidden md:flex space-x-6 px-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                className={classNames(
                                    "text-gray-300 hover:text-white hover:font-bold transition-colors duration-200",
                                    { "underline font-bold": activeSection === link.id }
                                )}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={i18n.language}
                            className="block w-full bg-indigo-950 text-gray-300 hover:text-white text-lg font-medium transition-colors duration-200 border-none focus:ring-0 cursor-pointer"
                        >
                            <option value="en">English</option>
                            <option value="es-MX">Español</option>
                        </select>
                    </li>
                </ul>
            </div>

            {/* Superposición de fondo para el menú off-canvas */}
            <div
                className={classNames(
                    "fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 md:hidden",
                    { "opacity-100 pointer-events-auto": isOpen, "opacity-0 pointer-events-none": !isOpen }
                )}
                onClick={toggleMenu}
            ></div>

            {/* Menú off-canvas para dispositivos móviles */}
            <div
                className={classNames(
                    "fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-30 md:hidden bg-indigo-950",
                    { "-translate-x-0": isOpen, "-translate-x-full": !isOpen }
                )}
            >
                <div className="flex justify-between items-center p-4 border-b border-white-700">
                    <h2 className="text-white text-lg font-bold">Menu</h2>
                    <button onClick={toggleMenu} aria-label="Close menu" className="text-gray-300 hover:text-white">
                        <FiX className="w-6 h-6" />
                    </button>
                </div>
                <ul className="p-6 space-y-4 text-left">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                className={classNames(
                                    "block text-gray-300 hover:text-white text-lg font-medium transition-colors duration-200",
                                    { "underline font-bold": activeSection === link.id }
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="mt-4">
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={i18n.language}
                            className="block w-full bg-indigo-950 text-gray-300 hover:text-white text-lg font-medium transition-colors duration-200 border-none focus:ring-0 cursor-pointer"
                        >
                            <option value="en">English</option>
                            <option value="es-MX">Español</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;