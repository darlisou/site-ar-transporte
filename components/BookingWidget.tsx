
import React, { useState, useEffect } from 'react';
import { PORTOS, ROTAS_LOGICA, ANCORA_DATA, TELEFONES, NAVIOS, getPrecoEstimado } from '../data/logistics';
import { MapPin, Calendar, User, Box, Anchor, ArrowRightLeft, MessageCircle, Info, Ship, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ViagemResultado {
  navio: string;
  data: string;
  hora: string;
  porto: string;
  preco: number;
  fullDate: Date;
}

const BookingWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pax' | 'cargo'>('pax');
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [resultados, setResultados] = useState<ViagemResultado[]>([]);

  useEffect(() => {
    if (origem && destino && origem !== destino) {
      calcularProximasSaidas();
    } else {
      setResultados([]);
    }
  }, [origem, destino, activeTab]);

  const handleSwap = () => {
    const temp = origem;
    setOrigem(destino);
    setDestino(temp);
  };

  const calcularProximasSaidas = () => {
    let rota = ROTAS_LOGICA.sub;
    let iO = rota.findIndex(p => p.id === origem);
    let iD = rota.findIndex(p => p.id === destino);

    if (iO === -1 || iD === -1 || iO >= iD) {
      rota = ROTAS_LOGICA.des;
      iO = rota.findIndex(p => p.id === origem);
      iD = rota.findIndex(p => p.id === destino);
    }

    if (iO !== -1 && iD !== -1 && iO < iD) {
      const pO = rota[iO];
      const saídas: ViagemResultado[] = [];
      const now = new Date();
      const preco = getPrecoEstimado(origem, destino);

      for (let i = 0; i < 3; i++) {
        const partRoteiro = new Date();
        partRoteiro.setDate(now.getDate() + ((3 + 7 - now.getDay()) % 7) + (i * 7));
        
        if (i === 0 && now.getDay() === 3 && now.getHours() >= 18) {
          partRoteiro.setDate(partRoteiro.getDate() + 7);
        }

        const dataLocal = new Date(partRoteiro);
        dataLocal.setDate(dataLocal.getDate() + pO.off);

        const diffMs = partRoteiro.getTime() - ANCORA_DATA.getTime();
        const diffWeeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
        const navio = (diffWeeks % 2 === 0) ? NAVIOS.RONDONIA.name : NAVIOS.AMAZON.name;

        saídas.push({
          navio,
          data: dataLocal.toLocaleDateString(language === 'pt' ? 'pt-BR' : language === 'en' ? 'en-US' : 'es-ES', { day: '2-digit', month: 'short' }).toUpperCase(),
          hora: pO.hora,
          porto: PORTOS.find(p => p.id === origem)?.nome || '',
          preco: preco,
          fullDate: dataLocal
        });
      }
      setResultados(saídas);
    } else {
      setResultados([]);
    }
  };

  const handleAgendar = (res: ViagemResultado) => {
    let phone = TELEFONES.BELEM_ESCRITORIO;
    if (origem === 'STM') {
      phone = activeTab === 'cargo' ? TELEFONES.STM_DEPOSITO : TELEFONES.STM_ESCRITORIO;
    } else if (origem === 'MAO') {
      phone = "5592993903023";
    }

    const oNome = PORTOS.find(p => p.id === origem)?.nome;
    const dNome = PORTOS.find(p => p.id === destino)?.nome;
    const tipo = activeTab === 'pax' ? t('booking.wa_msg_type_pax') : t('booking.wa_msg_type_cargo');
    const msg = `${t('booking.wa_msg_prefix')} ${tipo}:\n${t('booking.wa_msg_route')}: *${oNome}* ➝ *${dNome}*\n${t('booking.wa_msg_vessel')}: *${res.navio}*\n${t('booking.wa_msg_date')}: *${res.data}* às *${res.hora}*\n${t('booking.wa_msg_price')}: *R$ ${res.preco.toFixed(2)}*.`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative z-30 -mt-20 md:-mt-24">
      <div className="bg-white/95 backdrop-blur-xl airline-shadow rounded-2xl overflow-hidden luxury-transition border border-white/40">
        
        {/* Tab Selector */}
        <div className="flex bg-ar-ice/50 border-b border-ar-steel/50">
          <button 
            onClick={() => setActiveTab('pax')}
            className={`flex-1 py-5 flex items-center justify-center gap-2.5 text-[11px] font-bold tracking-widest uppercase transition-all relative
              ${activeTab === 'pax' ? 'text-ar-navy bg-white' : 'text-ar-slate hover:text-ar-navy hover:bg-white/40'}`}
          >
            <User size={16} /> {t('booking.passengers')}
            {activeTab === 'pax' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-ar-blue" />}
          </button>
          <button 
            onClick={() => setActiveTab('cargo')}
            className={`flex-1 py-5 flex items-center justify-center gap-2.5 text-[11px] font-bold tracking-widest uppercase transition-all relative
              ${activeTab === 'cargo' ? 'text-ar-navy bg-white' : 'text-ar-slate hover:text-ar-navy hover:bg-white/40'}`}
          >
            <Box size={16} /> {t('booking.cargo')}
            {activeTab === 'cargo' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-ar-blue" />}
          </button>
        </div>

        {/* Search Inputs Bar */}
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            <div className="w-full md:flex-1 space-y-2">
              <label className="text-[10px] font-bold text-ar-slate uppercase tracking-widest px-1">{t('booking.origin_label')}</label>
              <div className="relative group luxury-transition bg-ar-ice/50 hover:bg-ar-ice rounded-xl border border-ar-steel/30 p-1">
                <Anchor size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ar-blue opacity-40" />
                <select 
                  value={origem} 
                  onChange={(e) => setOrigem(e.target.value)}
                  className="w-full h-12 pl-12 bg-transparent font-display font-bold text-ar-navy outline-none appearance-none cursor-pointer text-sm"
                >
                  <option value="" disabled>{t('booking.origin_placeholder')}</option>
                  {PORTOS.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
                </select>
              </div>
            </div>

            <button onClick={handleSwap} className="p-3 rounded-full bg-ar-ice border border-ar-steel/50 text-ar-slate hover:text-ar-blue transition-all hover:rotate-180 mt-6 hidden md:block">
              <ArrowRightLeft size={16} />
            </button>

            <div className="w-full md:flex-1 space-y-2">
              <label className="text-[10px] font-bold text-ar-slate uppercase tracking-widest px-1">{t('booking.destination_label')}</label>
              <div className="relative group luxury-transition bg-ar-ice/50 hover:bg-ar-ice rounded-xl border border-ar-steel/30 p-1">
                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ar-blue opacity-40" />
                <select 
                  value={destino} 
                  onChange={(e) => setDestino(e.target.value)}
                  className="w-full h-12 pl-12 bg-transparent font-display font-bold text-ar-navy outline-none appearance-none cursor-pointer text-sm"
                >
                  <option value="" disabled>{t('booking.destination_placeholder')}</option>
                  {PORTOS.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Dynamic Results Area */}
          {resultados.length > 0 ? (
            <div className="mt-8 pt-8 border-t border-ar-steel/50 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[10px] font-bold text-ar-blue uppercase tracking-[0.2em] flex items-center gap-2">
                  <Calendar size={14} /> {t('booking.results_title')}
                </h4>
                <div className="flex items-center gap-2 text-ar-slate text-[10px] font-bold uppercase tracking-widest">
                  <Tag size={12} className="text-green-600" />
                  {t('booking.price_from')} R$ {resultados[0].preco.toFixed(2)}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resultados.map((res, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleAgendar(res)}
                    className="group relative bg-white border border-ar-steel/50 rounded-xl p-5 hover:border-ar-blue luxury-transition cursor-pointer hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex flex-col">
                        <span className="text-2xl font-display font-extrabold text-ar-navy tracking-tighter">{res.data}</span>
                        <span className="text-[10px] font-bold text-ar-slate uppercase tracking-widest">{t('booking.departure')} {res.hora}</span>
                      </div>
                      <div className="bg-ar-blue/10 p-2 rounded-lg text-ar-blue group-hover:bg-ar-blue group-hover:text-white transition-colors">
                        <MessageCircle size={18} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-ar-navy">
                        <Ship size={14} className="text-ar-blue" />
                        {res.navio}
                      </div>
                      <div className="flex items-center justify-between border-t border-ar-steel/30 pt-3">
                         <div className="flex items-center gap-2 text-[11px] text-ar-slate font-medium">
                            <Info size={13} />
                            {res.porto}
                         </div>
                         <div className="text-[11px] font-bold text-ar-blue">
                           {t('booking.reserve')}
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : origem && destino && origem !== destino ? (
             <div className="mt-8 pt-8 border-t border-ar-steel/50 text-center">
                <p className="text-sm font-medium text-ar-slate">{t('booking.unavailable')}</p>
             </div>
          ) : (
            <div className="mt-8 pt-8 border-t border-ar-steel/50 flex items-center justify-center gap-3 text-ar-slate">
              <Info size={16} />
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-60">{t('booking.helper_text')}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Security Tag */}
      <div className="mt-6 flex justify-center">
        <div className="px-6 py-2.5 bg-ar-navy/10 backdrop-blur-lg rounded-full border border-white/20">
          <p className="text-[9px] font-bold text-white uppercase tracking-[0.25em] flex items-center gap-3">
            <span className="w-2 h-2 bg-ar-blue rounded-full animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)]"></span>
            {t('booking.security_tag')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
