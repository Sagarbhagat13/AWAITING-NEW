
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import SuggestedTripForm from './SuggestedTripForm';

interface SuggestedActionButtonsProps {
  onBookingFormOpen: () => void;
  tripName: string;
}

const SuggestedActionButtons = ({ onBookingFormOpen, tripName }: SuggestedActionButtonsProps) => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  
  const openEnquiryForm = () => {
    setShowEnquiryForm(true);
  };
  
  const closeEnquiryForm = () => {
    setShowEnquiryForm(false);
  };

  return (
    <div className="space-y-4 mb-2">
      <Button 
        size="lg" 
        className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
        onClick={openEnquiryForm}
      >
        Know More
      </Button>
      
      <Button 
        variant="outline" 
        size="lg" 
        className="w-full border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white flex items-center justify-center"
        onClick={openEnquiryForm}
      >
        Request Customization
        <Info className="ml-2 h-5 w-5" />
      </Button>
      
      <SuggestedTripForm 
        isOpen={showEnquiryForm} 
        onClose={closeEnquiryForm} 
        tripName={tripName}
      />
    </div>
  );
};

export default SuggestedActionButtons;
