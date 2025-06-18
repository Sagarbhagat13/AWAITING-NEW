
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

/**
 * Type definition for the Carousel API provided by embla-carousel
 */
type CarouselApi = UseEmblaCarouselType[1]

/**
 * Types for the parameters to be passed to the useEmblaCarousel hook
 */
type CarouselOptions = NonNullable<Parameters<typeof useEmblaCarousel>[0]>
type CarouselPlugin = NonNullable<Parameters<typeof useEmblaCarousel>[1]>

/**
 * Context props that will be shared across all carousel components
 */
interface CarouselContextProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  onSelect?: (index: number) => void
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

/**
 * React context for sharing carousel state and methods across components
 */
const CarouselContext = React.createContext<CarouselContextProps | null>(null)

/**
 * Hook to access carousel context
 * @returns The carousel context
 * @throws Error if used outside of a Carousel component
 */
export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

export { 
  type CarouselApi, 
  CarouselContext,
  type CarouselContextProps, 
  type CarouselOptions, 
  type CarouselPlugin
}
