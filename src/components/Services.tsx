import React from 'react';
import { Utensils, Music, Users, Truck, Calendar, Wine } from 'lucide-react';

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Catering Premium',
    description: 'Menús personalizados con los más altos estándares culinarios',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Eventos Privados',
    description: 'Celebraciones íntimas y exclusivas diseñadas a tu medida',
  },
  {
    icon: <Wine className="w-8 h-8" />,
    title: 'Servicio Completo',
    description: 'Desde mobiliario hasta personal de servicio especializado',
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Entretenimiento',
    description: 'Música en vivo y espectáculos para cada ocasión',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Eventos Corporativos',
    description: 'Reuniones ejecutivas y eventos empresariales de alto nivel',
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Logística Integral',
    description: 'Coordinación completa de proveedores y servicios',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-amber-700 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;