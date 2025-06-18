
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/banner/BannerSlider';
import DynamicItinerariesSection from '@/components/home/DynamicItinerariesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import DreamTripCta from '@/components/home/DreamTripCta';
import GovAffiliationsSection from '@/components/home/GovAffiliationsSection';
import FeaturedHotelsSection from '@/components/home/FeaturedHotelsSection';
import { bannerImages } from '@/components/banner/bannerImages';

const DynamicHomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative h-[80vh] w-full overflow-hidden">
          <BannerSlider images={bannerImages} />
        </div>
        <DynamicItinerariesSection />
        <FeaturedHotelsSection />
        <WhyUsSection />
        <TestimonialsSection />
        <DreamTripCta />
        <GovAffiliationsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default DynamicHomePage;
