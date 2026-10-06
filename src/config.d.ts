/* Type declarations for config.js — taaki TypeScript components ko types mile
   (config.js plain JS hi rahega, edit karne me aasaan) */

export interface BusinessInfo {
  name: string;
  tagline: string;
  city: string;
  state: string;
  established: number;
  logo: string;
  heroImages: string[];
  gstin: string;
  gstRegistrationDate: string;
  natureOfBusiness: string;
  alsoProvides: string;
  ceo: string;
  contactPerson: string;
  contactRole: string;
  employees: string;
  legalStatus: string;
  banker: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  hours: string;
  addressLines: string[];
  mapEmbedUrl: string;
  googleReviewUrl: string;
  rating: number | null;
  reviewCount: number;
  mapsSearchUrl: string;
}

export interface Product {
  name: string;
  available: number;
  img: string;
  alt: string;
  blurb: string;
}

export interface GallerySlide {
  img?: string;
  caption: string;
  sources: string[];
}

export interface WhyUsPoint {
  icon: string;
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Review {
  img: string;
  name: string;
  text: string;
}

export declare const business: BusinessInfo;
export declare const messages: {
  general: string;
  product: (productName: string) => string;
};
export declare const products: Product[];
export declare const gallery: GallerySlide[];
export declare const whyUs: WhyUsPoint[];
export declare const factsheet: [string, string][];
export declare const faqs: Faq[];
export declare const reviews: Review[];
