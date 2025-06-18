
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Mail, Phone, Users, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { FormData } from './types';
import { sendFormSubmissionEmail } from '@/services/emailService';

interface EnquiryFormProps {
  onClose: () => void;
}

const EnquiryForm = ({ onClose }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    people: '',
    destination: '',
    dates: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email notification with form data
      await sendFormSubmissionEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        additionalData: {
          people: formData.people,
          destination: formData.destination,
          dates: formData.dates
        },
        pageUrl: window.location.href,
        formType: 'Trip Enquiry'
      });
      
      // Show catchy toast message
      toast({
        title: "Adventure Awaits! 🏔️",
        description: `Thanks ${formData.name}! We're already dreaming about your ${formData.destination} trip. We'll contact you within 24 hours to start planning your perfect getaway!`,
      });
      
      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        phone: '',
        people: '',
        destination: '',
        dates: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "We couldn't send your inquiry. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2">
          <User className="h-4 w-4 text-tripvidya-primary" />
          Name
        </Label>
        <div className="relative">
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-tripvidya-primary" />
          Email
        </Label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-tripvidya-primary" />
          Phone
        </Label>
        <div className="relative">
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="people" className="flex items-center gap-2">
          <Users className="h-4 w-4 text-tripvidya-primary" />
          Number of People
        </Label>
        <Select 
          value={formData.people} 
          onValueChange={(value) => handleSelectChange('people', value)}
        >
          <SelectTrigger id="people">
            <SelectValue placeholder="Select number of travelers" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'person' : 'people'}
              </SelectItem>
            ))}
            <SelectItem value="more">More than 10</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="destination" className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-tripvidya-primary" />
          Destination
        </Label>
        <div className="relative">
          <Input
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Where do you want to go?"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dates" className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-tripvidya-primary" />
          Preferred Dates
        </Label>
        <div className="relative">
          <Input
            id="dates"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            placeholder="When do you want to travel?"
            required
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </Button>
    </form>
  );
};

export default EnquiryForm;
