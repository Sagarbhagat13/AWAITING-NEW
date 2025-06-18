
import React from 'react';

interface MinimalHeroProps {
  title: string;
}

const MinimalHero = ({ title }: MinimalHeroProps) => {
  return (
    <section className="relative h-[400px] md:h-[600px] flex items-center justify-center -mt-24 w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 text-center z-10 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
      </div>
    </section>
  );
};

export default MinimalHero;
