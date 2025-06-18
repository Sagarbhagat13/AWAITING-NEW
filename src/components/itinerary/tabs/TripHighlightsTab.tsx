
import { Check } from 'lucide-react';

interface TripHighlightsTabProps {
  highlights: string[];
}

const TripHighlightsTab = ({ highlights }: TripHighlightsTabProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-wanderon-dark mb-4">Trip Highlights</h3>
      <ul className="space-y-3">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-wanderon-green mr-3 mt-0.5" />
            <span className="text-gray-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripHighlightsTab;
