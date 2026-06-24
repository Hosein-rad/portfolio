import { useTranslation } from "@/app/hooks/useTranslation";
import Carousel from "./Carousel";

const Stack = () => {
  const { t } = useTranslation();

  return (
    <div
      dir="ltr"
      className="h-fit mt-20 md:mt-5 pb-10 bg-linear-to-b from-stone-300 to-sky-200 dark:from-black dark:to-sky-950 flex flex-col items-center justify-around select-none"
    >
      <h3 className="text-black dark:text-white text-lg md:text-2xl md:mt-10 duration-2000">
        {t("hero.stack.title")}
      </h3>
      <Carousel />
    </div>
  );
};

export default Stack;
