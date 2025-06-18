
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogTabContent from './BlogTabContent';
import { 
  monthlyDestinations, 
  travelGuides, 
  travelTips, 
  latestNews, 
  budgetDestinations, 
  offbeatPlaces 
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
    </Tabs>
  );
};

export default BlogTabs;
