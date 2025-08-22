React from 'react';
import { Play, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const YouTubeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 classNaimportme="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Watch Our Travel Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the magic of travel through our curated video content. Get inspired for your next adventure!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* YouTube Channel Embed */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU7454&amp;controls=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0"
                title="Awaiting Adventures YouTube Channel"
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Youtube className="h-8 w-8" />
              <span className="text-lg font-semibold">@awaitingadventures7454</span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground">
              Join Our Adventure Community
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Subscribe to our YouTube channel for exclusive travel vlogs, destination guides, 
              and behind-the-scenes content from our amazing trips. Get insider tips and 
              inspiration for your next journey!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Play className="h-5 w-5 text-primary" />
                <span className="text-foreground">Latest travel vlogs and guides</span>
              </div>
              <div className="flex items-center gap-3">
                <Play className="h-5 w-5 text-primary" />
                <span className="text-foreground">Exclusive destination content</span>
              </div>
              <div className="flex items-center gap-3">
                <Play className="h-5 w-5 text-primary" />
                <span className="text-foreground">Travel tips from experts</span>
              </div>
            </div>
            
            <Button 
              onClick={() => window.open('https://www.youtube.com/@awaitingadventures7454', '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;