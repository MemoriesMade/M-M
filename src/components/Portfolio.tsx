import React from 'react';

const portfolioItems = [
  {
    image: '/logos/wedding_celebration.jpg',
    category: 'Wedding celebration',
    brochureUrl: 'https://memoriesm.s3.us-east-1.amazonaws.com/MM_Brochure.pdf',
  },
  {
    image: '/logos/corporate_event.jpg',
    category: 'Corporate event',
    brochureUrl: 'https://memoriesm.s3.us-east-1.amazonaws.com/MM_Brochure.pdf',
  },
  {
    image: '/logos/birthday_party.jpg',
    category: 'Birthday party',
    brochureUrl: 'https://memoriesm.s3.us-east-1.amazonaws.com/MM_Brochure.pdf',
  },
  {
    image: '/logos/gala_dinner.jpg',
    category: 'Gala dinner',
    brochureUrl: 'https://memoriesm.s3.us-east-1.amazonaws.com/MM_Brochure.pdf',
  },
  {
    image: '/logos/music_event.jpg',
    category: 'Music event',
    brochureUrl: 'https://memoriesm.s3.us-east-1.amazonaws.com/MM_Brochure.pdf',
  },
  {
    image: '/logos/private_party.jpg',
    category: 'Private party',
    brochureUrl: 'https://memoriesm.s3.us-east-1.amazonaws.com/MM_Brochure.pdf',
  },
];

const Portfolio = () => {
  const handleItemClick = (url) => {
    window.open(url, '_blank'); // Abre el PDF en una nueva pestaña
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Nuestro Portafolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-video cursor-pointer"
              onClick={() => handleItemClick(item.brochureUrl)}
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
