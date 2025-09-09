
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MinimalHero from '@/components/MinimalHero'
import heroImage from '@/assets/about-hero.jpg';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
   const stats = [
    { number: "100%", label: "Satisfaction Guaranteed" },
    { number: "70+", label: "Destinations Explored" },
    { number: "2500+", label: "Travellers Hosted" },
    { number: "4.9+", label: "Google Reviews" },
    { number: "10K+", label: "Instagram Community" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Awaiting Adventures - Your Travel Partner.</title>
        <meta 
          name="description" 
          content="Learn about Awaiting Adventures, our mission to create authentic travel experiences with eco-friendly tourism and responsible travel practices."
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-500">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold">About</h1>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why We Exist</h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  At Awaiting Adventures, we believe that travel isn't just about adventure; it's also about responsibility. 
                  That's why we're committed to eco-friendly tourism—minimizing waste, supporting local communities, 
                  and making sure the places we visit stay as beautiful as they are. We work hard to make travel 
                  affordable without compromising the experience. We believe in offering great value that lets you 
                  focus on having fun, not on how much you're spending.
                </p>
                
                <p>
                  We curate experiences that go beyond the ordinary. Before we take you anywhere, we go there first. 
                  We explore, test, and refine every experience to make sure you get the best. From finding offbeat 
                  locations to handpicking the best activities, we create trips that aren't just about sightseeing—they're 
                  about living the moment. Every trip has a Trip Captain—your go-to person, friend, and guide who makes 
                  sure everything runs smoothly.
                </p>
                
                <p>
                  Most importantly, our mission is to build an environment where female travelers can roam freely 
                  without worries and where everyone can join in and feel welcomed—because let's face it: travel is 
                  meant to be liberating, not stressful. You deserve to enjoy every moment without thinking twice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are?</h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Ever found yourself scrolling through Instagram at 2 AM, looking at those travel reels, thinking, 
                  "I need a vacation"? We've been there. And that's exactly why Awaiting Adventures exists!
                </p>
                
                <p>
                  We're not just another travel company trying to fill your itinerary with the usual touristy spots. 
                  For us, travelling is about that chai break at a roadside dhaba on a long road trip, not sleeping 
                  throughout the night to catch the most amazing sunrise and the strangers who became your best friends 
                  after a crazy night under the stars.
                </p>
                
                <p>
                  We get it—traveling can be overwhelming. The flight bookings, hotel searches, figuring out the best 
                  local experiences—sometimes, planning feels like a full-time job. <em>That's where we step in. 
                  Think of us as your travel besties who've already done the research, made the mistakes, and found 
                  the coolest experiences, so you don't have to. And these experiences, trust us, will change your life.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Adventurers Behind Awaiting Adventures</h2>
              <p className="text-gray-600 mb-12 text-lg">
                Get to know the passionate team behind Awaiting Adventures — a group of dedicated outdoor enthusiasts 
                who believe in the power of travel to transform lives. From our founders to our Trip Captains, 
                we're all about creating unforgettable experiences that inspire and connect people.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="mb-6 relative mx-auto w-48 h-48 overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                      alt="Vikram Sharma - CEO & Founder" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Vikram Sharma</h3>
                  <p className="text-gray-600 font-medium">CEO, Founder</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-6 relative mx-auto w-48 h-48 overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                      alt="Priya Patel - CTO & Founder" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Priya Patel</h3>
                  <p className="text-gray-600 font-medium">CTO, Founder</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-6 relative mx-auto w-48 h-48 overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                      alt="Arjun Mehta - Operations Head" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Arjun Mehta</h3>
                  <p className="text-gray-600 font-medium">Operations Head</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-6 relative mx-auto w-48 h-48 overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                      alt="Sneha Kumar - Creative Director" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sneha Kumar</h3>
                  <p className="text-gray-600 font-medium">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;
