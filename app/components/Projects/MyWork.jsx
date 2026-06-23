"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import Image from "next/image";
import CardTemp from "./CardTemp";
import getCards from "./getCards";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function MyWork() {
  const { t } = useTranslation();
  const cards = getCards(t);
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full backdrop-blur-md z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-x-auto inset-y-0 grid place-items-center w-[90dvw] z-200">
            {/* card item outer div */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative w-9/10 md:w-full md:max-w-125  h-fit max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              {/* close Button */}
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 items-center justify-center bg-white/60 rounded-full size-fit"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-auto mx-auto h-40 sm:h-60 md:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="overflow-y-scroll scroll-hidden">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="my-3 font-bold text-xl md:text-2xl text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <div className="space-y-2">
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      onClick={() => setActive(null)}
                      target={active.ctaLink === "#" ? "" : "_blank"}
                      className="flex items-center justify-center rounded-full bg-white size-7 sm:size-10 hover:bg-sky-600 hover:text-white text-black mt-4 md:mt-0 duration-200 cursor-pointer shrink-0 group"
                    >
                      {active.ctaText}
                    </motion.a>
                    {active.ctaLink2 && (
                      <motion.a
                        layoutId={`button-${active.title}-${id}-2`}
                        href={active.ctaLink2}
                        onClick={() => setActive(null)}
                        target={active.ctaLink2 === "#" ? "" : "_blank"}
                        className="flex items-center justify-center rounded-full bg-white size-7 sm:size-10 hover:bg-sky-600 hover:text-white text-black mt-4 md:mt-0 duration-200 cursor-pointer shrink-0 group"
                      >
                        {active.cta2Text}
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm lg:text-base h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 scroll-hidden"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* grid layout */}
      <div className="flex flex-col gap-4 w-full md:w-4/5 min-h-40 px-3 sm:px-20">
        {/* 1st row */}
        <div className="self-center lg:w-9/10 hover:w-full lg:h-40 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl overflow-hidden">
          <CardTemp card={cards[0]} setActive={setActive} id={id} />
        </div>
        {/* 2nd row */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:h-40 flex-5 hover:flex-6 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl overflow-hidden">
            <CardTemp card={cards[1]} setActive={setActive} id={id} />
          </div>
          <div className="lg:h-40 flex-4 hover:flex-5 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl overflow-hidden">
            <CardTemp card={cards[2]} setActive={setActive} id={id} />
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:h-40 flex-4 hover:flex-5 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl overflow-hidden ">
            <CardTemp card={cards[3]} setActive={setActive} id={id} />
          </div>
          <div className="lg:h-40 flex-5 hover:flex-6 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl overflow-hidden ">
            <CardTemp card={cards[4]} setActive={setActive} id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-7 sm:size-10 rounded-full text-2xl text-black cursor-pointer hover:bg-red-600 hover:rotate-360 duration-500"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.1452 20.0004L27.9852 13.1604C28.3119 12.8354 28.3119 12.307 27.9852 11.982C27.6602 11.657 27.1336 11.657 26.8069 11.982L20.0002 18.787L13.1936 11.982C12.8686 11.657 12.3419 11.657 12.0152 11.982C11.6902 12.307 11.6902 12.8354 12.0152 13.1604L18.8569 20.0004L12.0152 26.8404C11.6902 27.167 11.6902 27.6937 12.0152 28.0204C12.1786 28.182 12.3919 28.2637 12.6052 28.2637C12.8186 28.2637 13.0319 28.182 13.1936 28.0204L20.0002 21.2137L26.8069 28.0204C26.9702 28.182 27.1836 28.2637 27.3969 28.2637C27.6102 28.2637 27.8236 28.182 27.9852 28.0204C28.3119 27.6937 28.3119 27.167 27.9852 26.8404L21.1452 20.0004Z"
        fill="currentColor"
      ></path>
    </motion.svg>
  );
};
