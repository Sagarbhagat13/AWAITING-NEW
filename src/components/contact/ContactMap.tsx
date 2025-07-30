
import React from 'react';
import { MessageSquare, Clock } from 'lucide-react';

const ContactMap = () => {
  return (
    <div className="space-y-8">
      <div className="h-[300px] rounded-2xl overflow-hidden contact-map">
        <iframe 
          src="https://maps.app.goo.gl/b1NFHZRgGYeftoDs5" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm space-y-6">
        <h3 className="text-xl font-semibold">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <MessageSquare className="h-5 w-5 text-tripvidya-primary mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Live Chat</h4>
              <p className="text-sm text-gray-600">Our friendly team is here to help.</p>
              <a href="#" className="text-sm text-tripvidya-primary mt-1 inline-block">Start a chat</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-tripvidya-primary mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium">Office Hours</h4>
              <p className="text-sm text-gray-600">Monday - Friday: 9am - 6pm</p>
              <p className="text-sm text-gray-600">Saturday: 10am - 4pm</p>
              <p className="text-sm text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
