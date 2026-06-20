/**
 * src/utils/whatsapp.js
 * --------------------------------------------------------------
 * Lógica de geração do link wa.me, extraída pra cá porque agora
 * DOIS lugares precisam dela: a seção de Checkout completa e o
 * painel rápido de carrinho da Navbar. Repetir essa função nos
 * dois componentes seria violar DRY — e pior, se um dia mudar o
 * texto da mensagem, alguém ia esquecer de atualizar um dos dois.
 */

import { formatarPreco, formatarDuracao } from '../data/servicosData';

// TODO(Juliana): trocar pelo número real do WhatsApp Business do
// atelier. Formato internacional, só números: 55 + DDD + número.
const WHATSAPP_NUMERO = '5521999999999';

export function montarMensagemWhatsapp(items, total, duration) {
  const listaServicos = items
    .map((item) => `• ${item.nome} — ${formatarPreco(item.preco)}`)
    .join('\n');

  return [
    'Olá! Gostaria de agendar o seguinte combo no Ju Concept:',
    '',
    listaServicos,
    '',
    `Total: ${formatarPreco(total)}`,
    `Tempo estimado: ${formatarDuracao(duration)}`,
  ].join('\n');
}

export function montarLinkWhatsapp(items, total, duration) {
  const mensagem = montarMensagemWhatsapp(items, total, duration);
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}