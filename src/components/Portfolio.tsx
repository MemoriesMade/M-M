import React from 'react';

const portfolioItems = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    category: 'Wedding celebration',
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    category: 'Corporate event',
  },
  {
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80',
    category: 'Birthday party',
  },
  {
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80',
    category: 'Gala dinner',
  },
  {
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
    category: 'Music event',
  },
  {
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80',
    category: 'Private party',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Nuestro Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-video"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-serif">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
