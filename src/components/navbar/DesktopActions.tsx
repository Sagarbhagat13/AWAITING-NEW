
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import EnquiryFormDialog from '@/components/enquiry/EnquiryFormDialog';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from '@/components/auth/UserMenu';
import AuthButtons from '@/components/auth/AuthButtons';

interface DesktopActionsProps {
  isScrolled: boolean;
  toggleSearch: () => void;
}

const DesktopActions = ({ isScrolled, toggleSearch }: DesktopActionsProps) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const { user, loading } = useAuth();

  const openEnquiryForm = () => {
    setIsEnquiryOpen(true);
  };

  const closeEnquiryForm = () => {
    setIsEnquiryOpen(false);
  };

  if (loading) {
    return (
      <div className="hidden lg:flex items-center space-x-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "p-0 hover:bg-transparent",
          isScrolled ? "text-tripvidya-dark" : "text-white"
        )}
        onClick={toggleSearch}
      >
        <Search className="h-5 w-5" />
      </Button>
      
      {user ? (
        <UserMenu />
      ) : (
        <AuthButtons />
      )}
      
      <Button 
        variant="default"
        size="sm" 
        className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
        onClick={openEnquiryForm}
      >
        <MapPin className="h-4 w-4 mr-2" />
        Plan Trip
      </Button>

      <EnquiryFormDialog isOpen={isEnquiryOpen} onClose={closeEnquiryForm} />
    </div>
  );
};

export default DesktopActions;
