"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";

const Cryptionary = () => {
  const [moreText, setMoreText] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center">
      <div className="h-fit mx-2 lg:mx-20 pt-10 flex flex-col-reverse md:flex-row text-black dark:text-white">
        <a
          href="https://cryptionary.hosein.dev"
          target="_blank"
          className="mt-3 md:mt-0 mx-auto md:mx-10"
        >
          <Image
            src={"/images/cryptionary.webp"}
            alt="Cryptionary"
            width={600}
            height={300}
            className="max-w-full h-auto md:w-150 mt-3 md:mt-0 mx-auto md:mx-10 hover:scale-110 duration-500"
          />
        </a>
        <div>
          <h1 className="pb-6 text-2xl md:text-4xl mx-10 duration-800">
            <a
              target="_blank"
              href="https://cryptionary.hosein.dev"
              className="text-4xl md:text-5xl hover:text-blue-700 dark:hover:text-blue-300 duration-200 animate-pulse hover:animate-none"
            >
              {t("projects.centerpiece.title")}
              <svg
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
            {t("projects.centerpiece.postTitle")}{" "}
          </h1>
          <p className="mx-5 text-sm md:text-xl md:mx-10 md:w-110 duration-800">
            {t("projects.centerpiece.description")} <br />
            {t("projects.centerpiece.srcTitle")}:{" "}
            <a
              href="https://github.com/Hosein-rad/Cryptionary"
              target="_blank"
              className="underline text-blue-700 dark:text-blue-200 duration-1000"
            >
              {t("projects.centerpiece.sourceCode")}
            </a>
          </p>
        </div>
      </div>

      {/* the features dropdown */}
      <div className="h-fit mx-3 md:mx-10 lg:mx-30 pb-5 flex flex-col text-black dark:text-white duration-500">
        <div
          onClick={() => setMoreText(!moreText)}
          className="md:w-fit mx-5 md:mx-10 flex items-center justify-center cursor-pointer hover:underline rounded-2xl text-sm md:text-xl"
        >
          <p className="pt-4 font-bold text-nowrap">
            {t("projects.centerpiece.featuresTitle")} :
          </p>
          <svg
            width="12"
            height="12"
            viewBox="0 0 6 9"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            className={`p-1 pr-1.5 mx-5 mt-3 ${
              moreText ? "rotate-90" : "-rotate-90"
            } size-5 bg-white rounded-full duration-300`}
          >
            <path
              d="M4.97172 8.65283C5.15999 8.65283 5.32735 8.59007 5.45287 8.46456C5.72482 8.21352 5.72482 7.77421 5.45287 7.52317L2.58688 4.63627L5.45287 1.77028C5.72482 1.51924 5.72482 1.07993 5.45287 0.828896C5.20183 0.556941 4.76252 0.556941 4.51148 0.828896L1.16435 4.17603C0.89239 4.42707 0.89239 4.86638 1.16435 5.11742L4.51148 8.46456C4.637 8.59007 4.80436 8.65283 4.97172 8.65283Z"
              fill="#000"
            ></path>
          </svg>
        </div>
        {/* Collapsible grid wrapper */}
        <div className={`collapsible-grid ${moreText ? "open" : ""}`}>
          <div>
            <ul className="pt-2 px-5 md:px-[3dvw] list-disc text-sm md:text-lg space-y-2 duration-500">
              <li>
                <b>{t("projects.centerpiece.featuresList.1.title")}</b> :{" "}
                {t("projects.centerpiece.featuresList.1.body")}
              </li>
              <li>
                <b>{t("projects.centerpiece.featuresList.2.title")}</b> :{" "}
                {t("projects.centerpiece.featuresList.2.body")}
              </li>
              <li>
                <b>{t("projects.centerpiece.featuresList.3.title")}</b> :{" "}
                {t("projects.centerpiece.featuresList.3.body")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cryptionary;
