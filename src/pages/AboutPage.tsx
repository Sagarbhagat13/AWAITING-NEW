
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MinimalHero from '@/components/MinimalHero'
import heroImage from '/images/about-hero.jpg';
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
  Adventure without responsibility? Not our style. At <strong>Awaiting Adventures</strong>, 
  we make sure every trip is kind to the planet and fair to the communities we visit. 
  That means eco-friendly choices, local support, and keeping travel affordable without 
  cutting corners on the fun.
</p>

<p>
  We believe the best adventures are the ones lived, not just seen. That’s why we 
  scout, test, and fine-tune every location and activity before it makes it to your 
  itinerary. And with a Trip Captain on every journey, you’ll always have a friend 
  who’s got your back from start to finish.
</p>

<p>
  Our mission is simple: create safe, inclusive spaces where women (and everyone else!) 
  can travel confidently. Because true adventure should feel freeing, not frightening.
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
  We’ve all been there—lost in a scroll at 2 AM, watching travel content 
  and promising ourselves, “Someday.” <strong>Awaiting Adventures</strong> was 
  created to make that “someday” happen now.
</p>

<p>
  To us, travel isn’t about fancy resorts or crowded landmarks. It’s the 
  small, magical moments—chai breaks during road trips, sleepless nights 
  that lead to breathtaking sunrises, and strangers who turn into lifelong 
  friends after one crazy adventure.
</p>

<p>
  Planning can be overwhelming, but that’s exactly why we exist. We’re 
  your behind-the-scenes travel squad—finding hidden gems, skipping 
  the generic, and curating experiences that stay with you forever. 
  Because travel isn’t just a trip, it’s a chapter in your story.
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
