
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, MapPin, Clock, Users, Heart, Award, Briefcase } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MinimalHero from '@/components/MinimalHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CareerPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Travel Consultant",
      department: "Sales",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "1-4 years",
      description: "Help customers plan their dream vacations and provide expert travel advice."
    },
    {
      id: 2,
      title: "Tour Manager",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "1-5 years",
      description: "Lead and manage group tours, ensuring exceptional customer experiences."
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "1-3 years",
      description: "Drive online marketing campaigns and grow our digital presence."
    },
    {
      id: 4,
      title: "Customer Support Executive",
      department: "Support",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "1-2 years",
      description: "Provide excellent customer service and resolve travel-related queries."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family"
    },
    {
      icon: MapPin,
      title: "Travel Benefits",
      description: "Discounted travel packages and familiarization trips"
    },
    {
      icon: Award,
      title: "Performance Bonuses",
      description: "Quarterly and annual performance-based incentives"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Regular team outings and company retreats"
    }
  ];

  return (
    <>
      <SEOHead
        title="Careers - Join Our Team"
        description="Join Awaiting Adventures team and build your career in the travel industry. Explore exciting job opportunities and grow with us."
        canonicalUrl="/careers"
      />
      
      {/* {/* <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        {/* <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="flex items-center hover:text-tripvidya-primary transition-colors">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">Careers</span>
            </nav>
          </div>
        </div> */}

        {/* Header */}
        {/* <div className="bg-tripvidya-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build your career in the travel industry and help people create unforgettable memories.
            </p>
          </div>
        </div>   */}
        <Navbar />
      
      <main className="flex-grow">
        <MinimalHero title="Join Our Team" />
        
        <div className="min-h-screen bg-gray-50">

        {/* Why Work With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join a passionate team dedicated to creating exceptional travel experiences and making dreams come true.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-tripvidya-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-tripvidya-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore exciting career opportunities and find your perfect role with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-tripvidya-primary font-medium">
                          {job.department}
                        </CardDescription>
                      </div>
                      <Briefcase className="h-6 w-6 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.type} • {job.experience}
                      </div>
                    </div>

                    <Button className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for More Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Role?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Email:</strong> info@awaitingadventures.in@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 9137798539
              </p>
            </div>
          </div>
        </section>
      </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CareerPage;
