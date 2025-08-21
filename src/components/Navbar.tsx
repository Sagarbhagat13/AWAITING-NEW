
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

// Import components
import Logo from './navbar/Logo';
import NavLinks from './navbar/NavLinks';
import DesktopNavLinks from './navbar/DesktopNavLinks';
import DesktopActions from './navbar/DesktopActions';
import MobileActions from './navbar/MobileActions';
import MobileMenu from './navbar/MobileMenu';
import SearchOverlay from './navbar/SearchOverlay';
import { navLinks, primaryNavLinks, moreMenuLinks } from './navbar/NavbarData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const isMobile = useIsMobile();
  const overlayRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Check banner visibility from localStorage
  useEffect(() => {
    const checkBannerVisibility = () => {
      const isDismissed = localStorage.getItem('winter-promo-dismissed-2024') === 'true';
      setIsBannerVisible(!isDismissed);
    };
    
    // Check initially
    checkBannerVisibility();
    
    // Listen for localStorage changes
    window.addEventListener('storage', checkBannerVisibility);
    
    // Poll for changes (in case localStorage is updated in same tab)
    const interval = setInterval(checkBannerVisibility, 500);
    
    return () => {
      window.removeEventListener('storage', checkBannerVisibility);
      clearInterval(interval);
    };
  }, []);
  
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
     "fixed left-0 right-0 z-40 transition-all duration-300 bg-white shadow-md py-2",
      isBannerVisible ? "top-8" : "top-0"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" ref={navRef}>
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <DesktopNavLinks 
             isScrolled={true}
            primaryLinks={primaryNavLinks}
            moreMenuLinks={moreMenuLinks}
          />
          
          {/* Desktop Action Buttons */}
         <DesktopActions isScrolled={true} toggleSearch={toggleSearch} />
          {/* Mobile Action Buttons */}
          <MobileActions 
            // isScrolled={isScrolled || isWhiteBackgroundPage} 
             isScrolled={true}
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
