
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { monthlyTrips } from '@/data/monthlyTrips';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const StatePackagesSection = () => {
  const [activeMonth, setActiveMonth] = useState("January");
  const isMobile = useIsMobile();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll to center the active tab when it changes
  useEffect(() => {
    if (scrollContainerRef.current && isMobile) {
      const activeTab = scrollContainerRef.current.querySelector('[data-state="active"]');
      if (activeTab) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const tabWidth = activeTab.clientWidth;
        const tabLeft = (activeTab as HTMLElement).offsetLeft;
        
        scrollContainerRef.current.scrollTo({
          left: tabLeft - (containerWidth / 2) + (tabWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeMonth, isMobile]);
  
  return (
    <section className="py-12 bg-white">
      <div className={cn("container mx-auto", isMobile ? "px-4" : "px-4")}>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explore Monthly Trips</h2>
        
        <Tabs defaultValue="January" onValueChange={setActiveMonth}>
          <div className="mb-8">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-2 no-scrollbar"
            >
              <TabsList className={cn(
                "bg-wanderon-light rounded-full p-1.5 inline-flex min-w-max",
                isMobile ? "mx-auto w-max" : "mx-auto"
              )}>
                {monthlyTrips.map((monthData) => (
                  <TabsTrigger 
                    key={monthData.month} 
                    value={monthData.month}
                    className={cn(
                      "rounded-full whitespace-nowrap focus:z-10",
                      "data-[state=active]:bg-blue-600", 
                      "data-[state=active]:text-white",
                      "data-[state=active]:font-bold",
                      "data-[state=active]:shadow-md",
                      "data-[state=active]:ring-2",
                      "data-[state=active]:ring-blue-400",
                      "data-[state=inactive]:text-gray-600",
                      isMobile ? "text-sm px-3 py-1.5" : "px-4 py-2"
                    )}
                  >
                    {monthData.month}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          
          {monthlyTrips.map((monthData) => (
            <TabsContent key={monthData.month} value={monthData.month}>
              <TripCarousel 
                title=""
                description=""
                itemsPerView={isMobile ? 1 : 4}
              >
                {monthData.trips.map((trip) => (
                  <CarouselCard 
                    key={trip.id} 
                    {...trip}
                    month={monthData.month}
                    className="monthly-package"
                  />
                ))}
              </TripCarousel>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-10">
          <Link to="/monthly-packages">
            <Button variant="outline" className="border-wanderon-primary text-wanderon-primary hover:bg-wanderon-primary hover:text-white">
              View All Monthly Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatePackagesSection;
