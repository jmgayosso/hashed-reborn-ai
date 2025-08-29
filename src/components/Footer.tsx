
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import HashedIcon from '@/assets/images/hashedIcon.svg'

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
      <footer className="bg-black py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="w-full flex justify-center md:justify-start">
            <Link to="/" className="inline-block">
              <img src={HashedIcon} alt="Hashed Logo" className="hashed-icon" style={{ width: '130px', height: '130px' }}/>
            </Link>
          </div>
          
          <nav className="w-full grid grid-cols-3 gap-4 place-items-center md:flex md:space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[15px] md:text-[17px] font-light leading-6 text-center w-full`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[15px] md:text-[17px] font-light leading-6 text-center w-full`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${isActive('/products') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[15px] md:text-[17px] font-light leading-6 text-center w-full`}
            >
              Products
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[15px] md:text-[17px] font-light leading-6 text-center w-full`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'text-[#32e4b6]' : 'text-[#b3b3b3]'} font-inter text-[15px] md:text-[17px] font-light leading-6 text-center w-full`}
            >
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="border-t border-[#32e4b6] mt-8 pt-8">
          <p
            className="text-left"
            style={{
              color: '#b3b3b3',
              fontFamily: 'Inter, sans-serif',
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: '24px',
            }}
          >
            © 2025 Hashed. All Rights Reserved.
          </p>
        </div>
      </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
