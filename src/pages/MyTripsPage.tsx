import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, Users, IndianRupee, Plus, Package } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MinimalHero from '@/components/MinimalHero';

interface Trip {
  id: string;
  trip_name: string;
  destination: string;
  start_date: string;
  end_date: string;
  total_amount: number;
  booking_status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  booking_date: string;
  trip_type: string;
  participants: number;
}

const MyTripsPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
      return;
    }

    if (user) {
      fetchTrips();
    }
  }, [user, authLoading, navigate]);

  const fetchTrips = async () => {
    try {
      const { data, error } = await supabase
        .from('user_trips')
        .select('*')
        .eq('user_id', user?.id)
        .order('booking_date', { ascending: false });

      if (error) {
        console.error('Error fetching trips:', error);
        toast.error('Failed to load trips');
        return;
      }

      // Cast the data to ensure proper typing
      const typedTrips = (data || []).map(trip => ({
        ...trip,
        booking_status: trip.booking_status as 'pending' | 'confirmed' | 'completed' | 'cancelled'
      }));

      setTrips(typedTrips);
    } catch (error) {
      console.error('Trips fetch error:', error);
      toast.error('Failed to load trips');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filterTripsByStatus = (status?: string) => {
    if (!status) return trips;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return trips.filter(trip => {
      const startDate = new Date(trip.start_date);
      const endDate = new Date(trip.end_date);
      
      switch (status) {
        case 'upcoming':
          return startDate > today && trip.booking_status !== 'cancelled';
        case 'ongoing':
          return startDate <= today && endDate >= today && trip.booking_status !== 'cancelled';
        case 'completed':
          return endDate < today || trip.booking_status === 'completed';
        case 'cancelled':
          return trip.booking_status === 'cancelled';
        default:
          return true;
      }
    });
  };

  const TripCard = ({ trip }: { trip: Trip }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-tripvidya-dark">
              {trip.trip_name}
            </CardTitle>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{trip.destination}</span>
            </div>
          </div>
          <Badge className={getStatusColor(trip.booking_status)}>
            {trip.booking_status.charAt(0).toUpperCase() + trip.booking_status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-tripvidya-primary" />
            <div>
              <p className="font-medium">Start Date</p>
              <p className="text-muted-foreground">
                {new Date(trip.start_date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-tripvidya-primary" />
            <div>
              <p className="font-medium">End Date</p>
              <p className="text-muted-foreground">
                {new Date(trip.end_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-tripvidya-primary" />
            <div>
              <p className="font-medium">Participants</p>
              <p className="text-muted-foreground">{trip.participants} person(s)</p>
            </div>
          </div>
          <div className="flex items-center">
            <IndianRupee className="h-4 w-4 mr-2 text-tripvidya-primary" />
            <div>
              <p className="font-medium">Total Amount</p>
              <p className="text-muted-foreground">₹{trip.total_amount.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            Booked on {new Date(trip.booking_date).toLocaleDateString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tripvidya-light to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tripvidya-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-tripvidya-light to-white">
      {/* <div className="container mx-auto px-4 py-8"> */}
       <Navbar />
      
      <main className="flex-grow">
        <MinimalHero title="My Trips" />
        
        <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-tripvidya-dark mb-2">My Trips</h1>
              <p className="text-muted-foreground">Manage and track your travel bookings</p>
            </div>
            <Button 
              onClick={() => navigate('/')}
              className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
            >
              <Plus className="h-4 w-4 mr-2" />
              Book New Trip
            </Button>
          </div>

          {trips.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="text-xl font-semibold mb-2">No trips yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start your journey by booking your first trip with us!
                </p>
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Book Your First Trip
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All Trips ({trips.length})</TabsTrigger>
                <TabsTrigger value="upcoming">
                  Upcoming ({filterTripsByStatus('upcoming').length})
                </TabsTrigger>
                <TabsTrigger value="ongoing">
                  Ongoing ({filterTripsByStatus('ongoing').length})
                </TabsTrigger>
                <TabsTrigger value="completed">
                  Completed ({filterTripsByStatus('completed').length})
                </TabsTrigger>
                <TabsTrigger value="cancelled">
                  Cancelled ({filterTripsByStatus('cancelled').length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterTripsByStatus('upcoming').map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ongoing" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterTripsByStatus('ongoing').map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterTripsByStatus('completed').map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cancelled" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterTripsByStatus('cancelled').map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
       </main>
      
      <Footer />
    </div>
  );
};

export default MyTripsPage;
