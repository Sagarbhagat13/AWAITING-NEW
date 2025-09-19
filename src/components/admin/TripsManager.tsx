import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Plus, Edit, Trash2, Package } from 'lucide-react';
import { tripsService, CMSTrip } from '@/services/cmsService';

const TripsManager = () => {
  const [trips, setTrips] = useState<CMSTrip[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTrip, setEditingTrip] = useState<CMSTrip | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const emptyTrip: Omit<CMSTrip, 'id'> = {
    title: '',
    location: '',
    price: 0,
    discount: 0,
    duration: '',
    image: '',
    rating: 0,
    reviews: 0,
    state_highlight: false,
    honeymoon_special: false,
    international: false,
    family_special: false,
    long_weekend: false,
    biking_package: false,
    suv_package: false,
    offbeat: false,
  };

  const [formData, setFormData] = useState<CMSTrip | Omit<CMSTrip, 'id'>>(emptyTrip);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    try {
      const data = await tripsService.getAll();
      setTrips(data);
    } catch (error) {
      toast.error('Failed to load trips');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      if (editingTrip) {
        await tripsService.update(editingTrip.id, formData);
        toast.success('Trip updated successfully');
      } else {
        // Generate a unique ID for new trips
        const newTrip = { ...formData, id: `trip-${Date.now()}` } as CMSTrip;
        await tripsService.create(newTrip);
        toast.success('Trip created successfully');
      }
      
      setIsDialogOpen(false);
      setEditingTrip(null);
      setFormData(emptyTrip);
      await loadTrips();
    } catch (error) {
      toast.error('Failed to save trip');
      console.error(error);
    }
  };

  const handleEdit = (trip: CMSTrip) => {
    setEditingTrip(trip);
    setFormData(trip);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this trip?')) return;
    
    try {
      await tripsService.delete(id);
      toast.success('Trip deleted successfully');
      await loadTrips();
    } catch (error) {
      toast.error('Failed to delete trip');
      console.error(error);
    }
  };

  const handleCreate = () => {
    setEditingTrip(null);
    setFormData(emptyTrip);
    setIsDialogOpen(true);
  };

  if (loading) {
    return <div className="flex justify-center py-8">Loading trips...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Trips ({trips.length})</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleCreate} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Trip
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingTrip ? 'Edit Trip' : 'Create New Trip'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Trip title"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Location"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="discount">Discount %</Label>
                  <Input
                    id="discount"
                    type="number"
                    value={formData.discount || 0}
                    onChange={(e) => setFormData({ ...formData, discount: Number(e.target.value) })}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="5D/4N"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    id="rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    placeholder="4.5"
                  />
                </div>
                <div>
                  <Label htmlFor="reviews">Reviews Count</Label>
                  <Input
                    id="reviews"
                    type="number"
                    value={formData.reviews}
                    onChange={(e) => setFormData({ ...formData, reviews: Number(e.target.value) })}
                    placeholder="150"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="state_highlight"
                    checked={formData.state_highlight}
                    onCheckedChange={(checked) => setFormData({ ...formData, state_highlight: checked })}
                  />
                  <Label htmlFor="state_highlight">State Highlight</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="honeymoon_special"
                    checked={formData.honeymoon_special}
                    onCheckedChange={(checked) => setFormData({ ...formData, honeymoon_special: checked })}
                  />
                  <Label htmlFor="honeymoon_special">Honeymoon Special</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="international"
                    checked={formData.international}
                    onCheckedChange={(checked) => setFormData({ ...formData, international: checked })}
                  />
                  <Label htmlFor="international">International</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="family_special"
                    checked={formData.family_special}
                    onCheckedChange={(checked) => setFormData({ ...formData, family_special: checked })}
                  />
                  <Label htmlFor="family_special">Family Special</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="long_weekend"
                    checked={formData.long_weekend}
                    onCheckedChange={(checked) => setFormData({ ...formData, long_weekend: checked })}
                  />
                  <Label htmlFor="long_weekend">Long Weekend</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="offbeat"
                    checked={formData.offbeat}
                    onCheckedChange={(checked) => setFormData({ ...formData, offbeat: checked })}
                  />
                  <Label htmlFor="offbeat">Offbeat</Label>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  {editingTrip ? 'Update' : 'Create'} Trip
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {trips.map((trip) => (
          <Card key={trip.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{trip.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {trip.location} • {trip.duration} • ₹{trip.price}
                    {trip.discount ? ` (${trip.discount}% off)` : ''}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(trip)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => handleDelete(trip.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TripsManager;