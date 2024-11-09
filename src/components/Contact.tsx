import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-serif mb-6">Hablemos de tu Evento</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/4625130025"
                className="flex items-center gap-3 text-neutral-700 hover:text-amber-700 transition-colors"
              >
                <Phone size={20} />
                <span>462 513 0025</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-700">
                <Mail size={20} />
                <span>contacto@memoriesmade.com</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <MapPin size={20} />
                <span>C. Manuel López Cotilla 1505, Col Americana, Lafayette, 44160 Guadalajara, Jal.</span>
              </div>
            </div>
          </div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-amber-700"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-amber-700"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="whatsapp"
                placeholder="Número de WhatsApp"
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-amber-700"
                pattern="^\+?[1-9]\d{9,14}$"
                title="Ingrese un número de WhatsApp válido (10 a 15 dígitos), con o sin el prefijo '+'. Ejemplo: +521234567890 o 1234567890"
                required
              />
              <small className="text-neutral-500">
                Ingrese un número de WhatsApp de 10 a 15 dígitos, opcionalmente puede iniciar con '+' seguido del código de país.
              </small>
            </div>
            
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Mensaje"
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-amber-700"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
