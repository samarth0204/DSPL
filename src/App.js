import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
          {/* Catch-all route to redirect to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
