
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Awaiting Adventures - Your Travel Partner</title>
        <meta 
          name="description" 
          content="Learn more about Awaiting Adventures, our mission, values, and the team behind your favorite travel experiences."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/lovable-uploads/2f2cf992-ad1d-47ad-9f83-81862be69fc9.png" 
              alt="Awaiting Adventures Logo" 
              className="h-20 w-20 mb-4 logo-image"
              style={{ filter: "invert(55%) sepia(95%) saturate(1752%) hue-rotate(322deg) brightness(99%) contrast(96%)" }}
            />
            <h1 className="text-3xl md:text-4xl font-bold text-center">About Awaiting Adventures</h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Team working together" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-tripvidya-primary font-semibold">Our Story</div>
                  <p className="mt-2 text-gray-600">
                    Founded by passionate travelers in 2018, Awaiting Adventures began with a simple mission: to create authentic travel experiences that connect people with destinations in meaningful ways. What started as a small venture by friends who loved exploring India has now grown into a trusted travel partner for thousands of adventurers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Awaiting Adventures, we believe travel is more than just visiting places – it's about creating stories that last a lifetime. Our mission is to design journeys that surprise, delight, and transform, while maintaining respect for local communities and environments.
              </p>
              <p className="text-gray-600">
                We're committed to sustainable tourism practices that ensure the places we love remain pristine for generations to come. By working closely with local guides and communities, we create authentic experiences that benefit everyone involved.
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-tripvidya-light p-5 rounded-lg">
                  <h3 className="font-semibold text-tripvidya-primary mb-2">Curated Experiences</h3>
                  <p className="text-sm text-gray-600">Every itinerary is thoughtfully designed by experts who have personally explored each destination.</p>
                </div>
                <div className="bg-tripvidya-light p-5 rounded-lg">
                  <h3 className="font-semibold text-tripvidya-primary mb-2">Local Expertise</h3>
                  <p className="text-sm text-gray-600">Our guides are locals who share authentic insights and hidden gems you won't find in guidebooks.</p>
                </div>
                <div className="bg-tripvidya-light p-5 rounded-lg">
                  <h3 className="font-semibold text-tripvidya-primary mb-2">Responsible Travel</h3>
                  <p className="text-sm text-gray-600">We minimize environmental impact and ensure our travels benefit local communities.</p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mb-3 relative mx-auto w-32 h-32 overflow-hidden rounded-full">
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                         alt="Team member" 
                         className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold">Vikram Sharma</h3>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <div className="mb-3 relative mx-auto w-32 h-32 overflow-hidden rounded-full">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                         alt="Team member" 
                         className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold">Priya Patel</h3>
                  <p className="text-sm text-gray-500">Head of Operations</p>
                </div>
                <div className="text-center">
                  <div className="mb-3 relative mx-auto w-32 h-32 overflow-hidden rounded-full">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                         alt="Team member" 
                         className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold">Arjun Mehta</h3>
                  <p className="text-sm text-gray-500">Lead Travel Curator</p>
                </div>
              </div>
            </div>
            
            <div className="bg-tripvidya-light p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Join Us On The Journey</h2>
              <p className="text-gray-600 mb-4">
                Whether you're a solo traveler seeking new adventures, a couple planning a romantic getaway, or a family looking for the perfect vacation, Awaiting Adventures is here to transform your travel dreams into reality.
              </p>
              <p className="text-gray-600">
                Contact us today to start planning your next unforgettable journey!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;
