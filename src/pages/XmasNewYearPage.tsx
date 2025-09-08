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

const XmasNewYearPage = () => {
  // Initialize SEO optimization
  useSEOOptimization({
    enableAutoInternalLinking: true,
    enableHeadingOptimization: true,
    enableImageAltOptimization: true
  });

  // Sample X-mas and New Year trips data - this can be replaced with actual data
  const xmasNewYearTrips = [
    {
      id: "xmas-goa-2024",
      title: "Goa Christmas Special",
      location: "Goa",
      duration: "4 Days 3 Nights",
      price: 15999,
      discount: 19,
      image: "/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png",
      features: ["Beach Parties", "Christmas Dinner", "Live Music"],
      category: "Holiday Special"
    },
    {
      id: "new-year-manali-2024",
      title: "Manali New Year Celebration",
      location: "Manali, Himachal Pradesh",
      duration: "5 Days 4 Nights",
      price: 18999,
      discount: 16,
      image: "/lovable-uploads/a92cd83f-872e-43e1-a7bb-92c1ff4d6905.png",
      features: ["Snow Activities", "Bonfire Night", "New Year Party"],
      category: "Winter Special"
    },
    {
      id: "xmas-kerala-2024",
      title: "Kerala Christmas Backwaters",
      location: "Kerala",
      duration: "6 Days 5 Nights",
      price: 22999,
      discount: 13,
      image: "/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png",
      features: ["Houseboat Stay", "Traditional Feast", "Cultural Shows"],
      category: "Cultural Special"
    }
  ];

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
              {xmasNewYearTrips.map((trip) => (
                <CarouselCard 
                  key={trip.id} 
                  {...trip} 
                  className="holiday-package"
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