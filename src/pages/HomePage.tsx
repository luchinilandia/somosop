import { Link } from 'react-router-dom';
import { Shield, Car, Bike, CheckCircle, Award, Clock, Heart } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Protección a medida por tu vehículo
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Obtenga una cotización personalizada para su auto, taxi o moto en minutos. Seguridad y tranquilidad al mejor precio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cotizar" className="btn bg-primary-600 hover:bg-primary-700 text-white">
                  <Shield size={20} className="mr-2" /> Cotizar Ahora
                </Link>
                <Link to="/" className="btn bg-white text-secondary-900 hover:bg-gray-100">
                  Conocer Más
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1 text-primary-500" />
                  <span>Rápido</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1 text-primary-500" />
                  <span>Seguro</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-1 text-primary-500" />
                  <span>Personalizado</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  ¡Cotiza Ya!
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Cotizador Rápido</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-2 border rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
                    <Car size={24} className="text-secondary-700 mr-3" />
                    <div>
                      <h4 className="font-medium text-secondary-900">Autos Particulares</h4>
                      <p className="text-sm text-gray-600">Protección completa para tu vehículo</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 border rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
                    <Car size={24} className="text-secondary-700 mr-3" />
                    <div>
                      <h4 className="font-medium text-secondary-900">Taxis</h4>
                      <p className="text-sm text-gray-600">Cobertura especial para servicio público</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 border rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
                    <Bike size={24} className="text-secondary-700 mr-3" />
                    <div>
                      <h4 className="font-medium text-secondary-900">Motos</h4>
                      <p className="text-sm text-gray-600">Pólizas adaptadas a tu moto</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/cotizar"
                  className="btn btn-primary w-full mt-6 flex items-center justify-center"
                >
                  Comenzar Cotización
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones de seguros completas y personalizadas para todo tipo de vehículos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card p-6 animated-card">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Car size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Seguro para Autos</h3>
              <p className="text-gray-600 text-center mb-4">
                Protección integral para tu vehículo particular, cubriendo daños, robos y responsabilidad civil.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Cobertura contra terceros</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Protección contra robos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Asistencia en viaje</span>
                </li>
              </ul>
              <Link to="/cotizar" className="btn btn-outline w-full">
                Cotizar
              </Link>
            </div>

            {/* Service 2 */}
            <div className="card p-6 animated-card">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Car size={32} className="text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Seguro para Taxis</h3>
              <p className="text-gray-600 text-center mb-4">
                Pólizas especiales para taxis con coberturas adaptadas a las necesidades del servicio público.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-secondary-600 mr-2" />
                  <span className="text-gray-700">Responsabilidad para pasajeros</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-secondary-600 mr-2" />
                  <span className="text-gray-700">Cobertura extendida por uso comercial</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-secondary-600 mr-2" />
                  <span className="text-gray-700">Reposición rápida del vehículo</span>
                </li>
              </ul>
              <Link to="/cotizar" className="btn btn-outline w-full">
                Cotizar
              </Link>
            </div>

            {/* Service 3 */}
            <div className="card p-6 animated-card">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Bike size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Seguro para Motos</h3>
              <p className="text-gray-600 text-center mb-4">
                Cobertura completa para motos con beneficios exclusivos para todo tipo de uso.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Protección ante accidentes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Cobertura por robo</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-primary-600 mr-2" />
                  <span className="text-gray-700">Asistencia mecánica 24/7</span>
                </li>
              </ul>
              <Link to="/cotizar" className="btn btn-outline w-full">
                Cotizar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">¿Por qué elegirnos?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos destacamos por ofrecer un servicio de calidad y personalizado para cada tipo de cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award size={28} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Servicio de excelencia respaldado por las mejores aseguradoras del mercado.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock size={28} className="text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapidez y Eficiencia</h3>
              <p className="text-gray-600">
                Cotizaciones instantáneas y gestión de trámites en tiempo récord.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield size={28} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cobertura Completa</h3>
              <p className="text-gray-600">
                Amplia gama de coberturas adaptadas a tus necesidades específicas.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart size={28} className="text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">
                Asesoramiento personalizado para encontrar la mejor opción para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para proteger tu vehículo?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Obtén una cotización personalizada en minutos y asegura tu tranquilidad al volante.
            </p>
            <Link to="/cotizar" className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-lg">
              Cotizar Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;