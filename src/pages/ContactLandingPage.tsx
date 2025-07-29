import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import LandingHero from '@/components/landing/LandingHero';
import LandingContactForm from '@/components/landing/LandingContactForm';
import TrustSection from '@/components/landing/TrustSection';
import FeaturesBanner from '@/components/landing/FeaturesBanner';

const ContactLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <SEOHead 
        title="Plan Your Dream Adventure - Expert Travel Consultation"
        description="Get personalized travel planning from our experts. Custom itineraries, best prices, and 24/7 support. Book your perfect trip today!"
        keywords="travel planning, custom travel, adventure trips, travel expert, trip planning service"
        url={`${window.location.origin}/contact-landing`}
        type="website"
      />
      
      <Navbar />
      
       <main className="flex-grow relative">
        {/* Hero Section */}
        <LandingHero />
        
       {/* Overlapping Contact Form Section */}
         <section className="relative -mt-12 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <LandingContactForm />
                
                {/* Trust Section */}
                <TrustSection />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactLandingPage;