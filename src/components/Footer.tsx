import React from 'react';
import { Instagram, Facebook, Twitter, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Memories Made</h3>
            <p className="text-neutral-400">
              Creando momentos inolvidables con elegancia y distinción.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#services" className="hover:text-amber-500">Servicios</a></li>
              <li><a href="#portfolio" className="hover:text-amber-500">Portfolio</a></li>
              <li><a href="#clients" className="hover:text-amber-500">Clientes</a></li>
              <li><a href="#contact" className="hover:text-amber-500">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Catering Premium</li>
              <li>Eventos Privados</li>
              <li>Eventos Corporativos</li>
              <li>Logística Integral</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <a 
              href="https://wa.me/4625130025"
              className="flex items-center gap-2 bg-amber-700 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-colors w-fit"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400">
              © {new Date().getFullYear()} Memories Made. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-amber-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-amber-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-amber-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;