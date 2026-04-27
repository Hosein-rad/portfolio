"use client";

import { useState } from "react";
import { svgs } from "./svgs";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "dark";
    }
    return true;
  });

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {darkMode ? (
        <div
          onClick={() => {
            toggleDark();
            setDarkMode(!darkMode);
          }}
          className="my-auto md:mx-2 size-8 md:size-11 flex justify-center items-center rounded-full bg-sky-900 shadow-sky-800 md:shadow-[0_0_10px_7px] shadow-[0_0_7px_3px] active:scale-50 hover:scale-120 hover:rotate-90 duration-300"
        >
          {svgs.moon}
        </div>
      ) : (
        <div
          onClick={() => {
            toggleDark();
            setDarkMode(!darkMode);
          }}
          className="my-auto md:mx-2 size-8 md:size-11 flex justify-center items-center rounded-full bg-sky-200 shadow-cyan-200 shadow-[0_0_12px_5px] active:scale-50 hover:scale-120 hover:rotate-90 duration-300"
        >
          {svgs.sun}
        </div>
      )}
    </>
  );
}

export default DarkMode;
