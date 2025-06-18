
import DefaultTripCard from './trip-card/DefaultTripCard';
import HorizontalTripCard from './trip-card/HorizontalTripCard';
import { CompactTripCard } from './trip-card/CompactTripCard';
import { TripCardProps } from './trip-card/types';

const TripCard = (props: TripCardProps) => {
  const { variant = 'default', ...rest } = props;
  
  // Create a trip object from the props that we can pass to component variants
  const trip = {
    id: props.id,
    title: props.title,
    location: props.location,
    price: props.price,
    discount: props.discount,
    duration: props.duration,
    image: props.image,
    rating: props.rating,
    reviews: props.reviews
  };
  
  if (variant === 'horizontal') {
    return <HorizontalTripCard trip={trip} {...rest} />;
  }
  
  if (variant === 'compact') {
    return <CompactTripCard {...props} />;
  }
  
  return <DefaultTripCard trip={trip} {...rest} />;
};

export default TripCard;
