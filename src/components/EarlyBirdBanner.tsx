
import { Button } from "@/components/ui/button";

const EarlyBirdBanner = () => {
  return (
    <section className="py-8 px-4 md:px-8 w-full">
      <div className="container mx-auto">
        <div 
          className="rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat h-64 relative"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1590677865878-9b11096b3e9d?auto=format&fit=crop&w=2000&q=80")', 
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
            <div className="flex h-full items-end justify-center pb-8">
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyBirdBanner;
