import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Phone, ArrowLeft } from 'lucide-react';

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDialog = ({ isOpen, onClose }: LoginDialogProps) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const { signInWithPhone, verifyOTP } = useAuth();

  const handleClose = () => {
    setStep('phone');
    setPhoneNumber('');
    setOTP('');
    setLoading(false);
    onClose();
  };

  const formatPhoneNumber = (phone: string) => {
    // Add +91 if not present and is 10 digits
    if (phone.length === 10 && !phone.startsWith('+')) {
      return `+91${phone}`;
    }
    if (!phone.startsWith('+')) {
      return `+${phone}`;
    }
    return phone;
  };

  const handleSendOTP = async () => {
    if (!phoneNumber.trim()) {
      toast.error('Please enter your phone number');
      return;
    }

    setLoading(true);
    try {
      const formattedPhone = formatPhoneNumber(phoneNumber);
      const { error } = await signInWithPhone(formattedPhone);
      
      if (error) {
        toast.error(error.message || 'Failed to send OTP');
        return;
      }

      toast.success('OTP sent successfully!');
      setStep('otp');
    } catch (error) {
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
      const formattedPhone = formatPhoneNumber(phoneNumber);
      const { error } = await verifyOTP(formattedPhone, otp);
      
      if (error) {
        toast.error(error.message || 'Invalid OTP');
        return;
      }

      toast.success('Login successful!');
      handleClose();
    } catch (error) {
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
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="pl-10"
                      disabled={loading}
                    />
                  </div>
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
                Enter the 6-digit OTP sent to {phoneNumber}
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

export default LoginDialog;
