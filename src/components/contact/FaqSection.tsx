
import React from 'react';

const FaqSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Find quick answers to common questions about our services.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">How do I book a trip?</h3>
            <p className="text-gray-600">
              You can book a trip directly through our website by selecting your desired destination and dates, or 
              contact our team for assistance with your booking.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">
              We accept credit/debit cards, net banking, UPI, and bank transfers. For some trips, 
              we also offer EMI options through select banks.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">What is your cancellation policy?</h3>
            <p className="text-gray-600">
              Our cancellation policy varies depending on the trip and how close to the departure date you cancel. 
              Please refer to specific trip details for more information.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">How can I customize a trip?</h3>
            <p className="text-gray-600">
              For customized travel plans, please fill out our customization form or contact our team directly 
              with your requirements and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
