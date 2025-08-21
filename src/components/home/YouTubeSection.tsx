import React from 'react';
import { Play } from 'lucide-react';

const YouTubeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header /*/}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Adventures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch real stories from our travel community
          </p>
        </div>

        {/* YouTube Video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            <iframe
              src="https://youtu.be/HYgPrB0Jcss?si=4EYF18JWP91nXmLo"
              title="Awaiting Adventures Channel"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
