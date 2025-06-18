
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

// Import components
import Logo from './navbar/Logo';
import NavLinks from './navbar/NavLinks';
import DesktopActions from './navbar/DesktopActions';
import MobileActions from './navbar/MobileActions';
import MobileMenu from './navbar/MobileMenu';
import SearchOverlay from './navbar/SearchOverlay';
import { navLinks } from './navbar/NavbarData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const isMobile = useIsMobile();
  const overlayRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Check if we're on pages that need white navbar background
  const isWhiteBackgroundPage = location.pathname.includes('/blog') || 
                               location.pathname.includes('/about') || 
                               location.pathname.includes('/contact') ||
                               location.pathname.includes('/trip/') || 
                               location.pathname.includes('/custom-trip/') || 
                               location.pathname.includes('/day-itinerary/');
  
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close menu if clicking anywhere outside nav elements
      if (
        isMenuOpen && 
        navRef.current && 
        !navRef.current.contains(event.target as Node) &&
        overlayRef.current && 
        !overlayRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        
        // Close mobile menu on scroll
        if (isMenuOpen && isMobile) {
          setIsMenuOpen(false);
        }
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, isMobile]);
  
  // Add effect to scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || isWhiteBackgroundPage ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" ref={navRef}>
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <NavLinks isScrolled={isScrolled || isWhiteBackgroundPage} links={navLinks} />
          
          {/* Desktop Action Buttons */}
          <DesktopActions isScrolled={isScrolled || isWhiteBackgroundPage} toggleSearch={toggleSearch} />
          
          {/* Mobile Action Buttons */}
          <MobileActions 
            isScrolled={isScrolled || isWhiteBackgroundPage} 
            isMenuOpen={isMenuOpen} 
            toggleMenu={toggleMenu} 
            toggleSearch={toggleSearch}
            isEnquiryOpen={isEnquiryOpen}
            setIsEnquiryOpen={setIsEnquiryOpen}
          />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        overlayRef={overlayRef}
        navLinks={navLinks}
        onClose={() => setIsMenuOpen(false)}
        isEnquiryOpen={isEnquiryOpen}
        setIsEnquiryOpen={setIsEnquiryOpen}
      />
      
      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={toggleSearch} />
    </header>
  );
};

export default Navbar;
