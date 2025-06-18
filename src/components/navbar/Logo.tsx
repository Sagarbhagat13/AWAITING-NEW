
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();
  
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png" 
        alt="Awaiting Adventures Logo" 
        className="h-10 w-10 mr-2 logo-image"
        style={{ filter: "invert(55%) sepia(95%) saturate(1752%) hue-rotate(18deg) brightness(99%) contrast(96%)" }}
      />
      {!isMobile && (
        <span className="text-2xl font-bold text-tripvidya-primary">Awaiting Adventures</span>
      )}
    </Link>
  );
};

export default Logo;
