import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WhatsAppChatMockup from './components/WhatsAppChatMockup';
import { MessageSquare, ShieldCheck, Zap, Layers, MapPin, Sparkles, Send, PhoneCall, Award } from 'lucide-react';
import logoImg from './assets/turismo-inteligente-logo.png';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const whatsappUrl = "https://wa.me/573506900570?text=Hola";

  // Sync theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="landing-layout">
      {/* Brand Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content container">
          <div className="hero-text-block">
            <span className="badge-promo animate-float">
              <Sparkles size={12} className="accent-icon" />
              IA Conserje de Viajes 24/7
            </span>
            <h2 className="hero-title">
              Descubre tu próximo destino con un solo mensaje.
            </h2>
            <p className="hero-subtitle">
              Conoce <strong>Turismo Inteligente</strong>, el primer asistente conversacional impulsado por Inteligencia Artificial que diseña tu viaje ideal por Santander directamente desde WhatsApp. Sin descargas, sin búsquedas infinitas.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button shadow-glow animate-pulse-btn"
            >
              <MessageSquare size={20} fill="currentColor" />
              <span>📲 Chatear con el Agente Ahora</span>
            </a>
          </div>
          
          <div className="hero-mockup-block">
            <WhatsAppChatMockup />
          </div>
        </div>
      </section>

      {/* Section 1: What is Turismo Inteligente */}
      <section className="about-section glass container">
        <div className="about-grid">
          <div className="about-header">
            <span className="section-label">RESPALDADO POR SOFTGIC</span>
            <h3 className="section-title">¿Qué es Turismo Inteligente?</h3>
          </div>
          <div className="about-body">
            <p className="highlight-text">
              Turismo Inteligente, una iniciativa tecnológica respaldada por <strong>Softgic</strong>, es la evolución en la planificación de viajes.
            </p>
            <p className="description-text">
              Hemos entrenado a un modelo de Inteligencia Artificial avanzado para que actúe como tu conserje personal 24/7. Olvídate de navegar por decenas de páginas web; nuestro agente en WhatsApp entiende tus gustos, analiza el contexto de tu viaje y te entrega recomendaciones precisas de restaurantes locales, actividades turísticas únicas y los mejores hoteles para tu descanso.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How it works */}
      <section className="how-it-workscontainer container">
        <div className="text-center-block">
          <span className="section-label">SIMPLE Y SEGURO</span>
          <h3 className="section-title">¿Cómo funciona?</h3>
          <p className="section-subtitle-text">Planifica tu escapada en tres sencillos pasos sin salir de tu chat de confianza</p>
        </div>

        <div className="steps-grid">
          <div className="step-card glass">
            <div className="step-num-icon">
              <span>1</span>
              <MessageSquare size={24} className="step-icon" />
            </div>
            <h4>Escribe lo que buscas</h4>
            <p>Inicia un chat en WhatsApp y cuéntale al agente qué tipo de experiencia deseas (ej. "Busco un plan familiar este fin de semana" o "Quiero opciones de hospedaje y comida típica").</p>
          </div>

          <div className="step-card glass">
            <div className="step-num-icon">
              <span>2</span>
              <Sparkles size={24} className="step-icon" />
            </div>
            <h4>Recibe propuestas personalizadas</h4>
            <p>En segundos, la IA procesará tu solicitud y te enviará tarjetas interactivas con las mejores opciones de restaurantes, lugares mágicos y hoteles disponibles.</p>
          </div>

          <div className="step-card glass">
            <div className="step-num-icon">
              <span>3</span>
              <ShieldCheck size={24} className="step-icon" />
            </div>
            <h4>Reserva al instante</h4>
            <p>¿Te gustó un hotel o un destino? Simplemente presiona los botones integrados en el chat y el agente te generará el enlace directo y seguro para que completes tu reserva de inmediato.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits */}
      <section className="benefits-section container">
        <div className="text-center-block">
          <span className="section-label">BENEFICIOS CLAVE</span>
          <h3 className="section-title">¿Por qué elegir Turismo Inteligente?</h3>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card glass">
            <div className="benefit-icon-wrapper">
              <Award size={32} />
            </div>
            <h4>🧠 IA Contextual</h4>
            <p>No somos un bot de respuestas pregrabadas. Nuestra IA entiende el lenguaje natural y se adapta a tus necesidades exactas.</p>
          </div>

          <div className="benefit-card glass">
            <div className="benefit-icon-wrapper">
              <Zap size={32} />
            </div>
            <h4>⚡ Fricción Cero</h4>
            <p>Todo ocurre dentro de WhatsApp, la aplicación que ya usas todos los días.</p>
          </div>

          <div className="benefit-card glass">
            <div className="benefit-icon-wrapper">
              <Layers size={32} />
            </div>
            <h4>🏨 Conexión Directa</h4>
            <p>Integramos las mejores plataformas de alojamiento y servicios a nivel mundial para garantizar que tus reservas sean rápidas, seguras y al mejor precio garantizado.</p>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="cta-banner container glass">
        <div className="cta-banner-content">
          <h3>¿Listo para tu próxima aventura?</h3>
          <p>Chatea con nuestro asistente de IA y planifica tu viaje ideal por Santander hoy mismo.</p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button primary-light animate-pulse-btn"
          >
            <MessageSquare size={20} />
            <span>📲 Iniciar Planificación Ahora</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="brand-footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo-row">
              <img src={logoImg} alt="Logo" className="footer-logo" />
              <span>Turismo Inteligente</span>
            </div>
            <p className="footer-desc">
              Transformando la manera en que el mundo descubre nuevas experiencias de viaje.
            </p>
          </div>
          <div className="footer-right">
            <p>© {new Date().getFullYear()} Turismo Inteligente. Desarrollado por <strong>Softgic</strong>.</p>
            <p className="legal-links">Políticas de Privacidad • Términos de Servicio</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-btn shadow-glow"
        title="Chatear en WhatsApp"
      >
        <MessageSquare size={24} fill="currentColor" />
        <span className="floating-tooltip">Planear viaje</span>
      </a>
    </div>
  );
}

export default App;
