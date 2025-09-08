import { Helmet } from "react-helmet";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from '@/components/home/CarouselCard';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Gift, Star, Calendar } from "lucide-react";
import { useSEOOptimization } from '@/hooks/useSEOOptimization';

import { xmasNewYearTrips } from '@/data/xmasNewYearTrips';

const XmasNewYearPage = () => {
  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });

  const whyChooseReasons = [
    {
      icon: <Snowflake className="h-8 w-8 text-primary" />,
      title: "Festive Atmosphere",
      description: "Experience the magic of Christmas and New Year with specially curated celebrations and activities."
    },
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Special Packages",
      description: "Enjoy exclusive holiday packages with complimentary gifts, special meals, and unique experiences."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Premium Accommodations",
      description: "Stay in handpicked hotels and resorts that offer exceptional festive decorations and hospitality."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Perfect Timing",
      description: "Make the most of your holiday season with perfectly timed itineraries for Christmas and New Year."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <EnhancedSEOHead 
        title="Christmas & New Year Holiday Packages | TripVidya - Festive Travel Deals"
        description="Celebrate Christmas and New Year with specially curated holiday packages. Experience festive magic with family and friends in India's most beautiful destinations with exclusive deals and celebrations."
        keywords="christmas packages, new year trips, holiday packages, festive tours, christmas vacation, new year celebration, holiday travel deals, winter holiday packages"
        url="https://tripvidya.com/xmas-new-year"
        type="website"
        image="https://tripvidya.com/og-image.png"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-20">
          <Breadcrumb />
        </div>
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-green-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Christmas & New Year Specials
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Celebrate the festive season with magical holiday experiences. From snowy mountain celebrations 
              to tropical beach parties, create unforgettable memories this Christmas and New Year with our 
              specially curated holiday packages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Festive Celebrations</h3>
                <p className="text-gray-600">Special Christmas and New Year events</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Packages</h3>
                <p className="text-gray-600">Holiday deals with complimentary perks</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Experience</h3>
                <p className="text-gray-600">Luxury accommodations and fine dining</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trips Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Festive Holiday Packages
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Create magical memories this holiday season with our specially designed Christmas and New Year packages. 
              From snowy mountain celebrations to beach parties, find your perfect festive getaway.
            </p>
            
            <TripCarousel 
              title=""
              description=""
              itemsPerView={4}
            >
            {xmasNewYearTrips.map((trip, index) => (
                <CarouselCard 
                  key={trip.id} 
                  id={trip.id}
                  title={trip.title}
                  location={trip.location}
                  duration={trip.duration}
                  price={trip.price}
                  discount={trip.discount}
                  image={trip.image}
                  className="holiday-package"
                   priority={index < 4}
                  index={index}
                />
              ))}
            </TripCarousel>
          </div>
        </section>

        {/* Why Choose Our Holiday Packages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Our Holiday Packages?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Festive Atmosphere</h3>
                <p className="text-gray-600">Experience the magic of Christmas and New Year with specially curated celebrations</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Special Packages</h3>
                <p className="text-gray-600">Enjoy exclusive holiday packages with complimentary gifts and unique experiences</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Accommodations</h3>
                <p className="text-gray-600">Stay in handpicked hotels with exceptional festive decorations and hospitality</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Perfect Timing</h3>
                <p className="text-gray-600">Make the most of your holiday season with perfectly timed itineraries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Holiday Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Plan Your Perfect Holiday
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Snowflake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Winter Wonderlands</h3>
                    <p className="text-gray-600">
                      Experience magical snowy destinations perfect for Christmas celebrations with bonfires and winter activities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Gift className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Beach Celebrations</h3>
                    <p className="text-gray-600">
                      Ring in the New Year with beach parties, seafood feasts, and tropical celebrations by the ocean.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Festivities</h3>
                    <p className="text-gray-600">
                      Immerse yourself in local Christmas traditions and New Year customs across different Indian cultures.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default XmasNewYearPage;