
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

// Import the components we refactored
import FormFields, { formSchema, FormValues } from './booking/FormFields';
import FormActions from './booking/FormActions';
import { BookingFormProps } from './booking/types';
import { openWhatsApp } from '@/services/whatsappService';

const BookingForm = ({ isOpen, onClose, batchDates, tripName }: BookingFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      numberOfPeople: '1',
      batchDateId: '',
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

    // In a real app, this would submit to an API
    console.log('Opening WhatsApp with inquiry data:', data);
    
    // // Send email notification with form data
    // await sendFormSubmissionEmail({
    //   name: data.name,
    //   email: data.email,
    //   phone: data.phone,
    //   additionalData: {
    //     numberOfPeople: data.numberOfPeople,
    //     batchDate: selectedBatchDate ? `${selectedBatchDate.startDate} - ${selectedBatchDate.endDate}` : 'Not specified',
    //     tripName
    //   },
    //   pageUrl: window.location.href,
    //   formType: 'Trip Booking'
    // });

       // Open WhatsApp with pre-filled message
    openWhatsApp({
      tripName,
      userName: data.name,
      userPhone: data.phone,
      userEmail: data.email,
      numberOfPeople: data.numberOfPeople,
      batchDate: selectedBatchDate ? `${selectedBatchDate.startDate} - ${selectedBatchDate.endDate}` : undefined
    });
    
    // Show catchy success message
    // toast.success('✨ Adventure awaits! Our travel expert will contact you soon with exclusive offers for your dream journey!', {
    //   duration: 5000,
    // });
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
            <FormActions onClose={onClose} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
