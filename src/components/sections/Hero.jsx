/**
 * src/components/sections/Hero.jsx
 * --------------------------------------------------------------
 * Abertura de impacto. Animação de entrada amarrada ao MOUNT do
 * componente (não ao scroll — ver explicação no chat sobre por
 * que IntersectionObserver não se aplica aqui).
 */

import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [hasLoaded, setHasLoaded] = useState(false);

  // requestAnimationFrame garante que o navegador já pintou o estado
  // INICIAL (opacity: 0) antes de adicionarmos a classe que dispara
  // a transição. Se setássemos hasLoaded=true direto, o React poderia
  // aplicar os dois estados na mesma pintura e a transição não rodaria.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="topo" className={`hero ${hasLoaded ? 'hero--loaded' : ''}`}>
      {/*
        TODO(Juliana): trocar por uma foto real do atelier em alta
        resolução. Propositalmente não usei nenhuma imagem genérica
        de banco de imagens aqui — pra um site comercial, a imagem
        precisa ter licença de uso comprovada (banco pago ou ensaio
        fotográfico próprio). Caminho esperado: public/images/hero/hero-main.jpg
      */}
      <img
        className="hero__image"
        src="/images/hero/hero-main.jpg"
        alt="Cliente em momento de autocuidado durante um atendimento no Ju Concept Atelier de Beleza"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Atelier de Beleza</p>
        <h1 className="hero__title">Beleza Real, Cuidado de Verdade</h1>
        <p className="hero__subtitle">
          Procedimentos exclusivos pensados pra realçar quem você já é — sem
          moldes, sem padrões, com a técnica de quem entende de você.
        </p>
        <a href="#servicos" className="hero__cta">
          Ver Menu de Serviços
        </a>
      </div>
    </section>
  );
}

export default Hero;