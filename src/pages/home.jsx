import Navbar from '../components/navbar';
import VerticalSlider from '../components/slider';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';
import MUICoolTextSlider from '../components/products';

function Home() {
  return (
    <>
      <Navbar />
      <VerticalSlider />
      <AboutUs />
      <MUICoolTextSlider />
      <Footer />
    </>
  );
}

export default Home;
