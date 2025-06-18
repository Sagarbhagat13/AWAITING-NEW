
interface BlogPostImageProps {
  image: string;
  title: string;
}

const BlogPostImage = ({ image, title }: BlogPostImageProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="rounded-xl overflow-hidden shadow-md">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
  );
};

export default BlogPostImage;
