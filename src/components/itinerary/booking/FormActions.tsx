
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';

interface FormActionsProps {
  onClose: () => void;
}

const FormActions = ({ onClose }: FormActionsProps) => {
  return (
    <DialogFooter className="sm:justify-end">
      <Button 
        type="button" 
        variant="outline" 
        onClick={onClose}
        className="border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white"
      >
        <X className="mr-2 h-4 w-4" />
        Cancel
      </Button>
      <Button 
        type="submit" 
        className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
      >
        Know More
      </Button>
    </DialogFooter>
  );
};

export default FormActions;
