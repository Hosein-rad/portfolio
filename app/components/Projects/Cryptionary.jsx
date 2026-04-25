import Image from "next/image";

const Cryptionary = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-fit mx-20 pt-10 flex text-black dark:text-white">
        <Image
          src={"/images/cryptionary.webp"}
          alt="Cryptionary"
          width={600}
          height={300}
          className="mx-10 size-fit hover:scale-120 duration-500 cursor-zoom-in"
        />
        <div>
          <h1 className="pb-8 text-4xl">
            <a
              target="_blank"
              href="https://www.cryptionary.ir"
              className="text-5xl hover:text-blue-700 dark:hover:text-blue-300 duration-200 animate-pulse hover:animate-none"
            >
              Cryptionary
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline -mt-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
              </svg>
            </a>
            : Real-time Cryptocurrency Dashboard
          </h1>
          <p className="pr-10 text-justify">
            This project is a dynamic cryptocurrency tracking website developed
            using{" "}
            <u>
              <b>React.js</b>
            </u>{" "}
            and{" "}
            <u>
              <b>TailwindCSS</b>
            </u>
            . It&apos;s an actively evolving project with a roadmap for
            incorporating advanced features and styles.
          </p>
        </div>
      </div>
      <div className="h-fit mx-30 pb-5 flex flex-col text-black dark:text-white">
        <p className="pt-4 font-bold">Key Features & Technologies :</p>
        <ul className="pt-2 pl-10 list-disc text-justify">
          <li>
            <b>Data Integration</b> : Leverages <b>API</b>s from reputable
            sources like CoinGecko and Coinpaprika to fetch real-time
            cryptocurrency data, including prices, market capitalization, and
            trading volumes.
          </li>
          <li>
            <b>Interactive UI/UX</b> : Implements engaging user interface
            elements such as <i>animated gradient transitions</i>, a captivating
            hover effect with <i>mouse tracking text</i>, and a smooth
            <i>sliding sidebar</i> for enhanced navigation and user experience.
          </li>
          <li>
            <b>Resilience in Restricted Environments</b> : Designed to function
            effectively despite potential internet sanctions. To demonstrate
            full functionality, <u>static data</u> is utilized, ensuring all
            features are showcased even when live data fetching is not feasible.
          </li>
        </ul>
      </div>
      <div className="w-4/5 border-white dark:border-black border-b-6 border-dotted mask-x-from-50%"></div>
    </div>
  );
};

export default Cryptionary;
