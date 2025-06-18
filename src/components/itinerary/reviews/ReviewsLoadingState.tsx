
import { Skeleton } from '@/components/ui/skeleton';

const ReviewsLoadingState = () => {
  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex-none w-[300px]">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
};

export default ReviewsLoadingState;
