"use client";

import { useTranslation } from "@/app/hooks/useTranslation";

function Language() {
  const { language, setLanguage } = useTranslation();

  return (
    <div
      className="relative flex items-center justify-center md:mx-2 bg-white text-black text-xs md:text-xl size-6 md:size-10 rounded-full hover:bg-sky-200 cursor-pointer duration-500"
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
