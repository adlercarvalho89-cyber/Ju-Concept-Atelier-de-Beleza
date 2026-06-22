/**
 * src/components/sections/QuemCuida.jsx
 * --------------------------------------------------------------
 * Seção de apresentação da profissional. Posicionada logo abaixo
 * da Hero — antes de qualquer preço — pra construir Know + Trust
 * antes da cliente ver a tabela de serviços.
 *
 * TODO(Juliana): substituir todos os campos marcados com [PLACEHOLDER]
 * pelo conteúdo real dela antes de publicar.
 */

import './QuemCuida.css';

// TODO: substituir pelos dados reais da Juliana
const PROFISSIONAL = {
  nome: 'Juliana [Sobrenome]',
  titulo: 'Cabeleireira & Especialista em Visagismo',
  foto: '/images/profissional/juliana.jpeg',
  fotoAlt: 'Juliana [Sobrenome], fundadora e especialista do Ju Concept Atelier de Beleza',
  bio: '[PLACEHOLDER — escrever em primeira pessoa, 2-3 frases sobre a trajetória dela. Ex: "Sou apaixonada por transformar a forma como as mulheres se enxergam. Com mais de X anos de experiência, especializei cada detalhe do meu atendimento para que você saia não só linda, mas cuidada de verdade."]',
  filosofia:
    '"[PLACEHOLDER — uma frase de impacto dela sobre o trabalho. Ex: Beleza que dura começa pelo diagnóstico certo, não pela moda do momento.]"',
  credenciais: [
    '[PLACEHOLDER — Ex: 8 anos de experiência em colorimetria e visagismo]',
    '[PLACEHOLDER — Ex: Formada pelo Instituto X, com especialização em técnicas francesas]',
    '[PLACEHOLDER — Ex: Profissional certificada pelas marcas Y e Z]',
  ],
  estatisticas: [
    { numero: '+000', label: 'Clientes atendidas' },
    { numero: '+0 anos', label: 'De experiência' },
    { numero: '100%', label: 'Atendimento exclusivo' },
  ],
};

function QuemCuida() {
  return (
    <section id="profissional" className="quem-cuida">
      <div className="quem-cuida__inner">
        <div className="quem-cuida__foto-col">
          <div className="quem-cuida__foto-wrapper">
            <img
              src={PROFISSIONAL.foto}
              alt={PROFISSIONAL.fotoAlt}
              className="quem-cuida__foto"
            />
            {/* Badge flutuante — âncora visual de autoridade */}
            <div className="quem-cuida__badge" aria-hidden="true">
              <span className="quem-cuida__badge-numero">
                {PROFISSIONAL.estatisticas[0].numero}
              </span>
              <span className="quem-cuida__badge-label">
                {PROFISSIONAL.estatisticas[0].label}
              </span>
            </div>
          </div>
        </div>

        <div className="quem-cuida__texto-col">
          <p className="quem-cuida__eyebrow">Quem vai cuidar de você</p>
          <h2 className="quem-cuida__nome">{PROFISSIONAL.nome}</h2>
          <p className="quem-cuida__titulo">{PROFISSIONAL.titulo}</p>

          <p className="quem-cuida__bio">{PROFISSIONAL.bio}</p>

          <blockquote className="quem-cuida__filosofia">
            {PROFISSIONAL.filosofia}
          </blockquote>

          <ul className="quem-cuida__credenciais">
            {PROFISSIONAL.credenciais.map((item, i) => (
              <li key={i} className="quem-cuida__credencial">
                <span className="quem-cuida__credencial-icone" aria-hidden="true">
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="quem-cuida__stats">
            {PROFISSIONAL.estatisticas.slice(1).map((stat) => (
              <div key={stat.label} className="quem-cuida__stat">
                <span className="quem-cuida__stat-numero">{stat.numero}</span>
                <span className="quem-cuida__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuemCuida;
