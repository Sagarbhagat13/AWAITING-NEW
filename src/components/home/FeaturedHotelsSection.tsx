
import TripCarousel from "@/components/TripCarousel";
import HotelCard from "@/components/hotel/HotelCard";
import { featuredHotels } from "@/data/featuredHotels";

const FeaturedHotelsSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto">
        <TripCarousel 
          title="Featured Hotels" 
          description="Handpicked accommodations for your perfect stay"
          itemsPerView={6}
        >
          {featuredHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              location={hotel.location}
              image={hotel.image}
              className="h-32 sm:h-36"
            />
          ))}
        </TripCarousel>
      </div>
    </section>
  );
};

export default FeaturedHotelsSection;
