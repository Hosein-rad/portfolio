"use client";

import { useEffect, useRef } from "react";

const Indicator = () => {
  const indicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      console.log(scrollPercent);

      if (indicatorRef.current) {
        if (scrollPercent < 0.09) {
          indicatorRef.current.className =
            "absolute translate-x-12.5 md:translate-x-43.5 rounded-[100%] w-13 h-7 md:w-25 md:h-12 bg-white dark:bg-black z-11 duration-500";
        } else if (scrollPercent >= 0.09 && scrollPercent < 0.7) {
          indicatorRef.current.className =
            "absolute translate-x-28.5 md:translate-x-94 rounded-[100%] w-13 h-7 md:w-25 md:h-12 bg-white dark:bg-black z-11 duration-500";
        } else if (scrollPercent >= 0.7 && scrollPercent < 0.93) {
          indicatorRef.current.className =
            "absolute translate-x-45 md:translate-x-146 rounded-[100%] w-13 h-7 md:w-25 md:h-12 bg-white dark:bg-black z-11 duration-500";
        } else if (scrollPercent > 0.95) {
          indicatorRef.current.className =
            "absolute translate-x-61 md:translate-x-196 rounded-[100%] w-13 h-7 md:w-25 md:h-12 bg-white dark:bg-black z-11 duration-500";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="absolute translate-x-12.5 md:translate-x-43.5 rounded-[100%] w-13 h-7 md:w-25 md:h-12 bg-white dark:bg-black z-11 duration-500"
    ></div>
  );
};

export default Indicator;
