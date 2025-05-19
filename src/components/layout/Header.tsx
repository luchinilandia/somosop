import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-secondary-900">Somos OP</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary-800 hover:text-primary-600 font-medium">
              Inicio
            </Link>
            <Link to="/cotizar" className="text-secondary-800 hover:text-primary-600 font-medium">
              Cotizar
            </Link>
            <Link to="/" className="text-secondary-800 hover:text-primary-600 font-medium">
              Coberturas
            </Link>
            <Link to="/" className="text-secondary-800 hover:text-primary-600 font-medium">
              Contacto
            </Link>
            <Link to="/cotizar" className="btn btn-primary flex items-center">
              <Shield size={18} className="mr-2" />
              Cotiza Ahora
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-secondary-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 absolute left-0 right-0 mx-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-secondary-800 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/cotizar"
                className="text-secondary-800 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cotizar
              </Link>
              <Link
                to="/"
                className="text-secondary-800 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coberturas
              </Link>
              <Link
                to="/"
                className="text-secondary-800 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                to="/cotizar"
                className="btn btn-primary flex items-center justify-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Shield size={18} className="mr-2" />
                Cotiza Ahora
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;