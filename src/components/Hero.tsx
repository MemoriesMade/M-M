import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          Creamos Momentos Inolvidables
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Especialistas en eventos exclusivos que superan expectativas
        </p>
        <a 
          href="https://wa.me/+524625130025?text=Hola,%20estoy%20interesado%20en%20obtener%20información%20sobre%20sus%20servicios%20de%20organización%20de%20eventos.%20¿Podrían%20ayudarme?"
          className="bg-amber-700 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-800 transition-colors"
        >
          Planea tu Evento
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </div>
  );
};

export default Hero;
