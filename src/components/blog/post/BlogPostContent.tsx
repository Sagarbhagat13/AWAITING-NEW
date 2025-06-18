
import { Tag } from 'lucide-react';

interface BlogPostContentProps {
  description: string;
  content: string;
  category: string;
  location?: string;
}

const BlogPostContent = ({ 
  description, 
  content, 
  category, 
  location 
}: BlogPostContentProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-wanderon-gray mb-8 leading-relaxed">{description}</p>
        
        {/* Render the content sections with proper styling for paragraphs and headings */}
        <div 
          className="blog-content" 
          dangerouslySetInnerHTML={{ 
            __html: content
              // Make headings bold
              .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
              // Ensure paragraphs have proper spacing and formatting
              .replace(/<p>/g, '<p class="mb-6 leading-relaxed">') || '' 
          }}
        />
      </div>
      
      {/* Tags */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="h-5 w-5 text-wanderon-gray" />
          {['travel', 'adventure', category.toLowerCase(), location?.toLowerCase() || 'destinations'].map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-wanderon-gray text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
