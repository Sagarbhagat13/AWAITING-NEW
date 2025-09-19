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

    console.log('About to migrate trips data:', tripsData.slice(0, 2)); // Log first 2 items for debugging
    console.log('Total trips to migrate:', tripsData.length);
    console.log('Sample trip data structure:', JSON.stringify(tripsData[0], null, 2));
    
    // Validate data types before insertion
    tripsData.forEach((trip, index) => {
      if (typeof trip.price !== 'number' || isNaN(trip.price)) {
        console.error(`Trip ${index} has invalid price:`, trip.price, typeof trip.price);
      }
      if (trip.discount && (typeof trip.discount !== 'number' || isNaN(trip.discount))) {
        console.error(`Trip ${index} has invalid discount:`, trip.discount, typeof trip.discount);
      }
      if (trip.rating && (typeof trip.rating !== 'number' || isNaN(trip.rating))) {
        console.error(`Trip ${index} has invalid rating:`, trip.rating, typeof trip.rating);
      }
    });
    
    // Insert trips with upsert to avoid duplicates
    const { data: insertedTrips, error: tripsError } = await supabase
      .from('trips')
      .upsert(tripsData, { onConflict: 'id' })
      .select();

    if (tripsError) {
      console.error('=== TRIPS MIGRATION ERROR DETAILS ===');
      console.error('Error object:', tripsError);
      console.error('Error message:', tripsError.message);
      console.error('Error details:', tripsError.details);
      console.error('Error hint:', tripsError.hint);
      console.error('Error code:', tripsError.code);
      console.error('Failed trips data sample:', JSON.stringify(tripsData.slice(0, 2), null, 2));
      console.error('All trips data:', JSON.stringify(tripsData, null, 2));
      
      // Try to insert one trip at a time to isolate the problematic record
      console.log('Attempting to insert trips one by one to identify the problematic record...');
      for (let i = 0; i < Math.min(5, tripsData.length); i++) {
        try {
          const { error: singleError } = await supabase
            .from('trips')
            .upsert([tripsData[i]], { onConflict: 'id' });
          
          if (singleError) {
            console.error(`Trip ${i} failed:`, singleError);
            console.error(`Problematic trip data:`, JSON.stringify(tripsData[i], null, 2));
          } else {
            console.log(`Trip ${i} inserted successfully:`, tripsData[i].title);
          }
        } catch (singleErr) {
          console.error(`Trip ${i} threw exception:`, singleErr);
          console.error(`Problematic trip data:`, JSON.stringify(tripsData[i], null, 2));
        }
      }
    } else {
      console.log(`Migrated ${tripsData.length} trips successfully`);
      console.log('Sample inserted trip:', insertedTrips?.[0]);
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