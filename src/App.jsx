import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import QuemCuida from './components/sections/QuemCuida';
import Experiencia from './components/sections/Experiencia';
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
      <Experiencia />
      <Pilares />
      <MenuServicos />
      <CheckoutWhatsapp />
      <Footer />
    </>
  );
}

export default App;