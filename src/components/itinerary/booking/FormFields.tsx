
import { User, Mail, Phone, Users, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';

// Re-using the same form schema
export const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  numberOfPeople: z.string().min(1, { message: 'Number of people is required' }),
  batchDateId: z.string().min(1, { message: 'Please select a batch date' }),
});

export type FormValues = z.infer<typeof formSchema>;

interface BatchDate {
  id: string;
  startDate: string;
  endDate: string;
  totalSlots: number;
  availableSlots: number;
  price: number;
}

interface FormFieldsProps {
  form: UseFormReturn<FormValues>;
  batchDates: BatchDate[];
  selectedBatchDate: BatchDate | undefined;
  exceedsAvailableSlots: boolean;
}

const FormFields = ({ form, batchDates, selectedBatchDate, exceedsAvailableSlots }: FormFieldsProps) => {
  // Filter out batch dates with no available slots
  const availableBatchDates = batchDates.filter(date => date.availableSlots > 0);

  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <User className="h-4 w-4 text-tripvidya-primary" />
              Name
            </FormLabel>
            <FormControl>
              <Input placeholder="Your full name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-tripvidya-primary" />
              Email
            </FormLabel>
            <FormControl>
              <Input placeholder="Your email address" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-tripvidya-primary" />
              Phone
            </FormLabel>
            <FormControl>
              <Input placeholder="Your phone number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="numberOfPeople"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Users className="h-4 w-4 text-tripvidya-primary" />
                Travelers
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'traveler' : 'travelers'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="batchDateId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-tripvidya-primary" />
                Batch Date
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {availableBatchDates.length > 0 ? (
                    availableBatchDates.map(date => (
                      <SelectItem key={date.id} value={date.id}>
                        {date.startDate} ({date.availableSlots} slots)
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="none" disabled>
                      No available dates
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      {selectedBatchDate && (
        <div className="text-sm">
          <span className="font-medium">Selected batch:</span> {selectedBatchDate.startDate} - {selectedBatchDate.endDate}
          <br />
          <span className="font-medium">Available slots:</span> {selectedBatchDate.availableSlots}
          {exceedsAvailableSlots && (
            <p className="text-red-500 text-xs mt-1">
              Only {selectedBatchDate.availableSlots} slots available!
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default FormFields;
