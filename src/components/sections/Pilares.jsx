/**
 * src/components/sections/Pilares.jsx
 * --------------------------------------------------------------
 * Grid de especialidades. As categorias vêm de servicosData.js —
 * mesma fonte que o futuro Menu de Serviços vai usar nas abas —
 * pra nunca ter um nome de categoria escrito diferente em dois
 * lugares do site.
 */

import { CATEGORIAS } from '../../data/servicosData';
import PilarCard from '../ui/PilarCard';
import './Pilares.css';

const PILARES = [
  {
    categoria: CATEGORIAS.CABELO,
    titulo: 'Hair & Therapy',
    descricao:
      'Cuidado capilar com diagnóstico técnico — da hidratação à reconstrução completa do fio.',
  },
  {
    categoria: CATEGORIAS.OLHAR,
    titulo: 'Estética do Olhar',
    descricao:
      'Sobrancelhas e cílios desenhados com visagismo pra valorizar a expressão do seu rosto.',
  },
  {
    categoria: CATEGORIAS.GROOMING,
    titulo: 'Grooming Masculino',
    descricao:
      'Barbearia de precisão, sem pressa, com ritual completo de barbearia clássica.',
  },
];

function Pilares() {
  return (
    <section id="pilares" className="pilares">
      <div className="pilares__inner">
        <p className="pilares__eyebrow">Nossos Pilares</p>
        <h2 className="pilares__title">Especialidades do Atelier</h2>

        <div className="pilares__grid">
          {PILARES.map((pilar, index) => (
            <PilarCard key={pilar.categoria} pilar={pilar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pilares;