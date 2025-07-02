
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string, hash?: string) => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src='/images/hashedIcon.svg' className="hashed-icon"/>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`nav-link font-inter ${isActive('/') ? 'text-[#32e4b6]' : 'text-white'}`}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`nav-link font-inter ${isActive('/about') ? 'text-[#32e4b6]' : 'text-white'}`}
              >
                ABOUT
              </Link>
              <a 
                href="#products" 
                className="nav-link text-white font-inter"
              >
                PRODUCTS
              </a>
              <Link 
                to="/projects" 
                className={`nav-link font-inter ${isActive('/projects') ? 'text-[#32e4b6]' : 'text-white'}`}
              >
                PROJECTS
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link font-inter ${isActive('/contact') ? 'text-[#32e4b6]' : 'text-white'}`}
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#32e4b6] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
              <Link 
                to="/" 
                className={`block font-inter hover:text-[#32e4b6] transition-colors py-2 ${isActive('/') ? 'text-[#32e4b6]' : 'text-white'}`}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`block font-inter hover:text-[#32e4b6] transition-colors py-2 ${isActive('/about') ? 'text-[#32e4b6]' : 'text-white'}`}
              >
                ABOUT
              </Link>
              <a 
                href="#products" 
                className="block text-white hover:text-[#32e4b6] transition-colors py-2 font-inter"
              >
                PRODUCTS
              </a>
              <Link 
                to="/projects" 
                className={`block font-inter hover:text-[#32e4b6] transition-colors py-2 ${isActive('/projects') ? 'text-[#32e4b6]' : 'text-white'}`}
              >
                PROJECTS
              </Link>
              <Link 
                to="/contact" 
                className={`block font-inter hover:text-[#32e4b6] transition-colors py-2 ${isActive('/contact') ? 'text-[#32e4b6]' : 'text-white'}`}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
