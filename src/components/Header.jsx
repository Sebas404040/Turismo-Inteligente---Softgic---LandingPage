import React from 'react';
import { Sun, Moon, Map, User, Compass } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="brand-header">
      <div className="header-left">
        <Compass className="header-icon-decor" />
        <h1 className="brand-title">Turismo inteligente</h1>
      </div>
      
      <div className="header-center">
        <div className="logo-container">
          <img 
            src="/turismo-inteligente-logo.png" 
            alt="Logo Turismo Inteligente" 
            className="brand-logo"
          />
        </div>
      </div>
      
      <div className="header-right">
        <button 
          onClick={toggleTheme} 
          className="theme-toggle" 
          aria-label="Cambiar tema"
          title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
