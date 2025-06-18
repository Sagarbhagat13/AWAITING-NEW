
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { User, Phone, Mail, Calendar, Shield, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserProfile {
  id: string;
  full_name: string | null;
  email: string | null;
  phone_number: string | null;
  phone_verified: boolean | null;
  wallet_balance: number;
  created_at: string;
  auth_provider: string | null;
}

const ProfilePage = () => {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
      return;
    }

    if (user) {
      fetchProfile();
    }
  }, [user, authLoading, navigate]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        toast.error('Failed to load profile');
        return;
      }

      setProfile(data);
      setFullName(data.full_name || '');
      setEmail(data.email || '');
    } catch (error) {
      console.error('Profile fetch error:', error);
      toast.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: fullName || null,
          email: email || null,
        })
        .eq('id', user?.id);

      if (error) {
        console.error('Update error:', error);
        toast.error('Failed to update profile');
        return;
      }

      toast.success('Profile updated successfully');
      fetchProfile();
    } catch (error) {
      console.error('Update error:', error);
      toast.error('Failed to update profile');
    } finally {
      setUpdating(false);
    }
  };

  const getInitials = (phone: string | null) => {
    if (!phone) return 'U';
    return phone.slice(-2);
  };

  const formatPhoneNumber = (phone: string | null) => {
    if (!phone) return '';
    if (phone.startsWith('+91') && phone.length === 13) {
      const number = phone.slice(3);
      return `+91 ${number.slice(0, 5)} ${number.slice(5)}`;
    }
    return phone;
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tripvidya-light to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tripvidya-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tripvidya-light to-white flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Profile not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-tripvidya-light to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-tripvidya-dark mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your account information</p>
          </div>

          {/* Profile Overview */}
          <Card>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" alt="Profile" />
                  <AvatarFallback className="bg-tripvidya-primary text-white text-2xl font-bold">
                    {getInitials(profile.phone_number)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">
                {profile.full_name || formatPhoneNumber(profile.phone_number)}
              </CardTitle>
              <CardDescription className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                {formatPhoneNumber(profile.phone_number)}
                {profile.phone_verified && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate('/wallet')}>
              <CardContent className="p-6 text-center">
                <Wallet className="h-8 w-8 mx-auto mb-2 text-tripvidya-primary" />
                <p className="text-2xl font-bold text-tripvidya-dark">₹{profile.wallet_balance.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Wallet Balance</p>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate('/my-trips')}>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-tripvidya-primary" />
                <p className="text-2xl font-bold text-tripvidya-dark">0</p>
                <p className="text-sm text-muted-foreground">Total Trips</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <User className="h-8 w-8 mx-auto mb-2 text-tripvidya-primary" />
                <p className="text-sm font-medium text-tripvidya-dark">
                  Member since {new Date(profile.created_at).toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground">Join Date</p>
              </CardContent>
            </Card>
          </div>

          {/* Edit Profile */}
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    value={formatPhoneNumber(profile.phone_number)}
                    disabled
                    className="bg-muted"
                  />
                  {profile.phone_verified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Phone number cannot be changed. Contact support if needed.
                </p>
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={updateProfile}
                  disabled={updating}
                  className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
                >
                  {updating ? 'Updating...' : 'Update Profile'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
