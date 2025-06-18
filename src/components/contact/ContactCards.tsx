
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactCards = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 contact-card flex flex-col items-center text-center">
            <div className="bg-tripvidya-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-tripvidya-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-500 mb-4">Our friendly team is here to help</p>
            <a href="mailto:info@tripvidya.in" className="text-tripvidya-primary font-medium group flex items-center">
              info@tripvidya.in
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 contact-card flex flex-col items-center text-center">
            <div className="bg-tripvidya-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-tripvidya-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-500 mb-4">Mon-Fri from 9am to 6pm</p>
            <a href="tel:+919999999999" className="text-tripvidya-primary font-medium group flex items-center">
              +91 9999 999 999
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          {/* Location */}
          <div className="bg-white rounded-2xl p-8 contact-card flex flex-col items-center text-center">
            <div className="bg-tripvidya-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-tripvidya-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-500 mb-4">Come say hello at our office</p>
            <span className="text-tripvidya-primary font-medium group flex items-center">
              Delhi, India
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
