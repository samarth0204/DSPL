import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './pages/allProducts';
import AboutUsAll from './pages/aboutUsAll';
import ContactUs from './pages/contactUs';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/about" element={<AboutUsAll />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
