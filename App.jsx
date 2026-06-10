import Navbar from './Navbar';
import Hero from './Hero';
import Categories from './Categories';
import ProductCards from './ProductCards';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <div style={{ 
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#e9e3e3',
      color: '#432c2cb4',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <Navbar />
      <Hero />
      <Categories />
      <ProductCards />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;