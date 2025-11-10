import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import FormFields, { formSchema, FormValues } from './booking/FormFields';
import { openWhatsApp } from '@/services/whatsappService';
import { BatchDate } from './booking/types';

interface BookingFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  batchDates: BatchDate[];
  tripName: string;
}

const BookingFormDialog = ({ isOpen, onClose, batchDates, tripName }: BookingFormDialogProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      numberOfPeople: '1',
      batchDateId: '',
      source: '',
    },
  });

  // Get selected batch date information
  const selectedBatchDateId = form.watch('batchDateId');
  const selectedBatchDate = batchDates.find(date => date.id === selectedBatchDateId);
  const numberOfPeople = parseInt(form.watch('numberOfPeople') || '1');

  // Validate if selected number of people exceeds available slots
  const exceedsAvailableSlots = selectedBatchDate && numberOfPeople > selectedBatchDate.availableSlots;

  useEffect(() => {
    // Reset form when modal opens
    if (isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

  useEffect(() => {
    // Show warning if selected people exceeds available slots
    if (exceedsAvailableSlots) {
      toast.warning(`Only ${selectedBatchDate?.availableSlots} slots available for this date!`);
    }
  }, [exceedsAvailableSlots, selectedBatchDate]);

  const onSubmit = async (data: FormValues) => {
    if (exceedsAvailableSlots) {
      toast.error(`Cannot book more than ${selectedBatchDate?.availableSlots} slots for this date`);
      return;
    }

    console.log('Opening WhatsApp with inquiry data:', data);
    
    // Open WhatsApp with pre-filled message
    openWhatsApp({
      tripName,
      userName: data.name,
      userPhone: data.phone,
      userEmail: data.email,
      numberOfPeople: data.numberOfPeople,
      batchDate: selectedBatchDate ? `${selectedBatchDate.startDate} - ${selectedBatchDate.endDate}` : undefined,
      source: data.source,
    });
    
    // Show success message
    toast.success('🚀 WhatsApp is opening with your inquiry details! Our travel expert will respond shortly.', {
      duration: 4000,
    });
    
    // Close the form
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-tripvidya-primary">
            Get Trip Details
          </DialogTitle>
        </DialogHeader>
        
        {tripName && (
          <div className="mb-4">
            <h3 className="text-lg font-medium">{tripName}</h3>
          </div>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormFields 
              form={form} 
              batchDates={batchDates} 
              selectedBatchDate={selectedBatchDate} 
              exceedsAvailableSlots={exceedsAvailableSlots} 
            />
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-tripvidya-primary hover:bg-tripvidya-primary/90"
              >
                Send Enquiry
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingFormDialog;