import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className="relative w-4/5 bg-teal-200/50 dark:bg-white/10 flex mask-x-from-60% mask-y-from-90% overflow-hidden group">
      {/* Add min-w-max and flex-nowrap to keep everything in one row */}
      <div className="flex min-w-max h-25 flex-nowrap animate-marquee">
        <CarouselItem />
        <CarouselItem />
      </div>
    </div>
  );
};

export default Carousel;
