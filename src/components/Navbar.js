// src/components/Navbar.js
import React, { useState, useEffect, useMemo } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import classNames from 'classnames';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Lista de enlaces de navegación con ID para cada sección, usando useMemo para evitar recrearlo en cada render
    const navLinks = useMemo(() => [
        { href: "#home", id: "home", label: "Home" },
        { href: "#about", id: "about", label: "About" },
        { href: "#skills", id: "skills", label: "Skills" },
        { href: "#projects", id: "projects", label: "Projects" },
        { href: "#resume", id: "resume", label: "Resume" },
        { href: "#contact", id: "contact", label: "Contact" },
    ], []);

    // Monitorear el desplazamiento para detectar la sección activa
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset para la precisión

            // Detectar la sección activa comparando el scrollPosition con el offset de cada sección
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
        <nav className="bg-indigo-950 fixed w-full z-20 top-0 shadow-2xl">
            <div className="container mx-auto px-5 py-4 flex justify-between items-center">
                <div className="text-white text-2xl font-bold">HM</div>

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
                                    { "underline font-bold": activeSection === link.id } // Estilo para el enlace activo
                                )}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
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
                    "fixed top-0 left-0 h-full w-64 bg-indigo-950 transform transition-transform duration-300 ease-in-out z-30 md:hidden",
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
                                    { "underline font-bold": activeSection === link.id } // Estilo para el enlace activo en el menú off-canvas
                                )}
                                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un enlace
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;