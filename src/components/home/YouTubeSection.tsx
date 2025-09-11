import React, { useState } from 'react';
import { Play, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const YouTubeSection = () => {
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
            {!showVideo && !videoError ? (
              // Thumbnail with play button
              <div 
                className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center cursor-pointer group"
                onClick={handlePlayClick}
              >
                <div className="absolute inset-0 bg-black/20" />
                <Button
                  size="lg"
                  className="relative z-10 bg-white/90 text-black hover:bg-white rounded-full p-6 group-hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </Button>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">Click to play video</p>
                </div>
              </div>
            ) : videoError ? (
              // Error state
              <div className="flex items-center justify-center h-full bg-muted">
                <div className="text-center">
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Video temporarily unavailable</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => window.open('https://youtu.be/z7kZGh6Mxo8?si=JqeICcskEJpktxoY', '_blank')}
                  >
                    Watch on YouTube
                  </Button>
                </div>
              </div>
            ) : (
              // YouTube iframe
              <iframe
                src="https://www.youtube-nocookie.com/embed/jNQXAC9IVRw?autoplay=1&rel=0&modestbranding=1"
                title="Awaiting Adventures Channel"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
                
                onError={handleVideoError}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;