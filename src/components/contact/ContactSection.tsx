
import React from 'react';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const ContactSection = () => {
  return (
    <section className="py-12 bg-gray-50 contact-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ContactForm />
          
          {/* Map & Additional Info */}
          <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
