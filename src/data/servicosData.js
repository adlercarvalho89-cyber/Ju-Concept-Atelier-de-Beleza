export const CATEGORIAS = {
  CABELO: 'Hair & Therapy',
  OLHAR: 'Estética do Olhar',
  GROOMING: 'Grooming Masculino',
};

/**
 * @typedef {Object} Servico
 * @property {string} id              
 * @property {string} categoria       
 * @property {string} nome            
 * @property {number} preco           
 * @property {number} duracaoMinutos  
 * @property {string} microtexto      
 * @property {boolean} [destaque]    
 */

/** @type {Servico[]} */
export const servicos = [
  // ---------- HAIR & THERAPY ----------
  {
    id: 'escova-hidratacao-profunda',
    categoria: CATEGORIAS.CABELO,
    nome: 'Escova Modeladora + Hidratação Profunda',
    preco: 130,
    duracaoMinutos: 60,
    microtexto: 'Ativos importados de reposição lipídica para fios com brilho de vitrine sem pesar.',
  },
  {
    id: 'coloracao-premium',
    categoria: CATEGORIAS.CABELO,
    nome: 'Coloração Premium',
    preco: 280,
    duracaoMinutos: 120,
    microtexto: 'Tintas importadas de baixo amônia, com protocolo de proteção do fio durante todo o processo.',
    destaque: true,
  },
  {
    id: 'mechas-balayage',
    categoria: CATEGORIAS.CABELO,
    nome: 'Mechas / Balayage',
    preco: 420,
    duracaoMinutos: 180,
    microtexto: 'Técnica de visagismo personalizada ao formato do rosto, com pó descolorante de baixo dano.',
  },
  {
    id: 'botox-capilar-sem-formol',
    categoria: CATEGORIAS.CABELO,
    nome: 'Botox Capilar (Realinhamento)',
    preco: 220,
    duracaoMinutos: 90,
    microtexto: 'Fórmula 100% livre de formol — realinhamento seguro, liberado inclusive para gestantes.',
    destaque: true,
  },
  {
    id: 'reconstrucao-capilar',
    categoria: CATEGORIAS.CABELO,
    nome: 'Tratamento de Reconstrução Capilar',
    preco: 150,
    duracaoMinutos: 50,
    microtexto: 'Reposição de massa capilar com queratina hidrolisada para fios danificados por química.',
  },

  // ---------- ESTÉTICA DO OLHAR ----------
  {
    id: 'design-sobrancelhas-henna',
    categoria: CATEGORIAS.OLHAR,
    nome: 'Design de Sobrancelhas com Henna',
    preco: 60,
    duracaoMinutos: 30,
    microtexto: 'Visagismo facial aplicado ao desenho — sobrancelha alinhada à proporção única do seu rosto.',
  },
  {
    id: 'lash-lifting',
    categoria: CATEGORIAS.OLHAR,
    nome: 'Lash Lifting',
    preco: 110,
    duracaoMinutos: 60,
    microtexto: 'Curvatura natural dos cílios com produtos dermatologicamente testados, sem extensão.',
  },
  {
    id: 'extensao-cilios-fio-a-fio',
    categoria: CATEGORIAS.OLHAR,
    nome: 'Extensão de Cílios Fio a Fio',
    preco: 180,
    duracaoMinutos: 120,
    microtexto: 'Fibras de seda importadas e cola hipoalergênica de cura rápida, sem pesar a pálpebra.',
    destaque: true,
  },
  {
    id: 'brow-lamination',
    categoria: CATEGORIAS.OLHAR,
    nome: 'Brow Lamination',
    preco: 95,
    duracaoMinutos: 45,
    microtexto: 'Efeito fio a fio penteado que dura semanas, com manutenção simples no dia a dia.',
  },

  // ---------- GROOMING MASCULINO ----------
  {
    id: 'corte-masculino-premium',
    categoria: CATEGORIAS.GROOMING,
    nome: 'Corte Masculino Premium',
    preco: 90,
    duracaoMinutos: 45,
    microtexto: 'Finalização com produtos importados de styling e toalha quente ao final do corte.',
  },
  {
    id: 'barba-toalha-quente',
    categoria: CATEGORIAS.GROOMING,
    nome: 'Barba Modelada com Toalha Quente',
    preco: 70,
    duracaoMinutos: 40,
    microtexto: 'Protocolo de barbearia clássica: vapor, navalha e óleo finalizador para pele sem irritação.',
  },
  {
    id: 'sobrancelha-masculina',
    categoria: CATEGORIAS.GROOMING,
    nome: 'Sobrancelha Masculina',
    preco: 45,
    duracaoMinutos: 20,
    microtexto: 'Aparo discreto que preserva a naturalidade — sem efeito "feito", só mais alinhado.',
  },
  {
    id: 'hidratacao-capilar-masculina',
    categoria: CATEGORIAS.GROOMING,
    nome: 'Hidratação Capilar Masculina',
    preco: 60,
    duracaoMinutos: 30,
    microtexto: 'Reposição de hidratação para couro cabeludo e fios ressecados pelo uso de boné e sol.',
  },
];

/**
 * Helper: retorna todos os serviços de uma categoria.
 * Mantém os componentes de UI "burros" — eles não precisam saber
 * COMO filtrar, só pedem o resultado pronto. Isso facilita testar
 * a lógica de filtro isolada, sem precisar renderizar componente nenhum.
 */
export const getServicosPorCategoria = (categoria) =>
  servicos.filter((servico) => servico.categoria === categoria);

/**
 * Helper: formata o preço em padrão monetário brasileiro.
 * Centralizar aqui evita repetir `toLocaleString` em 5 componentes
 * diferentes — e facilita trocar a moeda no futuro (escala internacional).
 */
export const formatarPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

/**
 * Helper: formata a duração em texto legível (ex: "1h 30min").
 * Usado no Menu de Serviços e no Checkout WhatsApp.
 */
export const formatarDuracao = (minutos) => {
  const horas = Math.floor(minutos / 60);
  const min = minutos % 60;
  if (horas === 0) return `${min}min`;
  if (min === 0) return `${horas}h`;
  return `${horas}h ${min}min`;
};