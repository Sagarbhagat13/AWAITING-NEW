
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { useIsMobile } from "@/hooks/use-mobile";

interface StatsCounterProps {
  count: string;
  label: string;
  icon: LucideIcon;
  className?: string;
}

const StatsCounter = ({ count, label, icon: Icon, className }: StatsCounterProps) => {
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 3 : 4;
  
  // Extract the numeric value from the count (e.g., "300+" -> 300)
  const numericValue = parseInt(count.replace(/\D/g, ''));
  const suffix = count.replace(/[0-9]/g, '');
  
  // Use the counting animation hook
  const animatedCount = useCountAnimation({ 
    endValue: numericValue,
    duration: 2000,
    startDelay: 500
  });
  
  return (
    <div className={cn(
      "flex flex-col items-center justify-center text-center transition-all", 
      isMobile ? "scale-75" : "",
      className
    )}>
      <div className="flex items-center justify-center">
        <Icon className={`h-${iconSize} w-${iconSize} text-white`} strokeWidth={2} />
      </div>
      <div className="text-center mt-1">
        <p className="font-bold text-white text-sm md:text-base leading-none">
          {animatedCount}{suffix}
        </p>
        <p className="text-white/85 text-xs mt-0.5">{label}</p>
      </div>
    </div>
  );
};

export default StatsCounter;
