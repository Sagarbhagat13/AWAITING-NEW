
import { Calendar, Check, Users } from 'lucide-react';
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface BatchDate {
  id: string;
  startDate: string;
  endDate: string;
  totalSlots: number;
  availableSlots: number;
  price: number;
}

interface BatchDateSelectorProps {
  batchDates: BatchDate[];
  onDateSelect?: (dateId: string | null) => void;
}

const BatchDateSelector = ({ batchDates, onDateSelect }: BatchDateSelectorProps) => {
  const [selectedDateId, setSelectedDateId] = useState<string | null>(null);

  const handleDateSelect = (dateId: string) => {
    const newSelectedId = selectedDateId === dateId ? null : dateId;
    setSelectedDateId(newSelectedId);
    onDateSelect?.(newSelectedId);
  };

  const getSeatsLeftColor = (availableSlots: number) => {
    if (availableSlots < 5) return 'text-red-600 bg-red-50';
    if (availableSlots <= 10) return 'text-yellow-600 bg-yellow-50';
    return 'text-green-600 bg-green-50';
  };

  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <Calendar className="h-5 w-5 text-tripvidya-primary mr-2" />
        <span className="font-medium text-gray-900">Select Date</span>
      </div>
      
      <ScrollArea className="h-64 w-full border rounded-lg">
        <div className="p-2 space-y-2">
          {batchDates.map((batch) => (
            <div
              key={batch.id}
              onClick={() => handleDateSelect(batch.id)}
              className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                selectedDateId === batch.id
                  ? 'border-tripvidya-primary bg-tripvidya-primary/5'
                  : 'border-gray-200 hover:border-tripvidya-primary/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">
                    {batch.startDate} - {batch.endDate}
                  </div>
                  <div className="flex items-center mt-1">
                    <Users className="h-3 w-3 text-gray-500 mr-1" />
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getSeatsLeftColor(batch.availableSlots)}`}>
                      {batch.availableSlots} seats left
                    </span>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedDateId === batch.id
                    ? 'border-tripvidya-primary bg-tripvidya-primary'
                    : 'border-gray-300'
                }`}>
                  {selectedDateId === batch.id && (
                    <Check className="h-3 w-3 text-white" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default BatchDateSelector;
