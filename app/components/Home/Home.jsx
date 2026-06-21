"use client";

import Stack from "./Stack";
import CTA from "./CTA";
import { useTranslation } from "@/app/hooks/useTranslation";
import { CanvasText } from "../ui/canvas-text";
import { HeroHighlight } from "../ui/hero-highlight";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div id="hero">
      <HeroHighlight></HeroHighlight>

      {/* Hero - title */}
      <div className="w-full mt-7 md:mt-20 mb-10 md:mb-15 h-[13em] text-black dark:text-white flex flex-col items-center justify-center duration-300">
        <div className="flex">
          <div className="h-40 md:text-5xl flex items-center justify-center">
            {t("hero.title.preTitle")}
          </div>
          <h1 className="mt-5 md:mt-15 font-['baloo-semibold']">
            <p className="-mx-15 -mb-15 md:-mb-8 h-50 flex items-center justify-center text-7xl lg:text-9xl">
              <CanvasText
                text={t("hero.title.title")}
                backgroundClassName="bg-blue-600"
                colors={[
                  "rgba(250, 50, 250, 1)",
                  "rgba(50, 250, 150, 0.9)",
                  "rgba(50, 153, 0, 0.8)",
                  "rgba(150, 153, 0, 0.7)",
                  "rgba(200, 153, 100, 0.6)",
                  "rgba(0, 0, 0, 0.5)",
                  "rgba(50, 250, 50, 0.4)",
                  "rgba(100, 50, 100, 0.3)",
                  "rgba(200, 0, 200, 0.2)",
                  "rgba(250, 250, 200, 0.1)",
                ]}
                lineGap={5}
                animationDuration={10}
              />
            </p>
            {/* </motion.h1> */}
          </h1>
        </div>
        <p className="text-xl md:text-3xl w-full text-center">
          {t("hero.title.postTitle")}
        </p>
      </div>
      <CTA />
      <Stack />
    </div>
  );
};

export default Home;
