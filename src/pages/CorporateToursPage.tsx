import React from 'react';
import { Building2, Users, Target, Award, TrendingUp, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { useToast } from '@/hooks/use-toast';

const CorporateToursPage = () => {
  const { toast } = useToast();

  const handleEnquiry = () => {
    const message = "Hi, I'm interested in your Corporate Tours & Packages. Can you provide more details?";
    const whatsappUrl = `https://wa.me/9266238287?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll get back to you shortly with more details!",
    });
  };

  const miceServices = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Meetings",
      description: "Professional meeting venues with state-of-the-art facilities"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Incentives",
      description: "Reward your top performers with memorable travel experiences"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Conferences",
      description: "Large-scale conference management with seamless execution"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Events",
      description: "Corporate events that leave lasting impressions"
    }
  ];

  const offerings = [
    {
      title: "Team Building Adventures",
      description: "Strengthen bonds through adventure activities and challenges",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Executive Retreats",
      description: "Premium destinations for strategic planning and networking",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "International Tours",
      description: "Expand horizons with carefully curated international experiences",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven Track Record",
      description: "Successfully organized 500+ corporate events with 98% satisfaction rate"
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Customized Solutions",
      description: "Tailored packages that align with your company objectives and budget"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "End-to-End Management",
      description: "Complete event management from planning to execution"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Corporate Tours & Packages - TripVidya"
        description="Transform your corporate meetings and events into memorable experiences. MICE services, team building, executive retreats, and more."
        keywords="corporate tours, MICE, team building, executive retreats, corporate events"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  by TripVidya 🌍
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Corporate Tours & Packages
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Say goodbye to dull meetings and hello to unforgettable moments where business meets adventure. 
                  Our corporate packages are designed to build stronger teams, spark creativity, and boost morale.
                </p>
                
                <p className="text-gray-600">
                  Ready to shake things up and restart your corporate vibe? Let's rewrite your company's story 
                  with TripVidya, where business goes beyond the office walls.
                </p>
                
                <div className="flex items-center gap-6">
                  <Button 
                    onClick={handleEnquiry}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
                  >
                    Enquiry Now
                  </Button>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-900">50k+</span>
                      <span>Happy Travelers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-900">4.8+</span>
                      <span>Google Rating</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                    alt="Corporate team building"
                    className="rounded-lg shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
                    alt="Business meeting"
                    className="rounded-lg shadow-lg mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AFK Program Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AFK Program</h2>
            <p className="text-xl text-gray-600 mb-8">
              Adventure, Fun, Knowledge: The Ultimate Corporate Experience Awaits You
            </p>
          </div>
        </section>

        {/* MICE Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">MICE Experiences</h2>
              <p className="text-xl text-gray-600">
                Transform meetings, incentives, conferences, and exhibitions into extraordinary experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {miceServices.map((service, index) => (
                <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offerings</h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions for all your corporate travel needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {offerings.map((offering, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{offering.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TripVidya</h2>
              <p className="text-xl text-gray-600">
                Your trusted partner for memorable corporate experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto max-w-4xl text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Corporate Events?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Drop us a line and take your team on an adventure that will leave them recharged, 
              inspired, and ready to elevate their game.
            </p>
            <Button 
              onClick={handleEnquiry}
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              Get Started Today
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CorporateToursPage;