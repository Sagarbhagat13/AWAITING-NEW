
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, Phone, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendFormSubmissionEmail } from '@/services/emailService';

interface EnquiryFormProps {
  tripId?: string;
  tripName: string;
}

const EnquiryForm = ({ tripId, tripName }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        message: formData.message,
        additionalData: {
          tripId,
          tripName
        },
        pageUrl: window.location.href,
        formType: 'Trip Enquiry'
      });
      
      toast({
        title: "Enquiry Submitted",
        description: `Thank you for your interest in ${tripName}. We'll get back to you soon!`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "We couldn't send your inquiry. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="relative">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="pl-10"
            />
            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              className="pl-10"
            />
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="relative">
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
            className="pl-10"
          />
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message or Questions"
            required
            rows={3}
            className="w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
          <Send className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-wanderon-primary hover:bg-wanderon-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
};

export default EnquiryForm;
