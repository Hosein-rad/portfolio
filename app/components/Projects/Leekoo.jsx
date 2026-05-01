"use client";

import Image from "next/image";
import { useState } from "react";

const Leekoo = () => {
  const [moreText, setMoreText] = useState(false);

  return (
    <div className="flex flex-col justify-center">
      <div className="h-fit mx-auto md:mx-20 pt-10 flex flex-col-reverse md:flex-row text-black dark:text-white">
        <Image
          src={"/images/leekoo1.webp"}
          alt="Cryptionary"
          width={600}
          height={300}
          className="mx-auto my-4 md:mx-10 size-fit hover:scale-110 duration-500"
        />

        <div>
          <h1 className="pb-6 text-2xl md:text-4xl mx-10">
            <a
              target="_blank"
              href="https://www.leekoo.ir"
              className="text-4xl md:text-5xl hover:text-blue-700 dark:hover:text-blue-300 duration-200 animate-pulse hover:animate-none"
            >
              Leekoo
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
            : children & teenagers&apos; care center
          </h1>
          <p className="mx-5 md:w-110 text-justify">
            This project involved the development of a{" "}
            <u>
              <b>WordPress</b>
            </u>{" "}
            website for an educational/ entertainment center dedicated to
            children and teenagers. The site features a dynamic <b>gallery</b>,
            a dedicated section for <b>courses</b>, an integrated online{" "}
            <b>store</b>, and an{" "}
            <i>interactive homepage designed to engage visitors</i>. I was
            responsible for the majority of content creation and editing.
          </p>
        </div>
      </div>
      <div className="h-fit mx-3 md:mx-30 pb-5 flex flex-col text-black dark:text-white">
        <div
          onClick={() => setMoreText(() => !moreText)}
          className="md:w-fit ml-5 flex items-center justify-between cursor-pointer hover:underline rounded-2xl"
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
              Collaborated directly with the client to gather requirements and
              ensure project alignment with their objectives, resulting in{" "}
              <b>strong client satisfaction</b>.
            </li>
            <li>
              Managed extensive <u>content creation</u> and <u>editing</u>,
              ensuring accuracy, engagement, and brand consistency.
            </li>
            <li>
              Leveraged <b>JetEngine, ElementorPro, WooCommerce</b> plug-in and
              much more, to build interactive elements and customize the user
              experience for an engaging website.
            </li>
          </ul>
        )}
      </div>
      <div className="w-4/5 border-white dark:border-black border-b-6 border-dotted mask-x-from-50%"></div>
    </div>
  );
};

export default Leekoo;
