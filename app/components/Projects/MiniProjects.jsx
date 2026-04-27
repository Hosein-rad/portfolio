"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import DotsAndBoxes from "./dots-boxes/DotsAndBoxes";
import Calculator from "./Calculator/Calculator";

const MiniProjects = () => {
  const [openDots, setOpenDots] = useState(false);
  const [openCalc, setOpenCalc] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenDots(false);
      setOpenCalc(false);
    }
  };

  useEffect(() => {
    if (openDots || openCalc) {
      document.body.style.overflow = "clip";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openDots, openCalc]);

  const restartGame = () => {
    setOpenDots(() => false);
    setTimeout(() => setOpenDots(() => true), 0);
  };

  return (
    <div
      id="mini-projects"
      className="relative flex items-center justify-center gap-3 my-5 text-black dark:text-white"
    >
      {openDots && (
        <div
          id="dots-boxes"
          onClick={handleOverlayClick}
          className="absolute w-dvw md:w-[97dvw] h-[300dvh] backdrop-blur-md scroll-[none] z-100 duration-500"
        >
          {createPortal(
            <div className="fixed inset-y-7 inset-x-auto size-fit flex flex-col items-center rounded-4xl border backdrop-brightness-40 text-white z-101 animate-open-portal">
              <h2 className="mt-8 text-4xl text-right border-b-2 border-dashed">
                Dots & Boxes
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
            </div>,
            document.getElementById("mini-projects")
          )}
        </div>
      )}
      {openCalc && (
        <div
          id="dots-boxes"
          onClick={handleOverlayClick}
          className="absolute w-dvw md:w-[97dvw] h-[300dvh] backdrop-blur-md scroll-[none] z-100 duration-500"
        >
          {createPortal(
            <div className="fixed inset-y-2 inset-x-auto size-fit flex flex-col items-center rounded-4xl border backdrop-brightness-40 text-white z-101 animate-open-portal origin-left">
              <h2 className="mt-8 text-4xl text-right border-b-2 border-dashed">
                Calculator
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
            </div>,
            document.getElementById("mini-projects")
          )}
        </div>
      )}

      <div
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:scale-110 duration-200"
        onClick={() => setOpenCalc(true)}
      >
        <Image
          src={"/svgs/calc-icon.svg"}
          alt="a calculator icon in svg"
          width={150}
          height={100}
          className="rounded-2xl mask-x-from-80% mask-y-from-90% "
        />
        <h3 className="text-center">Mini Calculator</h3>
        <p className="text-sm">(3 days)</p>
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
      <div
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl cursor-pointer hover:scale-110 duration-200"
        onClick={() => setOpenDots(true)}
      >
        <Image
          src={"/images/dots.webp"}
          alt="dots and boxes game image"
          width={150}
          height={100}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">Dots & Boxes</h3>
        <p className="text-sm">(2 days)</p>
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
      <a
        target="_blank"
        href="http://www.github.com/hosein-rad/"
        className="relative mx-5 flex flex-col items-center justify-center rounded-2xl  hover:scale-110 cursor-pointer duration-200"
      >
        <Image
          src={"/images/github.webp"}
          alt="github image webp"
          width={150}
          height={150}
          className="m-2 mb-4 rounded-2xl"
        />
        <h3 className="text-center">Everything else ...</h3>
        <p className="text-sm">(day 1)</p>
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
    </div>
  );
};

export default MiniProjects;
