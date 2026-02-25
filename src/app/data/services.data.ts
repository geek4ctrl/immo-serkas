export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string; // SVG path or viewBox identifier
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'overseas',
    name: 'Overseas',
    description: 'International shipping and freight services connecting you to global markets with reliable delivery.',
    icon: 'globe',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Comprehensive real estate solutions for residential and commercial property needs.',
    icon: 'house',
  },
  {
    id: 'tracking',
    name: 'Tracking',
    description: 'Real-time tracking and visibility for your shipments from pickup to delivery.',
    icon: 'target',
  },
  {
    id: 'housing',
    name: 'Housing',
    description: 'Relocation and housing solutions for individuals and families moving domestically or internationally.',
    icon: 'housing',
  },
  {
    id: 'mining',
    name: 'Mining Operations',
    description: 'Specialized logistics and support for mining operations and heavy industry.',
    icon: 'mining',
  },
  {
    id: 'transport',
    name: 'Transportation',
    description: 'Road, rail, and multimodal transport solutions for efficient cargo movement.',
    icon: 'truck',
  },
  {
    id: 'installation',
    name: "Operation d'installation",
    description: "Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for real estate activities and operations.",
    icon: 'wrench',
  },
  {
    id: 'studies',
    name: "Opérations d'études",
    description: "We conduct prospecting, research for exploitation and transformation of mineral substances, as well as concentration, metallurgical and chemical treatment operations.",
    icon: 'book',
  },
  {
    id: 'oil',
    name: 'Activités pétrolières',
    description: "Starting with manufacturing, we handle imports, exports, and customs clearance of materials and systems for oil and gas activities.",
    icon: 'oil',
  },
  {
    id: 'trade',
    name: 'Commerce général',
    description: 'From industry in the broad sense, we also work in forestry, agriculture and livestock.',
    icon: 'trade',
  },
  {
    id: 'logistics',
    name: 'Logistiques',
    description: 'In consulting and design, we implement logistics networks for industry and commerce, rationalizing existing logistics systems.',
    icon: 'box',
  },
];
