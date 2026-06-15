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
      className="relative flex items-center justify-center md:gap-3 my-5 text-black dark:text-white"
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
        <p className="text-sm">({t("projects.other.calc.days")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <Image
            src="/svgs/play.svg"
            alt="play button SVG"
            width={20}
            height={20}
            className="p-2 pl-3 mt-15 bg-white rounded-full size-10 hover:bg-sky-300 duration-200"
          />
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
        <p className="text-sm">({t("projects.other.dots.days")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <Image
            src="/svgs/play.svg"
            alt="play button SVG"
            width={20}
            height={20}
            className="p-2 pl-3 mt-15 bg-white rounded-full size-10 hover:bg-sky-300 duration-200"
          />
        </div>
      </div>

      {/* GitHub card */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.github.com/hosein-rad/"
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl hover:scale-110 cursor-pointer duration-200"
      >
        <Image
          src={"/images/github.webp"}
          alt="github image webp"
          width={150}
          height={150}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">{t("projects.other.github.description")}</h3>
        <p className="text-sm">({t("projects.other.github.days")})</p>
        <div className="absolute size-full inset-0 flex justify-center opacity-0 hover:opacity-100 backdrop-brightness-70 rounded-2xl duration-500">
          <Image
            src="/svgs/openLink.svg"
            alt="Open New Link SVG"
            width={20}
            height={20}
            className="p-2 mt-15 bg-white rounded-2xl size-10 hover:bg-sky-300 duration-200"
          />
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
                <Image
                  src={"/svgs/close.svg"}
                  alt="close X svg"
                  width={40}
                  height={40}
                  className="size-10 border border-white rounded-full"
                />
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
                <Image
                  src={"/svgs/close.svg"}
                  alt="close X svg"
                  width={40}
                  height={40}
                  className="size-10 border border-white rounded-full"
                />
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
