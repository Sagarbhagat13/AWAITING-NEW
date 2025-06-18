
import * as React from "react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./carousel-context"

/**
 * CarouselItem component
 * 
 * Represents an individual slide in the carousel.
 * Must be used inside a CarouselContent component.
 * 
 * @example
 * ```jsx
 * <Carousel>
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *   </CarouselContent>
 * </Carousel>
 * ```
 */
const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        // Make sure we have consistent padding that doesn't get cropped
        orientation === "horizontal" ? "pr-4" : "pb-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

export { CarouselItem }
