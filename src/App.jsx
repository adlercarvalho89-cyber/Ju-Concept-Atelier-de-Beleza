import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Pilares from './components/sections/Pilares';
import Transformacoes from './components/sections/Transformacoes';
import MenuServicos from './components/sections/MenuServicos';
import CheckoutWhatsapp from './components/sections/CheckoutWhatsapp';
import Footer from './components/sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pilares />
      <Transformacoes />
      <MenuServicos />
      <CheckoutWhatsapp />
      <Footer />
    </>
  );
}

export default App;