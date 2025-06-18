
import { Users } from 'lucide-react';

interface TravelersDisplayProps {
  travelersText: string | null;
}

const TravelersDisplay = ({ travelersText }: TravelersDisplayProps) => {
  if (!travelersText) return null;
  
  return (
    <div className="mb-4">
      <div className="flex items-center text-gray-600 mb-4">
        <Users className="h-5 w-5 text-tripvidya-primary mr-2" />
        <p className="italic text-sm">{travelersText}</p>
      </div>
    </div>
  );
};

export default TravelersDisplay;
