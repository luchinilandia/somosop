import React, { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, TrendingUp, Info, Calendar, DollarSign, Clipboard, CheckCircle2, Bike, Plus } from 'lucide-react';
import { VehicleData, CustomerData, vehicleOptions } from '../types/quoteTypes';

const QuotePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<'auto'|'taxi'|'moto'>('auto');
  const [brandSearch, setBrandSearch] = useState('');
  const [modelSearch, setModelSearch] = useState('');
  const [isCustomVehicle, setIsCustomVehicle] = useState(false);
  
  const [vehicleData, setVehicleData] = useState<VehicleData>({
    brand: '',
    model: '',
    year: '',
    value: '',
    use: '',
    isCustom: false
  });
  
  const [customerData, setCustomerData] = useState<CustomerData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    driverLicense: '',
    driverExperience: ''
  });

  const brandInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);

  const filteredBrands = useMemo(() => {
    const search = brandSearch.toLowerCase();
    const vehicleTypeFilter = vehicleType === 'moto' 
      ? (brand: string) => ['yamaha', 'honda motos', 'suzuki', 'kawasaki', 'bmw motorrad', 'ktm'].includes(brand.toLowerCase())
      : (brand: string) => !['yamaha', 'honda motos', 'suzuki', 'kawasaki', 'bmw motorrad', 'ktm'].includes(brand.toLowerCase());

    return vehicleOptions
      .filter(option => option.brand.toLowerCase().includes(search))
      .filter(option => vehicleTypeFilter(option.brand))
      .map(option => option.brand);
  }, [brandSearch, vehicleType]);

  const filteredModels = useMemo(() => {
    const search = modelSearch.toLowerCase();
    const brandModels = vehicleOptions.find(option => option.brand === vehicleData.brand)?.models || [];
    return brandModels.filter(model => model.toLowerCase().includes(search));
  }, [modelSearch, vehicleData.brand]);

  const handleVehicleTypeChange = (type: 'auto'|'taxi'|'moto') => {
    setVehicleType(type);
    setVehicleData({
      brand: '',
      model: '',
      year: '',
      value: '',
      use: '',
      isCustom: false
    });
    setBrandSearch('');
    setModelSearch('');
    setIsCustomVehicle(false);
  };

  const handleVehicleDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: value
    });
  };

  const handleBrandSelect = (brand: string) => {
    setVehicleData(prev => ({
      ...prev,
      brand,
      model: '',
      isCustom: false
    }));
    setBrandSearch(brand); // Mostrar marca seleccionada en el input
    setModelSearch('');
    // Quitar foco del input para cerrar el menú
    if (brandInputRef.current) {
      brandInputRef.current.blur();
    }
  };

  const handleModelSelect = (model: string) => {
    setVehicleData(prev => ({
      ...prev,
      model,
      isCustom: false
    }));
    setModelSearch(model); // Mostrar modelo seleccionado en el input
    // Quitar foco del input para cerrar el menú
    if (modelInputRef.current) {
      modelInputRef.current.blur();
    }
  };

  const toggleCustomVehicle = () => {
    setIsCustomVehicle(!isCustomVehicle);
    setVehicleData(prev => ({
      ...prev,
      brand: '',
      model: '',
      isCustom: !isCustomVehicle
    }));
    setBrandSearch('');
    setModelSearch('');
  };

  const handleCustomerDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/resultado', { 
      state: { 
        vehicleType, 
        vehicleData, 
        customerData 
      } 
    });
  };

  const progressWidth = () => {
    return `${(step / 3) * 100}%`;
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">Cotizador de Seguros</h1>
            <p className="text-gray-600">Complete los siguientes pasos para obtener su cotización personalizada</p>
          </div>

          <div className="mb-8">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: progressWidth() }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <div className={`${step >= 1 ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
                Tipo de Vehículo
              </div>
              <div className={`${step >= 2 ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
                Datos del Vehículo
              </div>
              <div className={`${step >= 3 ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
                Datos Personales
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Seleccione el tipo de vehículo</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div 
                      className={`quote-option flex flex-col items-center ${vehicleType === 'auto' ? 'selected' : ''}`}
                      onClick={() => handleVehicleTypeChange('auto')}
                    >
                      <Car size={48} className={`mb-3 ${vehicleType === 'auto' ? 'text-primary-600' : 'text-gray-500'}`} />
                      <h3 className="text-lg font-medium">Auto Particular</h3>
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Para uso personal y familiar
                      </p>
                    </div>

                    <div 
                      className={`quote-option flex flex-col items-center ${vehicleType === 'taxi' ? 'selected' : ''}`}
                      onClick={() => handleVehicleTypeChange('taxi')}
                    >
                      <Car size={48} className={`mb-3 ${vehicleType === 'taxi' ? 'text-primary-600' : 'text-gray-500'}`} />
                      <h3 className="text-lg font-medium">Taxi</h3>
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Para servicio de taxi urbano
                      </p>
                    </div>

                    <div 
                      className={`quote-option flex flex-col items-center ${vehicleType === 'moto' ? 'selected' : ''}`}
                      onClick={() => handleVehicleTypeChange('moto')}
                    >
                      <Bike size={48} className={`mb-3 ${vehicleType === 'moto' ? 'text-primary-600' : 'text-gray-500'}`} />
                      <h3 className="text-lg font-medium">Moto</h3>
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Para motos de todo tipo
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={nextStep}
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fade-in">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                    Información del Vehículo
                    {vehicleType === 'auto' && ' (Auto Particular)'}
                    {vehicleType === 'taxi' && ' (Taxi)'}
                    {vehicleType === 'moto' && ' (Moto)'}
                  </h2>

                  <button
                    type="button"
                    onClick={toggleCustomVehicle}
                    className="mb-6 text-sm flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Plus size={16} className="mr-1" />
                    {isCustomVehicle ? 'Seleccionar de la lista' : '¿No encuentra su vehículo? Agregar manualmente'}
                  </button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {isCustomVehicle ? (
                      <>
                        <div>
                          <label htmlFor="brand" className="form-label">Marca</label>
                          <input
                            type="text"
                            id="brand"
                            name="brand"
                            className="form-input"
                            value={vehicleData.brand}
                            onChange={handleVehicleDataChange}
                            placeholder="Ingrese la marca"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="model" className="form-label">Modelo</label>
                          <input
                            type="text"
                            id="model"
                            name="model"
                            className="form-input"
                            value={vehicleData.model}
                            onChange={handleVehicleDataChange}
                            placeholder="Ingrese el modelo"
                            required
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          <label htmlFor="brand" className="form-label">Marca</label>
                          <input
                            type="text"
                            id="brand"
                            className="form-input"
                            value={brandSearch}
                            onChange={(e) => setBrandSearch(e.target.value)}
                            placeholder="Buscar marca..."
                            ref={brandInputRef}
                          />
                          {brandSearch && filteredBrands.length > 0 && brandSearch !== vehicleData.brand && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                              {filteredBrands.map((brand) => (
                                <div
                                  key={brand}
                                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => handleBrandSelect(brand)}
                                >
                                  {brand}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className="relative">
                          <label htmlFor="model" className="form-label">Modelo</label>
                          <input
                            type="text"
                            id="model"
                            className="form-input"
                            value={modelSearch}
                            onChange={(e) => setModelSearch(e.target.value)}
                            placeholder="Buscar modelo..."
                            disabled={!vehicleData.brand}
                            ref={modelInputRef}
                          />
                          {modelSearch && filteredModels.length > 0 && modelSearch !== vehicleData.model && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                              {filteredModels.map((model) => (
                                <div
                                  key={model}
                                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => handleModelSelect(model)}
                                >
                                  {model}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                    
                    <div>
                      <label htmlFor="year" className="form-label">Año</label>
                      <select
                        id="year"
                        name="year"
                        className="form-select"
                        value={vehicleData.year}
                        onChange={handleVehicleDataChange}
                        required
                      >
                        <option value="">Seleccionar año</option>
                        {[...Array(30)].map((_, i) => {
                          const year = new Date().getFullYear() - i;
                          return <option key={year} value={year}>{year}</option>;
                        })}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="value" className="form-label">Valor Aproximado ($)</label>
                      <input
                        type="number"
                        id="value"
                        name="value"
                        className="form-input"
                        value={vehicleData.value}
                        onChange={handleVehicleDataChange}
                        required
                        min="0"
                      />
                    </div>
                    
                    {vehicleType === 'auto' && (
                      <div className="md:col-span-2">
                        <label htmlFor="use" className="form-label">Uso Principal</label>
                        <select
                          id="use"
                          name="use"
                          className="form-select"
                          value={vehicleData.use}
                          onChange={handleVehicleDataChange}
                          required
                        >
                          <option value="">Seleccionar uso</option>
                          <option value="personal">Uso personal</option>
                          <option value="work">Trabajo</option>
                          <option value="leisure">Recreación</option>
                          <option value="mixed">Mixto</option>
                        </select>
                      </div>
                    )}

                    {vehicleType === 'taxi' && (
                      <div className="md:col-span-2">
                        <label htmlFor="use" className="form-label">Zona de Operación</label>
                        <select
                          id="use"
                          name="use"
                          className="form-select"
                          value={vehicleData.use}
                          onChange={handleVehicleDataChange}
                          required
                        >
                          <option value="">Seleccionar zona</option>
                          <option value="urban">Urbana</option>
                          <option value="suburban">Suburbana</option>
                          <option value="rural">Rural</option>
                          <option value="mixed">Mixta</option>
                        </select>
                      </div>
                    )}

                    {vehicleType === 'moto' && (
                      <div className="md:col-span-2">
                        <label htmlFor="use" className="form-label">Tipo de Uso</label>
                        <select
                          id="use"
                          name="use"
                          className="form-select"
                          value={vehicleData.use}
                          onChange={handleVehicleDataChange}
                          required
                        >
                          <option value="">Seleccionar uso</option>
                          <option value="daily">Uso diario</option>
                          <option value="weekend">Fin de semana</option>
                          <option value="sport">Deportivo</option>
                          <option value="delivery">Delivery</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button 
                      type="button" 
                      className="btn btn-outline"
                      onClick={prevStep}
                    >
                      Atrás
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={nextStep}
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Información Personal</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="form-label">Nombre</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-input"
                        value={customerData.firstName}
                        onChange={handleCustomerDataChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="form-label">Apellido</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        value={customerData.lastName}
                        onChange={handleCustomerDataChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={customerData.email}
                        onChange={handleCustomerDataChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="form-label">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        value={customerData.phone}
                        onChange={handleCustomerDataChange}
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="form-label">Dirección</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-input"
                        value={customerData.address}
                        onChange={handleCustomerDataChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="form-label">Ciudad</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-input"
                        value={customerData.city}
                        onChange={handleCustomerDataChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="postalCode" className="form-label">Código Postal</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        className="form-input"
                        value={customerData.postalCode}
                        onChange={handleCustomerDataChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="driverLicense" className="form-label">N° de Licencia de Conducir</label>
                      <input
                        type="text"
                        id="driverLicense"
                        name="driverLicense"
                        className="form-input"
                        value={customerData.driverLicense}
                        onChange={handleCustomerDataChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="driverExperience" className="form-label">Años de Experiencia</label>
                      <select
                        id="driverExperience"
                        name="driverExperience"
                        className="form-select"
                        value={customerData.driverExperience}
                        onChange={handleCustomerDataChange}
                        required
                      >
                        <option value="">Seleccionar</option>
                        <option value="0-2">0-2 años</option>
                        <option value="3-5">3-5 años</option>
                        <option value="6-10">6-10 años</option>
                        <option value="10+">Más de 10 años</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-md flex items-start">
                    <Info size={20} className="text-secondary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-secondary-800">
                      Al enviar este formulario, acepta nuestra política de privacidad y términos de servicio. 
                      Sus datos serán utilizados exclusivamente para generar su cotización.
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button 
                      type="button" 
                      className="btn btn-outline"
                      onClick={prevStep}
                    >
                      Atrás
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                    >
                      Obtener Cotización
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;