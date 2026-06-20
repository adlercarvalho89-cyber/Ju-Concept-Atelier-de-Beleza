/**
 * src/components/sections/MenuServicos.jsx
 * --------------------------------------------------------------
 * Abas dinâmicas (useState) + integração real com CartContext.
 * Segue o padrão WAI-ARIA Tabs: role="tablist"/"tab"/"tabpanel",
 * navegação por seta do teclado e roving tabindex — não é só
 * decoração visual de aba, funciona pra quem navega sem mouse.
 */

import { useRef, useState } from 'react';
import { CATEGORIAS, getServicosPorCategoria } from '../../data/servicosData';
import ServiceCard from '../ui/ServiceCard';
import './MenuServicos.css';

const CATEGORIA_KEYS = Object.keys(CATEGORIAS);

function MenuServicos() {
  const [categoriaAtivaKey, setCategoriaAtivaKey] = useState(CATEGORIA_KEYS[0]);
  const tabRefs = useRef([]);

  const categoriaAtiva = CATEGORIAS[categoriaAtivaKey];
  const servicosDaCategoria = getServicosPorCategoria(categoriaAtiva);

  // Roving tabindex: só a aba ativa é tabulável (tabIndex 0), as
  // outras ficam -1. Setas movem o foco ENTRE as abas; Tab sai do
  // grupo inteiro de uma vez. É o comportamento esperado de abas
  // nativas do sistema operacional.
  const handleTabKeyDown = (event, index) => {
    let nextIndex = null;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % CATEGORIA_KEYS.length;
    if (event.key === 'ArrowLeft')
      nextIndex = (index - 1 + CATEGORIA_KEYS.length) % CATEGORIA_KEYS.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = CATEGORIA_KEYS.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      setCategoriaAtivaKey(CATEGORIA_KEYS[nextIndex]);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section id="servicos" className="menu-servicos">
      <div className="menu-servicos__inner">
        <p className="menu-servicos__eyebrow">Menu de Serviços</p>
        <h2 className="menu-servicos__title">Monte Seu Combo</h2>

        <div
          className="menu-servicos__tabs"
          role="tablist"
          aria-label="Categorias de serviço"
        >
          {CATEGORIA_KEYS.map((key, index) => {
            const isActive = key === categoriaAtivaKey;
            return (
              <button
                key={key}
                ref={(el) => (tabRefs.current[index] = el)}
                type="button"
                role="tab"
                id={`tab-${key}`}
                aria-selected={isActive}
                aria-controls={`panel-${key}`}
                tabIndex={isActive ? 0 : -1}
                className={`menu-servicos__tab ${
                  isActive ? 'menu-servicos__tab--active' : ''
                }`}
                onClick={() => setCategoriaAtivaKey(key)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {CATEGORIAS[key]}
              </button>
            );
          })}
        </div>

        <div
          className="menu-servicos__panel"
          role="tabpanel"
          id={`panel-${categoriaAtivaKey}`}
          aria-labelledby={`tab-${categoriaAtivaKey}`}
        >
          {servicosDaCategoria.map((servico) => (
            <ServiceCard key={servico.id} servico={servico} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuServicos;