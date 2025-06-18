
import React from 'react';
import { ArrowRight } from 'lucide-react';

const QuickLinks = () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <p className="font-medium text-sm mb-2">Popular Destinations</p>
        <ul className="space-y-1">
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Ladakh
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Manali
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Goa
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Kerala
          </li>
        </ul>
      </div>
      <div>
        <p className="font-medium text-sm mb-2">Trip Types</p>
        <ul className="space-y-1">
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Adventure
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Honeymoon
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Family
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Budget
          </li>
        </ul>
      </div>
      <div>
        <p className="font-medium text-sm mb-2">Seasonal Trips</p>
        <ul className="space-y-1">
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Winter
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Summer
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Monsoon
          </li>
          <li className="text-sm hover:text-tripvidya-primary cursor-pointer flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" /> Weekend
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
