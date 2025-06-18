
import { User, Clock, MapPin, Thermometer, CalendarDays } from 'lucide-react';

interface BlogPostHeaderProps {
  title: string;
  category: string;
  location?: string;
  temperature?: string;
  month?: string;
}

const BlogPostHeader = ({
  title,
  category,
  location,
  temperature,
  month
}: BlogPostHeaderProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-tripvidya-primary text-white text-sm rounded-full">
          {category}
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-wanderon-dark mb-6">{title}</h1>
      
      <div className="flex flex-wrap gap-4 text-sm text-wanderon-gray mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>TripVidya Team</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        
        {location && (
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        )}
        {temperature && (
          <div className="flex items-center gap-1">
            <Thermometer className="h-4 w-4" />
            <span>{temperature}</span>
          </div>
        )}
        {month && (
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{month}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostHeader;
