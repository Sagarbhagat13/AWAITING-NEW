import React from 'react';
import { CheckCircle, Clock, Shield, Award } from 'lucide-react';

const FeaturesBanner = () => {
  const features = [
    {
      icon: CheckCircle,
      text: "FREE Travel Consultation"
    },
    {
      icon: Clock,
      text: "24/7 Customer Support"
    },
    {
      icon: Shield,
      text: "100% Safe & Secure"
    },
    {
      icon: Award,
      text: "Best Price Guarantee"
    }
  ];

  return (
    <section className="bg-white border-b-2 border-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-700">
              <feature.icon className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;