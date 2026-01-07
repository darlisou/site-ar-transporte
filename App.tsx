import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import RouteTimeline from './components/RouteTimeline';
import FleetCard from './components/FleetCard';
import Footer from './components/Footer';
import { NAVIOS, CLASSES } from './data/logistics';
import { Maximize, ShieldCheck, Zap, Globe, Anchor } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ar-ice luxury-transition font-sans">
      <Header />
      
      <main>
        {/* HERO + WIDGET OVERLAY */}
        <div className="relative">
          <Hero />
          <BookingWidget />
        </div>

        {/* FLEET SHOWCASE */}
        <section id="frota" className="py-32 md:py-48 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32 gap-12">
            <div className="md:w-3/5">
              <span className="text-ar-blue font-bold text-[11px] uppercase tracking-[0.5em] mb-6 block">Tecnologia Naval</span>
              <h2 className="text-5xl md:text-8xl font-display font-extrabold text-ar-navy tracking-tightest leading-none">
                Soberania <br/><span className="text-ar-blue">na Calha.</span>
              </h2>
            </div>
            <p className="md:w-1/3 text-ar-slate text-lg font-medium leading-relaxed opacity-90">
              Frota de autoridade composta por embarcações industriais, projetadas para estabilidade total e máxima eficiência logística no Amazonas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <FleetCard ship={NAVIOS.RONDONIA} />
            <FleetCard ship={NAVIOS.AMAZON} />
          </div>
        </section>

        {/* TIMELINE - CLEAN SECTION */}
        <div className="bg-white py-16">
          <RouteTimeline />
        </div>

        {/* CLASSES / EXPERIENCE SECTION */}
        <section id="acomodacoes" className="py-32 md:py-48 bg-ar-ice">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24 md:mb-32">
              <span className="text-ar-blue font-bold text-[11px] uppercase tracking-[0.5em] mb-6 block">Acomodações VIP</span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-ar-navy tracking-tight">Padrão de Bordo Corporativo.</h2>
            </div>

            <div className="flex gap-10 md:gap-14 overflow-x-auto no-scrollbar pb-24 snap-x px-4">
              {CLASSES.map((cls) => (
                <div key={cls.id} className="min-w-[320px] md:min-w-[480px] bg-white rounded-2xl luxury-transition border border-ar-steel/40 overflow-hidden snap-center group airline-shadow hover:border-ar-blue/20">
                  <div className="h-72 md:h-80 overflow-hidden relative">
                    <img src={cls.img} alt={cls.nome} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ar-navy/60 to-transparent opacity-30 group-hover:opacity-50 luxury-transition" />
                  </div>
                  <div className="p-10 md:p-12">
                    <h4 className="text-2xl md:text-3xl font-display font-extrabold text-ar-navy mb-4 tracking-tight">{cls.nome}</h4>
                    <p className="text-sm md:text-base text-ar-slate font-medium leading-relaxed mb-10">{cls.desc}</p>
                    <div className="pt-10 border-t border-ar-steel flex justify-between items-center">
                      <span className="text-[10px] font-bold text-ar-blue uppercase tracking-premium">High Standard</span>
                      <Maximize size={20} className="text-ar-steel group-hover:text-ar-blue transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORPORATE STATS BANNER */}
        <section className="py-32 md:py-40 bg-ar-navy relative overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-6 h-full border-r border-white/20">
              {[...Array(6)].map((_, i) => <div key={i} className="border-l border-white/20" />)}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-20 text-center relative z-10">
            <div className="space-y-4">
              <ShieldCheck className="mx-auto text-ar-blue mb-6 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" size={44} strokeWidth={1.2} />
              <p className="text-white font-display font-bold text-5xl md:text-6xl tracking-tightest">100%</p>
              <p className="text-ar-slate text-[10px] font-bold uppercase tracking-[0.35em]">Carga Segurada</p>
            </div>
            <div className="space-y-4">
              <Globe className="mx-auto text-ar-blue mb-6 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" size={44} strokeWidth={1.2} />
              <p className="text-white font-display font-bold text-5xl md:text-6xl tracking-tightest">1.6k km</p>
              <p className="text-ar-slate text-[10px] font-bold uppercase tracking-[0.35em]">Rede Logística</p>
            </div>
            <div className="space-y-4">
              <Anchor className="mx-auto text-ar-blue mb-6 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" size={44} strokeWidth={1.2} />
              <p className="text-white font-display font-bold text-5xl md:text-6xl tracking-tightest">#1</p>
              <p className="text-ar-slate text-[10px] font-bold uppercase tracking-[0.35em]">Liderança Naval</p>
            </div>
            <div className="space-y-4">
              <Zap className="mx-auto text-ar-blue mb-6 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" size={44} strokeWidth={1.2} />
              <p className="text-white font-display font-bold text-5xl md:text-6xl tracking-tightest">Star</p>
              <p className="text-ar-slate text-[10px] font-bold uppercase tracking-[0.35em]">Conexão Via Satélite</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;