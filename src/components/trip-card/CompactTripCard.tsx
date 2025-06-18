
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { CardBadge } from './CardBadge';
import { FavoriteButton } from './FavoriteButton';
import { TripCardContent } from './TripCardContent';
import { TripCardProps } from './types';

export const CompactTripCard = ({
  id,
  title,
  location,
  price,
  discount = 0,
  duration,
  image,
  rating,
  reviews,
  className,
  stateHighlight,
  honeymoonSpecial,
  international,
  familySpecial,
  bikingPackage,
  suvPackage,
  longWeekend,
  offbeat,
}: TripCardProps) => {
  const discountedPrice = price - (price * discount) / 100;
  
  // Determine if this is a Ladakh biking or SUV package based on the className
  const isLadakhBiking = className?.includes('biking-package');
  const isLadakhSUV = className?.includes('suv-package');
  
  // Set the badge props based on the className
  const badgeBikingPackage = bikingPackage || isLadakhBiking;
  const badgeSUVPackage = suvPackage || isLadakhSUV;
  
  return (
    <Link to={`/trip/${id}`} className={cn(
      "block overflow-hidden rounded-lg bg-white trip-card-shadow",
      className
    )}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <FavoriteButton />
        <CardBadge 
          discount={discount}
          stateHighlight={stateHighlight}
          honeymoonSpecial={honeymoonSpecial}
          international={international}
          familySpecial={familySpecial}
          bikingPackage={badgeBikingPackage}
          suvPackage={badgeSUVPackage}
          longWeekend={longWeekend}
          offbeat={offbeat}
          className={className}
        />
      </div>
      
      <TripCardContent
        title={title}
        location={location}
        duration={duration}
        price={price}
        discountedPrice={discountedPrice}
        discount={discount}
        rating={rating}
        reviews={reviews}
        variant="compact"
        stateHighlight={stateHighlight}
        honeymoonSpecial={honeymoonSpecial}
        international={international}
        familySpecial={familySpecial}
        offbeat={offbeat}
      />
    </Link>
  );
};
