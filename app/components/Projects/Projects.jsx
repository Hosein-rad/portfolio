import Cryptionary from "./Cryptionary";
import Darsbar from "./Darsbar";
import MiniProjects from "./MiniProjects";
import Leekoo from "./Leekoo";

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-fit pt-15 md:pt-25 bg-sky-200 dark:bg-sky-950 flex flex-col items-center"
    >
      <h1 className="w-fit px-10 md:px-20 pb-2 md:pb-5 text-black dark:text-white text-center text-5xl md:text-7xl border-white dark:border-black border-b-4 mask-x-from-85%">
        My Projects
      </h1>
      <Cryptionary />
      <Darsbar />
      <Leekoo />
      <MiniProjects />
    </div>
  );
};

export default Projects;
