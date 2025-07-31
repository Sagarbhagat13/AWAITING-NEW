
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MoreMenuButton from './MoreMenuButton';

interface NavLink {
  name: string;
  path: string;
  isDropdown?: boolean;
  subItems?: { name: string; path: string }[];
}

interface DesktopNavLinksProps {
  isScrolled: boolean;
  primaryLinks: NavLink[];
  moreMenuLinks: NavLink[];
}

const DesktopNavLinks = ({ isScrolled, primaryLinks, moreMenuLinks }: DesktopNavLinksProps) => {
  return (
    <nav className="hidden lg:flex items-center space-x-6">
      {/* Primary navigation links */}
      {primaryLinks.map((link) => (
        <Link 
          key={link.name}
          to={link.path}
          className={cn(
            "text-sm font-medium hover:text-tripvidya-primary transition-colors",
            isScrolled ? "text-tripvidya-dark" : "text-white"
          )}
        >
          {link.name}
        </Link>
      ))}
      
      {/* More menu button */}
      <MoreMenuButton 
        isScrolled={isScrolled} 
        menuItems={moreMenuLinks} 
      />
    </nav>
  );
};

export default DesktopNavLinks;