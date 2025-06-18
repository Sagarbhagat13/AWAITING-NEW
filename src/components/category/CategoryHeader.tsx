
import React from 'react';

interface CategoryHeaderProps {
  title: string;
  description: string;
}

const CategoryHeader = ({ title, description }: CategoryHeaderProps) => {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{title}</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
    </div>
  );
};

export default CategoryHeader;
