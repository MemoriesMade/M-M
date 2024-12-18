import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Fondo de video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/logos/20203971-uhd_3840_2160_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">
          Creamos Momentos{' '}
          <span>
            <Typewriter
              words={['Inolvidables', 'Únicos', 'Especiales']}
              loop={0} // 0 = infinito
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
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

      {/* Icono de flecha animado */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </div>
  );
};

export default Hero;

