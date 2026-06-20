/**
 * src/components/sections/Transformacoes.jsx
 * --------------------------------------------------------------
 * Galeria horizontal de antes/depois. O deslize no mobile é 100%
 * nativo (scroll-snap), sem nenhuma lib de carrossel — as setas
 * no desktop são só um atalho pra quem usa mouse/trackpad, que não
 * tem o gesto de arrastar com o dedo.
 */

import { useRef } from 'react';
import './Transformacoes.css';

const TRANSFORMACOES = [
  {
    id: 'transformacao-1',
    categoria: 'Coloração',
    antesSrc: '/images/antes-depois/transformacao-1-antes.jpg',
    depoisSrc: '/images/antes-depois/transformacao-1-depois.jpg',
  },
  {
    id: 'transformacao-2',
    categoria: 'Mechas / Balayage',
    antesSrc: '/images/antes-depois/transformacao-2-antes.jpg',
    depoisSrc: '/images/antes-depois/transformacao-2-depois.jpg',
  },
  {
    id: 'transformacao-3',
    categoria: 'Design de Sobrancelhas',
    antesSrc: '/images/antes-depois/transformacao-3-antes.jpg',
    depoisSrc: '/images/antes-depois/transformacao-3-depois.jpg',
  },
  {
    id: 'transformacao-4',
    categoria: 'Botox Capilar',
    antesSrc: '/images/antes-depois/transformacao-4-antes.jpg',
    depoisSrc: '/images/antes-depois/transformacao-4-depois.jpg',
  },
];

function Transformacoes() {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.transformacoes__item');
    const cardWidth = card ? card.offsetWidth + 16 : 320; // 16 = gap entre cards
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="transformacoes" className="transformacoes">
      <div className="transformacoes__header">
        <div>
          <p className="transformacoes__eyebrow">Resultados Reais</p>
          <h2 className="transformacoes__title">Transformações</h2>
        </div>

        <div className="transformacoes__arrows">
          <button
            type="button"
            className="transformacoes__arrow"
            aria-label="Ver transformação anterior"
            onClick={() => scrollByCard(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="transformacoes__arrow"
            aria-label="Ver próxima transformação"
            onClick={() => scrollByCard(1)}
          >
            ›
          </button>
        </div>
      </div>

      <ul className="transformacoes__track" ref={trackRef}>
        {TRANSFORMACOES.map((item) => (
          <li key={item.id} className="transformacoes__item">
            <div className="transformacoes__pair">
              <figure className="transformacoes__figure">
                <img
                  src={item.antesSrc}
                  alt={`Antes do procedimento de ${item.categoria}`}
                  className="transformacoes__image"
                />
                <figcaption className="transformacoes__label">Antes</figcaption>
              </figure>
              <figure className="transformacoes__figure">
                <img
                  src={item.depoisSrc}
                  alt={`Depois do procedimento de ${item.categoria}`}
                  className="transformacoes__image"
                />
                <figcaption className="transformacoes__label transformacoes__label--depois">
                  Depois
                </figcaption>
              </figure>
            </div>
            <p className="transformacoes__categoria">{item.categoria}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Transformacoes;