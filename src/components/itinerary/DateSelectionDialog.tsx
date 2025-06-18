
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BatchDatesTable from "./BatchDatesTable";
import { BatchDate } from "./booking/types";
import BookingForm from "./BookingForm";
import { useState } from "react";

interface DateSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  batchDates: BatchDate[];
  tripName: string;
}

const DateSelectionDialog = ({
  isOpen,
  onClose,
  batchDates,
  tripName,
}: DateSelectionDialogProps) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingFormOpen = () => {
    setShowBookingForm(true);
  };

  const handleBookingFormClose = () => {
    setShowBookingForm(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-tripvidya-primary">
              Available Travel Dates
            </DialogTitle>
          </DialogHeader>

          {batchDates.length > 0 ? (
            <BatchDatesTable batchDates={batchDates} />
          ) : (
            <p className="text-center text-gray-500 my-4">
              No upcoming dates available at the moment.
            </p>
          )}

          <div className="flex justify-end space-x-4 mt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-gray-300"
            >
              Close
            </Button>
            <Button
              onClick={handleBookingFormOpen}
              className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
            >
              Know More
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <BookingForm 
        isOpen={showBookingForm} 
        onClose={handleBookingFormClose} 
        batchDates={batchDates}
        tripName={tripName}
      />
    </>
  );
};

export default DateSelectionDialog;
