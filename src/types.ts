export interface Program {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'Education' | 'Medical' | 'Food' | 'Tree' | 'Volunteers';
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}
