
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Phone, ArrowLeft } from 'lucide-react';

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
];

const AuthDialog = ({ isOpen, onClose }: AuthDialogProps) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const { signInWithPhone, verifyOTP } = useAuth();

  const handleClose = () => {
    setStep('phone');
    setCountryCode('+91');
    setPhoneNumber('');
    setOTP('');
    setLoading(false);
    onClose();
  };

  const formatPhoneNumber = (phone: string, countryCode: string) => {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // For India (+91), ensure it's 10 digits
    if (countryCode === '+91' && cleanPhone.length === 10) {
      return `+91${cleanPhone}`;
    }
    
    // For other countries, just prepend the country code
    return `${countryCode}${cleanPhone}`;
  };

  const validatePhoneNumber = (phone: string, countryCode: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (countryCode === '+91') {
      return cleanPhone.length === 10 && /^[6-9]\d{9}$/.test(cleanPhone);
    }
    
    // Basic validation for other countries (at least 7 digits)
    return cleanPhone.length >= 7 && cleanPhone.length <= 15;
  };

  const handleSendOTP = async () => {
    if (!phoneNumber.trim()) {
      toast.error('Please enter your phone number');
      return;
    }

    if (!validatePhoneNumber(phoneNumber, countryCode)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setLoading(true);
    try {
      const formattedPhone = formatPhoneNumber(phoneNumber, countryCode);
      console.log('Sending OTP to:', formattedPhone);
      
      const { error } = await signInWithPhone(formattedPhone);
      
      if (error) {
        console.error('OTP send error:', error);
        if (error.message?.includes('SMS') || error.message?.includes('phone')) {
          toast.error('SMS service is not configured. Please configure SMS provider in Supabase dashboard.');
        } else {
          toast.error(error.message || 'Failed to send OTP');
        }
        return;
      }

      toast.success('OTP sent successfully!');
      setStep('otp');
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast.error('Please enter the complete OTP');
      return;
    }

    setLoading(true);
    try {
      const formattedPhone = formatPhoneNumber(phoneNumber, countryCode);
      const { error } = await verifyOTP(formattedPhone, otp);
      
      if (error) {
        console.error('OTP verify error:', error);
        toast.error(error.message || 'Invalid OTP');
        return;
      }

      toast.success('Login successful!');
      handleClose();
    } catch (error) {
      console.error('Verify error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep('phone');
    setOTP('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            {step === 'phone' ? 'Login with Phone' : 'Enter OTP'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {step === 'phone' ? (
            <>
              <div className="text-center text-sm text-muted-foreground">
                Enter your phone number to receive an OTP
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Country</label>
                  <Select value={countryCode} onValueChange={setCountryCode}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.flag} {country.code} {country.country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="flex space-x-2">
                    <div className="flex items-center px-3 py-2 bg-muted rounded-md text-sm font-medium min-w-[80px]">
                      {countryCode}
                    </div>
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={countryCode === '+91' ? '9876543210' : 'Enter phone number'}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="pl-10"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  {countryCode === '+91' && (
                    <p className="text-xs text-muted-foreground">
                      Enter 10-digit mobile number without country code
                    </p>
                  )}
                </div>

                <Button 
                  onClick={handleSendOTP}
                  disabled={loading || !phoneNumber.trim()}
                  className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center text-sm text-muted-foreground">
                Enter the 6-digit OTP sent to {countryCode} {phoneNumber}
              </div>

              <div className="space-y-4">
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={setOTP}
                    disabled={loading}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={handleVerifyOTP}
                    disabled={loading || otp.length !== 6}
                    className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
                  >
                    {loading ? 'Verifying...' : 'Verify OTP'}
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={loading}
                    className="w-full"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Phone Number
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
