import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif tracking-wider">
            <span className="text-amber-700">Memories</span>
            <span className="text-neutral-800">Made</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-neutral-700 hover:text-amber-700 transition-colors">Servicios</a>
            <a href="#portfolio" className="text-neutral-700 hover:text-amber-700 transition-colors">Portfolio</a>
            <a href="#clients" className="text-neutral-700 hover:text-amber-700 transition-colors">Clientes</a>
            <a href="#contact" className="text-neutral-700 hover:text-amber-700 transition-colors">Contacto</a>
            <a 
              href="https://wa.me/+524625130025?text=Hola,%20estoy%20interesado%20en%20obtener%20información%20sobre%20sus%20servicios%20de%20organización%20de%20eventos.%20¿Podrían%20ayudarme?"
              className="flex items-center gap-2 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-colors"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#services" className="text-neutral-700 hover:text-amber-700 transition-colors">Servicios</a>
              <a href="#portfolio" className="text-neutral-700 hover:text-amber-700 transition-colors">Portfolio</a>
              <a href="#clients" className="text-neutral-700 hover:text-amber-700 transition-colors">Clientes</a>
              <a href="#contact" className="text-neutral-700 hover:text-amber-700 transition-colors">Contacto</a>
              <a 
                href="https://wa.me/524625130025?text=Hola,%20estoy%20interesado%20en%20obtener%20información%20sobre%20sus%20servicios%20de%20organización%20de%20eventos.%20¿Podrían%20ayudarme?"
                className="flex items-center justify-center gap-2 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-colors"
              >
                <Phone size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
