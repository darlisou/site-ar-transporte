import React, { useState, useEffect } from 'react';
import { Phone, Wifi, Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      {/* Executive Status Bar */}
      <div className="bg-ar-navy text-white text-[10px] py-1.5 px-8 flex justify-between items-center font-sans tracking-[0.2em] font-bold">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            OPERAÇÃO NORMAL: CALHA AMAZONAS
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 opacity-80 uppercase">
          <span className="flex items-center gap-2"><Wifi size={12} className="text-ar-blue" /> STARLINK A BORDO</span>
          <span className="flex items-center gap-2 cursor-pointer hover:text-ar-blue transition-colors">
            <Globe size={11} /> PT | EN
          </span>
        </div>
      </div>

      {/* Main Navigation - Airline Style */}
      <nav className={`luxury-transition ${scrolled ? 'glass-morphism border-b border-ar-steel/50 py-3 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Branding */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-9 h-9 luxury-transition flex items-center justify-center font-display font-bold text-sm rounded shadow-sm ${scrolled ? 'bg-ar-navy text-white' : 'bg-white text-ar-navy'}`}>
              AR
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-extrabold text-lg leading-none tracking-tightest luxury-transition ${scrolled ? 'text-ar-navy' : 'text-white'}`}>AR TRANSPORTE</span>
              <span className={`text-[8px] uppercase tracking-[0.5em] font-bold luxury-transition ${scrolled ? 'text-ar-slate' : 'text-white/60'}`}>River Excellence</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className={`hidden md:flex items-center gap-10 font-sans text-[11px] font-bold tracking-premium uppercase luxury-transition ${scrolled ? 'text-ar-navy' : 'text-white'}`}>
            <a href="#frota" className="hover:text-ar-blue transition-colors">Nossa Frota</a>
            <a href="#rota" className="hover:text-ar-blue transition-colors">Rotas</a>
            <a href="#acomodacoes" className="hover:text-ar-blue transition-colors">Conforto</a>
            <button className={`px-6 py-2.5 rounded-lg flex items-center gap-2.5 font-bold transition-all active:scale-95 shadow-lg ${scrolled ? 'bg-ar-blue text-white hover:bg-ar-navy' : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'}`}>
              <Phone size={14} /> WhatsApp
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`md:hidden luxury-transition ${scrolled ? 'text-ar-navy' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-ar-steel luxury-transition overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-12 shadow-2xl' : 'max-h-0'}`}>
          <div className="flex flex-col items-center gap-8 px-8 text-ar-navy text-xs font-bold tracking-premium uppercase">
            <a href="#frota" onClick={() => setMobileMenuOpen(false)}>Frota</a>
            <a href="#rota" onClick={() => setMobileMenuOpen(false)}>Rotas</a>
            <a href="#acomodacoes" onClick={() => setMobileMenuOpen(false)}>Conforto</a>
            <button className="w-full bg-ar-navy text-white py-4 rounded-xl flex justify-center items-center gap-2 shadow-xl">
              <Phone size={18} /> Central de Vendas
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;