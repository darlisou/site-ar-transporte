
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CITY_IMAGES: Record<string, string> = {
  BEL: "https://images.unsplash.com/photo-1594911776785-f3507026e632?auto=format&fit=crop&q=80&w=800",
  BRE: "https://images.unsplash.com/photo-1544333323-2394d0774189?auto=format&fit=crop&q=80&w=800",
  GUR: "https://images.unsplash.com/photo-1506467024211-134c6930c5a4?auto=format&fit=crop&q=80&w=800",
  ALM: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?auto=format&fit=crop&q=80&w=800",
  PRA: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
  MON: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
  STM: "https://images.unsplash.com/photo-1603504381389-9e8756317d7b?auto=format&fit=crop&q=80&w=800",
  OBI: "https://images.unsplash.com/photo-1433086466340-b7b70c6d96a3?auto=format&fit=crop&q=80&w=800",
  JUR: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800",
  PAR: "https://images.unsplash.com/photo-1590381105924-c725a9b803bd?auto=format&fit=crop&q=80&w=800",
  ITA: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
  MAO: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
  default: "https://images.unsplash.com/photo-1506467024211-134c6930c5a4?auto=format&fit=crop&q=80&w=800"
};

const CITIES = ['Belém', 'Breves', 'Gurupá', 'Almeirim', 'Prainha', 'Monte Alegre', 'Santarém', 'Óbidos', 'Juruti', 'Parintins', 'Itacoatiara', 'Manaus'];
const CITIES_DOWN = [...CITIES].reverse();

const AmazonWorldSection: React.FC = () => {
  const { t } = useLanguage();

  const getCityImg = (name: string) => {
    const key = name.substring(0, 3).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return CITY_IMAGES[key] || CITY_IMAGES.default;
  };

  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden selection:bg-ar-blue selection:text-white">
      {/* BACKGROUND LAYER: THE RIVER FLOW (Z-INDEX 0) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" preserveAspectRatio="none">
          {[...Array(7)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${15 + i * 14} Q ${400 + (i * 100)} ${5 + i * 8}, 800 ${15 + i * 14} T 1600 ${15 + i * 14} T 2400 ${15 + i * 14}`}
              fill="none"
              stroke="url(#slug-river-gradient)"
              strokeWidth="1.5"
              className="animate-river-line"
              style={{
                animationDelay: `${i * -4}s`,
                animationDuration: `${25 + i * 7}s`
              }}
            />
          ))}
          <defs>
            <linearGradient id="slug-river-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#001529" />
              <stop offset="100%" stopColor="#00A8FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CONTENT LAYER (Z-INDEX 10) */}
      <div className="relative z-10">
        {/* HEADER CONTENT */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <span className="text-ar-slate font-display font-semibold text-[11px] uppercase tracking-[0.6em] mb-6 block opacity-90">
            {t('world_section.tagline')}
          </span>
          <h2 className="text-5xl md:text-8xl font-display font-extrabold text-[#001529] tracking-tightest leading-tight mb-8">
            {t('world_section.title_part1')} <span className="text-[#00A8FF] drop-shadow-[0_0_25px_rgba(0,168,255,0.4)]">{t('world_section.title_part2')}</span> {t('world_section.title_part3')}
          </h2>
          <p className="max-w-2xl mx-auto text-ar-slate text-lg md:text-xl font-medium leading-relaxed">
            {t('world_section.description')}
          </p>
        </div>

        {/* CAROUSEL 1: BELÉM -> MANAUS (Right to Left <<<<) */}
        <div className="relative flex overflow-hidden py-4 group mb-10">
          <div className="flex animate-slug-left group-hover:pause gap-6 will-change-transform transform-gpu">
            {[...CITIES, ...CITIES, ...CITIES].map((city, i) => (
              <div key={i} className="flex-shrink-0 w-72 md:w-96 h-52 md:h-64 relative rounded-2xl overflow-hidden luxury-transition hover:scale-105 border border-ar-steel/40 shadow-xl group/card">
                <img 
                  src={getCityImg(city)} 
                  alt={city} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover/card:scale-110 group-hover/card:brightness-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001529]/95 via-[#001529]/10 to-transparent" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white font-display font-bold text-xl md:text-2xl tracking-tight uppercase antialiased">{city}</p>
                  <div className="w-10 h-1 bg-[#00A8FF] mt-3 transition-all duration-500 group-hover/card:w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTRAL PHRASE DIVIDER */}
        <div className="max-w-5xl mx-auto text-center py-16 px-6">
          <div className="inline-flex items-center gap-8 w-full">
             <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-ar-steel/50 to-[#00A8FF]/40" />
             <p className="text-[12px] md:text-[14px] font-display font-bold text-[#001529] uppercase tracking-[0.4em] whitespace-nowrap opacity-80 antialiased">
               {t('world_section.divider')}
             </p>
             <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-ar-steel/50 to-[#00A8FF]/40" />
          </div>
        </div>

        {/* CAROUSEL 2: MANAUS -> BELÉM (Left to Right >>>>) */}
        <div className="relative flex overflow-hidden py-4 group">
          <div className="flex animate-slug-right group-hover:pause gap-6 will-change-transform transform-gpu">
            {[...CITIES_DOWN, ...CITIES_DOWN, ...CITIES_DOWN].map((city, i) => (
              <div key={i} className="flex-shrink-0 w-72 md:w-96 h-52 md:h-64 relative rounded-2xl overflow-hidden luxury-transition hover:scale-105 border border-ar-steel/40 shadow-xl group/card">
                <img 
                  src={getCityImg(city)} 
                  alt={city} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover/card:scale-110 group-hover/card:brightness-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001529]/95 via-[#001529]/10 to-transparent" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white font-display font-bold text-xl md:text-2xl tracking-tight uppercase antialiased">{city}</p>
                  <div className="w-10 h-1 bg-[#00A8FF] mt-3 transition-all duration-500 group-hover/card:w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slug-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        @keyframes slug-right {
          0% { transform: translate3d(-33.333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes river-line-motion {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-3%, 2%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-slug-left {
          animation: slug-left 150s linear infinite;
        }
        .animate-slug-right {
          animation: slug-right 150s linear infinite;
        }
        .animate-river-line {
          animation: river-line-motion 20s ease-in-out infinite;
        }
        .pause {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
};

export default AmazonWorldSection;
