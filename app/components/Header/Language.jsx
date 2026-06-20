"use client";

import { useTranslation } from "@/app/hooks/useTranslation";

function Language() {
  const { language, setLanguage } = useTranslation();

  return (
    <div
      className="size-5 md:pt-1 md:size-8 relative flex items-center justify-center md:mx-2 bg-sky-700 shadow-sky-800 dark:bg-sky-400 dark:shadow-sky-400  md:shadow-[0_0_12px_3px] shadow-[0_0_7px_3px] text-white text-[10px] md:text-xl rounded-full hover:scale-120 cursor-pointer duration-300"
      onClick={() =>
        language === "fa" ? setLanguage("en") : setLanguage("fa")
      }
    >
      <div
        className={`absolute size-full flex items-center justify-center ${
          language == "en" ? "opacity-0" : "opacity-100"
        } duration-300`}
      >
        EN
      </div>
      <div
        className={`absolute pt-1 size-full flex items-center justify-center ${
          language == "fa" ? "opacity-0" : "opacity-100"
        } duration-300`}
      >
        فا
      </div>
    </div>
  );
}

export default Language;
