
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFoundState = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-wanderon-dark mb-4">Blog Post Not Found</h1>
            <p className="text-wanderon-gray mb-6">Sorry, the blog post you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundState;
