// import Image from "next/image";

const Darsbar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-fit mx-20 py-10 flex text-black dark:text-white">
        <div className="text-right">
          <h1 className="text-4xl">
            <a
              target="_blank"
              href="https://www.darsbar.ir"
              className="text-5xl hover:text-blue-700 dark:hover:text-blue-300 duration-200 animate-pulse hover:animate-none"
            >
              Darsbar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline -mt-8"
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
          <p className="pl-15 pt-5 text-justify">
            Darsbar is a comprehensive dashboard designed to streamline the
            study process for students and educators. This project facilitates
            user <u>sign-in and sign-up</u> for both students and teachers,
            utilizing <b>PostgreSQL</b> for database management with
            <i> Prisma ORM</i>. <br />
            Developed with <i>Next.js</i>, Darsbar integrates
            <b> cloud storage </b>
            capabilities, allowing data uploads via a <u>
              dedicated subdomain
            </u>{" "}
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
          </p>
        </div>
        <div className="w-150 h-50 mx-10 flex justify-center items-center text-center border rounded-2xl bg-radial from-black to-transparent cursor-not-allowed">
          <p className="text-red-300 text-xl">
            Not Available <br /> at the moment
          </p>
        </div>
        {/* <Image src={null} alt="" width={600} height={300} className="mx-10" /> */}
      </div>
      <div className="w-4/5 border-white dark:border-black border-b-6 border-dotted mask-x-from-50%"></div>
    </div>
  );
};

export default Darsbar;
