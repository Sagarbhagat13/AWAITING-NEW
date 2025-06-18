
import React from 'react';
import { Button } from '@/components/ui/button';

interface PopularKeywordsProps {
  keywords: string[];
  handleKeywordClick: (keyword: string) => void;
}

const PopularKeywords = ({
  keywords,
  handleKeywordClick
}: PopularKeywordsProps) => {
  return (
    <div className="mt-4">
      <p className="text-sm text-gray-500 mb-2">Popular Searches:</p>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-xs border-gray-200 hover:bg-tripvidya-light hover:text-tripvidya-primary"
            onClick={() => handleKeywordClick(keyword)}
          >
            {keyword}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PopularKeywords;
