
import React from 'react';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { useIsMobile } from '@/hooks/use-mobile';
import TripCarousel from '@/components/TripCarousel';

const CategorySection = () => {
  const isMobile = useIsMobile();

  const categoryCards = categories.map((category, index) => (
    <div key={index} className="aspect-[3/4]">
      <CategoryCard {...category} />
    </div>
  ));

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Explore Trip Categories</h2>
        
        {isMobile ? (
          <TripCarousel 
            title=""
            itemsPerView={1.2}
          >
            {categoryCards}
          </TripCarousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
