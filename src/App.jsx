import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/Contactus';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Aboutus from './Pages/Aboutus';
import Products from './Pages/Products';
import CompareAll from './Pages/CompareAll';
import Rental from './Pages/Rental';
import PreBook from './Pages/PreBook';

const App = () => {
  return (
    
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/compare-all" element={<CompareAll />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/rentals" element={<Rental />} />
          <Route path="/pre-book" element={<PreBook />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
