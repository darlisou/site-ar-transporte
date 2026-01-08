
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const RouteTimeline: React.FC = () => {
  const { t } = useLanguage();
  
  const mainCities = [
    { id: 'BEL', name: 'Belém', type: t('routes.origin') },
    { id: 'STM', name: 'Santarém', type: t('routes.hub'), isHub: true },
    { id: 'MAO', name: 'Manaus', type: t('routes.destination') },
  ];

  return (
    <section id="rota" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-ar-blue font-bold text-[10px] uppercase tracking-[0.4em] mb-4">{t('routes.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ar-navy mb-6 tracking-tight">{t('routes.title')}</h2>
          <div className="w-20 h-1 bg-ar-blue/20 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto py-10">
          {/* Main Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2" />
          
          <div className="flex justify-between items-center relative z-10">
            {mainCities.map((city) => (
              <div key={city.id} className="flex flex-col items-center group">
                <div className={`w-4 h-4 rounded-full border-2 luxury-transition ${city.isHub ? 'bg-ar-blue border-white scale-150 ring-4 ring-ar-blue/10' : 'bg-white border-slate-300'}`} />
                <div className="mt-8 text-center">
                  <h4 className="font-display font-bold text-ar-navy text-sm mb-1">{city.name}</h4>
                  <p className="text-[9px] font-bold text-ar-slate uppercase tracking-widest">{city.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-slate-50 pt-20">
          <div>
            <p className="text-3xl font-display font-bold text-ar-navy mb-2">1,600 km</p>
            <p className="text-[10px] font-bold text-ar-slate uppercase tracking-widest">{t('routes.extension')}</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-ar-navy mb-2">48 {t('routes.hours')}</p>
            <p className="text-[10px] font-bold text-ar-slate uppercase tracking-widest">{t('routes.transit_time')}</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-ar-navy mb-2">{t('routes.weekly')}</p>
            <p className="text-[10px] font-bold text-ar-slate uppercase tracking-widest">{t('routes.frequency')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteTimeline;
