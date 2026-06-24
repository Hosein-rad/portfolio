"use client";

import { useTranslation } from "@/app/hooks/useTranslation";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-10 md:mb-0 flex flex-col sm:flex-row items-center justify-center text-black dark:text-white text-sm md:text-lg font-bold gap-3">
      <div className="relative rounded-2xl bg-[linear-gradient(150deg,rgba(162,0,255,1)0%,rgba(0,0,0,0.5)40%)] dark:bg-[linear-gradient(150deg,rgba(123,50,180,1)0%,rgba(100,100,100,0.5)40%)] p-0.5 hover:shadow-[0_0_15px_rgba(200,54,145,0.7)] dark:hover:shadow-[0_0_15px_rgba(200,54,145,0.5)] duration-300">
        <a
          href={
            typeof window !== "undefined" && localStorage.lang === "fa"
              ? "https://hosein.dev/cv-fa.pdf"
              : "https://hosein.dev/cv-en.pdf"
          }
          target="_blank"
          className="w-40 md:w-50 h-10 md:h-15 bg-white dark:bg-gray-950 rounded-2xl flex items-center justify-center cursor-pointer gap-1 md:gap-2"
        >
          {t("hero.resume")}
          <svg
            className="size-5 inline animate-[bounce-with-pause_4s_ease_infinite]"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path>
            <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"></path>
          </svg>
        </a>
      </div>
      <div className="relative rounded-2xl bg-[linear-gradient(150deg,rgba(200,210,280,1)20%,rgba(250,250,250,1)100%)] dark:bg-[linear-gradient(150deg,rgba(40,50,110,1)20%,rgba(30,30,30,1)100%)] p-0.5 hover:shadow-[0_0_10px_rgba(100,100,200,1)] dark:hover:shadow-[0_0_10px_rgba(200,200,300,0.8)] duration-300">
        <a
          href="#projects"
          className="w-30 md:w-40 h-10 md:h-15 bg-transparent rounded-2xl flex items-center justify-center cursor-pointer group"
        >
          {t("hero.work")}
          <svg
            width="20px"
            height="20px"
            className="size-7 pb-1 group-hover:animate-[bounce-with-pause_2s_ease_infinite]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CTA;
