import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className="relative w-4/5 bg-amber-300/70 dark:bg-white/10 flex mask-x-from-60% mask-y-from-90% overflow-x-hidden group">
      <div className="w-fit h-[6em] z-10 translate-x-190 md:translate-x-250 animate-marquee">
        <CarouselItem />
      </div>
      <div className="h-[6em] translate-x-10 animate-marquee2">
        <CarouselItem />
      </div>
    </div>
  );
};

export default Carousel;
