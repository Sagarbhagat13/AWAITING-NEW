
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TripFaqsTabProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const TripFaqsTab = ({ faqs }: TripFaqsTabProps) => {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };
  
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => toggleFaq(index)}
          >
            <h3 className="font-medium text-wanderon-dark">{faq.question}</h3>
            {expandedFaqIndex === index ? 
              <ChevronUp className="h-5 w-5 text-gray-500" /> :
              <ChevronDown className="h-5 w-5 text-gray-500" />
            }
          </button>
          
          {expandedFaqIndex === index && (
            <div className="p-4 bg-white">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TripFaqsTab;
