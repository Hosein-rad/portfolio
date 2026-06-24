"use client";

import { motion } from "motion/react";
import Image from "next/image";

const CardTemp = ({ card, setActive, id }) => {
  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="p-4 flex flex-col md:flex-row justify-between items-center  rounded-xl cursor-pointer "
    >
      <div className="flex gap-4 flex-row overflow-hidden">
        <motion.div
          layoutId={`image-${card.title}-${id}`}
          className="shrink-0 "
        >
          <Image
            width={100}
            height={100}
            src={card.src}
            alt={card.title}
            className="size-15 md:side-20 lg:size-30 rounded-lg object-cover object-top"
          />
        </motion.div>
        <div className="">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="max-w-150 font-medium text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl line-clamp-2"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="px-2 mt-3 mx-2  w-9/10 text-neutral-600 dark:text-neutral-400 text-sm sm:text-lg md:text-xl line-clamp-2 sm:line-clamp-1"
          >
            {card.description}
          </motion.p>
        </div>
      </div>
      <div className="w-full md:w-fit -mt-5 sm:-mt-3 lg:mt-0 flex flex-row md:flex-col md:gap-2 items-start md:items-center">
        <motion.a
          href={card.ctaLink}
          target={card.ctaLink === "#" ? "" : "_blank"}
          layoutId={`button-${card.title}-${id}`}
          className="flex items-center justify-center rounded-full bg-blue-100 dark:bg-white size-10 hover:bg-sky-600 hover:text-white text-black mt-4 md:mt-0 duration-200 cursor-pointer shrink-0 group"
        >
          {card.ctaText}
        </motion.a>
        {card.ctaLink2 && (
          <motion.a
            href={card.ctaLink2}
            target={card.ctaLink2 === "#" ? "" : "_blank"}
            layoutId={`button-${card.title}-${id}-2`}
            className="flex items-center justify-center rounded-full bg-blue-100 dark:bg-white size-10 hover:bg-sky-600 hover:text-white text-black mt-4 md:mt-0 duration-200 cursor-pointer shrink-0 group"
          >
            {card.cta2Text}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default CardTemp;
