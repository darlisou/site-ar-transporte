
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[92vh] md:h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-ar-navy">
      {/* High-End Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient z-10" />
        <img 
          src="https://images.unsplash.com/photo-1544333323-2394d0774189?auto=format&fit=crop&q=80&w=2400" 
          alt="Logística Amazônia" 
          className="w-full h-full object-cover opacity-50 scale-105 contrast-[1.1] grayscale-[0.2] transition-transform duration-[20000ms] ease-linear hover:scale-100"
        />
      </div>

      {/* Corporate Branding Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div className="inline-block px-5 py-2 border border-white/20 rounded-full mb-10 backdrop-blur-md">
          <span className="text-white text-[10px] font-bold tracking-[0.5em] uppercase">{t('hero.badge')}</span>
        </div>
        <h1 className="text-5xl md:text-[8rem] font-display font-light text-white mb-10 leading-none tracking-tightest">
          {t('hero.title_part1')} <br/>
          <span className="font-extrabold text-white">{t('hero.title_part2')}</span>
        </h1>
        <p className="text-white/80 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed opacity-90">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default Hero;
