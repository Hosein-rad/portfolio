import Stack from "./Stack";

const Home = () => {
  return (
    <>
      <div className="w-full mt-7 md:mt-20 mb-3 md:mb-5 h-[13em] text-black dark:text-white flex flex-col  items-center justify-center pointer-events-none select-none">
        <div className="flex">
          <p className="text-4xl md:text-7xl md:mx-4">Hi, I&apos;m</p>
          <h1 className="text-6xl ml-2 mt-5 md:text-9xl font-['baloo-semibold']">
            Hosein
          </h1>
        </div>
        <p className="text-xl md:text-3xl w-3/4 md:w-1/2 text-right">
          a web developer
        </p>
      </div>
      <Stack />
    </>
  );
};

export default Home;
