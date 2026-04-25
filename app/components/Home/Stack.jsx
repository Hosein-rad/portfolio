import Carousel from "./Carousel";

const Stack = () => {
  return (
    <div className="h-[10em] bg-linear-to-b from-stone-300 to-sky-200 dark:from-black dark:to-sky-950 flex flex-col items-center justify-around select-none">
      <h3 className="text-black dark:text-white text-2xl">
        Technologies I&apos;ve worked with :
      </h3>
      <Carousel />
    </div>
  );
};

export default Stack;
