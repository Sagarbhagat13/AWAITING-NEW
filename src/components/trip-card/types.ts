
export interface TripCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  discount?: number;
  duration: string;
  image: string;
  rating?: number;
  reviews?: number;
  variant?: 'default' | 'horizontal' | 'compact';
  className?: string;
  stateHighlight?: boolean;
  honeymoonSpecial?: boolean;
  international?: boolean;
  familySpecial?: boolean;
  bikingPackage?: boolean;
  suvPackage?: boolean;
  longWeekend?: boolean;
  offbeat?: boolean;
}
