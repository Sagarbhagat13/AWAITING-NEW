import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, Phone, Users, MapPin, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { openWhatsAppForGeneralEnquiry } from '@/services/whatsappService';
import { validateField, ValidationRule } from '@/utils/validation';

interface FormData {
 fullName: string;
  whatsappNumber: string;
  email: string;
numberOfPeople: string;
  tripType: string;
  travelMonth: string;
  }

interface FormErrors {
  [key: string]: string[];
}

const LandingContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
     numberOfPeople: '',
    tripType: '',
    travelMonth: ''
    
  });
   const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validationRules: Record<string, ValidationRule> = {
     fullName: { required: true, minLength: 2 },
    email: { required: true, email: true },
    whatsappNumber: { required: true, phone: true }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
//   };

//   const handleSelectChange = (name: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {

  // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: []
      }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    Object.entries(validationRules).forEach(([field, rule]) => {
      const value = formData[field as keyof FormData] || '';
      const validation = validateField(value, rule);
      
      if (!validation.isValid) {
        errors[field] = validation.errors;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started with data:', formData);
    
    if (!validateForm()) {
      console.log('Form validation failed:', formErrors);
      toast({
        title: "Please fix the errors",
        description: "Fill in all required fields correctly to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Attempting to open WhatsApp...');

      // Track conversion event (ready for Meta Pixel)
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Contact Form Submission',
          content_category: 'Travel Planning',
          value: 1,
          currency: 'USD'
        });
      }

      // Open WhatsApp with pre-filled message
      openWhatsAppForGeneralEnquiry({
         userName: formData.fullName,
        userPhone: formData.whatsappNumber,
        userEmail: formData.email,
        destination: 'Custom destination',
        numberOfPeople: formData.numberOfPeople || '1',
        preferredDates: formData.travelMonth || 'To be discussed'
      });
       console.log('WhatsApp opened successfully');
      
      toast({
        title: "🚀 Amazing! We're connecting you now!",
        description: `Thanks ${formData.fullName}! WhatsApp is opening with your details. Our travel expert will respond within 2 minutes!`,
      });
      
      // Reset form
      setFormData({
        fullName: '',
        whatsappNumber: '',
        email: '',
        numberOfPeople: '',
        tripType: '',
        travelMonth: ''
      });
    } catch (error) {
            console.error('WhatsApp opening failed:', error);
      toast({
        title: "Oops! Something went wrong",
         description: "Please try again or call us directly at +91 91377 98539. We're here to help!",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-tripvidya-primary/10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Get Your <span className="text-tripvidya-primary">FREE</span> Travel Plan
        </h2>
        <p className="text-gray-600">Fill out the form below and we'll contact you within 2 minutes!</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="flex items-center gap-2 text-gray-700 font-medium">
            <User className="h-4 w-4 text-tripvidya-primary" />
              Full Name *
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
             className={`border-gray-300 focus:border-tripvidya-primary focus:ring-tripvidya-primary ${
               formErrors.fullName ? 'border-red-500' : ''
            }`}
            required
          />
          {formErrors.fullName && (
            <div className="flex items-center gap-1 text-red-500 text-sm">
              <AlertCircle className="h-3 w-3" />
              {formErrors.fullName[0]}
            </div>
          )}
        </div>
        
        {/* WhatsApp Number */}
        <div className="space-y-2">
          <Label htmlFor="whatsappNumber" className="flex items-center gap-2 text-gray-700 font-medium">
            <Phone className="h-4 w-4 text-tripvidya-primary" />
            WhatsApp Number *
          </Label>
          <div className="flex">
            <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
              <span className="text-sm text-gray-600">🇮🇳 India +91</span>
            </div>
            <Input
              id="whatsappNumber"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="98765 43210"
              className={`border-gray-300 rounded-l-none focus:border-tripvidya-primary focus:ring-tripvidya-primary ${
                formErrors.whatsappNumber ? 'border-red-500' : ''
              }`}
              required
            />
          </div>
          {formErrors.whatsappNumber && (
            <div className="flex items-center gap-1 text-red-500 text-sm">
              <AlertCircle className="h-3 w-3" />
                 {formErrors.whatsappNumber[0]}
            </div>
          )}
        </div>
        
       {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 font-medium">
            <Mail className="h-4 w-4 text-tripvidya-primary" />
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`border-gray-300 focus:border-tripvidya-primary focus:ring-tripvidya-primary ${
              formErrors.email ? 'border-red-500' : ''
            }`}
            required
          />
          {formErrors.email && (
            <div className="flex items-center gap-1 text-red-500 text-sm">
              <AlertCircle className="h-3 w-3" />
              {formErrors.email[0]}
            </div>
          )}
        </div>
        
        {/* Number of People */}
        <div className="space-y-2">
          <Label htmlFor="numberOfPeople" className="flex items-center gap-2 text-gray-700 font-medium">
            <Users className="h-4 w-4 text-tripvidya-primary" />
            Number of people interested for the trip? *
          </Label>
          <Select 
            value={formData.numberOfPeople} 
            onValueChange={(value) => handleSelectChange('numberOfPeople', value)}
          >
            <SelectTrigger className="border-gray-300 focus:border-tripvidya-primary bg-white z-50">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
              <SelectItem value="solo">I am planning Solo</SelectItem>
              <SelectItem value="couple">Looking for a Honeymoon/Couple Trip</SelectItem>
              <SelectItem value="2-4">2-4 Pax</SelectItem>
              <SelectItem value="5-7">5-7 Pax</SelectItem>
              <SelectItem value="7+">7+ Pax</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Trip Type */}
        <div className="space-y-2">
          <Label htmlFor="tripType" className="flex items-center gap-2 text-gray-700 font-medium">
            <MapPin className="h-4 w-4 text-tripvidya-primary" />
            Type of trip you want to take? *
          </Label>
          <Select 
            value={formData.tripType} 
            onValueChange={(value) => handleSelectChange('tripType', value)}
          >
            <SelectTrigger className="border-gray-300 focus:border-tripvidya-primary bg-white z-50">
              <SelectValue placeholder="Select trip type" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
              <SelectItem value="group">Group Trips/Fixed Departures</SelectItem>
              <SelectItem value="customized">Customized/Private Trips</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Travel Month */}
        <div className="space-y-2">
          <Label htmlFor="travelMonth" className="flex items-center gap-2 text-gray-700 font-medium">
            <MessageSquare className="h-4 w-4 text-tripvidya-primary" />
            Any tentative/finalised month for your trip?
          </Label>
          <Select 
            value={formData.travelMonth} 
            onValueChange={(value) => handleSelectChange('travelMonth', value)}
          >
            <SelectTrigger className="border-gray-300 focus:border-tripvidya-primary bg-white z-50">
              <SelectValue placeholder="Select Month of travel" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
              <SelectItem value="january">January</SelectItem>
              <SelectItem value="february">February</SelectItem>
              <SelectItem value="march">March</SelectItem>
              <SelectItem value="april">April</SelectItem>
              <SelectItem value="may">May</SelectItem>
              <SelectItem value="june">June</SelectItem>
              <SelectItem value="july">July</SelectItem>
              <SelectItem value="august">August</SelectItem>
              <SelectItem value="september">September</SelectItem>
              <SelectItem value="october">October</SelectItem>
              <SelectItem value="november">November</SelectItem>
              <SelectItem value="december">December</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={isSubmitting}
          size="lg"
        >
          {isSubmitting ? (
            "Connecting you to our expert..."
          ) : (
            <>
              Get My FREE Travel Plan Now
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
        
        {/* Trust Message */}
        <p className="text-center text-sm text-gray-500 mt-4">
          🔒 Your information is 100% secure. We'll never spam you.
        </p>
      </form>
    </div>
  );
};

export default LandingContactForm;