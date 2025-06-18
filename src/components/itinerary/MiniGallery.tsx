
import { useEffect, useState } from 'react';
import { galleryPhotos } from '@/components/home/PhotoGallery';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

interface MiniGalleryProps {
  count?: number;
}

const MiniGallery = ({ count = 3 }: MiniGalleryProps) => {
  const [randomPhotos, setRandomPhotos] = useState<typeof galleryPhotos>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Get random photos from the gallery
    const getRandomPhotos = () => {
      const photos = [...galleryPhotos];
      const result = [];
      
      for (let i = 0; i < count && photos.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * photos.length);
        result.push(photos.splice(randomIndex, 1)[0]);
      }
      
      return result;
    };
    
    setRandomPhotos(getRandomPhotos());
  }, [count]);
  
  if (randomPhotos.length === 0) return null;
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Travel Inspiration</h3>
        
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            dragFree: true,
            loop: true,
          }}
        >
          <CarouselContent className="px-4">
            {randomPhotos.map(photo => (
              <CarouselItem 
                key={photo.id} 
                className={isMobile ? 'basis-[77%]' : 'basis-1/3'}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-sm font-medium text-white">{photo.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 border-none bg-black/30 text-white hover:bg-black/50" />
          <CarouselNext className="right-2 border-none bg-black/30 text-white hover:bg-black/50" />
        </Carousel>
      </div>
    </div>
  );
};

export default MiniGallery;
