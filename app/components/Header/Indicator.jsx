"use client";

import { useEffect, useRef } from "react";

const Indicator = () => {
  const indicatorRef = useRef(null);
  const currentPosition = useRef("translate-x-42");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newPosition;

      if (scrollY < 400) {
        newPosition = "translate-x-11 md:translate-x-39";
      } else if (scrollY >= 450 && scrollY < 2050) {
        newPosition = "translate-x-85";
      } else if (scrollY >= 2050 && scrollY < 2500) {
        newPosition = "translate-x-131";
      } else {
        newPosition = "translate-x-176.5";
      }

      if (newPosition !== currentPosition.current) {
        const el = indicatorRef.current;
        el.classList.remove(currentPosition.current);
        el.classList.add(newPosition);
        currentPosition.current = newPosition;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="absolute translate-x-11 md:translate-x-39 rounded-[100%] w-11 h-7 md:w-25 md:h-12 bg-white dark:bg-black z-11 duration-500"
    ></div>
  );
};

export default Indicator;
