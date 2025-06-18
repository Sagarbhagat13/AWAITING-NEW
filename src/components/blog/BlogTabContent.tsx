
import React from 'react';
import BlogCard from './BlogCard';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

interface BlogItem {
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  temperature?: string;
  month?: string;
  slug: string;
}

interface BlogTabContentProps {
  items: BlogItem[];
}

const BlogTabContent: React.FC<BlogTabContentProps> = ({ items }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.slug} className="aspect-auto">
            <BlogCard {...item} />
          </div>
        ))}
      </div>
      
      {items.length > 9 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default BlogTabContent;
