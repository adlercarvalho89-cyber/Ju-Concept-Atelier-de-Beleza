/**
 * src/components/sections/Depoimentos.jsx
 * --------------------------------------------------------------
 * Prova social via depoimentos reais de clientes. Posicionada
 * após os Pilares — a cliente já viu os serviços e os trabalhos,
 * agora confirma com a opinião de quem já passou pela experiência.
 *
 * TODO(Juliana): substituir os placeholders por avaliações reais
 * retiradas do Google Meu Negócio ou WhatsApp. Lembrar de pedir
 * autorização antes de publicar nome e foto de clientes (LGPD).
 */

import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import './Depoimentos.css';

const DEPOIMENTOS = [
  {
    id: 'dep-1',
    nome: '[Nome da Cliente]',
    servico: 'Coloração Premium',
    texto:
      '[PLACEHOLDER — depoimento real aqui. Ex: "Fiz coloração com a Ju pela primeira vez e me apaixonei. Ela analisou meu tom de pele antes de escolher a cor, algo que nunca vi em outro salão. O resultado ficou perfeito e durou muito mais do que eu esperava."]',
    estrelas: 5,
    foto: null, // opcional — null exibe inicial do nome no lugar
  },
  {
    id: 'dep-2',
    nome: '[Nome da Cliente]',
    servico: 'Lash Lifting',
    texto:
      '[PLACEHOLDER — Ex: "Ambiente super aconchegante e atendimento exclusivo. Fiz lash lifting e adorei o resultado natural. A Ju explicou cada passo do processo e me deixou completamente à vontade."]',
    estrelas: 5,
    foto: null,
  },
  {
    id: 'dep-3',
    nome: '[Nome da Cliente]',
    servico: 'Botox Capilar',
    texto:
      '[PLACEHOLDER — Ex: "Meu cabelo estava destruído de química e a Ju foi honesta sobre o que era possível fazer. Resultado incrível em uma sessão só. Não troco por nada."]',
    estrelas: 5,
    foto: null,
  },
];

// Estrelas em SVG — sem lib externa, renderização consistente
// em qualquer sistema operacional (ao contrário de emoji ★)
function Estrelas({ quantidade }) {
  return (
    <div className="depoimento-card__estrelas" aria-label={`${quantidade} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`depoimento-card__estrela ${
            i < quantidade ? 'depoimento-card__estrela--ativa' : ''
          }`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function DepoimentoCard({ depoimento, index }) {
  const [ref, isVisible] = useFadeInOnScroll();

  // Gera a inicial do nome pra usar como avatar quando não há foto
  const inicial = depoimento.nome.charAt(0).toUpperCase();

  return (
    <article
      ref={ref}
      className={`depoimento-card ${isVisible ? 'depoimento-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <Estrelas quantidade={depoimento.estrelas} />

      {/* Aspas grandes — elemento editorial sem dependência */}
      <blockquote className="depoimento-card__texto">
        {depoimento.texto}
      </blockquote>

      <footer className="depoimento-card__footer">
        <div className="depoimento-card__avatar" aria-hidden="true">
          {depoimento.foto ? (
            <img
              src={depoimento.foto}
              alt=""
              className="depoimento-card__foto"
            />
          ) : (
            <span className="depoimento-card__inicial">{inicial}</span>
          )}
        </div>
        <div className="depoimento-card__autora">
          <span className="depoimento-card__nome">{depoimento.nome}</span>
          <span className="depoimento-card__servico">{depoimento.servico}</span>
        </div>
      </footer>
    </article>
  );
}

function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <div className="depoimentos__inner">
        <p className="depoimentos__eyebrow">O que dizem as clientes</p>
        <h2 className="depoimentos__title">Resultados que Falam</h2>

        <div className="depoimentos__grid">
          {DEPOIMENTOS.map((dep, index) => (
            <DepoimentoCard key={dep.id} depoimento={dep} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
