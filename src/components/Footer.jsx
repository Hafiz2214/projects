import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <ul className="flex flex-wrap justify-center space-x-8 mb-4">
          <li><a href="/privacy-policy" className="hover:text-yellow-500">Privacy policy</a></li>
          <li><a href="/refund-policy" className="hover:text-yellow-500">Refund policy</a></li>
          <li><a href="/website-policy" className="hover:text-yellow-500">Website policy</a></li>
          <li><a href="/contact-us" className="hover:text-yellow-500">Contact us</a></li>
          <li><a href="/products" className="hover:text-yellow-500">Products</a></li>
          <li><a href="https://www.linkedin.com/company/your-company-name" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Career</a></li>
          <li><a href="/rentals" className="hover:text-yellow-500">Rentals</a></li>
        </ul>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/your-company-name" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/your-company-name" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
