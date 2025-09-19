import { supabase } from '@/integrations/supabase/client';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { familyTours } from '@/data/familyTours';
import { categories } from '@/data/categories';
import { testimonials } from '@/data/testimonials';

// Migration utility to populate database with existing data
export const migrateStaticDataToDatabase = async () => {
  try {
    console.log('Starting data migration...');

    // Migrate trips
    const allTrips = [...popularTrips, ...weekendTrips, ...familyTours];
    const tripsData = allTrips.map(trip => ({
      id: trip.id,
      title: trip.title,
      location: trip.location,
      price: trip.price,
      discount: trip.discount || 0,
      duration: trip.duration,
      image: trip.image,
      rating: trip.rating,
      reviews: trip.reviews,
      state_highlight: trip.stateHighlight || false,
      honeymoon_special: trip.honeymoonSpecial || false,
      international: trip.international || false,
      family_special: trip.familySpecial || false,
      long_weekend: trip.longWeekend || false,
      biking_package: trip.bikingPackage || false,
      suv_package: trip.suvPackage || false,
      offbeat: trip.offbeat || false,
    }));

    // Insert trips with upsert to avoid duplicates
    const { error: tripsError } = await supabase
      .from('trips')
      .upsert(tripsData, { onConflict: 'id' });

    if (tripsError) {
      console.error('Error migrating trips:', tripsError);
    } else {
      console.log(`Migrated ${tripsData.length} trips`);
    }

    // Migrate categories
    const categoriesData = categories.map(category => ({
      title: category.title,
      subtitle: category.subtitle,
      image: category.image,
      link: category.link,
      slug: category.slug,
      description: category.description,
    }));

    const { error: categoriesError } = await supabase
      .from('categories')
      .upsert(categoriesData, { onConflict: 'slug' });

    if (categoriesError) {
      console.error('Error migrating categories:', categoriesError);
    } else {
      console.log(`Migrated ${categoriesData.length} categories`);
    }

    // Migrate testimonials
    const testimonialsData = testimonials.map(testimonial => ({
      name: testimonial.name,
      location: testimonial.location,
      image: testimonial.image,
      rating: testimonial.rating,
      text: testimonial.text,
      trip_name: testimonial.tripName,
    }));

    const { error: testimonialsError } = await supabase
      .from('testimonials')
      .upsert(testimonialsData);

    if (testimonialsError) {
      console.error('Error migrating testimonials:', testimonialsError);
    } else {
      console.log(`Migrated ${testimonialsData.length} testimonials`);
    }

    console.log('Data migration completed successfully!');
    return { success: true };
  } catch (error) {
    console.error('Migration failed:', error);
    return { success: false, error };
  }
};