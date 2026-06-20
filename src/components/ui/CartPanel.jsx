/**
 * src/components/ui/CartPanel.jsx
 * --------------------------------------------------------------
 * Painel de acesso rápido ao carrinho, acionado pelo ícone da
 * Navbar. Mobile: bottom sheet (zona de fácil alcance do polegar).
 * Desktop: dropdown ancorado no ícone. Mesma estrutura JSX nos
 * dois casos — quem muda o comportamento visual é só o CSS.
 */

import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { formatarPreco, formatarDuracao } from '../../data/servicosData';
import { montarLinkWhatsapp } from '../../utils/whatsapp';
import './CartPanel.css';

function CartPanel({ isOpen, onClose }) {
  const { items, total, duration, removeItem, clearCart } = useCart();
  const carrinhoVazio = items.length === 0;

  // Trava o scroll do body e fecha com Esc enquanto o painel está
  // aberto — comportamento padrão de qualquer modal/sheet decente.
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const linkWhatsapp = montarLinkWhatsapp(items, total, duration);

  return (
    <>
      <div className="cart-panel__backdrop" onClick={onClose} aria-hidden="true" />

      <div
        id="cart-panel"
        className="cart-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Seu combo de serviços"
      >
        {/* "Puxador" visual — só faz sentido como affordance de swipe
            no bottom sheet mobile; some no dropdown desktop via CSS. */}
        <div className="cart-panel__handle" aria-hidden="true" />

        <div className="cart-panel__header">
          <h2 className="cart-panel__title">Seu Combo</h2>
          <button
            type="button"
            className="cart-panel__fechar"
            onClick={onClose}
            aria-label="Fechar carrinho"
          >
            ×
          </button>
        </div>

        {carrinhoVazio ? (
          <p className="cart-panel__vazio">
            Nenhum serviço selecionado ainda. Escolha no Menu de Serviços.
          </p>
        ) : (
          <>
            <ul className="cart-panel__lista">
              {items.map((item) => (
                <li key={item.id} className="cart-panel__item">
                  <span className="cart-panel__item-nome">{item.nome}</span>
                  <span className="cart-panel__item-preco">
                    {formatarPreco(item.preco)}
                  </span>
                  <button
                    type="button"
                    className="cart-panel__item-remover"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remover ${item.nome} do combo`}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-panel__total">
              <span>{formatarDuracao(duration)}</span>
              <span className="cart-panel__total-valor">{formatarPreco(total)}</span>
            </div>

            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cart-panel__botao"
            >
              Solicitar via WhatsApp
            </a>

            <button type="button" className="cart-panel__limpar" onClick={clearCart}>
              Limpar combo
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default CartPanel;
