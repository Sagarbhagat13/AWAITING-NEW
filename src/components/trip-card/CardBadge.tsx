
import { MapPin, Gift, Plane, Users, Bike, Car, Calendar, Clock3, Compass, Backpack, Sparkles, TreePine, PartyPopper, Flag } from 'lucide-react';

interface CardBadgeProps {
  discount?: number;
  stateHighlight?: boolean;
  honeymoonSpecial?: boolean;
  international?: boolean;
  familySpecial?: boolean;
  bikingPackage?: boolean;
  suvPackage?: boolean;
  longWeekend?: boolean;
  offbeat?: boolean;
  className?: string;
  month?: string;
  text?: string; // Add text prop to support direct text badges
  diwaliSpecial?: boolean;
  christmasSpecial?: boolean;
  newYearSpecial?: boolean;
  independenceSpecial?: boolean;
}

export const CardBadge = ({ 
  discount, 
  stateHighlight, 
  honeymoonSpecial, 
  international,
  familySpecial,
  bikingPackage,
  suvPackage,
  longWeekend,
  offbeat,
  className,
  month,
  text,
  // Holiday badges - uncomment to use
  diwaliSpecial,
  christmasSpecial,
  newYearSpecial,
  independenceSpecial
}: CardBadgeProps) => {
  // If text prop is provided, render a generic badge with that text
  if (text) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        {text}
      </div>
    );
  }
  
  // Check if this is a backpacking trip based on className
  const isBackpackingTrip = className?.includes('backpacking-package');
  
  // Check if this is a short trip based on className
  const isShortTrip = className?.includes('short-trip');
  
  // Display month-specific badge if month is provided
  if (month) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Calendar className="h-3 w-3 mr-1" />
        {month}
      </div>
    );
  }
  
  if (isBackpackingTrip) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Backpack className="h-3 w-3 mr-1" />
        Backpacking
      </div>
    );
  }
  
  if (offbeat) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Compass className="h-3 w-3 mr-1" />
        Off-Beat
      </div>
    );
  }
  
  if (longWeekend) {
    // Show different badge based on short trip or long weekend
    if (isShortTrip) {
      return (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
          <Clock3 className="h-3 w-3 mr-1" />
          Short Trip
        </div>
      );
    }
    
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Calendar className="h-3 w-3 mr-1" />
        Long Weekend
      </div>
    );
  }
  
  if (familySpecial) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Users className="h-3 w-3 mr-1" />
        Family Special
      </div>
    );
  }
  
  if (bikingPackage) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Bike className="h-3 w-3 mr-1" />
        Biking Package
      </div>
    );
  }
  
  if (suvPackage) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Car className="h-3 w-3 mr-1" />
        SUV Package
      </div>
    );
  }
  
  if (stateHighlight) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <MapPin className="h-3 w-3 mr-1" />
        State Special
      </div>
    );
  }
  
  if (honeymoonSpecial) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Gift className="h-3 w-3 mr-1" />
        Honeymoon Special
      </div>
    );
  }
  
  if (international) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Plane className="h-3 w-3 mr-1" />
        International
      </div>
    );
  }
    // Holiday badges - uncomment to use these special occasion badges
  
  if (diwaliSpecial) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Sparkles className="h-3 w-3 mr-1" />
        Diwali Special
      </div>
    );
  }
  
  if (christmasSpecial) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-green-600 to-red-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <TreePine className="h-3 w-3 mr-1" />
        Christmas Special
      </div>
    );
  }
  
  if (newYearSpecial) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <PartyPopper className="h-3 w-3 mr-1" />
        New Year Special
      </div>
    );
  }
  
  if (independenceSpecial) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
        <Flag className="h-3 w-3 mr-1" />
        Independence Special
      </div>
    );
  }
  
  
  if (discount && discount > 0) {
    return (
      <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
        {discount}% OFF
      </div>
    );
  }
  
  return null;
};
