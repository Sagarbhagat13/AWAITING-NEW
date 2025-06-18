
export interface BatchDate {
  id: string;
  startDate: string;
  endDate: string;
  totalSlots: number;
  availableSlots: number;
  price: number;
}

export interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  batchDates: BatchDate[];
  tripName: string;
}
