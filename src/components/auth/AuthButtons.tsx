
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Key } from 'lucide-react';
import AuthDialog from './AuthDialog';

interface AuthButtonsProps {
  variant?: 'default' | 'mobile';
  className?: string;
}

const AuthButtons = ({ variant = 'default', className = '' }: AuthButtonsProps) => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  if (variant === 'mobile') {
    return (
      <>
        <div className={`space-y-2 ${className}`}>
          <Button 
            className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
            onClick={() => setShowAuthDialog(true)}
          >
            <Key className="h-4 w-4 mr-2" />
            Login with Phone
          </Button>
        </div>

        <AuthDialog
          isOpen={showAuthDialog}
          onClose={() => setShowAuthDialog(false)}
        />
      </>
    );
  }

  return (
    <>
      <div className={`flex items-center space-x-2 ${className}`}>
        <Button 
          size="sm"
          className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
          onClick={() => setShowAuthDialog(true)}
        >
          <Key className="h-4 w-4" />
        </Button>
      </div>

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </>
  );
};

export default AuthButtons;
