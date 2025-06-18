
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Awaiting Adventures - Discover Amazing Travel Experiences',
  description = 'Explore curated travel packages, adventure trips, and honeymoon destinations. Book your next unforgettable journey with Awaiting Adventures.',
  keywords = 'travel, trips, vacation, adventure, honeymoon, packages, india, international, awaiting adventures',
  image = '/og-image.png',
  url = window.location.href,
  type = 'website',
  author = 'Awaiting Adventures',
  publishedTime,
  modifiedTime,
  canonicalUrl
}) => {
  const fullTitle = title.includes('Awaiting Adventures') ? title : `${title} | Awaiting Adventures`;
  const canonical = canonicalUrl || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
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
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@AwaitingAdventures" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#e97600" />
      <link rel="canonical" href={canonical} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="https://api.supabase.co" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Awaiting Adventures",
          "description": description,
          "url": "https://awaitingadventures.com",
          "logo": {
            "@type": "ImageObject",
            "url": image,
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://facebook.com/awaitingadventures",
            "https://instagram.com/awaitingadventures",
            "https://twitter.com/awaitingadventures"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra"
          },
          "serviceArea": {
            "@type": "Country",
            "name": "India"
          },
          "priceRange": "₹₹₹"
        })}
      </script>

      {/* Breadcrumb Schema */}
      {window.location.pathname !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://awaitingadventures.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": document.title.split(' | ')[0],
                "item": window.location.href
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
