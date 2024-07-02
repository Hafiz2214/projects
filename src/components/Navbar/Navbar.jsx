import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="nav bg-gray-800 p-4 text-white">
      <Link to="/" className="nav-logo font-bold text-xl">EV-olution</Link>
      <ul className="nav-menu flex space-x-4">
        <li className="hover:text-blue-300 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li 
          className="relative hover:text-blue-300 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Products
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 bg-gray-700 text-white p-2 rounded shadow-lg">
              <li className="hover:text-blue-300 cursor-pointer">
                <Link to="products/se03-lite">SE03 Lite</Link>
              </li>
              <li className="hover:text-blue-300 cursor-pointer">
                <Link to="products/se03">SE03</Link>
              </li>
              <li className="hover:text-blue-300 cursor-pointer">
                <Link to="products/se03-max">SE03 Max</Link>
              </li>
              <li className="hover:text-blue-300 cursor-pointer">
                <Link to="/compare-all">Compare all</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <Link to="/pre-book">Pre-book</Link>
        </li>
        <li className="hover:text-blue-300 cursor-pointer">
          <Link to="/rentals">Rentals</Link>
        </li>
        <li className="nav-contact hover:text-blue-300 cursor-pointer">
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
