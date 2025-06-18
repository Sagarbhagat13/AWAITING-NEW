
import { Users, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface GuestsCounterProps {
  defaultValue?: number;
  maxGuests?: number;
  onGuestChange?: (count: number) => void;
}

const GuestsCounter = ({ 
  defaultValue = 1, 
  maxGuests = 15,
  onGuestChange 
}: GuestsCounterProps) => {
  const [guestCount, setGuestCount] = useState(defaultValue);

  const handleIncrement = () => {
    if (guestCount < maxGuests) {
      const newCount = guestCount + 1;
      setGuestCount(newCount);
      onGuestChange?.(newCount);
    }
  };

  const handleDecrement = () => {
    if (guestCount > 1) {
      const newCount = guestCount - 1;
      setGuestCount(newCount);
      onGuestChange?.(newCount);
    }
  };

  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <Users className="h-5 w-5 text-tripvidya-primary mr-2" />
        <span className="font-medium text-gray-900">Guests</span>
      </div>
      
      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
        <span className="text-gray-700">Guests</span>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDecrement}
            disabled={guestCount <= 1}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
              guestCount <= 1
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white'
            }`}
          >
            <Minus className="h-4 w-4" />
          </button>
          
          <span className="font-medium text-lg min-w-[2rem] text-center">
            {guestCount}
          </span>
          
          <button
            onClick={handleIncrement}
            disabled={guestCount >= maxGuests}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
              guestCount >= maxGuests
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white'
            }`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestsCounter;
