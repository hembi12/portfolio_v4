// src/components/footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-indigo-950 text-white py-4">
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} Héctor Martil. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;