/**
 * src/components/sections/Pilares.jsx
 * --------------------------------------------------------------
 * Grid de especialidades. Gerencia o estado da galeria de fotos —
 * qual pilar está com a galeria aberta (null = nenhum).
 *
 * fotos: placeholder até Juliana fornecer as imagens reais.
 * Caminho esperado: public/images/galeria/[categoria]-[N].jpg
 */

import { useState } from 'react';
import { CATEGORIAS } from '../../data/servicosData';
import GaleriaModal from '../ui/GaleriaModal';
import PilarCard from '../ui/PilarCard';
import './Pilares.css';

const PILARES = [
  {
    categoria: CATEGORIAS.CABELO,
    titulo: 'Hair & Therapy',
    descricao:
      'Cuidado capilar com diagnóstico técnico — da hidratação à reconstrução completa do fio.',
    fotos: [
      {
        src: '/images/galeria/cabelo-1.jpg',
        alt: 'Resultado de coloração com técnica balayage realizada no Ju Concept',
        legenda: 'Balayage personalizado ao tom de pele',
      },
      {
        src: '/images/galeria/cabelo-2.jpg',
        alt: 'Hidratação profunda com brilho intenso realizada no Ju Concept',
        legenda: 'Hidratação com reposição lipídica',
      },
      {
        src: '/images/galeria/cabelo-3.jpg',
        alt: 'Resultado de botox capilar sem formol realizado no Ju Concept',
        legenda: 'Botox capilar 100% livre de formol',
      },
    ],
  },
  {
    categoria: CATEGORIAS.OLHAR,
    titulo: 'Estética do Olhar',
    descricao:
      'Sobrancelhas e cílios desenhados com visagismo pra valorizar a expressão do seu rosto.',
    fotos: [
      {
        src: '/images/galeria/olhar-1.jpg',
        alt: 'Design de sobrancelhas com henna realizado no Ju Concept',
        legenda: 'Design de sobrancelha com henna',
      },
      {
        src: '/images/galeria/olhar-2.jpg',
        alt: 'Resultado de lash lifting realizado no Ju Concept',
        legenda: 'Lash lifting com produtos hipoalergênicos',
      },
      {
        src: '/images/galeria/olhar-3.jpg',
        alt: 'Extensão de cílios fio a fio realizada no Ju Concept',
        legenda: 'Extensão fio a fio com fibra de seda',
      },
    ],
  },
  {
    categoria: CATEGORIAS.GROOMING,
    titulo: 'Grooming Masculino',
    descricao:
      'Barbearia de precisão, sem pressa, com ritual completo de barbearia clássica.',
    fotos: [
      {
        src: '/images/galeria/grooming-1.jpg',
        alt: 'Corte masculino premium finalizado no Ju Concept',
        legenda: 'Corte premium com finalização importada',
      },
      {
        src: '/images/galeria/grooming-2.jpg',
        alt: 'Barba modelada com toalha quente realizada no Ju Concept',
        legenda: 'Barba modelada com navalha e óleo',
      },
    ],
  },
];

function Pilares() {
  const [galeriaAberta, setGaleriaAberta] = useState(null);

  return (
    <section id="pilares" className="pilares">
      <div className="pilares__inner">
        <p className="pilares__eyebrow">Nossos Pilares</p>
        <h2 className="pilares__title">Especialidades do Atelier</h2>

        <div className="pilares__grid">
          {PILARES.map((pilar, index) => (
            <PilarCard
              key={pilar.categoria}
              pilar={pilar}
              index={index}
              onVerFotos={setGaleriaAberta}
            />
          ))}
        </div>
      </div>

      {galeriaAberta && (
        <GaleriaModal
          pilar={galeriaAberta}
          onClose={() => setGaleriaAberta(null)}
        />
      )}
    </section>
  );
}

export default Pilares;