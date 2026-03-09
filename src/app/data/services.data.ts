export interface ServiceSection {
  title: string;
  description: string;
  frTitle?: string;
  frDescription?: string;
}

export interface PropertyListing {
  title: string;
  specs: string[];
  frTitle?: string;
  frSpecs?: string[];
  price: string;
  address?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  frName?: string;
  frDescription?: string;
  icon: string;
  tagline?: string;
  frTagline?: string;
  subTagline?: string;
  frSubTagline?: string;
  bullets?: string[];
  frBullets?: string[];
  fullContent?: string;
  frFullContent?: string;
  /** Card sections (Entrepreneur, Commerçant, etc.) */
  sections?: ServiceSection[];
  /** For Tracking: "Notre objectif" */
  objective?: string;
  frObjective?: string;
  /** For Immobilier: property listings */
  properties?: PropertyListing[];
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'dedouanement',
    name: 'Customs Clearance',
    description: 'Customs clearance and documentation for imports and exports.',
    frName: 'Dédouanement',
    frDescription: 'Dédouanement et documentation pour importations et exportations.',
    icon: 'globe',
    tagline: 'We clear all products entering or leaving the DRC, including mining products.',
    frTagline: 'Nous dédouanons tous les produits entrant ou sortant de la RDC, y compris les produits miniers.',
    bullets: [
      'You buy goods within the Democratic Republic of Congo or in foreign countries',
      'You sell goods within the Democratic Republic of Congo or in foreign countries',
      'You sell service provisions for a specific sector in your field',
      'You sell vehicles and various other articles for your business',
      'You sell minerals in the Democratic Republic of Congo',
    ],
    frBullets: [
      'Vous achetez des biens en RDC ou à l\'étranger',
      'Vous vendez des biens en RDC ou à l\'étranger',
      'Vous vendez des prestations de service pour un secteur spécifique',
      'Vous vendez des véhicules et divers articles pour votre activité',
      'Vous vendez des minerais en RDC',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Comprehensive real estate solutions for residential and commercial property needs.',
    frName: 'Immobilier',
    frDescription: 'Solutions immobilières pour besoins résidentiels et commerciaux.',
    icon: 'house',
    tagline: 'We offer apartments and offices on Boulevard du 30 Juin.',
    frTagline: 'Nous proposons des appartements et des bureaux sur le boulevard du 30 Juin.',
    subTagline: 'Apartments and offices on Boulevard du 30 Juin.',
    frSubTagline: 'Des appartements et des bureaux sur le boulevard du 30 Juin.',
    properties: [
      {
        title: 'Apartment',
        specs: ['3 Bedrooms', '2 Bathrooms', 'Living Room', 'Kitchen', 'Balcony', 'Parking'],
        frTitle: 'Appartement',
        frSpecs: ['3 Chambres', '2 salles de bains', 'Salon', 'Cuisine', 'Balcon', 'Parking'],
        price: '4.500$',
        address: 'Blvd 30 juin Immo Serkas n°7639',
      },
      {
        title: 'Apartment',
        specs: ['2 Bedrooms', '2 Bathrooms', 'Living Room', 'Kitchen', 'Balcony', 'Parking'],
        frTitle: 'Appartement',
        frSpecs: ['2 Chambres', '2 salles de bains', 'Salon', 'Cuisine', 'Balcon', 'Parking'],
        price: '3.500$',
        address: 'Blvd 30 juin Immo Serkas n°7639',
      },
      {
        title: 'Apartment',
        specs: ['1 Bedroom', '1 Bathroom', 'Living Room', 'Kitchen', 'Balcony', 'Parking'],
        frTitle: 'Appartement',
        frSpecs: ['1 chambre', '1 salle de bain', 'Salon', 'Cuisine', 'Balcon', 'Parking'],
        price: '2.500$',
        address: 'Blvd 30 juin Immo Serkas n°7639',
      },
    ],
  },
  {
    id: 'tracking',
    name: 'Tracking',
    description: 'Real-time tracking and visibility for your shipments from pickup to delivery.',
    frName: 'Tracking',
    frDescription: 'Suivi en temps réel et visibilité sur vos envois, du départ à la livraison.',
    icon: 'target',
    tagline: 'Our tracking service lets you follow the journey of your parcels, containers or other goods across the DRC or abroad.',
    objective: 'Our goal is to enable importers and carriers to track their goods and know their position in any country.',
    frTagline: 'Notre service de tracking permet de suivre vos colis, conteneurs ou marchandises en RDC ou à l\'étranger.',
    frObjective: 'Notre objectif est de permettre aux importateurs et transporteurs de suivre leurs biens et connaître leur position dans tout pays.',
  },
  {
    id: 'transport',
    name: 'Transportation',
    description: 'Import/export transport, passenger and freight services.',
    frName: 'Transport',
    frDescription: 'Transport import/export, passagers et fret.',
    icon: 'truck',
    tagline: 'Our transport service offers several options:',
    frTagline: 'Notre service de transport propose plusieurs options :',
    subTagline: 'We provide import and export transport, individual or collective passenger transport, freight transport for third parties, unimodal and intermodal on national and international routes.',
    frSubTagline: 'Nous assurons le transport import et export, passagers individuels ou collectifs, fret pour tiers, unimodal et intermodal sur des routes nationales et internationales.',
    sections: [
      {
        title: 'Entrepreneur',
        description: 'You are an entrepreneur and need materials from elsewhere or to export your services internationally. You are in the right place.',
        frTitle: 'Entrepreneur',
        frDescription: 'Vous êtes entrepreneur et avez besoin de matériaux ou souhaitez exporter vos services à l\'international.',
      },
      {
        title: 'Merchant',
        description: 'Restocking your goods across the DRC or from abroad, and shipping internationally or within the DRC.',
        frTitle: 'Commerçant',
        frDescription: 'Réapprovisionnement de vos biens en RDC ou à l\'étranger, et expédiation nationale ou internationale.',
      },
      {
        title: 'Company',
        description: 'Book an appointment, ship faster, save time and optimize your budget.',
        frTitle: 'Entreprise',
        frDescription: 'Prenez rendez-vous, expédiez plus vite, gagnez du temps et optimisez votre budget.',
      },
    ],
  },
  {
    id: 'operation-exploitation',
    name: 'Operations & Exploitation',
    description: 'Territorial exploitation operations and related services.',
    frName: 'Opération d\'exploitation',
    frDescription: 'Opérations d\'exploitation territoriale et services associés.',
    icon: 'mining',
    tagline: "We operate in territorial exploitation with the following options:",
    frTagline: 'Nous intervenons dans l exploitation territoriale avec les options suivantes :',
    subTagline: 'Through representation and commission we provide insurance brokerage, promotion of buildings and real estate concessions of all kinds.',
    frSubTagline: 'Par representation et commission, nous assurons le courtage d assurance et la promotion de concessions immobilieres.',
    sections: [
      {
        title: 'Property Owner',
        description: 'You own a property and would like to promote your building or real estate concession.',
        frTitle: 'Propriétaire',
        frDescription: 'Vous possédez un bien et souhaitez promouvoir votre immeuble ou concession.',
      },
      {
        title: 'Individual & Company',
        description: 'You need a unique and independent broker on the insurance market for risk management and coverage issues.',
        frTitle: 'Individuel & Entreprise',
        frDescription: 'Vous avez besoin d\'un courtier indépendant pour la gestion des risques et des couvertures.',
      },
    ],
  },
  {
    id: 'manutention',
    name: 'Handling & Warehousing',
    description: 'Handling and warehousing services.',
    frName: 'Manutention',
    frDescription: 'Services de manutention et d\'entreposage.',
    icon: 'box',
    tagline: 'We work on cargo and baggage services in ports, airports, logistics platforms and railway stations, as well as goods management for third parties in our own warehouses and sorting centers.',
    frTagline: 'Nous assurons les services de manutention dans les ports, aeroports, plateformes logistiques et gares, ainsi que la gestion des biens pour des tiers.',
    subTagline: 'We also provide distribution and preparation for industry and sales networks, plus rental of mechanical machines and equipment for goods handling.',
    frSubTagline: 'Nous assurons aussi la distribution, la preparation et la location de machines pour la manutention.',
    sections: [
      {
        title: 'Investor',
        description: 'You are investing and need handling equipment to complete your project.',
        frTitle: 'Investisseur',
        frDescription: 'Vous investissez et avez besoin d\'équipements de manutention pour votre projet.',
      },
    ],
  },
  {
    id: 'installation',
    name: 'Installation Operations',
    description: 'Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for real estate activities and operations.',
    frName: 'Opération d\'installation',
    frDescription: 'De la fabrication à l\'installation, nous gérons importations, exportations et dédouanement des matériaux pour les opérations immobilières.',
    icon: 'wrench',
    tagline: 'From manufacturing to installation, we handle the full chain.',
    frTagline: 'De la fabrication à l\'installation, nous gérons toute la chaîne.',
    fullContent: 'Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for real estate activities and operations described above.',
    frFullContent: 'De la fabrication à l\'installation, nous gérons importations, exportations et dédouanement des matériaux pour les opérations immobilières décrites ci-dessus.',
  },
  {
    id: 'studies',
    name: 'Study Operations',
    description: 'We conduct prospecting, research for exploitation and transformation of mineral substances.',
    frName: 'Opérations d\'études',
    frDescription: 'Prospections, recherches et transformation des substances minérales.',
    icon: 'book',
    tagline: 'Prospecting, research and transformation of mineral substances.',
    frTagline: 'Prospections, recherches et transformation des substances minerales.',
    fullContent: 'We conduct prospecting, research for exploitation and transformation of mineral substances, as well as all operations of concentration, metallurgical and chemical treatment, commercialization and that of their derivatives for our account and for third parties.',
    frFullContent: 'Nous réalisons des prospections, recherches et transformations des substances minérales, ainsi que des opérations de concentration, traitement métallurgique et chimique, et commercialisation pour notre compte et pour des tiers.',
  },
  {
    id: 'oil',
    name: 'Oil & Gas Activities',
    description: 'Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for oil and gas activities.',
    frName: 'Activités pétrolières',
    frDescription: 'De la fabrication à l\'installation, nous gérons importations, exportations et dédouanement pour les activités pétrolières.',
    icon: 'oil',
    tagline: 'Materials and systems for oil and gas activities.',
    frTagline: 'Matériaux et systèmes pour les activités pétrolières.',
    fullContent: 'Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for oil and gas activities described above.',
    frFullContent: 'De la fabrication à l\'installation, nous gérons importations, exportations et dédouanement des matériaux et systèmes pour les activités pétrolières décrites ci-dessus.',
  },
  {
    id: 'trade',
    name: 'General Trade',
    description: 'From industry in the broad sense, we also work in forestry, agriculture and livestock.',
    frName: 'Commerce général',
    frDescription: 'De l\'industrie au sens large, nous travaillons aussi dans la foresterie, l\'agriculture et l\'élevage.',
    icon: 'trade',
    tagline: 'Industry, forestry, agriculture and livestock.',
    frTagline: 'Industrie, foresterie, agriculture et élevage.',
    fullContent: 'From industry in the broad sense, we also work in forestry, agriculture and livestock.',
    frFullContent: 'De l\'industrie au sens large, nous travaillons aussi dans la foresterie, l\'agriculture et l\'élevage.',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description: 'In consulting and design, we implement logistics networks for industry and commerce.',
    frName: 'Logistiques',
    frDescription: 'Conseil et conception de réseaux logistiques pour l\'industrie et le commerce.',
    icon: 'box',
    tagline: 'Logistics networks for industry and commerce.',
    frTagline: 'Réseaux logistiques pour l\'industrie et le commerce.',
    fullContent: 'In consulting and design, we implement logistics networks for industry and commerce, rationalizing existing logistics systems, and managing global outsourcing of upstream and downstream production services.',
    frFullContent: 'En conseil et conception, nous mettons en place des réseaux logistiques pour l\'industrie et le commerce, en rationalisant les systèmes existants et en gérant l\'externalisation des services en amont et en aval.',
  },
];
