/**
 * src/components/ui/PilarCard.jsx
 * --------------------------------------------------------------
 * Card individual de especialidade. Cada instância observa seu
 * PRÓPRIO scroll — é por isso que esse componente existe separado
 * de Pilares.jsx (ver explicação no chat sobre Regra dos Hooks).
 */

import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import './PilarCard.css';

function PilarCard({ pilar, index }) {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <article
      ref={ref}
      className={`pilar-card ${isVisible ? 'pilar-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <span className="pilar-card__number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="pilar-card__title">{pilar.titulo}</h3>
      <p className="pilar-card__description">{pilar.descricao}</p>
    </article>
  );
}

export default PilarCard;
