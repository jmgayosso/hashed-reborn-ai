
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link to="/" className="nav-link text-white">HOME</Link>
              <a href="#about" className="nav-link text-white">ABOUT</a>
              <a href="#products" className="nav-link text-white">PRODUCTS</a>
              <Link to="/projects" className="nav-link text-white">PROJECTS</Link>
              <a href="#contact" className="nav-link text-white">CONTACT</a>
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
              <Link to="/" className="block text-white hover:text-[#32e4b6] transition-colors py-2">HOME</Link>
              <a href="#about" className="block text-white hover:text-[#32e4b6] transition-colors py-2">ABOUT</a>
              <a href="#products" className="block text-white hover:text-[#32e4b6] transition-colors py-2">PRODUCTS</a>
              <Link to="/projects" className="block text-white hover:text-[#32e4b6] transition-colors py-2">PROJECTS</Link>
              <a href="#contact" className="block text-white hover:text-[#32e4b6] transition-colors py-2">CONTACT</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
