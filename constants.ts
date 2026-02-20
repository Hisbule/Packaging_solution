import { Machine, MachineCategory, ServiceOffering } from './types';
import { ASSETS } from './config/assets';

export const COMPANY_INFO = {
  name: "Packaging Machinery Solutions",
  shortName: "PMS",
  founder: "Engr. Syfullah",
  experience: "24+",
  phone: "+880 1720-934093", // Updated phone number
  email: "engr.syfullah@gmail.com",
  address: "Holding No. 40, Road 3, Bamunshur Model Town Society, Bangladesh", 
  mapLink: "https://maps.app.goo.gl/rfwDN9AAGxsahNtW6?g_st=aw", // Your Google Maps location
  whatsapp: "8801720934093", // Updated for WhatsApp formatting
  facebook: "https://www.facebook.com/" // <-- Add your Facebook page link here
};

export const MACHINES: Machine[] = [
  {
    id: "roto-els",
    name: "Rotogravure Printing Machine (ELS)",
    category: MachineCategory.PRINTING,
    subcategory: "Rotogravure",
    image: ASSETS.machines.rotoEls,
    description: "High-speed Electronic Line Shaft (ELS) rotogravure press designed for precise registration and high-quality flexible packaging printing.",
    specs: [
      { label: "Web Width", value: "800mm - 1300mm" },
      { label: "Printing Speed", value: "Up to 350 m/min" },
      { label: "Colors", value: "8 - 10 Stations" },
      { label: "Drive", value: "Siemens/Servo" }
    ],
    features: ["Auto Registration Control", "Low Solvent Retention", "Quick Changeover"]
  },
  {
    id: "flexo-ci",
    name: "CI Flexo Printing Machine",
    category: MachineCategory.PRINTING,
    subcategory: "Flexo",
    image: ASSETS.machines.flexoCi,
    description: "Central Impression (CI) flexographic press suitable for extensible films and breathable materials.",
    specs: [
      { label: "Web Width", value: "1000mm - 1600mm" },
      { label: "Speed", value: "400 m/min" },
      { label: "Repeat Length", value: "350mm - 800mm" }
    ],
    features: ["Gearless Technology", "Automatic Wash-up", "Temperature Control"]
  },
  {
    id: "lamination-sol",
    name: "Solvent-Less Lamination Machine",
    category: MachineCategory.LAMINATION,
    subcategory: "Lamination",
    image: ASSETS.machines.laminationSol,
    description: "Eco-friendly, high-efficiency solvent-less laminator for food packaging applications.",
    specs: [
      { label: "Max Width", value: "1300mm" },
      { label: "Mechanical Speed", value: "450 m/min" },
      { label: "Adhesive System", value: "World Mixer" }
    ],
    features: ["Precise Coating Weight", "Sleeve System", "Digital Tension Control"]
  },
  {
    id: "slitting-high",
    name: "High-Speed Slitting Machine",
    category: MachineCategory.FILM_PROCESSING,
    subcategory: "Slitting",
    image: ASSETS.machines.slittingHigh,
    description: "Robust slitter rewinder for various substrates including PET, BOPP, and CPP.",
    specs: [
      { label: "Unwind Width", value: "1300mm / 1600mm" },
      { label: "Speed", value: "500 m/min" },
      { label: "Min Slit Width", value: "50mm" }
    ],
    features: ["Differential Winding", "Laser Core Positioning", "Auto Tension"]
  },
  {
    id: "blown-film",
    name: "3-Layer Blown Film Plant",
    category: MachineCategory.FILM_PROCESSING,
    subcategory: "Extrusion",
    image: ASSETS.machines.blownFilm,
    description: "Advanced co-extrusion line for producing high-barrier LLDPE/LDPE films.",
    specs: [
      { label: "Output", value: "350 kg/hr" },
      { label: "Film Width", value: "2000mm" },
      { label: "Screw Dia", value: "55/65/55 mm" }
    ],
    features: ["IBC System", "Auto Gauge Control", "Oscillating Haul-off"]
  },
  {
    id: "bag-making",
    name: "High-Speed Bag Making Machine",
    category: MachineCategory.CONVERTING,
    subcategory: "Bag Making",
    image: ASSETS.machines.bagMaking,
    description: "Versatile pouch making machine for stand-up pouches, zipper bags, and three-side seal bags.",
    specs: [
      { label: "Speed", value: "180 strokes/min" },
      { label: "Bag Width", value: "100mm - 600mm" },
      { label: "Seal Type", value: "Heat Seal" }
    ],
    features: ["Servo Driven", "Multi-loop Control", "Touch Screen HMI"]
  }
];

export const SERVICES: ServiceOffering[] = [
  {
    title: "Installation & Commissioning",
    description: "Professional setup of Rotogravure, Flexo, and Lamination lines ensuring 100% calibration before production starts.",
    icon: "Wrench"
  },
  {
    title: "Breakdown Troubleshooting",
    description: "Urgent repair services for electronic failures, drive synchronization issues, and mechanical breakdowns.",
    icon: "AlertTriangle"
  },
  {
    title: "Third-Party Machine Repair",
    description: "Our 'Open Service Policy' means we fix ANY machine from ANY supplier. We engineer solutions where others fail.",
    icon: "Settings"
  },
  {
    title: "Spare Parts Retrofitting",
    description: "Upgrading old machines with modern PLC systems, servo motors, and tension control units to extend lifespan.",
    icon: "Cpu"
  }
];