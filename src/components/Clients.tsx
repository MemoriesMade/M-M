import React from 'react';

const Clients = () => {
  // Lista de logotipos con las rutas
  const logos = [
    { src: '/logos/crv_logo.png', alt: 'CRV & Co' },
    { src: '/logos/inbest_logo.png', alt: 'INBest' },
    { src: '/logos/thomas_jefferson_logo.png', alt: 'Instituto Thomas Jefferson' },
    { src: '/logos/zucamping_logo.png', alt: 'Zucamping' },
    { src: '/logos/deutsche_schule_logo.png', alt: 'Deutsche Schule Guadalajara' },
  ];

  return (
    <section id="clients" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Clientes que Confían en Nosotros
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
