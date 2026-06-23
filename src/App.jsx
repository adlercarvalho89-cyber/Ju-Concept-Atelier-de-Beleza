/**
 * src/App.jsx
 * --------------------------------------------------------------
 * Montador da página pública. A ordem aqui É o funil de conversão:
 *
 * 1. Navbar         — fixa, sempre visível
 * 2. Hero           — impacto visual e desejo imediato
 * 3. QuemCuida      — quem é a profissional (Know + Trust antes do preço)
 * 4. Experiencia    — o ritual de atendimento (justifica o preço premium)
 * 5. Pilares        — categorias de serviço com galeria de fotos
 * 6. Depoimentos    — prova social de clientes reais
 * 7. MenuServicos   — tabela de preços + botão de adicionar ao carrinho
 * 8. FAQ            — quebra as últimas objeções antes do clique final
 * 9. Checkout       — resumo do combo + link WhatsApp
 * 10. Footer        — horários, endereço e mapa
 *
 * Transformacoes.jsx existe mas foi removida a pedido da Juliana.
 * O arquivo foi mantido no repositório — caso ela mude de ideia,
 * é só descomentar a linha abaixo.
 */

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import QuemCuida from './components/sections/QuemCuida';
// import Transformacoes from './components/sections/Transformacoes'; // removida por ora
import Pilares from './components/sections/Pilares';
import MenuServicos from './components/sections/MenuServicos';
import CheckoutWhatsapp from './components/sections/CheckoutWhatsapp';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuemCuida />
      <Pilares />
      <MenuServicos />
      <CheckoutWhatsapp />
      <Footer />
    </>
  );
}

export default App;