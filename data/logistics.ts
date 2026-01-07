// DATA BASE PARA CÁLCULO DE SEMANAS (NAVIO PAR/ÍMPAR)
export const ANCORA_DATA = new Date("2026-01-07T12:00:00");

// CONTATOS REAIS (ROTEAMENTO)
export const TELEFONES = {
  BELEM_ESCRITORIO: "5591988850889",
  STM_ESCRITORIO: "5593992452631", // Sede Santarém (Passagens)
  STM_DEPOSITO: "5593992020020", // Depósito Santarém (Cargas)
};

// FROTA
export const NAVIOS = {
  RONDONIA: { 
    id: "rondonia",
    name: "F/B Catamarã Rondônia", 
    tag: "Estabilidade Superior & Carga Pesada", 
    type: "cargo",
    desc: "O gigante da bacia amazônica. Casco duplo para estabilidade absoluta e máxima capacidade para logística industrial.",
    badge: "Alta Capacidade",
    features: ["Casco Duplo de Aço", "Logística de Carretas", "Deck VIP Climatizado"],
    image: "https://images.unsplash.com/photo-1544333323-2394d0774189?auto=format&fit=crop&q=80&w=1200"
  },
  AMAZON: { 
    id: "amazon",
    name: "N/M Amazon Star", 
    tag: "Expresso Premium & Conforto", 
    type: "fast",
    desc: "Velocidade e sofisticação. O deck panorâmico mais exclusivo da região, ideal para viagens executivas.",
    badge: "Velocidade Expresso",
    features: ["Navegação Veloz", "Suítes Master", "Deck Panorâmico 360°"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200"
  }
};

// PORTOS COMPLETOS (ORALIDADE GEOGRÁFICA)
export const PORTOS = [
  { id: "BEL", nome: "Belém (PA)", precoBase: 450 },
  { id: "BRE", nome: "Breves (PA)", precoBase: 220 },
  { id: "GUR", nome: "Gurupá (PA)", precoBase: 180 },
  { id: "ALM", nome: "Almeirim (PA)", precoBase: 160 },
  { id: "PRA", nome: "Prainha (PA)", precoBase: 80 },
  { id: "MON", nome: "Monte Alegre (PA)", precoBase: 60 },
  { id: "STM", nome: "Santarém (PA)", precoBase: 0 },
  { id: "OBI", nome: "Óbidos (PA)", precoBase: 60 },
  { id: "JUR", nome: "Juruti (PA)", precoBase: 80 },
  { id: "PAR", nome: "Parintins (AM)", precoBase: 150 },
  { id: "ITA", nome: "Itacoatiara (AM)", precoBase: 180 },
  { id: "MAO", nome: "Manaus (AM)", precoBase: 220 }
];

// LÓGICA DE ROTAS E OFFSETS (DADOS PRECISOS PDF)
export const ROTAS_LOGICA = {
  sub: [ // Belém -> Manaus
    { id: "BEL", off: 0, hora: "18:00" },
    { id: "BRE", off: 1, hora: "09:20" },
    { id: "GUR", off: 1, hora: "22:00" },
    { id: "ALM", off: 2, hora: "06:00" },
    { id: "PRA", off: 2, hora: "13:20" },
    { id: "MON", off: 2, hora: "19:00" },
    { id: "STM", off: 3, hora: "12:00" },
    { id: "OBI", off: 3, hora: "20:30" },
    { id: "JUR", off: 4, hora: "03:00" },
    { id: "PAR", off: 4, hora: "12:00" },
    { id: "ITA", off: 5, hora: "05:30" },
    { id: "MAO", off: 5, hora: "CHEGADA" }
  ],
  des: [ // Manaus -> Belém
    { id: "MAO", off: 0, hora: "11:00" },
    { id: "ITA", off: 0, hora: "19:30" },
    { id: "PAR", off: 1, hora: "05:30" },
    { id: "JUR", off: 1, hora: "12:00" },
    { id: "OBI", off: 1, hora: "17:00" },
    { id: "STM", off: 2, hora: "11:00" },
    { id: "MON", off: 2, hora: "16:00" },
    { id: "PRA", off: 2, hora: "20:30" },
    { id: "ALM", off: 3, hora: "02:00" },
    { id: "GUR", off: 3, hora: "07:30" },
    { id: "BRE", off: 3, hora: "18:30" },
    { id: "BEL", off: 4, hora: "CHEGADA" }
  ]
};

// PRECIFICAÇÃO SIMPLIFICADA (BASEADA NAS IMAGENS)
export const getPrecoEstimado = (origem: string, destino: string): number => {
  if ((origem === 'BEL' && destino === 'MAO') || (origem === 'MAO' && destino === 'BEL')) return 450;
  if (origem === 'STM') return PORTOS.find(p => p.id === destino)?.precoBase || 300;
  if (destino === 'STM') return PORTOS.find(p => p.id === origem)?.precoBase || 300;
  return 350; // Valor médio para trechos longos não listados
};

export const CLASSES = [
  { id: "suite_master", nome: "Suíte Master", desc: "Cama Box, Banheiro Privativo de Alto Padrão, Climatização e Frigobar.", img: "https://images.unsplash.com/photo-1590381105924-c725a9b803bd?auto=format&fit=crop&q=80&w=800" },
  { id: "camarote", nome: "Camarote Executivo", desc: "4 Acomodações Premium, Ar-condicionado e Privacidade para sua equipe ou família.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
  { id: "salao", nome: "Salão Business", desc: "Poltronas reclináveis em ambiente climatizado e monitorado.", img: "https://images.unsplash.com/photo-1517245315167-6c7601f02844?auto=format&fit=crop&q=80&w=800" },
  { id: "redario", nome: "Redário Tradicional", desc: "Experiência autêntica no convés superior com ventilação natural.", img: "https://images.unsplash.com/photo-1506467024211-134c6930c5a4?auto=format&fit=crop&q=80&w=800" }
];
