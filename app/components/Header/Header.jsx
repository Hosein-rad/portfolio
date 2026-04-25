import DarkMode from "./DarkMode";
import Language from "./Language";
import Indicator from "./Indicator";

const Header = () => {
  return (
    <nav className="w-4/5 h-[4em] mt-[1em] px-2 flex text-black dark:text-white border-3 border-white dark:border-black justify-between items-center text-xl font-bold rounded-full bg-sky-300 dark:bg-gray-900 z-10 sticky top-1">
      <Language />
      <Indicator />
      <a href={"#"} className="cursor-pointer z-12">
        Home
      </a>
      <a href="#projects" className="cursor-pointer z-12">
        Projects
      </a>
      <a href="#about" className="cursor-pointer z-12">
        About
      </a>
      <a href="#contact" className="cursor-pointer z-12">
        Contact
      </a>
      <DarkMode />
    </nav>
  );
};

export default Header;
