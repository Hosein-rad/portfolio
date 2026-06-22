const Darsbar = () => {
  return (
    <div 
    className="flex flex-col items-center justify-center"
    >
      <div className="h-fit mx-auto md:mx-20 py-10 flex flex-col md:flex-row text-black dark:text-white">
        <div className="md:text-right">
          <h1 className="pb-5 mx-10 md:pb-8 text-2xl md:text-4xl">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.darsbar.ir"
              className="text-4xl md:text-5xl hover:text-blue-700 dark:hover:text-blue-300 duration-200 animate-pulse hover:animate-none"
            >
              Darsbar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3 md:size-4 inline -mt-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
              </svg>
            </a>
            : Student & Teacher Dashboard
          </h1>
          <p className="mx-5 text-sm md:text-[16px] md:pl-15 md:text-justify">
            Darsbar is a comprehensive dashboard designed to streamline the
            study process for students and educators. This project facilitates
            user sign-in and sign-up for both students and teachers,
            utilizing PostgreSQL for database management with
             Prisma ORM.
            Developed with Next.js, Darsbar integrates
             cloud storage 
            capabilities, allowing data uploads via a 
              dedicated subdomain
            {" "}
            (files.darsbar.ir). While development has been temporarily paused
            due to{" "}
            <i className="text-red-900 dark:text-red-200">
              recent internet disruptions
            </i>{" "}
            impacting services like{" "}
            <i className="text-red-900 dark:text-red-200">
              Prisma, Vercel and Github.
            </i>
            , Darsbar holds significant potential for enhancing the educational
            experience.
            <br />
            source code:{" "}
            <a
              href="https://github.com/Hosein-rad/darsbar"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-700 dark:text-blue-200"
            >
              github.com/Hosein-rad/darsbar
            </a>
          </p>
        </div>
        <div className="md:w-150 md:mt-10 h-50 mx-10 hidden md:flex justify-center items-center text-center border rounded-2xl bg-radial from-black to-transparent cursor-not-allowed">
          <p className="text-red-300 text-xl">
            Not Available <br /> at the moment
          </p>
        </div>
      </div>
      <div className="w-4/5 border-white dark:border-black border-b-6 border-dotted mask-x-from-50%"></div>
    </div>
  );
};

export default Darsbar;
