"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import DotsAndBoxes from "./dots-boxes/DotsAndBoxes";
import Calculator from "./Calculator/Calculator";
import { useTranslation } from "@/app/hooks/useTranslation";

const Other = () => {
  const [openDots, setOpenDots] = useState(false);
  const [openCalc, setOpenCalc] = useState(false);
  const { t } = useTranslation();

  // Disable body scroll when any modal is open
  useEffect(() => {
    if (openDots || openCalc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openDots, openCalc]);

  const restartGame = () => {
    setOpenDots(false);
    setTimeout(() => setOpenDots(true), 0);
  };

  // Shared overlay click handler (closes if clicking on the backdrop itself)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenDots(false);
      setOpenCalc(false);
    }
  };

  return (
    <div
      id="other"
      className="relative grid grid-cols-2 md:grid-cols-4 items-center justify-center md:gap-3 my-5 text-black dark:text-white"
    >
      {/* Calculator card */}
      <div
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:scale-110 duration-200"
        onClick={() => setOpenCalc(true)}
      >
        <Image
          src={"/svgs/calc-icon.svg"}
          alt="a calculator icon in svg"
          width={150}
          height={100}
          className="rounded-2xl mask-x-from-80% mask-y-from-90%"
        />

        <h3 className="text-center">{t("projects.other.calc.description")}</h3>
        <p className="text-sm">({t("projects.other.calc.tech")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="p-2 pl-3 mt-15 bg-white rounded-full size-10 hover:bg-sky-300 duration-200"
          >
            <path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path>
          </svg>
        </div>
      </div>

      {/* Dots & Boxes card */}
      <div
        className="relative mx-2 md:mx-5 flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:scale-110 duration-200"
        onClick={() => setOpenDots(true)}
      >
        <Image
          src={"/images/dots.webp"}
          alt="dots and boxes game image"
          width={150}
          height={100}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">{t("projects.other.dots.description")}</h3>
        <p className="text-sm">({t("projects.other.dots.tech")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="p-2 pl-3 mt-15 bg-white rounded-full size-10 hover:bg-sky-300 duration-200"
          >
            <path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path>
          </svg>
        </div>
      </div>

      {/* fitshow card - coded */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://fitshow.hosein.dev"
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl hover:scale-110 cursor-pointer duration-200"
      >
        <Image
          src={"/images/fitshow-coded.webp"}
          alt="Fitshow - A gym website in html & css"
          width={150}
          height={150}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">
          {t("projects.other.fitshow-coded.description")}
        </h3>
        <p className="text-sm">({t("projects.other.fitshow-coded.tech")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-2 mt-15 bg-white rounded-2xl size-10 hover:bg-sky-300 duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
          </svg>
        </div>
      </a>

      {/* fitshow card - Wordpress */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wpfitshow.hosein.dev"
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl hover:scale-110 cursor-pointer duration-200"
      >
        <Image
          src={"/images/wp.webp"}
          alt="fitshow - a gym website in Wordpress"
          width={150}
          height={150}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">
          {t("projects.other.fitshow-wp.description")}
        </h3>
        <p className="text-sm">({t("projects.other.fitshow-wp.tech")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-2 mt-15 bg-white rounded-2xl size-10 hover:bg-sky-300 duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
          </svg>
        </div>
      </a>

      {/* Horam Gallery Clone */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wp.hosein.dev"
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl hover:scale-110 cursor-pointer duration-200"
      >
        <Image
          src={"/images/horamGallery.webp"}
          alt="A clone landing page from HoramGallery.ir"
          width={150}
          height={150}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">{t("projects.other.horam.description")}</h3>
        <p className="text-sm">({t("projects.other.horam.tech")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-2 mt-15 bg-white rounded-2xl size-10 hover:bg-sky-300 duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
          </svg>
        </div>
      </a>

      {/* Horam Gallery Clone */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://signup-login-hdev.vercel.app/"
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl hover:scale-110 cursor-pointer duration-200"
      >
        <Image
          src={"/images/signinup.webp"}
          alt="Sign-in and sign-up Clone"
          width={150}
          height={150}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">{t("projects.other.sign.description")}</h3>
        <p className="text-sm">({t("projects.other.sign.tech")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-2 mt-15 bg-white rounded-2xl size-10 hover:bg-sky-300 duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
          </svg>
        </div>
      </a>

      {/* GitHub card */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.github.com/hosein-rad/"
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl cursor-pointer duration-200"
      >
        <Image
          src={"/images/github.webp"}
          alt="github image webp"
          width={150}
          height={150}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">
          {t("projects.other.github.description")}
        </h3>
        <p className="text-sm">({t("projects.other.github.tech")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="p-2 mt-15 bg-white rounded-2xl size-10 hover:bg-sky-300 duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
          </svg>
        </div>
      </a>

      {/* Portal for Dots & Boxes modal */}
      {openDots &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50"
            onClick={handleOverlayClick}
          >
            <div className="relative flex flex-col items-center rounded-4xl border bg-black/60 text-white animate-open-portal p-6">
              <h2 className="mt-2 text-4xl text-right border-b-2 border-dashed">
                {t("projects.other.dots.heading")}
              </h2>
              <button
                onClick={() => setOpenDots(false)}
                className="absolute top-3 right-3 block bg-transparent rounded-full text-2xl cursor-pointer hover:bg-red-600 hover:rotate-360 duration-500 z-200"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 border border-white rounded-full"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.1452 20.0004L27.9852 13.1604C28.3119 12.8354 28.3119 12.307 27.9852 11.982C27.6602 11.657 27.1336 11.657 26.8069 11.982L20.0002 18.787L13.1936 11.982C12.8686 11.657 12.3419 11.657 12.0152 11.982C11.6902 12.307 11.6902 12.8354 12.0152 13.1604L18.8569 20.0004L12.0152 26.8404C11.6902 27.167 11.6902 27.6937 12.0152 28.0204C12.1786 28.182 12.3919 28.2637 12.6052 28.2637C12.8186 28.2637 13.0319 28.182 13.1936 28.0204L20.0002 21.2137L26.8069 28.0204C26.9702 28.182 27.1836 28.2637 27.3969 28.2637C27.6102 28.2637 27.8236 28.182 27.9852 28.0204C28.3119 27.6937 28.3119 27.167 27.9852 26.8404L21.1452 20.0004Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
              <DotsAndBoxes onReset={restartGame} />
            </div>
          </div>,
          document.body
        )}

      {/* Portal for Calculator modal */}
      {openCalc &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50"
            onClick={handleOverlayClick}
          >
            <div className="relative flex flex-col items-center rounded-4xl border bg-black/60 text-white animate-open-portal p-6">
              <h2 className="mt-2 text-4xl text-right border-b-2 border-dashed">
                {t("projects.other.calc.heading")}
              </h2>
              <button
                onClick={() => setOpenCalc(false)}
                className="absolute top-3 right-3 block bg-transparent rounded-full text-2xl cursor-pointer hover:bg-red-600 hover:rotate-360 duration-500 z-200"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 border border-white rounded-full"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.1452 20.0004L27.9852 13.1604C28.3119 12.8354 28.3119 12.307 27.9852 11.982C27.6602 11.657 27.1336 11.657 26.8069 11.982L20.0002 18.787L13.1936 11.982C12.8686 11.657 12.3419 11.657 12.0152 11.982C11.6902 12.307 11.6902 12.8354 12.0152 13.1604L18.8569 20.0004L12.0152 26.8404C11.6902 27.167 11.6902 27.6937 12.0152 28.0204C12.1786 28.182 12.3919 28.2637 12.6052 28.2637C12.8186 28.2637 13.0319 28.182 13.1936 28.0204L20.0002 21.2137L26.8069 28.0204C26.9702 28.182 27.1836 28.2637 27.3969 28.2637C27.6102 28.2637 27.8236 28.182 27.9852 28.0204C28.3119 27.6937 28.3119 27.167 27.9852 26.8404L21.1452 20.0004Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
              <Calculator />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Other;
