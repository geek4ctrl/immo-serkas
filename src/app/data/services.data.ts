export interface ServiceSection {
  title: string;
  description: string;
}

export interface PropertyListing {
  title: string;
  specs: string[];
  price: string;
  address?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  tagline?: string;
  subTagline?: string;
  bullets?: string[];
  fullContent?: string;
  /** Card sections (Entrepreneur, Commerçant, etc.) */
  sections?: ServiceSection[];
  /** For Tracking: "Notre objectif" */
  objective?: string;
  /** For Immobilier: property listings */
  properties?: PropertyListing[];
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'dedouanement',
    name: 'Dédouanement',
    description: 'Customs clearance and documentation for imports and exports.',
    icon: 'globe',
    tagline: 'We clear all products entering or leaving the DRC, including mining products.',
    bullets: [
      'You buy goods within the Democratic Republic of Congo or in foreign countries',
      'You sell goods within the Democratic Republic of Congo or in foreign countries',
      'You sell service provisions for a specific sector in your field',
      'You sell vehicles and various other articles for your business',
      'You sell minerals in the Democratic Republic of Congo',
    ],
  },
  {
    id: 'real-estate',
    name: 'Immobilier',
    description: 'Comprehensive real estate solutions for residential and commercial property needs.',
    icon: 'house',
    tagline: 'We offer apartments and offices on Boulevard du 30 Juin.',
    subTagline: 'Des appartements et des bureaux sur le boulevard du 30 juin',
    properties: [
      {
        title: 'Appartement',
        specs: ['3 Chambres', '2 salles de bains', 'Salon', 'Cuisine', 'Balcon', 'Parking'],
        price: '4.500$',
        address: 'Blvd 30 juin Immo Serkas n°7639',
      },
      {
        title: 'Appartement',
        specs: ['2 Chambres', '2 salles de bains', 'Salon', 'Cuisine', 'Balcon', 'Parking'],
        price: '3.500$',
        address: 'Blvd 30 juin Immo Serkas n°7639',
      },
      {
        title: 'Appartement',
        specs: ['1 chambre', '1 salle de bain', 'Salon', 'Cuisine', 'Balcon', 'Parking'],
        price: '2.500$',
        address: 'Blvd 30 juin Immo Serkas n°7639',
      },
    ],
  },
  {
    id: 'tracking',
    name: 'Tracking',
    description: 'Real-time tracking and visibility for your shipments from pickup to delivery.',
    icon: 'target',
    tagline: 'Our tracking service lets you follow the journey of your parcels, containers or other goods across the DRC or abroad.',
    objective: 'Our goal is to enable importers and carriers to track their goods and know their position in any country.',
  },
  {
    id: 'transport',
    name: 'Transportation',
    description: 'Import/export transport, passenger and freight services.',
    icon: 'truck',
    tagline: 'Our transport service offers several options:',
    subTagline: 'We provide import and export transport, individual or collective passenger transport, freight transport for third parties, unimodal and intermodal — on national and international routes.',
    sections: [
      {
        title: 'Entrepreneur',
        description: 'You are an entrepreneur and need materials from elsewhere or to export your services internationally — you are in the right place.',
      },
      {
        title: 'Commerçant',
        description: 'Restocking your goods across the DRC or from abroad, and shipping internationally or within the DRC.',
      },
      {
        title: 'Entreprise',
        description: 'Book an appointment, ship faster, save time and optimize your budget.',
      },
    ],
  },
  {
    id: 'operation-exploitation',
    name: "Operation d'exploitation",
    description: 'Territorial exploitation operations.',
    icon: 'mining',
    tagline: "We operate in territorial exploitation with the following options:",
    subTagline: "Through representation and commission we provide insurance brokerage, promotion of buildings and real estate concessions of all kinds.",
    sections: [
      {
        title: 'Propriétaire',
        description: 'You own a property and would like to promote your building or real estate concession.',
      },
      {
        title: 'Individuel & Entreprise',
        description: 'You need a unique and independent broker on the insurance market for all risk management and coverage issues.',
      },
    ],
  },
  {
    id: 'manutention',
    name: 'Manutention',
    description: 'Handling and warehousing services.',
    icon: 'box',
    tagline: 'We work on cargo and baggage services in ports, airports, logistics platforms and railway stations, as well as goods management for third parties in our own warehouses and sorting centers.',
    subTagline: 'We also provide distribution and preparation for industry and sales networks, plus rental of mechanical machines and equipment for goods handling.',
    sections: [
      {
        title: 'Investisseur',
        description: 'You are investing and need handling equipment to complete your project.',
      },
    ],
  },
  {
    id: 'installation',
    name: "Operation d'installation",
    description: "Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for real estate activities and operations.",
    icon: 'wrench',
    tagline: "From manufacturing to installation — we handle the full chain.",
    fullContent: "Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for real estate activities and operations described above.",
  },
  {
    id: 'studies',
    name: "Opérations d'études",
    description: "We conduct prospecting, research for exploitation and transformation of mineral substances.",
    icon: 'book',
    tagline: "Prospecting, research and transformation of mineral substances.",
    fullContent: "We conduct prospecting, research for exploitation and transformation of mineral substances, as well as all operations of concentration, metallurgical and chemical treatment, commercialization and that of their derivatives for our account and for third parties.",
  },
  {
    id: 'oil',
    name: 'Activités pétrolières',
    description: "Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for oil and gas activities.",
    icon: 'oil',
    tagline: "Materials and systems for oil and gas activities.",
    fullContent: "Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for oil and gas activities described above.",
  },
  {
    id: 'trade',
    name: 'Commerce général',
    description: 'From industry in the broad sense, we also work in forestry, agriculture and livestock.',
    icon: 'trade',
    tagline: "Industry, forestry, agriculture and livestock.",
    fullContent: "From industry in the broad sense, we also work in forestry, agriculture and livestock.",
  },
  {
    id: 'logistics',
    name: 'Logistiques',
    description: 'In consulting and design, we implement logistics networks for industry and commerce.',
    icon: 'box',
    tagline: "Logistics networks for industry and commerce.",
    fullContent: "In consulting and design, we implement logistics networks for industry and commerce, rationalizing existing logistics systems, and managing global outsourcing of upstream and downstream production services.",
  },
];
