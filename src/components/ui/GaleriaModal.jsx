import { useEffect, useRef } from 'react';
import './GaleriaModal.css';

function GaleriaModal({ pilar, onClose }) {
  const trackRef = useRef(null);

  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const scrollByPhoto = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector('.galeria-modal__item');
    const width = item ? item.offsetWidth + 12 : 300; // 12 = gap
    track.scrollBy({ left: direction * width, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="galeria-modal__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="galeria-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Galeria de fotos: ${pilar.titulo}`}
      >
        <div className="galeria-modal__handle" aria-hidden="true" />

        <div className="galeria-modal__header">
          <h3 className="galeria-modal__titulo">{pilar.titulo}</h3>
          <button
            type="button"
            className="galeria-modal__fechar"
            onClick={onClose}
            aria-label="Fechar galeria"
          >
            ×
          </button>
        </div>

        <div className="galeria-modal__track" ref={trackRef}>
          {pilar.fotos.map((foto, i) => (
            <figure key={i} className="galeria-modal__item">
              <img
                src={foto.src}
                alt={foto.alt}
                className="galeria-modal__foto"
              />
              {foto.legenda && (
                <figcaption className="galeria-modal__legenda">
                  {foto.legenda}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {pilar.fotos.length > 1 && (
          <div className="galeria-modal__arrows">
            <button
              type="button"
              className="galeria-modal__arrow"
              onClick={() => scrollByPhoto(-1)}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <span className="galeria-modal__contador" aria-hidden="true">
              {pilar.fotos.length} fotos
            </span>
            <button
              type="button"
              className="galeria-modal__arrow"
              onClick={() => scrollByPhoto(1)}
              aria-label="Próxima foto"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default GaleriaModal;