import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatSection from './components/ChatSection'; // <- nuevo

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <ChatSection /> {/* Sección del chatbot después del portfolio (donde puede ir el video) */}
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
