export enum MachineCategory {
  PRINTING = 'Printing',
  LAMINATION = 'Lamination',
  FILM_PROCESSING = 'Film Processing',
  CONVERTING = 'Converting',
}

export interface MachineSpec {
  label: string;
  value: string;
}

export interface Machine {
  id: string;
  name: string;
  category: MachineCategory;
  subcategory: string;
  image: string;
  description: string;
  specs: MachineSpec[];
  features: string[];
}

export type InquiryType = 'quote' | 'service' | 'parts';

export interface ServiceOffering {
  title: string;
  description: string;
  icon: string;
}