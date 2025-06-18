
import { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

interface TripItineraryTabProps {
  itinerary: ItineraryDay[];
  tripId?: string;
  tripName: string;
}

const TripItineraryTab = ({ itinerary, tripId, tripName }: TripItineraryTabProps) => {
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  
  const toggleDayExpand = (day: number) => {
    setExpandedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day) 
        : [...prev, day]
    );
  };
  
  const isDayExpanded = (day: number) => expandedDays.includes(day);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {itinerary.map((day) => (
          <div key={day.day} className="border border-gray-200 rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleDayExpand(day.day)}
              className="bg-gray-50 p-4 border-b border-gray-200 w-full flex justify-between items-center hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-bold text-wanderon-dark">
                Day {day.day}: {day.title}
              </h3>
              {isDayExpanded(day.day) ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {isDayExpanded(day.day) && (
              <div className="p-4">
                <p className="text-gray-700 mb-4">{day.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-tripvidya-primary mb-2">Activities</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {day.activities.map((activity, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-tripvidya-primary mb-2">Meals</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {day.meals.map((meal, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          <span>{meal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-tripvidya-primary mb-2">Accommodation</h4>
                    <p className="text-sm text-gray-600">{day.accommodation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripItineraryTab;
