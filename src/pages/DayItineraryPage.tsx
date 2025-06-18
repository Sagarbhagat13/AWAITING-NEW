
import { useParams, Link } from 'react-router-dom';
import { Calendar, ChevronLeft, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mocked data for the itinerary
const ITINERARIES = {
  '1': {
    title: 'Manali Backpacking Trip',
    duration: '5 Days / 4 Nights',
    price: 13999,
    description: 'Experience the magic of the mountains with our Manali backpacking trip. Perfect for adventure seekers and nature lovers alike.',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    days: [
      {
        day: 1,
        title: 'Delhi to Manali Overnight Journey',
        description: 'Your journey begins with an overnight bus ride from Delhi to Manali. Meet your fellow travelers at the pickup point in Delhi and get ready for an exciting adventure.',
        activities: [
          { time: '06:00 PM', description: 'Meeting point at Kashmiri Gate ISBT, Delhi' },
          { time: '07:00 PM', description: 'Departure from Delhi in an AC Volvo bus' },
          { time: '09:00 PM', description: 'Dinner at a highway dhaba (not included in package)' },
          { time: 'Overnight', description: 'Overnight journey to Manali' }
        ],
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'Arrival in Manali & Local Exploration',
        description: 'Arrive in Manali by late morning. After checking into your hotel and freshening up, explore Old Manali and its vibrant markets.',
        activities: [
          { time: '11:00 AM', description: 'Arrival in Manali and check-in at the hotel' },
          { time: '01:00 PM', description: 'Lunch and briefing about the trip' },
          { time: '03:00 PM', description: 'Visit to Hadimba Temple and Old Manali' },
          { time: '06:00 PM', description: 'Evening at leisure at Mall Road' },
          { time: '08:00 PM', description: 'Dinner and bonfire at the hotel' }
        ],
        image: 'https://images.unsplash.com/photo-1574953488043-a436ccbd7a6c?q=80&w=2070&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Solang Valley Adventure Day',
        description: 'Spend the day at Solang Valley, known for its adventure activities. Try paragliding, zip-lining, or simply enjoy the beautiful views.',
        activities: [
          { time: '08:00 AM', description: 'Breakfast at the hotel' },
          { time: '09:30 AM', description: 'Departure for Solang Valley' },
          { time: '11:00 AM', description: 'Adventure activities at Solang Valley (paragliding, zip-lining at extra cost)' },
          { time: '01:30 PM', description: 'Lunch amidst the mountains' },
          { time: '03:00 PM', description: 'More adventure or leisure time' },
          { time: '05:30 PM', description: 'Return to the hotel' },
          { time: '08:00 PM', description: 'Dinner and overnight stay' }
        ],
        image: 'https://images.unsplash.com/photo-1585543805890-6c5ae5eeaef3?q=80&w=2070&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Kullu Valley and Naggar Castle',
        description: 'Visit the historic Naggar Castle and explore the beautiful Kullu Valley. Experience local culture and traditions.',
        activities: [
          { time: '08:30 AM', description: 'Breakfast at the hotel' },
          { time: '10:00 AM', description: 'Departure for Naggar Castle' },
          { time: '11:30 AM', description: 'Explore Naggar Castle and its art gallery' },
          { time: '01:30 PM', description: 'Lunch at a local restaurant' },
          { time: '03:00 PM', description: 'Visit to Jana Waterfall' },
          { time: '05:00 PM', description: 'Shopping at Kullu shawl factories' },
          { time: '07:00 PM', description: 'Return to Manali' },
          { time: '08:30 PM', description: 'Farewell dinner and cultural evening' }
        ],
        image: 'https://images.unsplash.com/photo-1591119651095-c522f551d3d6?q=80&w=2070&auto=format&fit=crop'
      },
      {
        day: 5,
        title: 'Manali to Delhi Departure',
        description: 'After breakfast, spend some leisure time in Manali. Later in the evening, board your bus back to Delhi with memories to cherish.',
        activities: [
          { time: '09:00 AM', description: 'Late breakfast at the hotel' },
          { time: '10:30 AM', description: 'Check-out from the hotel' },
          { time: '11:30 AM', description: 'Free time for shopping or relaxation' },
          { time: '01:00 PM', description: 'Lunch' },
          { time: '03:00 PM', description: 'Visit to Vashisht Hot Springs (optional)' },
          { time: '06:00 PM', description: 'Departure for Delhi' },
          { time: 'Overnight', description: 'Overnight journey to Delhi' }
        ],
        image: 'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  // Add more itineraries as needed
};

const DayItineraryPage = () => {
  const { tripId } = useParams();
  const itinerary = tripId && ITINERARIES[tripId as keyof typeof ITINERARIES];
  
  if (!itinerary) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Itinerary not found</h1>
          <p className="mb-6">The itinerary you're looking for doesn't exist or has been removed.</p>
          <Link to="/"><Button>Back to Home</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-64 md:h-96">
        <img 
          src={itinerary.coverImage} 
          alt={itinerary.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 md:p-12">
          <Link to={`/trip/${tripId}`} className="flex items-center text-white mb-4 hover:underline">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Trip Details
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{itinerary.title}</h1>
          <div className="flex items-center text-white">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{itinerary.duration}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Day-by-Day Itinerary</h2>
        
        <div className="space-y-12">
          {itinerary.days.map((day, index) => (
            <div key={day.day} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={day.image} 
                    alt={`Day ${day.day}: ${day.title}`} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="inline-block bg-wanderon-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Day {day.day}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{day.title}</h3>
                  <p className="text-gray-600 mb-6">{day.description}</p>
                  
                  <div className="space-y-4">
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex">
                        <div className="mr-4">
                          <Clock className="h-5 w-5 text-wanderon-primary" />
                        </div>
                        <div>
                          <span className="font-semibold">{activity.time}</span>
                          <p className="text-gray-600">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {index < itinerary.days.length - 1 && (
                    <div className="mt-6 flex justify-end">
                      <Button variant="ghost" className="flex items-center text-wanderon-primary" asChild>
                        <a href={`#day-${day.day + 1}`}>
                          Next Day <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to={`/trip/${tripId}`}>
            <Button className="bg-wanderon-primary hover:bg-wanderon-primary/90">
              Back to Trip Details
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DayItineraryPage;
