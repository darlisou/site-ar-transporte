
import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FleetCardProps {
  ship: {
    id: string;
    name: string;
    type: string;
    image: string;
  };
}

const FleetCard: React.FC<FleetCardProps> = ({ ship }) => {
  const { t } = useLanguage();

  return (
    <div className="group bg-white rounded-xl overflow-hidden airline-shadow luxury-transition border border-ar-steel/50 hover:border-ar-blue/30">
      <div className="relative h-[420px] overflow-hidden">
        <img 
          src={ship.image} 
          alt={ship.name} 
          className="w-full h-full object-cover luxury-transition group-hover:scale-105 contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ar-navy/90 via-ar-navy/20 to-transparent opacity-80 group-hover:opacity-100 luxury-transition" />
        
        <div className="absolute top-8 right-8">
          <div className="bg-white/95 backdrop-blur-md text-ar-navy text-[10px] font-bold px-6 py-2 rounded-lg tracking-premium uppercase border border-white/20 shadow-xl">
            {t(`fleet.${ship.id}.badge`)}
          </div>
        </div>

        <div className="absolute bottom-10 left-10 text-white luxury-transition">
          <div className="flex items-center gap-3 mb-3">
             {ship.type === 'cargo' ? <ShieldCheck className="text-ar-blue" size={24} /> : <Zap className="text-ar-blue" size={24} />}
             <p className="text-ar-blue font-bold text-xs uppercase tracking-[0.3em]">{ship.type === 'cargo' ? t('fleet.heavy_duty') : t('fleet.high_speed')}</p>
          </div>
          <h4 className="font-display font-extrabold text-3xl mb-4 tracking-tight">{ship.name}</h4>
          <p className="text-white/70 text-sm font-medium max-w-sm leading-relaxed">{t(`fleet.${ship.id}.tag`)}</p>
        </div>
      </div>

      <div className="p-12">
        <div className="flex justify-between items-center mb-10">
          <div className="space-y-1">
            <h3 className="text-[10px] font-bold text-ar-slate uppercase tracking-widest">{t('fleet.specs_label')}</h3>
            <p className="text-ar-navy font-display font-bold text-lg">{t('fleet.reliability')}</p>
          </div>
          <div className="w-12 h-12 rounded-full border border-ar-steel flex items-center justify-center text-ar-slate group-hover:text-ar-blue group-hover:border-ar-blue luxury-transition group-hover:scale-110">
            <ArrowUpRight size={24} />
          </div>
        </div>
        
        <p className="text-ar-slate text-base font-medium leading-relaxed mb-10">
          {t(`fleet.${ship.id}.desc`)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 border-t border-ar-steel">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-ar-navy uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-ar-blue" />
              {t(`fleet.${ship.id}.feat${i}`)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
