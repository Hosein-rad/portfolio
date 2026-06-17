"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "@/app/hooks/useTranslation";

const About = () => {
  const [openStory, setOpenStory] = useState(false);
  const ref = useRef();
  const ref2 = useRef();
  const { t } = useTranslation();

  const setImage1 = () => {
    if (ref && ref2) {
      ref.current.style.opacity = "1";
      ref2.current.style.opacity = "0";
    }
  };
  const setImage2 = () => {
    if (ref.current && ref2.current) {
      ref.current.style.opacity = "0";
      ref2.current.style.opacity = "1";
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenStory(false);
    }
  };

  useEffect(() => {
    if (openStory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openStory]);

  return (
    <div
      id="about"
      className="h-fit pt-15 md:pt-25 bg-sky-200 dark:bg-sky-950 flex flex-col justify-center items-center text-black dark:text-white"
    >
      {openStory && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50"
        >
          {createPortal(
            <div className="fixed inset-0 mx-5 md:mx-30 my-5 md:my-10 backdrop-brightness-20 backdrop-blur-2xl text-white animate-open-portal origin-center overflow-hidden border-y-20 border-black/50 rounded-4xl leading-relaxed z-51">
              <Image
                src="/svgs/close.svg"
                alt="close btn"
                width={30}
                height={30}
                className="absolute right-0 mr-5 size-10 border border-white rounded-full bg-black opacity-60 hover:opacity-100 hover:bg-red-600 hover:rotate-360 cursor-pointer duration-500"
                onClick={() => setOpenStory(() => false)}
              />
              <div className="h-full py-12 md:py-15 px-3 md:px-20 text-inherit md:text-justify text-sm md:text-2xl overflow-y-scroll scroll-hidden space-y-3">
                <p className="indent-3">{t("about.myStory.1")}</p>
                <p className="inline-block my-3 text-gray-300/90 indent-3 italic">
                  {t("about.myStory.2")}
                </p>
                <p className="indent-3">{t("about.myStory.3")}</p>
                <p>
                  {t("about.myStory.4")}
                  <span className="inline font-bold bg-linear-45 from-red-400 to-blue-400 bg-clip-text text-transparent">
                    {t("about.myStory.programming")}
                  </span>
                </p>

                <p className="inline-block text-amber-200">
                  {t("about.myStory.5")}
                </p>
                <p className="indent-3">{t("about.myStory.6")}</p>
                <p>{t("about.myStory.7")}</p>
                <p className="indent-3">{t("about.myStory.8")}</p>
                <p className="indent-3">
                  {t("about.myStory.9")}
                  <span className="inline bg-gray-950 text-green-400 font-mono text-xs md:text-sm p-1 md:p-2 rounded-md border border-gray-700 shadow-inner">
                    {t("about.myStory.code")}
                  </span>
                </p>
                <p className="indent-3">{t("about.myStory.10")}</p>

                <p className="inline-block mt-2 p-3 md:p-7 bg-gray-900 rounded-xl shadow-lg indent-4">
                  {t("about.myStory.11")}
                  {t("about.myStory.12")}
                </p>
              </div>
            </div>,
            document.body
          )}
        </div>
      )}
      <h1 className="w-fit px-20 py-3 text-black dark:text-white text-center text-4xl md:text-6xl border-white dark:border-black border-b-4 mask-x-from-85%">
        {t("about.title")}
      </h1>
      <span
        dir="ltr"
        className="w-full block mt-5 text-lg md:text-2xl text-center font-normal"
      >
        <span className="text-cyan-700 dark:text-cyan-200">
          {t("about.subtitle1")}
        </span>{" "}
        <span className="hidden md:inline">|</span>
        <span className="text-fuchsia-700 dark:text-fuchsia-200 text-nowrap">
          {" "}
          {t("about.subtitle2")}
        </span>{" "}
      </span>

      {/* div containing 'my story' and short intro sections */}
      <div className="flex justify-between flex-col md:flex-row w-full md:w-4/5 overflow-hidden">
        {/* My Story section (picture and button) */}
        <div
          id="my-story"
          className="relative md:w-1/3 flex flex-col items-center md:mt-5 justify-start duration-300 group"
        >
          <div
            className="relative hover:scale-90 duration-300 cursor-pointer"
            onClick={() => setOpenStory(() => true)}
            onMouseEnter={setImage2}
            onMouseLeave={setImage1}
          >
            <Image
              ref={ref}
              src={"/images/me.webp"}
              alt="Hosein.dev"
              width={250}
              height={250}
              className="size-60 mt-8 mb-3 rounded-[60px] duration-300"
            />
            <Image
              ref={ref2}
              src={"/images/me-hover.webp"}
              alt="Hosein.dev"
              width={250}
              height={250}
              className="absolute top-0 size-60 mt-8 mb-3 rounded-[60px] opacity-0 duration-300"
            />
          </div>
          <button
            className={`px-5 py-3 my-2 font-bold text-blue-300 rounded-2xl bg-black cursor-pointer hover:scale-110 animate-pulse duration-300 text-shadow-white hover:text-black hover:bg-cyan-300 hover:animate-none`}
            onClick={() => setOpenStory(() => true)}
            onMouseEnter={setImage2}
            onMouseLeave={setImage1}
          >
            {t("about.myStory.button")}
          </button>
        </div>

        {/* Short introduction section */}
        <div className="md:w-[70%] mt-3 mx-2 md:mt-14 md:text-xl">
          <p>
            <b>{t("about.stack1.title")}</b>: {t("about.stack1.text")}
            <br />
            <b>{t("about.stack2.title")}</b>: {t("about.stack2.text")}
          </p>
          <p className="my-2">{t("about.body1")}</p>
          <p className="indent-3">{t("about.body2")}</p>
          <p className="my-2">{t("about.body3")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
