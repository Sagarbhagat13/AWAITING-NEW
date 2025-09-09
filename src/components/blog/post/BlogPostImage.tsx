
interface BlogPostImageProps {
  image: string;
  title: string;
}

const BlogPostImage = ({ image, title }: BlogPostImageProps) => {
  return (
     <div className="w-full mb-12 px-4 md:px-8">
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
