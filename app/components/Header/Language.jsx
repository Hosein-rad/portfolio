"use client";

import { useState } from "react";

function Language() {
  const [language, setLanguage] = useState("Eng");
  return (
    <>
      <div className="my-auto md:mx-2 bg-white border border-white text-black text-xs md:text-sm size-8 md:size-11 text-center rounded-full duration-500">
        <div
          onClick={() => {
            setLanguage("Eng");
          }}
          className={`h-1/2 py-0.5 rounded-t-full hover:text-sky-700 dark:hover:text-sky-200 text-black dark:text-white hover:underline cursor-pointer ${
            language == "Eng" ? "bg-sky-200 dark:bg-sky-800" : ""
          } duration-300`}
        >
          Eng
        </div>
        <div
          // onClick={() => {
          //   setLanguage("Fa");
          // }}
          className={`h-1/2 py-0.5 rounded-b-full hover:text-sky-700 hover:underline cursor-not-allowed
           ${language == "Fa" ? "bg-sky-300" : ""} duration-300`}
        >
          فا
        </div>
      </div>
    </>
  );
}

export default Language;
