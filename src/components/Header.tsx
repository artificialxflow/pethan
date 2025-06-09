import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-persian-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MP</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              MadeByPersians.ir
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`hover:text-primary-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-primary-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className={`hover:text-primary-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hover:text-primary-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+989214843361" className={`flex items-center space-x-2 hover:text-primary-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <Phone size={16} />
              <span className="text-sm">+98 921 484 3361</span>
            </a>
            <a href="mailto:sales@madebypersians.ir" className={`flex items-center space-x-2 hover:text-primary-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <Mail size={16} />
              <span className="text-sm">sales@madebypersians.ir</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-500 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-500 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-primary-500 text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-500 text-left">
                Contact
              </button>
              <div className="border-t pt-4 space-y-2">
                <a href="tel:+989214843361" className="flex items-center space-x-2 text-gray-700 hover:text-primary-500">
                  <Phone size={16} />
                  <span>+98 921 484 3361</span>
                </a>
                <a href="mailto:sales@madebypersians.ir" className="flex items-center space-x-2 text-gray-700 hover:text-primary-500">
                  <Mail size={16} />
                  <span>sales@madebypersians.ir</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;