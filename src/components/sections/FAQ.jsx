import './FAQ.css';

const PERGUNTAS = [
  {
    id: 'faq-1',
    pergunta: 'Como funciona a política de atrasos e cancelamentos?',
    resposta:
      'Atendimentos com atraso superior a 15 minutos podem ser reagendados para não comprometer a qualidade dos demais serviços do dia. Cancelamentos devem ser comunicados com pelo menos 24 horas de antecedência via WhatsApp.',
  },
  {
    id: 'faq-2',
    pergunta: 'Quais as formas de pagamento aceitas no atelier?',
    resposta:
      'Aceitamos Pix, cartão de débito e crédito (parcelamento em até X vezes) e dinheiro. [TODO: confirmar bandeiras e condições de parcelamento com a Juliana]',
  },
  {
    id: 'faq-3',
    pergunta: 'Existe estacionamento no local ou próximo?',
    resposta:
      '[TODO: confirmar com a Juliana se há estacionamento no local, na rua ou próximo ao atelier]',
  },
  {
    id: 'faq-4',
    pergunta: 'Como faço para avaliar meu cabelo antes de uma transformação química?',
    resposta:
      'Toda transformação química começa com uma consultoria visagista gratuita, incluída no atendimento. Análise de porosidade, histórico de química e tom de pele são avaliados antes de qualquer procedimento — nunca aplicamos sem diagnóstico.',
  },
  {
    id: 'faq-5',
    pergunta: 'Os produtos utilizados são seguros para gestantes?',
    resposta:
      'Sim. Trabalhamos com linha de botox capilar 100% livre de formol, segura para gestantes e lactantes. Para coloração, recomendamos aguardar o primeiro trimestre. Em caso de dúvida, consulte seu médico e nos avise no agendamento.',
  },
  {
    id: 'faq-6',
    pergunta: 'Como funciona o agendamento?',
    resposta:
      'O agendamento é feito exclusivamente via WhatsApp. Monte seu combo de serviços aqui no site, clique em "Solicitar Agendamento" e sua mensagem já chegará formatada com tudo que escolheu. Confirmamos a data e horário disponíveis em até 2 horas.',
  },
];

function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <p className="faq__eyebrow">Dúvidas Frequentes</p>
          <h2 className="faq__title">Antes de Agendar</h2>
          <p className="faq__subtitulo">
            Tudo o que você precisa saber para chegar tranquila no seu dia.
          </p>
        </div>

        <dl className="faq__lista">
          {PERGUNTAS.map((item) => (
            <details key={item.id} className="faq__item">
              <summary className="faq__pergunta">
                {item.pergunta}
                <span className="faq__icone" aria-hidden="true" />
              </summary>
              <div className="faq__resposta">
                <p>{item.resposta}</p>
              </div>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default FAQ;
