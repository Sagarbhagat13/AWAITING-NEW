
import { Button } from '@/components/ui/button';

interface ActionButtonsProps {
  onBookingFormOpen: () => void;
  onBookNowClick: () => void;
}

const ActionButtons = ({ onBookingFormOpen, onBookNowClick }: ActionButtonsProps) => {
  return (
    <div className="space-y-4 mb-2">
      <Button 
        size="lg" 
        className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
        onClick={onBookNowClick}
      >
        Book Now
      </Button>
      
      <Button 
        variant="outline" 
        size="lg" 
        className="w-full border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white"
        onClick={onBookingFormOpen}
      >
        Know More
      </Button>
    </div>
  );
};

export default ActionButtons;
