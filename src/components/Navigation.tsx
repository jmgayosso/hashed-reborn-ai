
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* <div className="w-8 h-8 bg-[#32e4b6] rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 border-2 border-black rounded-full"></div>
              </div> */}
              {/* <span className="text-white text-xl font-bold">HASHED</span> */}
              <img src='/images/hashedIcon.svg' className="hashed-icon"/>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-[#32e4b6] transition-colors">HOME</a>
              <a href="#about" className="text-white hover:text-[#32e4b6] transition-colors">ABOUT</a>
              <a href="#products" className="text-white hover:text-[#32e4b6] transition-colors">PRODUCTS</a>
              <a href="#projects" className="text-white hover:text-[#32e4b6] transition-colors">PROJECTS</a>
              <a href="#contact" className="text-white hover:text-[#32e4b6] transition-colors">CONTACT</a>
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
              <a href="#home" className="block text-white hover:text-[#32e4b6] transition-colors py-2">HOME</a>
              <a href="#about" className="block text-white hover:text-[#32e4b6] transition-colors py-2">ABOUT</a>
              <a href="#products" className="block text-white hover:text-[#32e4b6] transition-colors py-2">PRODUCTS</a>
              <a href="#projects" className="block text-white hover:text-[#32e4b6] transition-colors py-2">PROJECTS</a>
              <a href="#contact" className="block text-white hover:text-[#32e4b6] transition-colors py-2">CONTACT</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
