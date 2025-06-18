
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import EnquiryForm from './EnquiryForm';

interface EnquiryFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryFormDialog = ({ isOpen, onClose }: EnquiryFormDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Plan Your Trip</DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-foreground">
            Fill out the form below and our travel experts will get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <EnquiryForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryFormDialog;
