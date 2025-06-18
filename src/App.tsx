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

// Error handling component
import ErrorBoundary from "@/components/ErrorBoundary";

// Route imports - using existing pages
import Index from "@/pages/Index";
import ContactPage from "@/pages/ContactPage";
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
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/careers" element={<CareerPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/:category" element={<CategoryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </AuthProvider>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
