import React from 'react';

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Clientes que Confían en Nosotros
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[...Array(8)].map((_, index) => (
            <div 
              key={index}
              className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
            >
              <div className="text-neutral-300 font-serif text-lg text-center">
                Logo {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;