
export interface PricingOption {
  id: string;
  title: string;
  price: number;
  description: string;
  isPopular?: boolean;
}



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
