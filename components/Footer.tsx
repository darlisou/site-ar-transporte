
import React from 'react';
import { Instagram, Linkedin, ExternalLink, Box } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ar-navy text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        
        {/* Brand Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white text-ar-navy rounded flex items-center justify-center font-display font-bold text-lg">AR</div>
            <span className="font-display font-extrabold text-lg tracking-tight uppercase">AR TRANSPORTE</span>
          </div>
          <p className="text-ar-slate text-[13px] font-medium leading-relaxed max-w-xs opacity-80">
            {t('footer.description')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-ar-blue transition-all border border-white/5"><Instagram size={18} /></a>
            <a href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-ar-blue transition-all border border-white/5"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Sales & Contact */}
        <div>
          <h5 className="text-[11px] font-bold text-ar-blue uppercase tracking-[0.3em] mb-8">{t('footer.regional_centers')}</h5>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1.5 group cursor-pointer">
              <span className="text-[9px] text-ar-slate uppercase font-bold tracking-widest">{t('footer.base')} Belém (PA)</span>
              <span className="text-sm font-bold flex items-center gap-2 group-hover:text-ar-blue transition-colors">
                (91) 98885-0889 <ExternalLink size={10} className="opacity-20" />
              </span>
            </li>
            <li className="flex flex-col gap-1.5 group cursor-pointer">
              <span className="text-[9px] text-ar-slate uppercase font-bold tracking-widest">{t('footer.base')} Santarém (PA)</span>
              <span className="text-sm font-bold flex items-center gap-2 group-hover:text-ar-blue transition-colors">
                (93) 99245-2631 <ExternalLink size={10} className="opacity-20" />
              </span>
            </li>
          </ul>
        </div>

        {/* Cargo Logistics */}
        <div>
          <h5 className="text-[11px] font-bold text-ar-blue uppercase tracking-[0.3em] mb-8">{t('footer.cargo_corporate')}</h5>
          <ul className="space-y-6">
            <li className="flex flex-col gap-2 group cursor-pointer">
              <span className="text-[9px] text-ar-slate uppercase font-bold tracking-widest">{t('footer.depot')} Santarém (PA)</span>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-ar-blue/30 transition-all">
                <span className="text-sm font-bold flex items-center gap-2 text-white/90">
                  <Box size={16} className="text-ar-blue" /> (93) 99202-0020
                </span>
                <p className="text-[9px] text-ar-slate mt-2 uppercase font-bold tracking-tighter">{t('footer.dispatch')}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Corporate Column */}
        <div className="flex flex-col">
          <h5 className="text-[11px] font-bold text-ar-blue uppercase tracking-[0.3em] mb-8">{t('footer.institutional')}</h5>
          <p className="text-[12px] font-medium text-ar-slate mb-6 leading-relaxed">Acesse o portal para cotações B2B e contratos de logística pesada.</p>
          <button className="w-full py-3.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-ar-navy transition-all mb-auto">
            {t('footer.partner_portal')}
          </button>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold text-ar-slate tracking-widest uppercase gap-6">
        <p>© 2026 AR TRANSPORTE LTDA. CNPJ 04.891.420/0001-66</p>
        <div className="flex gap-10">
          <span className="hover:text-white cursor-pointer transition-colors">{t('footer.privacy')}</span>
          <span className="hover:text-white cursor-pointer transition-colors">{t('footer.compliance')}</span>
          <span className="opacity-40">Silent Luxury v3.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
