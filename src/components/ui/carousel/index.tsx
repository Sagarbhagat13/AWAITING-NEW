
/**
 * Carousel Components
 * 
 * A set of components for building customizable carousels/sliders.
 * Based on embla-carousel-react for smooth and responsive carousel experiences.
 * 
 * Basic usage:
 * ```jsx
 * <Carousel>
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *     <CarouselItem>Slide 3</CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious />
 *   <CarouselNext />
 * </Carousel>
 * ```
 * 
 * Advanced usage with options:
 * ```jsx
 * <Carousel
 *   opts={{ 
 *     loop: true,
 *     align: "center" 
 *   }}
 *   orientation="horizontal"
 *   onSelect={(index) => console.log(`Slide ${index} selected`)}
 * >
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious className="left-2" />
 *   <CarouselNext className="right-2" />
 * </Carousel>
 * ```
 */

import { type CarouselApi } from "./carousel-context"
import { Carousel } from "./carousel"
import { CarouselContent } from "./carousel-content"
import { CarouselItem } from "./carousel-item"
import { CarouselPrevious, CarouselNext } from "./carousel-navigation"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
