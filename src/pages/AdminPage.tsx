import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TripsManager from '@/components/admin/TripsManager';
import CategoriesManager from '@/components/admin/CategoriesManager';
import TestimonialsManager from '@/components/admin/TestimonialsManager';
import DataMigration from '@/components/admin/DataMigration';
import { Settings, Package, Users, Star } from 'lucide-react';

const AdminPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
            <Settings className="h-8 w-8 text-primary" />
            Admin Panel
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your travel website content
          </p>
        </div>

        <DataMigration />

        <Tabs defaultValue="trips" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trips" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Trips
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Categories
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Testimonials
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trips" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Trips</CardTitle>
                <CardDescription>
                  Add, edit, and manage your travel packages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TripsManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Categories</CardTitle>
                <CardDescription>
                  Organize your trips into categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CategoriesManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Testimonials</CardTitle>
                <CardDescription>
                  Showcase customer reviews and experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TestimonialsManager />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;