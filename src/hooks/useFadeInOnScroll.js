/**
 * src/hooks/useFadeInOnScroll.js
 * --------------------------------------------------------------
 * Hook reutilizável: observa quando um elemento entra no viewport
 * e devolve um booleano pra disparar a animação de fade-in + subida.
 * Usado por qualquer card/seção abaixo da dobra (Pilares, Carrossel,
 * Menu de Serviços...).
 */

import { useEffect, useRef, useState } from 'react';

export function useFadeInOnScroll({
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Nunca esconde conteúdo por causa de uma animação que não vai
    // rodar — se o navegador não suporta IntersectionObserver ou o
    // usuário pediu menos movimento, mostra direto.
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // anima uma vez; não pisca ao rolar pra cima e pra baixo
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}