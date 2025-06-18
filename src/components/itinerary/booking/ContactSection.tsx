
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <>
      <Separator className="my-6" />
      
      <div className="text-center">
        <p className="text-gray-600 mb-4">Have questions about this trip?</p>
        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Us
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
