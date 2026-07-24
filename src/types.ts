export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  status: 'completed' | 'active' | 'upcoming';
  iconName: string;
}

export interface ProblemStatement {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  technologies: string[];
  deliverables: string[];
}

export interface PrizeCard {
  rank: string;
  title: string;
  amount: number;
  currency: string;
  badgeText: string;
  gradient: string;
  borderGlow: string;
  iconColor: string;
  benefits: string[];
  trophyType: 'gold' | 'silver' | 'bronze';
}

export interface FeePlan {
  category: string;
  teamSize: string;
  price: number;
  perPersonRate: string;
  isIete: boolean;
  popular?: boolean;
  features: string[];
}

export interface ContactPerson {
  role: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  whatsapp: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface RuleChecklistItem {
  id: string;
  title: string;
  description: string;
  category: 'eligibility' | 'submission' | 'presentation' | 'conduct';
  required: boolean;
}
