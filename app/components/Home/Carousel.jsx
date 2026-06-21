import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className="relative -mt-3 md:mt-2 w-4/5 bg-transparent flex mask-x-from-60% mask-y-from-90% overflow-hidden group">
      <div className="flex min-w-max h-30 flex-nowrap animate-marquee">
        <CarouselItem />
        <CarouselItem />
      </div>
    </div>
  );
};

export default Carousel;
