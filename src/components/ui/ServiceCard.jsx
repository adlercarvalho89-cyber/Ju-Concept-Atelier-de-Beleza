/**
 * src/components/ui/ServiceCard.jsx
 * --------------------------------------------------------------
 * Card de serviço dentro do Menu. Botão funciona como TOGGLE:
 * adiciona se não está no carrinho, remove se já está — em vez
 * de só "+ Adicionar" sem volta, que deixaria a cliente refém de
 * rolar até o checkout pra desfazer um clique errado.
 */

import { useCart } from '../../context/CartContext';
import { formatarPreco, formatarDuracao } from '../../data/servicosData';
import './ServiceCard.css';

function ServiceCard({ servico }) {
  const { items, addItem, removeItem } = useCart();
  const estaNoCarrinho = items.some((item) => item.id === servico.id);

  const handleClick = () => {
    if (estaNoCarrinho) {
      removeItem(servico.id);
    } else {
      addItem(servico);
    }
  };

  return (
    <article className="service-card">
      <div className="service-card__info">
        <h3 className="service-card__nome">{servico.nome}</h3>
        <p className="service-card__microtexto">{servico.microtexto}</p>
        <div className="service-card__meta">
          <span className="service-card__preco">{formatarPreco(servico.preco)}</span>
          <span aria-hidden="true">·</span>
          <span className="service-card__duracao">
            {formatarDuracao(servico.duracaoMinutos)}
          </span>
        </div>
      </div>

      <button
        type="button"
        className={`service-card__botao ${
          estaNoCarrinho ? 'service-card__botao--ativo' : ''
        }`}
        onClick={handleClick}
        aria-pressed={estaNoCarrinho}
      >
        {estaNoCarrinho ? '✓ Adicionado' : '+ Adicionar'}
      </button>
    </article>
  );
}

export default ServiceCard;