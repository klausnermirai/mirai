import { LucideIcon } from 'lucide-react';

export interface PricingItem {
  service: string;
  description: string;
  price: string;
  additional?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  items: PricingItem[];
  extraInfo?: string;
}

export interface SubscriptionPackage {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  idealFor: string;
  highlight?: boolean;
}