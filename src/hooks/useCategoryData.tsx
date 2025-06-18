
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Trip } from '@/data/popularTrips';
import { stateTrips, StateData } from '@/data/stateTrips';
import { worldTrips, CountryData } from '@/data/worldTrips';
import { 
  popularTrips, 
  offBeatTrips, 
  familyTours, 
  weekendTrips,
  internationalTours,
  longWeekendTrips,
  honeymoonPackages,
  ladakhBikingTrips,
  ladakhSUVTrips
} from '@/data/tripData';
import { categories } from '@/data/categories';

interface CategoryDataResult {
  pageTitle: string;
  pageDescription: string;
  trips: Trip[];
  stateData: StateData | null;
  countryData: CountryData | null;
  path: string;
}

export const useCategoryData = (): CategoryDataResult => {
  const { state, country, categoryId } = useParams();
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [trips, setTrips] = useState<Trip[]>([]);
  const [stateData, setStateData] = useState<StateData | null>(null);
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  
  const path = location.pathname.split('/')[1];
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle state-specific pages
    if (location.pathname.startsWith('/india/') && state) {
      const stateInfo = stateTrips[state];
      if (stateInfo) {
        setStateData(stateInfo);
        setPageTitle(`${stateInfo.name} Tours & Travel Packages`);
        setPageDescription(`Explore the best of ${stateInfo.name} with our curated travel packages and customized itineraries.`);
        return;
      }
    }
    
    // Handle country-specific pages
    if (location.pathname.startsWith('/world/') && country) {
      const countryInfo = worldTrips[country];
      if (countryInfo) {
        setCountryData(countryInfo);
        setPageTitle(`${countryInfo.name} Tours & Travel Packages`);
        setPageDescription(`Discover the wonders of ${countryInfo.name} with our international travel packages and customized itineraries.`);
        return;
      }
    }
    
    // Handle other category pages
    switch(path) {
      case 'india':
        setPageTitle('India Tour Packages');
        setPageDescription('Explore the diverse landscapes and cultures of India with our curated travel packages.');
        setTrips(popularTrips.filter(trip => !trip.international));
        break;
      case 'world':
        setPageTitle('International Tour Packages');
        setPageDescription('Discover exciting destinations around the world with our international travel packages.');
        setTrips(popularTrips.filter(trip => trip.international));
        break;
      case 'popular-trips':
        setPageTitle('Popular Trips');
        setPageDescription('Join our most popular and highly-rated group tours.');
        setTrips(popularTrips);
        break;
      case 'off-beat-trips':
        setPageTitle('Off-Beat Destinations');
        setPageDescription('Discover hidden gems and less-traveled paths with our unique off-beat tours.');
        setTrips(offBeatTrips);
        break;
      case 'family-tours':
        setPageTitle('Family Tours & Packages');
        setPageDescription('Create lasting memories with our family-friendly tour packages.');
        setTrips(familyTours);
        break;
      case 'short-trips':
        setPageTitle('Short Trips');
        setPageDescription("Perfect getaways for when you're short on time but high on wanderlust.");
        setTrips(weekendTrips);
        break;
      case 'international-tours':
        setPageTitle('International Tours');
        setPageDescription('Discover exciting international destinations with our carefully curated travel packages.');
        setTrips(internationalTours);
        break;
      case 'long-weekend-trips':
        setPageTitle('Long Weekend & Festive Special');
        setPageDescription('Make the most of your long weekends and festive holidays with our special tour packages.');
        setTrips(longWeekendTrips);
        break;
      case 'honeymoon-packages':
        setPageTitle('Honeymoon Packages');
        setPageDescription('Begin your journey together with our romantic honeymoon packages to beautiful destinations.');
        setTrips(honeymoonPackages);
        break;
      case 'ladakh-trips':
        setPageTitle('Ladakh Trips');
        setPageDescription('Experience the breathtaking beauty of Ladakh with our specialized biking and SUV tour packages.');
        setTrips([...ladakhBikingTrips, ...ladakhSUVTrips]);
        break;
      default:
        // Try to find a matching category
        const category = categories.find(cat => cat.slug === path);
        if (category) {
          setPageTitle(category.title);
          setPageDescription(category.description || `Explore our ${category.title} collection.`);
          
          // Map different categories to the appropriate data
          if (path === 'long-weekend-trips') {
            setTrips(longWeekendTrips);
          } else if (path === 'international-tours') {
            setTrips(internationalTours);
          } else if (path === 'honeymoon-packages') {
            setTrips(honeymoonPackages);
          } else if (path === 'ladakh-trips') {
            // A mix of biking and SUV packages
            setTrips([...ladakhBikingTrips, ...ladakhSUVTrips]);
          } else if (path === 'short-trips' || path === 'weekend-getaways') {
            setTrips(weekendTrips);
          } else {
            // Fallback to showing popular trips
            setTrips(popularTrips.slice(0, 8));
          }
        } else {
          setPageTitle('Travel Packages');
          setPageDescription('Explore our curated collection of travel experiences.');
          setTrips(popularTrips);
        }
    }
  }, [location, state, country, categoryId, path]);
  
  return {
    pageTitle,
    pageDescription,
    trips,
    stateData,
    countryData,
    path
  };
};
