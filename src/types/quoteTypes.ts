export interface VehicleData {
  brand: string;
  model: string;
  year: string;
  value: string;
  use: string;
  isCustom?: boolean;
}

export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  driverLicense: string;
  driverExperience: string;
}

export type VehicleType = 'auto' | 'taxi' | 'moto';

export interface VehicleOption {
  brand: string;
  models: string[];
}

export const vehicleOptions: VehicleOption[] = [
  {
    brand: "Toyota",
    models: ["Corolla", "Camry", "RAV4", "Hilux", "Yaris", "Etios"]
  },
  {
    brand: "Volkswagen",
    models: ["Gol", "Golf", "Polo", "Vento", "Amarok", "T-Cross", "Tiguan"]
  },
  {
    brand: "Ford",
    models: ["Fiesta", "Focus", "Ranger", "EcoSport", "Ka", "Mondeo", "Territory"]
  },
  {
    brand: "Chevrolet",
    models: ["Onix", "Cruze", "S10", "Tracker", "Spin", "Equinox"]
  },
  {
    brand: "Fiat",
    models: ["Cronos", "Argo", "Toro", "Strada", "Mobi", "500"]
  },
  {
    brand: "Renault",
    models: ["Sandero", "Logan", "Duster", "Captur", "Kangoo", "Alaskan"]
  },
  {
    brand: "Peugeot",
    models: ["208", "2008", "308", "3008", "Partner", "Expert"]
  },
  {
    brand: "Honda",
    models: ["Civic", "HR-V", "CR-V", "WR-V", "Fit", "City"]
  },
  {
    brand: "Yamaha",
    models: ["YBR 125", "FZ 25", "MT-03", "MT-07", "XTZ 125", "XTZ 250"]
  },
  {
    brand: "Honda Motos",
    models: ["CG 150", "XR 150L", "CB 250 Twister", "XRE 300", "CB 500F"]
  },
  {
    brand: "Suzuki",
    models: ["GSX 125", "V-Strom 650", "Gixxer 150", "GSX-R750", "Burgman"]
  },
  {
    brand: "Kawasaki",
    models: ["Ninja 400", "Z400", "Versys 650", "Z900", "Vulcan S"]
  },
  {
    brand: "BMW Motorrad",
    models: ["G 310 R", "F 750 GS", "R 1250 GS", "S 1000 RR", "K 1600 GTL"]
  },
  {
    brand: "KTM",
    models: ["Duke 200", "Duke 390", "RC 390", "Adventure 390", "Super Duke"]
  }
];