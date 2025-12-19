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

export interface PortfolioItem {
  category: 'image' | 'video' | 'automation' | 'system';
  title: string;
  description: string;
  mediaUrl?: string; // URL for image or video file
  thumbnailUrl?: string; // Optional thumbnail for videos
  tag: string;
}