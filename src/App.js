import './App.css';
import FeaturedProducts from './components/FeaturedProducts';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#130F0C]'>
      <div className="relative h-[90vh] w-full z-10">
        <Navbar />
        <Hero />
      </div>
      <div className='sm:pl-[110px] pl-[57px] bg-[#130F0C] flex flex-col gap-3'>
        <Products />
        <FeaturedProducts />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;