/**
 * src/components/sections/CheckoutWhatsapp.jsx
 * --------------------------------------------------------------
 * Resumo final do combo + geração do link wa.me formatado.
 * Consome o MESMO CartContext que o Menu de Serviços — é por isso
 * que remover um item aqui também reflete lá em cima, e vice-versa.
 */

import { useCart } from '../../context/CartContext';
import { formatarPreco, formatarDuracao } from '../../data/servicosData';
import './CheckoutWhatsapp.css';

// TODO(Juliana): trocar pelo número real do WhatsApp Business do
// atelier. Formato internacional, só números: 55 + DDD + número.
const WHATSAPP_NUMERO = '5521999999999';

function montarMensagemWhatsapp(items, total, duration) {
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

function CheckoutWhatsapp() {
  const { items, total, duration, removeItem, clearCart } = useCart();
  const carrinhoVazio = items.length === 0;

  // Recalcula a cada render — é barato (poucos itens) e garante que
  // o link nunca fique desatualizado em relação ao carrinho.
  const mensagem = montarMensagemWhatsapp(items, total, duration);
  const linkWhatsapp = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
    <section id="checkout" className="checkout">
      <div className="checkout__inner">
        <p className="checkout__eyebrow">Seu Combo</p>
        <h2 className="checkout__title">Finalize Seu Agendamento</h2>

        {carrinhoVazio ? (
          <p className="checkout__vazio">
            Você ainda não selecionou nenhum serviço. Volte ao{' '}
            <a href="#servicos" className="checkout__vazio-link">
              Menu de Serviços
            </a>{' '}
            e monte seu combo.
          </p>
        ) : (
          <>
            <ul className="checkout__lista">
              {items.map((item) => (
                <li key={item.id} className="checkout__item">
                  <span className="checkout__item-nome">{item.nome}</span>
                  <span className="checkout__item-preco">
                    {formatarPreco(item.preco)}
                  </span>
                  <button
                    type="button"
                    className="checkout__item-remover"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remover ${item.nome} do combo`}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>

            <div className="checkout__resumo">
              <div className="checkout__resumo-linha">
                <span>Tempo estimado</span>
                <span>{formatarDuracao(duration)}</span>
              </div>
              <div className="checkout__resumo-linha checkout__resumo-linha--total">
                <span>Total</span>
                <span>{formatarPreco(total)}</span>
              </div>
            </div>

            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="checkout__botao"
            >
              Solicitar Agendamento via WhatsApp
            </a>

            <button type="button" className="checkout__limpar" onClick={clearCart}>
              Limpar combo
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default CheckoutWhatsapp;