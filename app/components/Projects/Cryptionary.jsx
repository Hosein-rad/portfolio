"use client";

import Image from "next/image";
import { useState } from "react";

const Cryptionary = () => {
  const [moreText, setMoreText] = useState(false);

  return (
    <div className="flex flex-col justify-center">
      <div className="h-fit mx-2 md:mx-20 pt-10 flex flex-col-reverse md:flex-row text-black dark:text-white">
        <Image
          src={"/images/cryptionary.webp"}
          alt="Cryptionary"
          width={600}
          height={300}
          className="mt-3 md:mt-0 mx-auto md:mx-10 size-fit hover:scale-110 duration-500"
        />
        <div>
          <h1 className="pb-6 text-2xl md:text-4xl mx-10">
            {/* className="w-70 md:w-120 pb-5 ml-3 md:pb-8 text-2xl md:text-4xl" */}
            <a
              target="_blank"
              href="https://www.cryptionary.ir"
              className="text-4xl md:text-5xl hover:text-blue-700 dark:hover:text-blue-300 duration-200 animate-pulse hover:animate-none"
            >
              Cryptionary
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3 md:size-4 inline -mt-8"
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
            : <br className="md:hidden" />
            <span className="hidden md:inline">Real-time</span> Cryptocurrency
            Dashboard
          </h1>
          <p className="mx-5 md:w-110">
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
      <div className="h-fit mx-3 md:mx-30 pb-5 flex flex-col text-black dark:text-white">
        <div
          onClick={() => setMoreText(() => !moreText)}
          className=" md:w-fit ml-5 flex items-center justify-between cursor-pointer hover:underline rounded-2xl"
        >
          <p className="pt-4 md:ml-20 font-bold text-nowrap">
            Key Features & Technologies :
          </p>
          <Image
            src="/svgs/arrow-l.svg"
            alt="arrow"
            width={40}
            height={40}
            className={`p-1 pr-1.5 mx-5 mt-3 ${
              moreText ? "rotate-90" : "-rotate-90"
            } size-5 bg-white rounded-full duration-300`}
          />
        </div>
        {moreText && (
          <ul className="pt-2 mx-5 pl-5 md:pl-10 md:mx-20 list-disc text-sm md:text-[16px]">
            <li>
              <b>Data Integration</b> : Leverages <b>API</b>s from reputable
              sources like CoinGecko and Coinpaprika to fetch real-time
              cryptocurrency data, including prices, market capitalization, and
              trading volumes.
            </li>
            <li>
              <b>Interactive UI/UX</b> : Implements engaging user interface
              elements such as <i>animated gradient transitions</i>, a
              captivating hover effect with <i>mouse tracking text</i>, and a
              smooth
              <i>sliding sidebar</i> for enhanced navigation and user
              experience.
            </li>
            <li>
              <b>Resilience in Restricted Environments</b> : Designed to
              function effectively despite potential internet sanctions. To
              demonstrate full functionality, <u>static data</u> is utilized,
              ensuring all features are showcased even when live data fetching
              is not feasible.
            </li>
          </ul>
        )}
      </div>
      <div className="w-4/5 border-white dark:border-black border-b-6 border-dotted mask-x-from-50%"></div>
    </div>
  );
};

export default Cryptionary;
