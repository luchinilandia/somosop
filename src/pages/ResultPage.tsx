import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Shield, Download, Car, User, DollarSign, Calendar, CheckCircle, Info } from 'lucide-react';

const ResultPage = () => {
  const location = useLocation();
  const { vehicleType, vehicleData, customerData } = location.state || {
    vehicleType: 'auto',
    vehicleData: {
      brand: 'Toyota',
      model: 'Corolla',
      year: '2019',
      value: '2000000',
      use: 'personal',
    },
    customerData: {
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan.perez@example.com',
      phone: '1123456789',
      address: 'Av. Corrientes 1234',
      city: 'Buenos Aires',
      postalCode: '1001',
      driverLicense: 'AB123456',
      driverExperience: '6-10',
    },
  };

  // Calculate different coverage options based on the vehicle value
  const vehicleValue = parseFloat(vehicleData.value);
  const basePrice = calculateBasePrice(vehicleType, vehicleValue, vehicleData.year);

  // Define coverage options
  const coverageOptions = [
    {
      id: 'basic',
      name: 'Cobertura Básica',
      price: Math.round(basePrice * 0.8),
      includes: [
        'Responsabilidad Civil',
        'Daños por incendio',
        'Robo total',
      ],
      excludes: [
        'Robo parcial',
        'Daños parciales por accidente',
        'Granizo',
        'Cristales',
      ],
    },
    {
      id: 'standard',
      name: 'Cobertura Estándar',
      price: basePrice,
      popular: true,
      includes: [
        'Responsabilidad Civil',
        'Daños por incendio',
        'Robo total',
        'Robo parcial',
        'Cristales',
      ],
      excludes: [
        'Daños parciales por accidente',
        'Granizo',
      ],
    },
    {
      id: 'premium',
      name: 'Cobertura Premium',
      price: Math.round(basePrice * 1.3),
      includes: [
        'Responsabilidad Civil',
        'Daños por incendio',
        'Robo total',
        'Robo parcial',
        'Daños parciales por accidente',
        'Granizo',
        'Cristales',
        'Auto sustituto',
      ],
      excludes: [],
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-secondary-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Su Cotización de Seguro</h1>
                  <p className="text-white/80">
                    Gracias por confiar en Somos OP. Aquí tiene el detalle de su cotización.
                  </p>
                </div>
                <Shield size={48} className="text-primary-400" />
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h2 className="text-lg font-semibold text-secondary-800 mb-3 flex items-center">
                    <Car size={20} className="mr-2 text-primary-600" />
                    Detalles del Vehículo
                  </h2>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Tipo:</strong> {vehicleType === 'auto' ? 'Auto Particular' : vehicleType === 'taxi' ? 'Taxi' : 'Remis'}</p>
                    <p><strong>Marca:</strong> {vehicleData.brand}</p>
                    <p><strong>Modelo:</strong> {vehicleData.model}</p>
                    <p><strong>Año:</strong> {vehicleData.year}</p>
                    <p><strong>Valor:</strong> ${parseInt(vehicleData.value).toLocaleString()}</p>
                    <p>
                      <strong>{vehicleType === 'auto' ? 'Uso:' : 'Zona de Operación:'}</strong> {
                        vehicleData.use === 'personal' ? 'Personal' :
                        vehicleData.use === 'work' ? 'Trabajo' :
                        vehicleData.use === 'leisure' ? 'Recreación' :
                        vehicleData.use === 'urban' ? 'Urbana' :
                        vehicleData.use === 'suburban' ? 'Suburbana' :
                        vehicleData.use === 'rural' ? 'Rural' : 'Mixta'
                      }
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h2 className="text-lg font-semibold text-secondary-800 mb-3 flex items-center">
                    <User size={20} className="mr-2 text-primary-600" />
                    Información del Cliente
                  </h2>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Nombre:</strong> {customerData.firstName} {customerData.lastName}</p>
                    <p><strong>Email:</strong> {customerData.email}</p>
                    <p><strong>Teléfono:</strong> {customerData.phone}</p>
                    <p><strong>Dirección:</strong> {customerData.address}</p>
                    <p><strong>Ciudad:</strong> {customerData.city}, CP: {customerData.postalCode}</p>
                    <p><strong>Experiencia:</strong> {customerData.driverExperience}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-secondary-800 mb-4">Opciones de Cobertura</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {coverageOptions.map((option) => (
                    <div key={option.id} className={`border rounded-lg overflow-hidden ${option.popular ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-gray-200'}`}>
                      {option.popular && (
                        <div className="bg-primary-500 text-white text-center text-sm py-1 font-medium">
                          Más Popular
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{option.name}</h3>
                        <div className="text-3xl font-bold text-secondary-800 mb-3">
                          ${option.price.toLocaleString()}<span className="text-sm font-normal text-gray-500">/mes</span>
                        </div>
                        
                        <h4 className="font-medium text-gray-700 mt-4 mb-2">Incluye:</h4>
                        <ul className="space-y-1 mb-4">
                          {option.includes.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {option.excludes.length > 0 && (
                          <>
                            <h4 className="font-medium text-gray-700 mb-2">No incluye:</h4>
                            <ul className="space-y-1 mb-4">
                              {option.excludes.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-500">
                                  <span className="mr-2">×</span>
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        
                        <button className={`w-full py-2 mt-2 rounded-md font-medium ${
                          option.popular
                            ? 'bg-primary-600 hover:bg-primary-700 text-white'
                            : 'border border-secondary-500 text-secondary-600 hover:bg-secondary-50'
                        }`}>
                          Seleccionar Plan
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-start">
                <Info size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-blue-800">Información importante</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Esta cotización es válida por 30 días y está sujeta a la verificación de los datos proporcionados. 
                    Para finalizar la contratación, un asesor se pondrá en contacto con usted.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Link to="/cotizar" className="btn btn-outline flex items-center">
                  <Car size={18} className="mr-2" />
                  Modificar Datos
                </Link>
                
                <div className="flex gap-3">
                  <button className="btn btn-outline flex items-center">
                    <Download size={18} className="mr-2" />
                    Descargar PDF
                  </button>
                  <button className="btn btn-primary flex items-center">
                    <Shield size={18} className="mr-2" />
                    Contratar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to calculate base price based on vehicle type, value and year
function calculateBasePrice(vehicleType: string, value: number, yearStr: string) {
  const year = parseInt(yearStr);
  const currentYear = new Date().getFullYear();
  const vehicleAge = currentYear - year;
  
  // Base multipliers
  let baseMultiplier = 0;
  
  if (vehicleType === 'auto') {
    baseMultiplier = 0.02; // 2% of value per year for autos
  } else if (vehicleType === 'taxi') {
    baseMultiplier = 0.035; // 3.5% for taxis (higher risk)
  } else if (vehicleType === 'remis') {
    baseMultiplier = 0.03; // 3% for remis
  }
  
  // Age factor - older cars have lower premiums but higher risk factor
  let ageFactor = 1;
  if (vehicleAge <= 3) {
    ageFactor = 1;
  } else if (vehicleAge <= 7) {
    ageFactor = 0.9;
  } else if (vehicleAge <= 15) {
    ageFactor = 0.85;
  } else {
    ageFactor = 0.8;
  }
  
  // Risk factor - older cars have higher risk
  let riskFactor = 1;
  if (vehicleAge <= 3) {
    riskFactor = 1;
  } else if (vehicleAge <= 7) {
    riskFactor = 1.15;
  } else if (vehicleAge <= 15) {
    riskFactor = 1.3;
  } else {
    riskFactor = 1.5;
  }
  
  // Calculate monthly base price
  const annualBasePrice = value * baseMultiplier * ageFactor * riskFactor;
  const monthlyBasePrice = annualBasePrice / 12;
  
  // Round to nearest 100
  return Math.round(monthlyBasePrice / 100) * 100;
}

export default ResultPage;