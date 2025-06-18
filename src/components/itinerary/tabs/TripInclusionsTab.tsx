
import { Check, X } from 'lucide-react';

interface TripInclusionsTabProps {
  inclusions: string[];
  exclusions: string[];
}

const TripInclusionsTab = ({ inclusions, exclusions }: TripInclusionsTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-wanderon-dark mb-4">Inclusions</h3>
        <ul className="space-y-3">
          {inclusions.map((inclusion, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-wanderon-green mr-3 mt-0.5" />
              <span className="text-gray-700">{inclusion}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-wanderon-dark mb-4">Exclusions</h3>
        <ul className="space-y-3">
          {exclusions.map((exclusion, index) => (
            <li key={index} className="flex items-start">
              <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
              <span className="text-gray-700">{exclusion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TripInclusionsTab;
