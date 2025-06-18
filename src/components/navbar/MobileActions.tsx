
import { Menu, X, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import EnquiryFormDialog from '@/components/enquiry/EnquiryFormDialog';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from '@/components/auth/UserMenu';

interface MobileActionsProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: (e: React.MouseEvent) => void;
  toggleSearch: () => void;
  isEnquiryOpen: boolean;
  setIsEnquiryOpen: (isOpen: boolean) => void;
}

const MobileActions = ({ 
  isScrolled, 
  isMenuOpen, 
  toggleMenu, 
  toggleSearch, 
  isEnquiryOpen, 
  setIsEnquiryOpen 
}: MobileActionsProps) => {
  const { user, loading } = useAuth();

  const openEnquiryForm = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEnquiryOpen(true);
  };

  return (
    <div className="flex lg:hidden items-center gap-3">
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "rounded-full p-2 hover:bg-tripvidya-light",
          isScrolled ? "text-tripvidya-dark" : "text-white bg-white/20 backdrop-blur-md"
        )}
        onClick={openEnquiryForm}
      >
        <MapPin className="h-5 w-5" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "rounded-full p-2 hover:bg-tripvidya-light",
          isScrolled ? "text-tripvidya-dark" : "text-white bg-white/20 backdrop-blur-md"
        )}
        onClick={toggleSearch}
      >
        <Search className="h-5 w-5" />
      </Button>
      
      {user && !loading && (
        <div className={cn(
          "rounded-full overflow-hidden",
          !isScrolled && "bg-white/20 backdrop-blur-md p-1"
        )}>
          <UserMenu />
        </div>
      )}
      
      <Button 
        variant={isMenuOpen ? "default" : "ghost"}
        size="sm" 
        className={cn(
          "rounded-full p-2 hover:bg-tripvidya-light transition-all",
          isMenuOpen 
            ? "bg-tripvidya-primary text-white" 
            : isScrolled 
              ? "text-tripvidya-dark" 
              : "text-white bg-white/20 backdrop-blur-md"
        )}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      <EnquiryFormDialog isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </div>
  );
};

export default MobileActions;
