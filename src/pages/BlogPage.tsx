
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogTabs from "@/components/blog/BlogTabs";
import FloatingInfoButton from "@/components/FloatingInfoButton";
import MinimalHero from "@/components/MinimalHero";
import SEOHead from "@/components/SEOHead";

const BlogPage = () => {
  return (
    <>
      <SEOHead 
        title="Travel Blog - Awaiting Adventures"
        description="Discover travel insights, destination guides, and expert tips to make your next adventure unforgettable. Get inspired with our latest travel stories and recommendations."
        keywords="travel blog, destination guides, travel tips, travel stories, adventure blog, vacation planning, travel advice"
        url={`${window.location.origin}/blog`}
        type="website"
      />
      
      <Navbar />
      {/* <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-wanderon-dark mb-8">Travel Blog</h1>
            <p className="text-lg text-wanderon-gray mb-8">
              Discover travel insights, destination guides, and expert tips to make your next adventure unforgettable.
            </p>
            <BlogTabs /> */}
            <main className="flex-grow">
        <MinimalHero title="Travel Blog" />
        
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-wanderon-gray mb-8 text-center">
                Discover travel insights, destination guides, and expert tips to make your next adventure unforgettable.
              </p>
              <BlogTabs />
            </div>
          </div>
        </div>
      {/* </div> */}
       </main>
      <Footer />
      <FloatingInfoButton />
    </>
  );
};

export default BlogPage;
