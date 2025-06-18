
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

const ReviewNavButtons = ({ 
  onPrevious, 
  onNext, 
  canGoPrevious, 
  canGoNext 
}: NavButtonsProps) => {
  return (
    <>
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button 
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="rounded-full p-1.5 bg-white/80 text-gray-700 border border-gray-100 shadow-sm hover:bg-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button 
          onClick={onNext}
          disabled={!canGoNext}
          className="rounded-full p-1.5 bg-white/80 text-gray-700 border border-gray-100 shadow-sm hover:bg-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Next review"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default ReviewNavButtons;
