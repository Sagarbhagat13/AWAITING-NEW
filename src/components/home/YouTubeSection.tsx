import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactPlayer from 'react-player';

const YouTubeSection = () => {
  const [videoError, setVideoError] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleVideoError = () => setVideoError(true);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Our Adventures</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch real stories from our travel community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
            {!videoError ? (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=jNQXAC9IVRw"
                light={true}                 // show thumbnail; clicking this is a user gesture inside the player
                playing={hasInteracted}       // start playing after user clicks the preview
                controls
                width="100%"
                height="100%"
                muted={!hasInteracted}        // start muted to satisfy autoplay, then user can unmute
                onClickPreview={() => setHasInteracted(true)}
                onError={handleVideoError}
                config={{
                  youtube: {
                    playerVars: {
                      playsinline: 1,
                      modestbranding: 1,
                      rel: 0,
                      // autoplay controlled by `playing` prop
                    }
                  }
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-muted">
                <div className="text-center">
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Video temporarily unavailable</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => window.open('https://www.youtube.com/watch?v=jNQXAC9IVRw', '_blank')}
                  >
                    Watch on YouTube
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
