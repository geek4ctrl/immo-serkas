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
    frName: 'Dedouanement',
    frDescription: 'Dedouanement et documentation pour importations et exportations.',
    icon: 'globe',
    tagline: 'We clear all products entering or leaving the DRC, including mining products.',
    frTagline: 'Nous dedouanons tous les produits entrant ou sortant de la RDC, y compris les produits miniers.',
    bullets: [
      'You buy goods within the Democratic Republic of Congo or in foreign countries',
      'You sell goods within the Democratic Republic of Congo or in foreign countries',
      'You sell service provisions for a specific sector in your field',
      'You sell vehicles and various other articles for your business',
      'You sell minerals in the Democratic Republic of Congo',
    ],
    frBullets: [
      'Vous achetez des biens en RDC ou a l etranger',
      'Vous vendez des biens en RDC ou a l etranger',
      'Vous vendez des prestations de service pour un secteur specifique',
      'Vous vendez des vehicules et divers articles pour votre activite',
      'Vous vendez des minerais en RDC',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Comprehensive real estate solutions for residential and commercial property needs.',
    frName: 'Immobilier',
    frDescription: 'Solutions immobilieres pour besoins residentiels et commerciaux.',
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
    frDescription: 'Suivi en temps reel et visibilite sur vos envois, du depart a la livraison.',
    icon: 'target',
    tagline: 'Our tracking service lets you follow the journey of your parcels, containers or other goods across the DRC or abroad.',
    objective: 'Our goal is to enable importers and carriers to track their goods and know their position in any country.',
    frTagline: 'Notre service de tracking permet de suivre vos colis, conteneurs ou marchandises en RDC ou a l etranger.',
    frObjective: 'Notre objectif est de permettre aux importateurs et transporteurs de suivre leurs biens et connaitre leur position dans tout pays.',
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
        frDescription: 'Vous etes entrepreneur et avez besoin de materiaux ou souhaitez exporter vos services a l international.',
      },
      {
        title: 'Merchant',
        description: 'Restocking your goods across the DRC or from abroad, and shipping internationally or within the DRC.',
        frTitle: 'Commercant',
        frDescription: 'Reapprovisionnement de vos biens en RDC ou a l etranger, et expediation nationale ou internationale.',
      },
      {
        title: 'Company',
        description: 'Book an appointment, ship faster, save time and optimize your budget.',
        frTitle: 'Entreprise',
        frDescription: 'Prenez rendez-vous, expediez plus vite, gagnez du temps et optimisez votre budget.',
      },
    ],
  },
  {
    id: 'operation-exploitation',
    name: 'Operations & Exploitation',
    description: 'Territorial exploitation operations and related services.',
    frName: 'Operation d exploitation',
    frDescription: 'Operations d exploitation territoriale et services associes.',
    icon: 'mining',
    tagline: "We operate in territorial exploitation with the following options:",
    frTagline: 'Nous intervenons dans l exploitation territoriale avec les options suivantes :',
    subTagline: 'Through representation and commission we provide insurance brokerage, promotion of buildings and real estate concessions of all kinds.',
    frSubTagline: 'Par representation et commission, nous assurons le courtage d assurance et la promotion de concessions immobilieres.',
    sections: [
      {
        title: 'Property Owner',
        description: 'You own a property and would like to promote your building or real estate concession.',
        frTitle: 'Proprietaire',
        frDescription: 'Vous possedez un bien et souhaitez promouvoir votre immeuble ou concession.',
      },
      {
        title: 'Individual & Company',
        description: 'You need a unique and independent broker on the insurance market for risk management and coverage issues.',
        frTitle: 'Individuel & Entreprise',
        frDescription: 'Vous avez besoin d un courtier independant pour la gestion des risques et des couvertures.',
      },
    ],
  },
  {
    id: 'manutention',
    name: 'Handling & Warehousing',
    description: 'Handling and warehousing services.',
    frName: 'Manutention',
    frDescription: 'Services de manutention et d entreposage.',
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
        frDescription: 'Vous investissez et avez besoin d equipements de manutention pour votre projet.',
      },
    ],
  },
  {
    id: 'installation',
    name: 'Installation Operations',
    description: 'Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for real estate activities and operations.',
    frName: 'Operation d installation',
    frDescription: 'De la fabrication a l installation, nous gersons importations, exportations et dedouanement des materiaux pour les operations immobilieres.',
    icon: 'wrench',
    tagline: 'From manufacturing to installation, we handle the full chain.',
    frTagline: 'De la fabrication a l installation, nous gerons toute la chaine.',
    fullContent: 'Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for real estate activities and operations described above.',
    frFullContent: 'De la fabrication a l installation, nous gersons importations, exportations et dedouanement des materiaux pour les operations immobilieres decrites ci-dessus.',
  },
  {
    id: 'studies',
    name: 'Study Operations',
    description: 'We conduct prospecting, research for exploitation and transformation of mineral substances.',
    frName: 'Operations d etudes',
    frDescription: 'Prospections, recherches et transformation des substances minerales.',
    icon: 'book',
    tagline: 'Prospecting, research and transformation of mineral substances.',
    frTagline: 'Prospections, recherches et transformation des substances minerales.',
    fullContent: 'We conduct prospecting, research for exploitation and transformation of mineral substances, as well as all operations of concentration, metallurgical and chemical treatment, commercialization and that of their derivatives for our account and for third parties.',
    frFullContent: 'Nous realisons des prospections, recherches et transformations des substances minerales, ainsi que des operations de concentration, traitement metallurgique et chimique, et commercialisation pour notre compte et pour des tiers.',
  },
  {
    id: 'oil',
    name: 'Oil & Gas Activities',
    description: 'Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for oil and gas activities.',
    frName: 'Activites petrolieres',
    frDescription: 'De la fabrication a l installation, nous gersons importations, exportations et dedouanement pour les activites petrolieres.',
    icon: 'oil',
    tagline: 'Materials and systems for oil and gas activities.',
    frTagline: 'Materiaux et systemes pour les activites petrolieres.',
    fullContent: 'Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for oil and gas activities described above.',
    frFullContent: 'De la fabrication a l installation, nous gersons importations, exportations et dedouanement des materiaux et systemes pour les activites petrolieres decrites ci-dessus.',
  },
  {
    id: 'trade',
    name: 'General Trade',
    description: 'From industry in the broad sense, we also work in forestry, agriculture and livestock.',
    frName: 'Commerce general',
    frDescription: 'De l industrie au sens large, nous travaillons aussi dans la foresterie, l agriculture et l elevage.',
    icon: 'trade',
    tagline: 'Industry, forestry, agriculture and livestock.',
    frTagline: 'Industrie, foresterie, agriculture et elevage.',
    fullContent: 'From industry in the broad sense, we also work in forestry, agriculture and livestock.',
    frFullContent: 'De l industrie au sens large, nous travaillons aussi dans la foresterie, l agriculture et l elevage.',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description: 'In consulting and design, we implement logistics networks for industry and commerce.',
    frName: 'Logistiques',
    frDescription: 'Conseil et conception de reseaux logistiques pour l industrie et le commerce.',
    icon: 'box',
    tagline: 'Logistics networks for industry and commerce.',
    frTagline: 'Reseaux logistiques pour l industrie et le commerce.',
    fullContent: 'In consulting and design, we implement logistics networks for industry and commerce, rationalizing existing logistics systems, and managing global outsourcing of upstream and downstream production services.',
    frFullContent: 'En conseil et conception, nous mettons en place des reseaux logistiques pour l industrie et le commerce, en rationalisant les systemes existants et en gerant l externalisation des services en amont et en aval.',
  },
];
