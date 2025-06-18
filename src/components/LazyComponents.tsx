
import React, { lazy, Suspense } from 'react';
import LoadingState from './LoadingState';
import ErrorBoundary from './ErrorBoundary';

// Lazy load all page components
export const LazyIndex = lazy(() => import('@/pages/Index'));
export const LazyDynamicHomePage = lazy(() => import('@/pages/DynamicHomePage'));
export const LazyBlogPage = lazy(() => import('@/pages/BlogPage'));
export const LazyBlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
export const LazyProfilePage = lazy(() => import('@/pages/ProfilePage'));
export const LazyMyTripsPage = lazy(() => import('@/pages/MyTripsPage'));
export const LazyWalletPage = lazy(() => import('@/pages/WalletPage'));
export const LazyItineraryPage = lazy(() => import('@/pages/ItineraryPage'));
export const LazySuggestedItineraryPage = lazy(() => import('@/pages/SuggestedItineraryPage'));
export const LazyDynamicItineraryPage = lazy(() => import('@/pages/DynamicItineraryPage'));
export const LazyDynamicSuggestedItineraryPage = lazy(() => import('@/pages/DynamicSuggestedItineraryPage'));
export const LazyDayItineraryPage = lazy(() => import('@/pages/DayItineraryPage'));
export const LazyCustomizedTripPage = lazy(() => import('@/pages/CustomizedTripPage'));
export const LazyContactPage = lazy(() => import('@/pages/ContactPage'));
export const LazyAboutPage = lazy(() => import('@/pages/AboutPage'));
export const LazyBackpackingPage = lazy(() => import('@/pages/BackpackingPage'));
export const LazyCategoryPage = lazy(() => import('@/pages/CategoryPage'));
export const LazyNotFound = lazy(() => import('@/pages/NotFound'));

// Higher-order component for lazy loading with error boundary
export const withLazyLoading = (
  Component: React.ComponentType<any>,
  fallbackText?: string
) => {
  return (props: any) => (
    <ErrorBoundary>
      <Suspense fallback={<LoadingState text={fallbackText} fullScreen />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};
