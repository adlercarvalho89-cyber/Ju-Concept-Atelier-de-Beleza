import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import './PilarCard.css';

function PilarCard({ pilar, index, onVerFotos }) {
  const [ref, isVisible] = useFadeInOnScroll();
  const temFotos = pilar.fotos?.length > 0;

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

      {temFotos && (
        <button
          type="button"
          className="pilar-card__ver-fotos"
          onClick={() => onVerFotos(pilar)}
          aria-label={`Ver galeria de fotos de ${pilar.titulo}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          Ver fotos
        </button>
      )}
    </article>
  );
}

export default PilarCard;