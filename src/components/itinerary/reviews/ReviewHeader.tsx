
import { renderStars } from './ReviewCard';

const ReviewHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        alt="Google"
        className="h-5 w-5"
      />
      <h3 className="text-sm font-medium text-gray-800">Google Reviews</h3>
      <div className="flex items-center">
        <span className="text-sm font-medium mr-1">4.9</span>
        <div className="flex">{renderStars(5)}</div>
      </div>
    </div>
  );
};

export default ReviewHeader;
