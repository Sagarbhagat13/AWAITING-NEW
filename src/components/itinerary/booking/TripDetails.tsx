
import { Calendar } from 'lucide-react';

interface TripDetailsProps {
  duration: string;
}

const TripDetails = ({ duration }: TripDetailsProps) => {
  return (
    <div className="space-y-3 mb-4">
      <div className="flex items-center justify-between py-2 border-b border-gray-200">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-tripvidya-primary mr-2" />
          <span className="text-gray-700">Duration</span>
        </div>
        <span className="font-medium">{duration}</span>
      </div>
    </div>
  );
};

export default TripDetails;
