import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogTabContent from './BlogTabContent';
import { 
  monthlyDestinations, 
  travelGuides, 
  travelTips, 
  latestNews, 
  budgetDestinations, 
  offbeatPlaces,
  // newly added exports
  trendingExperiences,
  travelItineraries,
  sustainableTravel,
  soloTravel,
  familyTravel,
  adventureActivities,
  luxuryEscapes,
  festivalsEvents,
  travelPhotography,
  visaAndDocs,
  healthAndSafety,
  localCuisine,
  weekendGetaways,
  travelDeals,
  affordableWinterDomestic,
  affordableWinterInternational


} from '@/data/blogData';

const BlogTabs: React.FC = () => {
  return (
    <Tabs defaultValue="monthly-destinations" className="w-full">
      <TabsList className="w-full justify-start overflow-x-auto">
        <TabsTrigger value="monthly-destinations">Monthly Destinations</TabsTrigger>
        <TabsTrigger value="travel-guides">Travel Guides</TabsTrigger>
        <TabsTrigger value="tips">Travel Tips</TabsTrigger>
        <TabsTrigger value="news">Latest News</TabsTrigger>
        <TabsTrigger value="affordable">Budget Destinations</TabsTrigger>
        <TabsTrigger value="offbeat">Offbeat Places</TabsTrigger>

        {/* NEW tabs */}
        <TabsTrigger value="trending-experiences">Trending Experiences</TabsTrigger>
        <TabsTrigger value="itineraries">Itineraries</TabsTrigger>
        <TabsTrigger value="sustainable-travel">Sustainable Travel</TabsTrigger>
        <TabsTrigger value="solo-travel">Solo Travel</TabsTrigger>
        <TabsTrigger value="family-travel">Family Travel</TabsTrigger>
        <TabsTrigger value="adventure-activities">Adventure Activities</TabsTrigger>
        <TabsTrigger value="luxury-escapes">Luxury Escapes</TabsTrigger>
        <TabsTrigger value="festivals-events">Festivals & Events</TabsTrigger>
        <TabsTrigger value="travel-photography">Travel Photography</TabsTrigger>
        <TabsTrigger value="visa-docs">Visa & Docs</TabsTrigger>
        <TabsTrigger value="health-safety">Health & Safety</TabsTrigger>
        <TabsTrigger value="local-cuisine">Local Cuisine</TabsTrigger>
        <TabsTrigger value="weekend-getaways">Weekend Getaways</TabsTrigger>
        <TabsTrigger value="travel-deals">Travel Deals</TabsTrigger>
        <TabsTrigger value="affordable-winter-domestic">Affordable Winter Domestic</TabsTrigger>
        <TabsTrigger value="affordable-winter-international">Affordable Winter International</TabsTrigger>
      </TabsList>

      <TabsContent value="monthly-destinations" className="mt-6">
        <BlogTabContent items={monthlyDestinations} />
      </TabsContent>

      <TabsContent value="travel-guides" className="mt-6">
        <BlogTabContent items={travelGuides} />
      </TabsContent>

      <TabsContent value="tips" className="mt-6">
        <BlogTabContent items={travelTips} />
      </TabsContent>

      <TabsContent value="news" className="mt-6">
        <BlogTabContent items={latestNews} />
      </TabsContent>

      <TabsContent value="affordable" className="mt-6">
        <BlogTabContent items={budgetDestinations} />
      </TabsContent>

      <TabsContent value="offbeat" className="mt-6">
        <BlogTabContent items={offbeatPlaces} />
      </TabsContent>

      {/* NEW tab contents */}
      <TabsContent value="trending-experiences" className="mt-6">
        <BlogTabContent items={trendingExperiences} />
      </TabsContent>

      <TabsContent value="itineraries" className="mt-6">
        <BlogTabContent items={travelItineraries} />
      </TabsContent>

      <TabsContent value="sustainable-travel" className="mt-6">
        <BlogTabContent items={sustainableTravel} />
      </TabsContent>

      <TabsContent value="solo-travel" className="mt-6">
        <BlogTabContent items={soloTravel} />
      </TabsContent>

      <TabsContent value="family-travel" className="mt-6">
        <BlogTabContent items={familyTravel} />
      </TabsContent>

      <TabsContent value="adventure-activities" className="mt-6">
        <BlogTabContent items={adventureActivities} />
      </TabsContent>

      <TabsContent value="luxury-escapes" className="mt-6">
        <BlogTabContent items={luxuryEscapes} />
      </TabsContent>

      <TabsContent value="festivals-events" className="mt-6">
        <BlogTabContent items={festivalsEvents} />
      </TabsContent>

      <TabsContent value="travel-photography" className="mt-6">
        <BlogTabContent items={travelPhotography} />
      </TabsContent>

      <TabsContent value="visa-docs" className="mt-6">
        <BlogTabContent items={visaAndDocs} />
      </TabsContent>

      <TabsContent value="health-safety" className="mt-6">
        <BlogTabContent items={healthAndSafety} />
      </TabsContent>

      <TabsContent value="local-cuisine" className="mt-6">
        <BlogTabContent items={localCuisine} />
      </TabsContent>

      <TabsContent value="weekend-getaways" className="mt-6">
        <BlogTabContent items={weekendGetaways} />
      </TabsContent>

      <TabsContent value="travel-deals" className="mt-6">
        <BlogTabContent items={travelDeals} />
      </TabsContent>

      <TabsContent value="affordable-winter-domestic" className="mt-6">
        <BlogTabContent items={affordableWinterDomestic} />
      </TabsContent>

      <TabsContent value="affordable-winter-international" className="mt-6">
        <BlogTabContent items={affordableWinterInternational} />
      </TabsContent>
    </Tabs>
  );
};

export default BlogTabs;
