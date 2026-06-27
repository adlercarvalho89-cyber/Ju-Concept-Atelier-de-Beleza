import ExperienciaCard from '../ui/ExperienciaCard';
import './Experiencia.css';

const EXPERIENCIAS = [
  {
    id: 'visagismo',
    icone: 'visagismo',
    titulo: 'Consultoria Visagista',
    descricao:
      'Uma análise detalhada do seu formato de rosto e tom de pele antes de iniciar qualquer procedimento.',
  },
  {
    id: 'spa',
    icone: 'spa',
    titulo: 'Momento SPA',
    descricao:
      'Lavatório com massagem capilar e óleos essenciais para você relaxar de verdade.',
  },
  {
    id: 'exclusividade',
    icone: 'exclusividade',
    titulo: 'Exclusividade Total',
    descricao:
      'Um horário único reservado apenas para você, sem pressa e sem interrupções.',
  },
];

function Experiencia() {
  return (
    <section id="experiencia" className="experiencia">
      <div className="experiencia__inner">
        <div className="experiencia__header">
          <p className="experiencia__eyebrow">A Experiência Ju Concept</p>
          <h2 className="experiencia__title">
            Mais do que um serviço,<br />um ritual de cuidado
          </h2>
          <p className="experiencia__subtitulo">
            Cada detalhe do atendimento foi pensado pra você se sentir cuidada
            de verdade — do primeiro contato até o resultado final.
          </p>
        </div>

        <div className="experiencia__grid">
          {EXPERIENCIAS.map((item, index) => (
            <ExperienciaCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;