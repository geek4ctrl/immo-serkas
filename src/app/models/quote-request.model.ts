export interface CargoDetails {
  weight: number;
  weightUnit: 'kg' | 'tons' | 'lbs';
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  dimensionUnit: 'cm' | 'm' | 'inches' | 'feet';
  cargoType: string;
  description: string;
  quantity: number;
  isFragile: boolean;
  requiresRefrigeration: boolean;
  isHazardous: boolean;
}

export interface Location {
  address: string;
  city: string;
  country: string;
  postalCode: string;
  contactName: string;
  contactPhone: string;
  preferredDate?: Date;
  specialInstructions?: string;
}

export interface QuoteRequest {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  cargoDetails: CargoDetails;
  pickupLocation: Location;
  deliveryLocation: Location;
  serviceType: 'overseas' | 'real-estate' | 'tracking' | 'housing' | 'mining' | 'transport' | 'installation' | 'studies' | 'oil' | 'trade' | 'logistics';
  urgency: 'standard' | 'express' | 'urgent';
  additionalNotes?: string;
  createdAt?: Date;
  status?: 'pending' | 'quoted' | 'accepted' | 'rejected';
}
