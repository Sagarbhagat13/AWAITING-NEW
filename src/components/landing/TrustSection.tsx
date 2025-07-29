import React from 'react';
import { Shield, Clock, Award, Users, Star, MessageCircle } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      name: "Rahul & Priya",
      location: "Mumbai",
      text: "Amazing experience! They planned our Ladakh trip perfectly. Every detail was covered.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Anjali Sharma",
      location: "Delhi",
      text: "Best travel agency! Responsive team and great prices. Our Kashmir trip was unforgettable!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      location: "Bangalore",
      text: "Professional service and excellent guides. The Spiti Valley expedition exceeded all expectations!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const trustBadges = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data is Protected"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "We're always here for you"
    },
    {
      icon: Award,
      title: "Expert Guides",
      description: "Certified & experienced"
    },
    {
      icon: Users,
      title: "5000+ Happy Travelers",
      description: "Join our travel family"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Trust Badges */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Why Choose Us?</h3>
        <div className="grid grid-cols-2 gap-4">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="bg-tripvidya-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <badge.icon className="h-6 w-6 text-tripvidya-primary" />
              </div>
              <h4 className="font-semibold text-sm text-gray-900">{badge.title}</h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <span className="ml-2 text-gray-600 font-medium">4.9/5 (300+ Reviews)</span>
        </div>
        
        <h3 className="text-xl font-bold text-center mb-6 text-gray-900">What Our Travelers Say</h3>
        
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-l-4 border-tripvidya-primary pl-4 py-2">
              <div className="flex items-start space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-sm text-gray-900">{testimonial.name}</span>
                    <span className="text-xs text-gray-500 ml-2">{testimonial.location}</span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Urgency & Contact Info */}
      <div className="bg-gradient-to-r from-tripvidya-primary to-purple-600 p-6 rounded-2xl text-white text-center">
        <MessageCircle className="h-12 w-12 mx-auto mb-4 text-white" />
        <h3 className="text-xl font-bold mb-2">Limited Time Offer!</h3>
        <p className="text-white/90 mb-4">Get 15% OFF on your first booking when you contact us today!</p>
        <div className="bg-white/10 p-3 rounded-lg">
          <p className="text-sm">
            <strong>Call Now:</strong> +91 98765 43210<br />
            <strong>WhatsApp:</strong> Available 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
