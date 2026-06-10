import React, { useState, useEffect, useRef } from 'react';
import { Phone, Video, MoreVertical, Send, CheckCheck, Compass, ArrowLeft } from 'lucide-react';

const CHAT_SEQUENCE = [
  {
    sender: 'user',
    text: 'Hola',
    time: '9:32 a. m.',
    delay: 800
  },
  {
    sender: 'ai',
    text: '¡Hola de nuevo querido/a 🌴 *joan*! 👋 Qué alegría tenerte de vuelta en Turismo Inteligente.\n\nPuedes decirme simplemente por dónde andas para darte algunas ideas (Ej: \'Estoy en Bucaramanga\'), o si ya sabes qué quieres, pídemelo directamente (Ej: \'Busco piscinas en Girón para ir con mi hija\'). ¡Te leo!',
    time: '9:32 a. m.',
    delay: 2000
  },
  {
    sender: 'user',
    text: 'Estoy en Bucaramanga',
    time: '9:32 a. m.',
    delay: 1500
  },
  {
    sender: 'ai',
    text: '¡Qué gran destino! 🌴 ¿Te parece si miramos los mejores planes en Bucaramanga?',
    time: '9:32 a. m.',
    image: 'https://content.r9cdn.net/rimg/dimg/3b/7f/302c7c97-city-18865-169e971acd4.jpg?crop=true&width=1020&height=498',
    buttons: ['Sí, buscar aquí', 'Elegir otra'],
    delay: 2000
  },
  {
    sender: 'user',
    text: 'Sí, buscar aquí',
    time: '9:32 a. m.',
    delay: 1200
  },
  {
    sender: 'ai',
    text: '¡Excelente elección, *Bucaramanga* es un gran destino! 🎯\n\nAhora, para armar tu plan ideal, cuéntame: *¿Qué tipo de ambiente tienes en mente hoy?*\n\n💡 Ejemplo: \'Quiero algo de naturaleza\', \'busco un lugar para ir de compras\', \'tengo hambre\' o \'quiero un sitio tranquilo para leer\'.\n\n¡Dime lo que se te antoje!',
    time: '9:32 a. m.',
    delay: 2500
  },
  {
    sender: 'user',
    text: 'Quiero algo de naturaleza',
    time: '9:32 a. m.',
    delay: 1500
  },
  {
    sender: 'ai',
    text: '¡Qué buena elección! Bucaramanga es la \'Ciudad de los Parques\' y tenemos unos espacios verdes increíbles para disfrutar del aire puro. Te recomiendo visitar el Parque del Agua o el Parque Las Palmas para conectar con la naturaleza sin salir de la ciudad. ¡Se respira puro orgullo santandereano!\n\n¿Confirmamos que buscamos *Parques*?',
    time: '9:32 a. m.',
    buttons: ['Sí, me gusta', 'Elegir otro plan'],
    delay: 3000
  },
  {
    sender: 'user',
    text: 'Sí, me gusta',
    time: '9:33 a. m.',
    delay: 1200
  },
  {
    sender: 'ai',
    text: '¡Anotado! 📝\n\nPara que Turismo Inteligente te dé las mejores recomendaciones de *Parques y Naturaleza* en la zona, necesitamos ajustar el bolsillo.\n\n¿Qué tipo de presupuesto tienes planeado para esta salida?',
    time: '9:33 a. m.',
    buttons: ['Bajo / Económico 🪙', 'Medio / Estándar 💵', 'Alto / Exclusivo 💎'],
    delay: 2500
  },
  {
    sender: 'user',
    text: 'Bajo / Económico 🪙',
    time: '9:33 a. m.',
    delay: 1500
  },
  {
    sender: 'ai',
    text: '¡Qué nota! Ya tengo listos los parques más bacanes y económicos de Bucaramanga para que disfrutes al máximo. ¡Aquí te paso mis recomendados para que recorras la ciudad a todo dar! 👇',
    time: '9:33 a. m.',
    recommendationCard: {
      title: 'Parque del Agua 🌊',
      desc: 'Senderos ecológicos, cascadas artificiales y contacto directo con peces. Entrada económica.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=400&auto=format&fit=crop'
    },
    delay: 3000
  }
];

const WhatsAppChatMockup = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (sequenceIndex < CHAT_SEQUENCE.length) {
      const currentStep = CHAT_SEQUENCE[sequenceIndex];
      
      const timer = setTimeout(() => {
        if (currentStep.sender === 'ai') {
          setIsTyping(true);
          
          // Typing duration
          const typingTimer = setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, currentStep]);
            setSequenceIndex(prev => prev + 1);
          }, 1500);
          
          return () => clearTimeout(typingTimer);
        } else {
          setMessages(prev => [...prev, currentStep]);
          setSequenceIndex(prev => prev + 1);
        }
      }, currentStep.delay);

      return () => clearTimeout(timer);
    } else {
      // Loop sequence after 8 seconds of completion
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setSequenceIndex(0);
      }, 8000);
      return () => clearTimeout(resetTimer);
    }
  }, [sequenceIndex]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Parse custom bold markup
  const formatText = (text) => {
    if (!text) return '';
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={idx}>{part.slice(1, -1)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="phone-mockup-wrapper">
      <div className="phone-device shadow-glow">
        <div className="phone-screen">
          {/* Status Bar */}
          <div className="phone-status-bar">
            <span className="time">9:32 a. m.</span>
            <div className="notch"></div>
            <div className="status-icons">
              <span className="network-dot"></span>
              <span className="battery">92%</span>
            </div>
          </div>

          {/* WhatsApp Header */}
          <div className="wa-header">
            <div className="wa-header-left">
              <ArrowLeft size={16} className="wa-icon" />
              <div className="wa-avatar-container">
                <img 
                  src="/turismo-inteligente-logo.png" 
                  alt="Agent Avatar" 
                  className="wa-avatar" 
                />
              </div>
              <div className="wa-user-info">
                <span className="wa-username">Softgic</span>
                <span className="wa-status">En línea</span>
              </div>
            </div>
            <div className="wa-header-right">
              <Video size={16} className="wa-icon" />
              <Phone size={14} className="wa-icon" />
              <MoreVertical size={16} className="wa-icon" />
            </div>
          </div>

          {/* Chat Body */}
          <div className="wa-chat-body" ref={chatBodyRef}>
            <div className="wa-encryption-notice">
              🔒 Los mensajes y llamadas están cifrados de extremo a extremo.
            </div>

            {messages.map((msg, index) => (
              <div key={index} className={`wa-msg-wrapper-outer`}>
                <div className={`wa-msg-wrapper ${msg.sender}`}>
                  <div className="wa-bubble">
                    {msg.image && (
                      <div className="wa-bubble-image-box">
                        <img src={msg.image} alt="Destino" className="wa-msg-image" />
                      </div>
                    )}
                    
                    <p className="wa-text">{formatText(msg.text)}</p>
                    
                    {msg.buttons && (
                      <div className="wa-bubble-buttons">
                        {msg.buttons.map((btnText, bIdx) => (
                          <div key={bIdx} className="wa-bubble-btn">
                            {btnText}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="wa-msg-meta">
                      <span className="wa-time">{msg.time}</span>
                      {msg.sender === 'user' && (
                        <CheckCheck size={14} className="wa-ticks" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Optional recommendation details card rendering outside the bubble for clean look */}
                {msg.recommendationCard && (
                  <div className="wa-rec-card glass animate-fade-in">
                    <img src={msg.recommendationCard.image} alt="Recomendación" className="wa-rec-img" />
                    <div className="wa-rec-info">
                      <h5>{msg.recommendationCard.title}</h5>
                      <p>{msg.recommendationCard.desc}</p>
                      <button className="wa-rec-action-btn">Ver mapa y detalles 📍</button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="wa-msg-wrapper ai">
                <div className="wa-bubble wa-typing-bubble">
                  <div className="wa-typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          <div className="wa-input-bar">
            <div className="wa-input-container">
              <span className="wa-emoji">😊</span>
              <input type="text" placeholder="Mensaje" disabled />
            </div>
            <button className="wa-mic-btn" disabled>
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChatMockup;
