
/**
 * Carousel Components
 * 
 * This file re-exports all carousel components from the carousel folder
 * for easy importing. Instead of importing from individual files,
 * users can import all components from this single file.
 * 
 * @example
 * ```jsx
 * import { 
 *   Carousel, 
 *   CarouselContent, 
 *   CarouselItem,
 *   CarouselPrevious,
 *   CarouselNext
 * } from "@/components/ui/carousel"
 * ```
 */

// Re-export all components from the carousel folder
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel/index"
