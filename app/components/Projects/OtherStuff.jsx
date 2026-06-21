"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import Image from "next/image";
import CardTemp from "./CardTemp";
import getCards from "./getCards";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function OtherStuff() {
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
          <div className="fixed inset-0 grid place-items-center z-200">
            {/* card item outer div */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative w-full max-w-125  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
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
                className="flex absolute top-2 right-2 items-center justify-center bg-white rounded-full h-6 w-6"
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
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="overflow-y-scroll scroll-hidden">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
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
      <div className="flex flex-col gap-4 w-4/5 min-h-40 px-20">
        {/* 1st row */}
        <div className="w-full h-fit backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl text-nowrap">
          <CardTemp card={cards[0]} setActive={setActive} id={id} />
        </div>
        {/* 2nd row */}
        <div className="flex gap-4">
          <div className="self-end grow-2 hover:grow-4 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl text-nowrap">
            <CardTemp card={cards[1]} setActive={setActive} id={id} />
          </div>
          <div className="self-end grow hover:grow-2 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl text-nowrap">
            <CardTemp card={cards[2]} setActive={setActive} id={id} />
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex gap-4">
          <div className="self-end grow hover:grow-2 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl text-nowrap">
            <CardTemp card={cards[3]} setActive={setActive} id={id} />
          </div>
          <div className="self-end grow-2 hover:grow-4 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl text-nowrap">
            <CardTemp card={cards[4]} setActive={setActive} id={id} />
          </div>
        </div>
        {/* 4th row */}
        <div className="flex gap-4">
          <div className="flex-1 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl grow hover:grow-2 hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl text-nowrap">
            <CardTemp card={cards[5]} setActive={setActive} id={id} />
          </div>
          <div className="flex-1 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl grow hover:grow-2 hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl text-nowrap">
            <CardTemp card={cards[6]} setActive={setActive} id={id} />
          </div>
          <div className="flex-1 backdrop-brightness-150 dark:backdrop-brightness-25 border-3 border-black/50 dark:border-sky-300/50 rounded-2xl grow hover:grow-2 hover:bg-neutral-300 dark:hover:bg-neutral-800 duration-300 text-xl text-nowrap">
            <CardTemp card={cards[7]} setActive={setActive} id={id} />
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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
