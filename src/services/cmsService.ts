import { supabase } from '@/integrations/supabase/client';

// Types matching database schema
export interface CMSTrip {
  id: string;
  title: string;
  location: string;
  price: number;
  discount?: number;
  duration: string;
  image: string;
  rating: number;
  reviews: number;
  state_highlight?: boolean;
  honeymoon_special?: boolean;
  international?: boolean;
  family_special?: boolean;
  long_weekend?: boolean;
  biking_package?: boolean;
  suv_package?: boolean;
  offbeat?: boolean;
}

export interface CMSCategory {
  id?: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  slug?: string;
  description?: string;
}

export interface CMSTestimonial {
  id?: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  trip_name: string;
}

// Trips Service
export const tripsService = {
  async getAll(): Promise<CMSTrip[]> {
    const { data, error } = await supabase
      .from('trips')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async create(trip: CMSTrip): Promise<CMSTrip> {
    const { data, error } = await supabase
      .from('trips')
      .insert(trip)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<CMSTrip>): Promise<CMSTrip> {
    const { data, error } = await supabase
      .from('trips')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('trips')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Categories Service
export const categoriesService = {
  async getAll(): Promise<CMSCategory[]> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async create(category: Omit<CMSCategory, 'id'>): Promise<CMSCategory> {
    const { data, error } = await supabase
      .from('categories')
      .insert(category)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<CMSCategory>): Promise<CMSCategory> {
    const { data, error } = await supabase
      .from('categories')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Testimonials Service
export const testimonialsService = {
  async getAll(): Promise<CMSTestimonial[]> {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async create(testimonial: Omit<CMSTestimonial, 'id'>): Promise<CMSTestimonial> {
    const { data, error } = await supabase
      .from('testimonials')
      .insert(testimonial)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<CMSTestimonial>): Promise<CMSTestimonial> {
    const { data, error } = await supabase
      .from('testimonials')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};