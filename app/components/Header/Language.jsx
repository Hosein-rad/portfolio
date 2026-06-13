"use client";

import { useTranslation } from "@/app/hooks/useTranslation";

function Language() {
  const { language, setLanguage } = useTranslation(); // ← global state from context

  return (
    <div className="my-auto md:mx-2 bg-white border border-white text-black text-xs md:text-sm size-8 md:size-11 text-center rounded-full duration-500">
      <div
        onClick={() => setLanguage("en")}
        className={`h-1/2 py-0.5 rounded-t-full hover:text-sky-700 text-black hover:underline cursor-pointer ${
          language == "en" ? "bg-sky-200 dark:bg-sky-300" : ""
        } duration-300`}
      >
        en
      </div>
      <div
        onClick={() => setLanguage("fa")}
        className={`h-1/2 py-0.5 rounded-b-full hover:text-sky-700 hover:underline cursor-pointer ${
          language == "fa" ? "bg-sky-300" : ""
        } duration-300`}
      >
        فا
      </div>
    </div>
  );
}

export default Language;
