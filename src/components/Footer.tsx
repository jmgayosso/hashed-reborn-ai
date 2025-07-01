
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#2a2a2a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-8 h-8 bg-[#32e4b6] rounded-full flex items-center justify-center mr-3">
              <div className="w-4 h-4 border-2 border-black rounded-full"></div>
            </div>
            <span className="text-white text-xl font-bold">HASHED</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex space-x-8">
              <Link to="/" className="nav-link text-gray-300">Home</Link>
              <a href="#about" className="nav-link text-gray-300">About</a>
              <a href="#products" className="nav-link text-gray-300">Products</a>
              <Link to="/projects" className="nav-link text-gray-300">Projects</Link>
              <a href="#contact" className="nav-link text-gray-300">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-[#2a2a2a] mt-8 pt-8">
          <p className="text-gray-500 text-center">
            © 2025 Hashed. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
