import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default function page() {
  return (
    <body className="min-h-screen h-fit font-['Baloo-regular'] bg-sky-200 dark:bg-sky-950 flex flex-col items-center justify-center">
      <Header />
      <main className="w-19/20 -mt-6 md:-mt-10 md:rounded-t-[100px] border-white dark:border-black border-t-3 bg-stone-300 dark:bg-black">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </body>
  );
}
