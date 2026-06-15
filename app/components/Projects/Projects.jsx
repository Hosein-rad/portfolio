"use client";

import Cryptionary from "./Cryptionary";
import Other from "./Other";
import { useTranslation } from "@/app/hooks/useTranslation";
// import Darsbar from "./Darsbar";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="h-fit pt-15 md:pt-25 bg-sky-200 dark:bg-sky-950 flex flex-col items-center "
    >
      <h2 className="w-full px-6 md:px-20 pb-2 md:pb-5 text-black dark:text-white text-center text-5xl md:text-7xl border-white dark:border-black border-b-4 mask-x-from-85% ">
        {t("projects.centerpiece.heading")}
      </h2>
      <Cryptionary />
      {/* <div className="w-4/5 %"></div> */}
      <h2 className="w-full px-6 md:px-20 py-2 md:py-5 text-black dark:text-white text-center text-4xl md:text-6xl border-white dark:border-black border-t-6 border-dotted mask-x-from-95">
        {t("projects.other.heading")}
      </h2>
      <Other />
    </div>
  );
};

export default Projects;
