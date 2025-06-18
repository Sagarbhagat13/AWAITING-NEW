
import { cn } from '@/lib/utils';

interface DotIndicatorsProps {
  total: number;
  currentIndex: number;
  onClick: (index: number) => void;
}

const ReviewDotIndicators = ({ total, currentIndex, onClick }: DotIndicatorsProps) => {
  return (
    <div className="flex justify-center gap-1.5 mt-3">
      {Array(total).fill(0).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={cn(
            "w-1.5 h-1.5 rounded-full transition-all",
            index === currentIndex ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
          )}
          aria-label={`Go to review ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ReviewDotIndicators;
