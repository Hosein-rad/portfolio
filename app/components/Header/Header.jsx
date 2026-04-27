import DarkMode from "./DarkMode";
import Language from "./Language";
import Indicator from "./Indicator";

const Header = () => {
  return (
    <nav className="w-full md:w-4/5 h-[4em] md:mt-[1em] px-2 flex text-black dark:text-white border-3 border-white dark:border-black justify-between items-center text-xs md:text-xl font-bold rounded-full bg-sky-300 dark:bg-gray-900 z-10 sticky top-1">
      <Language />
      {/* <Indicator /> */}
      <a
        href={"#"}
        className="cursor-pointer z-12 hover:-rotate-6 hover:text-shadow-[0_0_3px_black] dark:hover:text-shadow-[0_0_3px_white] duration-300"
      >
        Home
      </a>
      <a
        href="#projects"
        className="cursor-pointer z-12 hover:-rotate-6 hover:text-shadow-[0_0_3px_black] dark:hover:text-shadow-[0_0_3px_white] duration-300"
      >
        Projects
      </a>
      <a
        href="#about"
        className="cursor-pointer z-12 hover:-rotate-6 hover:text-shadow-[0_0_3px_black] dark:hover:text-shadow-[0_0_3px_white] duration-300"
      >
        About
      </a>
      <a
        href="#contact"
        className="cursor-pointer z-12 hover:-rotate-6 hover:text-shadow-[0_0_3px_black] dark:hover:text-shadow-[0_0_3px_white] duration-300"
      >
        Contact
      </a>
      <DarkMode />
    </nav>
  );
};

export default Header;
