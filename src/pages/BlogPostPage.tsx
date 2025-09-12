
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingInfoButton from "@/components/FloatingInfoButton";
import MinimalHero from "@/components/MinimalHero";
import SEOHead from "@/components/SEOHead";
import BlogPostHeader from '@/components/blog/post/BlogPostHeader';
import BlogPostImage from '@/components/blog/post/BlogPostImage';
import BlogPostContent from '@/components/blog/post/BlogPostContent';
import LoadingState from '@/components/blog/post/LoadingState';
import NotFoundState from '@/components/blog/post/NotFoundState';
import { generateDummyContent } from '@/utils/blogUtils';
import { 
  monthlyDestinations, 
  travelGuides, 
  travelTips, 
  latestNews, 
  budgetDestinations, 
  offbeatPlaces,
  // newly added exports
  trendingExperiences,
  travelItineraries,
  sustainableTravel,
  soloTravel,
  familyTravel,
  adventureActivities,
  luxuryEscapes,
  festivalsEvents,
  travelPhotography,
  visaAndDocs,
  healthAndSafety,
  localCuisine,
  weekendGetaways,
  travelDeals,
  affordableWinterDomestic,
  affordableWinterInternational
} from '@/data/blogData';

// Combined blog data
const allBlogPosts = [
  ...monthlyDestinations,
  ...travelGuides,
  ...travelTips,
  ...latestNews,
  ...budgetDestinations,
  ...offbeatPlaces
  // newly added categories
  ,...trendingExperiences,
  ...travelItineraries,
  ...sustainableTravel,
  ...soloTravel,
  ...familyTravel,
  ...adventureActivities,
  ...luxuryEscapes,
  ...festivalsEvents,
  ...travelPhotography,
  ...visaAndDocs,
  ...healthAndSafety,
  ...localCuisine,
  ...weekendGetaways,
  ...travelDeals,
  ...affordableWinterDomestic,
  ...affordableWinterInternational
];

interface BlogPost {
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
  location?: string;
  temperature?: string;
  month?: string;
  content?: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the blog post based on the slug
    const foundPost = allBlogPosts.find(post => post.slug === slug);
    
    if (foundPost) {
      // Simulate additional content that would normally come from a backend
      const enrichedPost = {
        ...foundPost,
        content: generateDummyContent(foundPost.title, foundPost.description),
      };
      setPost(enrichedPost);
    }
    
    setLoading(false);
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return <LoadingState />;
  }

  if (!post) {
    return <NotFoundState />;
  }

  return (
    <>
      <SEOHead 
        title={post.title}
        description={post.description}
        keywords={`${post.category}, travel guide, ${post.location || 'travel destination'}, travel tips`}
        url={`${window.location.origin}/blog/${slug}`}
        type="article"
        image={post.image}
        publishedTime={new Date().toISOString()}
        modifiedTime={new Date().toISOString()}
      />
      
      <Navbar />
         
      <main className="flex-grow">
        <MinimalHero title={post.title} />
        
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-12">
          {/* Blog header */}
          <BlogPostHeader 
            title={post.title}
            category={post.category}
            location={post.location}
            temperature={post.temperature}
            month={post.month}
          />
          
          {/* Featured image */}
          <BlogPostImage image={post.image} title={post.title} />
          
          {/* Blog content */}
          <BlogPostContent 
            description={post.description}
            content={post.content || ''}
            category={post.category}
            location={post.location}
          />
        </div>
      </div>
      <Footer />
      </main>
      <FloatingInfoButton />
    </>
  );
};

export default BlogPostPage;
