
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Search, Plus, Minus } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      category: "Booking & Payments",
      questions: [
        {
          question: "How do I book a trip?",
          answer: "You can book a trip by browsing our destinations, selecting your preferred package, choosing your travel dates, and completing the booking form with payment. Our team will confirm your booking within 24 hours."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, net banking, UPI, bank transfers, and EMI options through select banks. All payments are processed securely through our encrypted payment gateway."
        },
        {
          question: "Can I pay in installments?",
          answer: "Yes, we offer EMI options for bookings above ₹15,000. You can choose from 3, 6, 9, or 12-month EMI plans through our partner banks."
        },
        {
          question: "Is my payment secure?",
          answer: "Absolutely. We use industry-standard SSL encryption and work with certified payment gateways to ensure your financial information is completely secure."
        }
      ]
    },
    {
      category: "Trip Planning",
      questions: [
        {
          question: "Can I customize my trip itinerary?",
          answer: "Yes! We offer fully customizable trips. You can modify destinations, activities, accommodation types, and duration based on your preferences and budget."
        },
        {
          question: "What's included in the trip package?",
          answer: "Our packages typically include accommodation, transportation, meals (as specified), guided tours, and entrance fees to attractions. Specific inclusions vary by package and are clearly listed on each trip page."
        },
        {
          question: "Do you provide travel insurance?",
          answer: "We strongly recommend travel insurance and can help you purchase comprehensive coverage. Some of our premium packages include basic travel insurance."
        },
        {
          question: "What documents do I need for travel?",
          answer: "For domestic trips, you need a valid government-issued photo ID. For international trips, you need a valid passport and visa (if required). We provide detailed document checklists after booking."
        }
      ]
    },
    {
      category: "Cancellation & Changes",
      questions: [
        {
          question: "What is your cancellation policy?",
          answer: "Cancellation charges vary based on the trip and cancellation timeline. Generally: 30+ days before travel (25% charges), 15-30 days (50% charges), 7-15 days (75% charges), less than 7 days (100% charges)."
        },
        {
          question: "Can I change my travel dates?",
          answer: "Yes, you can change travel dates subject to availability and change charges. Date changes are easier for customized trips than fixed departure group tours."
        },
        {
          question: "What if I need to cancel due to medical emergency?",
          answer: "In case of medical emergencies, we offer more flexible cancellation terms. You'll need to provide medical certificates, and we'll work with you to minimize charges."
        },
        {
          question: "Can I get a full refund?",
          answer: "Full refunds are possible only if we cancel the trip due to unforeseen circumstances. Customer-initiated cancellations are subject to our standard cancellation policy."
        }
      ]
    },
    {
      category: "During Travel",
      questions: [
        {
          question: "What if there's an emergency during the trip?",
          answer: "All our trips include 24/7 emergency support. You'll have emergency contact numbers and our local representatives will assist you immediately."
        },
        {
          question: "Are meals included in the package?",
          answer: "Meal inclusions vary by package. Most packages include breakfast, and some include all meals. Specific meal plans are clearly mentioned in the itinerary."
        },
        {
          question: "What type of accommodation do you provide?",
          answer: "We offer various accommodation categories from budget to luxury. You can choose based on your preference and budget. All our accommodations are pre-verified for quality and safety."
        },
        {
          question: "Do you provide tour guides?",
          answer: "Yes, most of our group tours include experienced local guides. For customized trips, you can choose to add professional guides based on your requirements."
        }
      ]
    },
    {
      category: "Special Requirements",
      questions: [
        {
          question: "Do you cater to special dietary requirements?",
          answer: "Yes, we can arrange for vegetarian, vegan, gluten-free, and other special dietary requirements. Please inform us during booking so we can make appropriate arrangements."
        },
        {
          question: "Are your trips suitable for elderly travelers?",
          answer: "We offer trips suitable for all age groups. For elderly travelers, we can customize itineraries with comfortable accommodations, shorter travel distances, and accessible activities."
        },
        {
          question: "Do you organize trips for large groups?",
          answer: "Yes, we specialize in group travel for corporate teams, family reunions, and friend groups. We offer special group discounts and can customize itineraries for large groups."
        },
        {
          question: "Are your trips accessible for people with disabilities?",
          answer: "We strive to make travel accessible for everyone. Please inform us about specific accessibility needs during booking, and we'll arrange suitable accommodations and transportation."
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions - FAQ"
        description="Find answers to commonly asked questions about Awaiting Adventures travel packages, booking process, cancellation policy, and more."
        canonicalUrl="/faq"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="flex items-center hover:text-tripvidya-primary transition-colors">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">FAQ</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="bg-tripvidya-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find quick answers to the most common questions about our travel services.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <Collapsible key={questionIndex} open={isOpen} onOpenChange={() => toggleItem(globalIndex)}>
                        <div className="bg-white rounded-lg shadow-sm border">
                          <CollapsibleTrigger className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                            {isOpen ? (
                              <Minus className="h-5 w-5 text-tripvidya-primary flex-shrink-0" />
                            ) : (
                              <Plus className="h-5 w-5 text-tripvidya-primary flex-shrink-0" />
                            )}
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="px-6 pb-6">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </CollapsibleContent>
                        </div>
                      </Collapsible>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredFaqs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
                <p className="text-gray-400 mt-2">Try different keywords or browse all categories.</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly team is here to help you with any questions about your travel plans.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Email:</strong> info@awaitingadventures.in
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 9999999999
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong> Monday - Friday, 9am - 6pm
              </p>
            </div>
            <div className="mt-8">
              <Link 
                to="/contact" 
                className="inline-block bg-tripvidya-primary text-white px-8 py-3 rounded-lg hover:bg-tripvidya-primary/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
