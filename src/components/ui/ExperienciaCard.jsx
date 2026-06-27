import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import './ExperienciaCard.css';

const ICONES = {
  visagismo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="4" />
      <path d="M4 20c0-3.5 3.6-6 8-6" />
      <circle cx="19.5" cy="18.5" r="2.5" />
      <path d="M21.5 21l1.5 1.5" />
    </svg>
  ),
  spa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3C12 3 5 10 5 15a7 7 0 0 0 14 0c0-5-7-12-7-12z" />
      <path d="M12 21v-7" />
      <path d="M9 17c1 1 3 2 3 2s2-1 3-2" />
    </svg>
  ),
  exclusividade: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
      <path d="M9.5 15l2 2 3.5-3" />
    </svg>
  ),
};

function ExperienciaCard({ item, index }) {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <article
      ref={ref}
      className={`exp-card ${isVisible ? 'exp-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="exp-card__icone-wrapper" aria-hidden="true">
        {ICONES[item.icone]}
      </div>
      <h3 className="exp-card__titulo">{item.titulo}</h3>
      <p className="exp-card__descricao">{item.descricao}</p>
    </article>
  );
}

export default ExperienciaCard;