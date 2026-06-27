import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import QuemCuida from './components/sections/QuemCuida';
import Experiencia from './components/sections/Experiencia';
import Pilares from './components/sections/Pilares';
import Depoimentos from './components/sections/Depoimentos';
import MenuServicos from './components/sections/MenuServicos';
import FAQ from './components/sections/FAQ';
import CheckoutWhatsapp from './components/sections/CheckoutWhatsapp';
import Footer from './components/sections/Footer';
// import Transformacoes from './components/sections/Transformacoes';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuemCuida />
      <Experiencia />
      <Pilares />
      <Depoimentos />
      <MenuServicos />
      <FAQ />
      <CheckoutWhatsapp />
      <Footer />
    </>
  );
}

export default App;