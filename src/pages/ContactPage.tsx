
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCards from '@/components/contact/ContactCards';
import ContactSection from '@/components/contact/ContactSection';
import FaqSection from '@/components/contact/FaqSection';
import MinimalHero from '@/components/MinimalHero';
import SEOHead from '@/components/SEOHead';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <SEOHead 
        title="Contact Us - Awaiting Adventures"
        description="Get in touch with Awaiting Adventures for travel inquiries, custom trip planning, and expert travel advice. We're here to help plan your perfect adventure."
        keywords="contact travel agency, travel inquiries, custom trip planning, travel consultation, awaiting adventures contact"
        url={`${window.location.origin}/contact`}
        type="website"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <MinimalHero title="Get in Touch" backgroundImage='https://thumbs.dreamstime.com/b/text-sign-showing-get-touch-conceptual-photo-stay-contact-constant-communication-interaction-bonding-man-holding-megaphone-123945219.jpg' />
        
        {/* Contact Cards */}
        <ContactCards />
        
        {/* Contact Form & Map */}
        <ContactSection />
        
        {/* FAQ Section */}
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
