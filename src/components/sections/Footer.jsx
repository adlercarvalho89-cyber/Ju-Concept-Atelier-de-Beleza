/**
 * src/components/sections/Footer.jsx
 * --------------------------------------------------------------
 * Fecha a área pública: horários, endereço e mapa. id="contato"
 * é o último link da Navbar que ainda não tinha destino real.
 */

import './Footer.css';

const HORARIOS = [
  { dia: 'Terça a Sexta', horario: '09h às 19h' },
  { dia: 'Sábado', horario: '08h às 17h' },
  { dia: 'Domingo e Segunda', horario: 'Fechado' },
];

// TODO(Juliana): troque pelos dados reais do atelier. Pra gerar o
// MAPS_EMBED_SRC: Google Maps > pesquise o endereço > Compartilhar >
// "Incorporar um mapa" > copie só o valor do atributo src= do
// código <iframe> que o Google te dá.
const ENDERECO = 'Rua [completar], nº [completar] — Bairro, Cidade - UF';
const MAPS_EMBED_SRC = 'https://www.google.com/maps?q=ENDERECO+DO+ATELIER&output=embed';
const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=ENDERECO+DO+ATELIER';

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer__inner">
        <div className="footer__coluna">
          <p className="footer__logo">Ju Concept</p>
          <p className="footer__tagline">Atelier de Beleza</p>

          <address className="footer__endereco">
            {ENDERECO}
            <br />
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__maps-link"
            >
              Como chegar →
            </a>
          </address>
        </div>

        <div className="footer__coluna">
          <h2 className="footer__titulo">Horários</h2>
          <ul className="footer__horarios">
            {HORARIOS.map((item) => (
              <li key={item.dia} className="footer__horario-linha">
                <span>{item.dia}</span>
                <span>{item.horario}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__coluna footer__coluna--mapa">
          <iframe
            className="footer__mapa"
            src={MAPS_EMBED_SRC}
            title="Localização do Ju Concept Atelier de Beleza no Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Ju Concept Atelier de Beleza. Todos os
        direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
