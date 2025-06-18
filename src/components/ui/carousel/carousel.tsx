
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"
import { CarouselContext, type CarouselApi, type CarouselOptions, type CarouselPlugin } from "./carousel-context"

/**
 * Carousel component props
 * @property {CarouselOptions} opts - Options for the embla carousel
 * @property {CarouselPlugin} plugins - Plugins for the embla carousel
 * @property {"horizontal" | "vertical"} orientation - Direction of the carousel scroll
 * @property {function} setApi - Callback to get access to the carousel API
 * @property {function} onSelectChange - Callback fired when a slide is selected
 */
interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  onSelectChange?: (index: number) => void
}

/**
 * Carousel component
 * 
 * The root component that initializes the embla carousel and provides
 * context to all child components. This component should wrap all other
 * carousel components.
 * 
 * @example
 * ```jsx
 * <Carousel>
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious />
 *   <CarouselNext />
 * </Carousel>
 * ```
 */
const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      onSelectChange,
      ...props
    },
    ref
  ) => {
    // Specify the correct literal type 'start' for align
    const defaultOptions: CarouselOptions = {
      align: "start" as const, // Using 'as const' to ensure correct literal type
      loop: true,
      skipSnaps: false,
      dragFree: true,
      startIndex: 0, // Always start from the first slide
    }
    
    // Create a properly typed options object
    const options: CarouselOptions = {
      ...defaultOptions,
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    }
    
    const [carouselRef, api] = useEmblaCarousel(options, plugins)
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    /**
     * Callback for slide selection events
     * Updates scroll button states and calls onSelect if provided
     */
    const onSelectCallback = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
      
      // Call the onSelect prop with the current index
      if (onSelectChange) {
        onSelectChange(api.selectedScrollSnap())
      }
    }, [onSelectChange])

    /**
     * Scroll to the first slide when component mounts
     */
    React.useEffect(() => {
      if (api) {
        api.scrollTo(0, true)
      }
    }, [api])

    /**
     * Scroll to the previous slide
     */
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    /**
     * Scroll to the next slide
     */
    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    /**
     * Handle keyboard navigation
     */
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    // Expose the API through the setApi callback
    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    // Set up event listeners for the carousel
    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelectCallback(api)
      api.on("reInit", onSelectCallback)
      api.on("select", onSelectCallback)

      return () => {
        api?.off("select", onSelectCallback)
      }
    }, [api, onSelectCallback])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts: options,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          onSelect: onSelectChange,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

export { Carousel }
