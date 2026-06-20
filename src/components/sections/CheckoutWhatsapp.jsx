/**
 * src/components/sections/CheckoutWhatsapp.jsx
 * --------------------------------------------------------------
 * Resumo final do combo + geração do link wa.me formatado.
 * Consome o MESMO CartContext que o Menu de Serviços — é por isso
 * que remover um item aqui também reflete lá em cima, e vice-versa.
 */

import { useCart } from '../../context/CartContext';
import { formatarPreco, formatarDuracao } from '../../data/servicosData';
import { montarLinkWhatsapp } from '../../utils/whatsapp';
import './CheckoutWhatsapp.css';

function CheckoutWhatsapp() {
  const { items, total, duration, removeItem, clearCart } = useCart();
  const carrinhoVazio = items.length === 0;

  // Recalcula a cada render — é barato (poucos itens) e garante que
  // o link nunca fique desatualizado em relação ao carrinho.
  const linkWhatsapp = montarLinkWhatsapp(items, total, duration);

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