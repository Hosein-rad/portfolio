import Stack from "./Stack";

const Home = () => {
  return (
    <>
      <div className="w-full mt-20 mb-5 h-[13em] text-black dark:text-white flex flex-col  items-center justify-center pointer-events-none select-none smooth-theme">
        <div className="flex">
          <p className="text-7xl mx-4">Hi, I&apos;m</p>
          <h1 className="text-9xl font-['baloo-semibold']">Hosein</h1>
        </div>
        <p className="text-3xl w-1/2 text-right">a web developer</p>
      </div>
      <Stack />
    </>
  );
};

export default Home;
