
import React from 'react';
import { Helmet } from 'react-helmet';

interface TripSEOData {
  id: string;
  title: string;
  location: string;
  price: number;
  discount?: number;
  duration: string;
  image: string;
  rating?: number;
  reviews?: number;
  description?: string;
  highlights?: string[];
}

interface BlogSEOData {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  modifiedAt?: string;
  tags?: string[];
  readingTime?: string;
}

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
  tripData?: TripSEOData;
  blogData?: BlogSEOData;
  noIndex?: boolean;
  alternateUrls?: { hreflang: string; href: string }[];
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  title = 'Awaiting Adventures - Discover Amazing Travel Experiences',
  description = 'Explore curated travel packages, adventure trips, and honeymoon destinations. Book your next unforgettable journey with Awaiting Adventures.',
  keywords = 'travel, trips, vacation, adventure, honeymoon, packages, india, international, awaiting adventures',
  image = '/og-image.png',
  url = window.location.href,
  type = 'website',
  author = 'Awaiting Adventures',
  publishedTime,
  modifiedTime,
  canonicalUrl,
  tripData,
  blogData,
  noIndex = false,
  alternateUrls = []
}) => {
  const fullTitle = title.includes('Awaiting Adventures') ? title : `${title} | Awaiting Adventures`;
  const canonical = canonicalUrl || url;
  const fullImageUrl = image.startsWith('http') ? image : `https://awaitingadventures.com${image}`;

  // Generate trip-specific schema
  const generateTripSchema = (trip: TripSEOData) => {
    const discountedPrice = trip.discount ? trip.price - (trip.price * trip.discount / 100) : trip.price;
    
    return {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": trip.title,
      "description": trip.description || `Experience ${trip.title} in ${trip.location}. ${trip.duration} package starting from ₹${discountedPrice.toLocaleString()}.`,
      "image": trip.image,
      "touristType": "Adventure Traveler",
      "itinerary": {
        "@type": "ItemList",
        "name": `${trip.title} Itinerary`,
        "description": `Detailed ${trip.duration} itinerary for ${trip.title}`
      },
      "offers": {
        "@type": "Offer",
        "price": discountedPrice,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString(),
        "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
        "seller": {
          "@type": "TravelAgency",
          "name": "Awaiting Adventures",
          "url": "https://awaitingadventures.com"
        }
      },
      "provider": {
        "@type": "TravelAgency",
        "name": "Awaiting Adventures",
        "url": "https://awaitingadventures.com",
        "telephone": "+91-9876543210"
      },
      "aggregateRating": trip.rating && trip.reviews ? {
        "@type": "AggregateRating",
        "ratingValue": trip.rating,
        "reviewCount": trip.reviews,
        "bestRating": 5,
        "worstRating": 1
      } : undefined
    };
  };

  // Generate blog article schema
  const generateBlogSchema = (blog: BlogSEOData) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": fullImageUrl,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Awaiting Adventures",
      "logo": {
        "@type": "ImageObject",
        "url": "https://awaitingadventures.com/og-image.png"
      }
    },
    "datePublished": blog.publishedAt,
    "dateModified": blog.modifiedAt || blog.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": blog.tags?.join(', '),
    "wordCount": blog.readingTime ? parseInt(blog.readingTime) * 200 : undefined
  });

  // Generate FAQ schema if highlights exist
  const generateFAQSchema = (highlights: string[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": highlights.map((highlight, index) => ({
      "@type": "Question",
      "name": `What makes ${highlight} special?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${highlight} is one of the key highlights of this trip, offering unique experiences and unforgettable memories.`
      }
    }))
  });

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Enhanced Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' https://cdn.gpteng.co;" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Awaiting Adventures" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@AwaitingAdventures" />
      <meta name="twitter:creator" content="@AwaitingAdventures" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#e97600" />
      <meta name="msapplication-TileColor" content="#e97600" />
      <meta name="application-name" content="Awaiting Adventures" />
      <meta name="apple-mobile-web-app-title" content="Awaiting Adventures" />
      
      {/* Canonical and Alternate URLs */}
      <link rel="canonical" href={canonical} />
      {alternateUrls.map(alt => (
        <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}

      {/* Preconnect and DNS Prefetch */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://api.supabase.co" />

      {/* Trip-specific schema */}
      {tripData && (
        <script type="application/ld+json">
          {JSON.stringify(generateTripSchema(tripData))}
        </script>
      )}

      {/* Blog-specific schema */}
      {blogData && (
        <script type="application/ld+json">
          {JSON.stringify(generateBlogSchema(blogData))}
        </script>
      )}

      {/* FAQ schema for trip highlights */}
      {tripData?.highlights && tripData.highlights.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema(tripData.highlights))}
        </script>
      )}

      {/* Enhanced Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Awaiting Adventures",
          "description": "Premium travel agency specializing in adventure trips, honeymoon packages, and customized tours across India and international destinations.",
          "url": "https://awaitingadventures.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://awaitingadventures.com/og-image.png",
            "width": 512,
            "height": 512
          },
          "image": "https://awaitingadventures.com/og-image.png",
          "sameAs": [
            "https://facebook.com/awaitingadventures",
            "https://instagram.com/awaitingadventures",
            "https://twitter.com/awaitingadventures",
            "https://linkedin.com/company/awaitingadventures"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"],
              "areaServed": "IN"
            },
            {
              "@type": "ContactPoint",
              "email": "info@awaitingadventures.com",
              "contactType": "customer support",
              "availableLanguage": ["English", "Hindi"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400001"
          },
          "serviceArea": {
            "@type": "Country",
            "name": "India"
          },
          "priceRange": "₹₹₹",
          "foundingDate": "2020",
          "numberOfEmployees": "10-50",
          "award": "Best Adventure Travel Company 2023"
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEOHead;
