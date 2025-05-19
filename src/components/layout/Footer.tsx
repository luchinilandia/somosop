import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto text-white" />
              <h3 className="ml-2 text-xl font-bold">Somos OP</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Brindamos seguros de calidad para autos, taxis y remis con la mejor cobertura al mejor precio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-500 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Inicio
                </Link>
              </li>
              <li>
                <Link to="/cotizar" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Cotizar Seguro
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/cotizar" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Seguro para Autos
                </Link>
              </li>
              <li>
                <Link to="/cotizar" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Seguro para Taxis
                </Link>
              </li>
              <li>
                <Link to="/cotizar" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Seguro para Remis
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Asistencia 24/7
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition flex items-center">
                  <span className="mr-2">•</span> Gestión de Siniestros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Av. Principal 1234, Ciudad, Provincia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">+54 11 5555-5555</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">contacto@somosop.com</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-secondary-800 rounded-lg">
              <p className="text-sm text-gray-300">
                Horario de atención: <br />
                Lunes a Viernes 9:00 - 18:00 <br />
                Sábados 9:00 - 13:00
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Somos OP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;