
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
  <motion.div
    key={1}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true, amount: 0.5 }}
    className="group cursor-pointer"
    >
      <footer className="bg-black py-12">
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
                className={`nav-link ${isActive('/') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[17px] font-light leading-6 text-center`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[17px] font-light leading-6 text-center`}
              >
                About
              </Link>
              <a 
                href="#products" 
                className="nav-link text-[#b3b3b3] font-inter text-[17px] font-light leading-6 text-center"
              >
                Products
              </a>
              <Link 
                to="/projects" 
                className={`nav-link ${isActive('/projects') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[17px] font-light leading-6 text-center`}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[17px] font-light leading-6 text-center`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-[#32e4b6] mt-8 pt-8">
          <p className="text-gray-500 text-center font-inter">
            © 2025 Hashed. All Rights Reserved.
          </p>
        </div>
      </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
