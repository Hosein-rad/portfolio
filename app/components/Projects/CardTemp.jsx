"use client";

import { motion } from "motion/react";
import Image from "next/image";

const CardTemp = ({ card, setActive, id }) => {
  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="p-4 flex flex-col md:flex-row justify-between items-center  rounded-xl cursor-pointer"
    >
      <div className="flex gap-4 flex-col md:flex-row">
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={100}
            height={100}
            src={card.src}
            alt={card.title}
            className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
          />
        </motion.div>
        <div className="">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
          >
            {card.description}
          </motion.p>
        </div>
      </div>
      <motion.button
        layoutId={`button-${card.title}-${id}`}
        className="flex items-center justify-center rounded-full bg-white size-10 hover:bg-sky-600 hover:text-white text-black mt-4 md:mt-0 duration-200 cursor-pointer group"
      >
        {card.ctaText}
      </motion.button>
    </motion.div>
  );
};

export default CardTemp;
