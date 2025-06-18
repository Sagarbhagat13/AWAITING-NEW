
import { MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface PlacesCoveredProps {
  places: string[];
}

const PlacesCovered = ({ places }: PlacesCoveredProps) => {
  if (!places?.length) return null;
  
  return (
    <div className="flex items-center gap-2 flex-wrap mt-4 mb-6">
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <MapPin className="h-4 w-4 text-tripvidya-primary" />
        <span>Places covered:</span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {places.map((place, index) => (
          <div key={place} className="flex items-center">
            <div className="flex items-center">
              <MapPin className="h-3 w-3 text-tripvidya-primary mr-1" />
              <span className="text-sm font-medium">{place}</span>
            </div>
            {index < places.length - 1 && (
              <Separator orientation="vertical" className="mx-2 h-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesCovered;
