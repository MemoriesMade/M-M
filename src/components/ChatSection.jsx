// src/components/ChatSection.jsx

import React, { useState, useEffect } from 'react';

const ChatSection = () => {
  const [message, setMessage] = useState('');
  const [chatLoaded, setChatLoaded] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;

    if (!chatLoaded) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://go.botmaker.com/rest/webchat/p/ECNSRDV5ZP/init.js';
      script.onload = () => {
        setChatLoaded(true);
        window.botmakerChat.open();
        window.botmakerChat.sendMessage(message);
      };
      document.body.appendChild(script);
    } else {
      window.botmakerChat.open();
      window.botmakerChat.sendMessage(message);
    }

    setMessage('');
  };

  return (
    <section className="chat-section">
      <h2>¿Tienes alguna pregunta?</h2>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Escribe tu pregunta aquí..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </section>
  );
};

export default ChatSection;
