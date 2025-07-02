
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <footer className="bg-black border-t border-[#2a2a2a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img src='/images/hashedIcon.svg' className="hashed-icon"/>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex space-x-8">
              <Link 
                to="/" 
                className={`nav-link font-inter ${isActive('/') ? 'text-[#32e4b6]' : 'text-gray-300'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link font-inter ${isActive('/about') ? 'text-[#32e4b6]' : 'text-gray-300'}`}
              >
                About
              </Link>
              <a 
                href="#products" 
                className="nav-link text-gray-300 font-inter"
              >
                Products
              </a>
              <Link 
                to="/projects" 
                className={`nav-link font-inter ${isActive('/projects') ? 'text-[#32e4b6]' : 'text-gray-300'}`}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link font-inter ${isActive('/contact') ? 'text-[#32e4b6]' : 'text-gray-300'}`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-[#2a2a2a] mt-8 pt-8">
          <p className="text-gray-500 text-center font-inter">
            © 2025 Hashed. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
