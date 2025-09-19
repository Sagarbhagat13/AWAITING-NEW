
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import PromotionalBanner from "@/components/PromotionalBanner";

// Error handling component
import ErrorBoundary from "@/components/ErrorBoundary";

// Route imports - using existing pages
import Index from "@/pages/Index";
import ContactPage from "@/pages/ContactPage";
import ContactLandingPage from "@/pages/ContactLandingPage";
import BlogPage from "@/pages/BlogPage";
import NotFound from "@/pages/NotFound";
import BackpackingPage from "@/pages/BackpackingPage";
import AboutPage from "@/pages/AboutPage";
import ItineraryPage from "@/pages/ItineraryPage";
import DynamicItineraryPage from "@/pages/DynamicItineraryPage";
import DynamicSuggestedItineraryPage from "@/pages/DynamicSuggestedItineraryPage";
import CategoryPage from "@/pages/CategoryPage";
import CustomizedTripPage from "@/pages/CustomizedTripPage";
import BlogPostPage from "@/pages/BlogPostPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";

// Add new imports for Career and FAQ pages
import CareerPage from "@/pages/CareerPage";
import FaqPage from "@/pages/FaqPage";
import CorporateToursPage from "@/pages/CorporateToursPage";
import LongWeekendTripsPage from "@/pages/LongWeekendTripsPage";
import HoneymoonPackagesPage from "@/pages/HoneymoonPackagesPage";
import FamilyPackagesPage from "@/pages/FamilyPackagesPage";
import XmasNewYearPage from "@/pages/XmasNewYearPage";
import AdminPage from "@/pages/AdminPage";
// Update the route for the optimized index page
import OptimizedIndex from '@/pages/OptimizedIndex';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

function App() {
  const [error, setError] = useState<Error | null>(null);

  const handleError = (error: Error) => {
    console.error("Global error caught:", error);
    setError(error);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
           <div className="min-h-screen">
            <PromotionalBanner />
            <ScrollToTop />
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<OptimizedIndex />} />
                <Route path="/trip/:id" element={<ItineraryPage />} />
                <Route path="/itinerary/:id" element={<DynamicItineraryPage />} />
                <Route path="/suggested/:id" element={<DynamicSuggestedItineraryPage />} />
                <Route path="/custom-trip/:tripId" element={<CustomizedTripPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/backpacking" element={<BackpackingPage />} />
                <Route path="/long-weekend-trips" element={<LongWeekendTripsPage />} />
                <Route path="/honeymoon-packages" element={<HoneymoonPackagesPage />} />
                <Route path="/family-packages" element={<FamilyPackagesPage />} /> 
                <Route path="/xmas-new-year" element={<XmasNewYearPage />} />

                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/careers" element={<CareerPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/corporate-tours" element={<CorporateToursPage />} />
                <Route path="/admin" element={<AdminPage />} />
                
                
                {/* Specific India state routes */}
                <Route path="/india/ladakh" element={<CategoryPage />} />
                <Route path="/india/himachal-pradesh" element={<CategoryPage />} />
                <Route path="/india/uttarakhand" element={<CategoryPage />} />
                <Route path="/india/rajasthan" element={<CategoryPage />} />
                <Route path="/india/goa" element={<CategoryPage />} />
                <Route path="/india/kerala" element={<CategoryPage />} />
                <Route path="/india/tamil-nadu" element={<CategoryPage />} />
                <Route path="/india/andaman" element={<CategoryPage />} />
                <Route path="/india/all-states" element={<CategoryPage />} />
                
                {/* Specific World country routes */}
                <Route path="/world/thailand" element={<CategoryPage />} />
                <Route path="/world/singapore" element={<CategoryPage />} />
                <Route path="/world/bali" element={<CategoryPage />} />
                <Route path="/world/maldives" element={<CategoryPage />} />
                <Route path="/world/dubai" element={<CategoryPage />} />
                <Route path="/world/europe" element={<CategoryPage />} />
                <Route path="/world/all-countries" element={<CategoryPage />} />
                
                {/* Generic category route - must come after specific routes */}
                <Route path="/:category" element={<CategoryPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </div>
        </BrowserRouter>
      </AuthProvider>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
