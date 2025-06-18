
import React, { useState } from 'react';
import { Info, Phone, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FloatingInfoButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-3">
      {isExpanded && (
        <div className="flex flex-col space-y-3 animate-fade-in">
          <Button
            onClick={handleWhatsApp}
            size="icon"
            className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg h-12 w-12"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            onClick={handleCall}
            size="icon"
            className="bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg h-12 w-12"
          >
            <Phone className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <Button
        onClick={toggleExpanded}
        size="icon"
        className={cn(
          "rounded-full shadow-lg h-14 w-14 text-white transition-all duration-300",
          isExpanded 
            ? "bg-red-500 hover:bg-red-600 rotate-45" 
            : "bg-tripvidya-primary hover:bg-tripvidya-primary/90"
        )}
      >
        {isExpanded ? <X className="h-6 w-6" /> : <Info className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default FloatingInfoButton;
