/**
 * src/components/layout/Navbar.jsx
 * --------------------------------------------------------------
 * Navbar fixa com glassmorphism, contador de carrinho dinâmico
 * e menu mobile acessível (hamburguer com aria-expanded).
 */

import { useEffect, useRef, useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartPanel from '../ui/CartPanel';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#pilares', label: 'Cuidados' },
  { href: '#transformacoes', label: 'Transformações' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
];

function Navbar() {
  const { count } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const prevCountRef = useRef(count);

  // Intensifica o glassmorphism (sombra/borda) quando o usuário rola.
  // Listener "passive" não bloqueia o scroll thread — performance.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pop só quando o carrinho AUMENTA (não quando remove um item).
  // useRef guarda o valor anterior sem causar re-render extra.
  useEffect(() => {
    if (count > prevCountRef.current) {
      setIsBouncing(true);
      const timeout = setTimeout(() => setIsBouncing(false), 400);
      prevCountRef.current = count;
      return () => clearTimeout(timeout);
    }
    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <nav className="navbar__inner" aria-label="Navegação principal">
          <a href="#topo" className="navbar__logo">
            Ju Concept
          </a>

          <ul
            id="navbar-menu"
            className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__cart"
              aria-haspopup="dialog"
              aria-expanded={isCartOpen}
              aria-controls="cart-panel"
              aria-label={`Carrinho, ${count} ${
                count === 1 ? 'serviço selecionado' : 'serviços selecionados'
              }`}
              onClick={() => setIsCartOpen((open) => !open)}
            >
              <svg
                className="navbar__cart-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M6 7h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7Z" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
              </svg>
              {count > 0 && (
                <span
                  className={`navbar__cart-count ${
                    isBouncing ? 'navbar__cart-count--pop' : ''
                  }`}
                >
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              className="navbar__toggle"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="navbar-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="navbar__toggle-bar" />
              <span className="navbar__toggle-bar" />
              <span className="navbar__toggle-bar" />
            </button>
          </div>
        </nav>
      </header>

      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Navbar;