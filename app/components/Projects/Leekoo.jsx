import Image from "next/image";

const Leekoo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-fit mx-20 pt-10 flex text-black dark:text-white">
        <Image
          src={"/images/leekoo1.webp"}
          alt="Cryptionary"
          width={600}
          height={300}
          className="mx-10 size-fit hover:scale-120 duration-500 cursor-zoom-in"
        />
        <div>
          <h1 className="pb-6 text-4xl">
            <a
              target="_blank"
              href="https://www.leekoo.ir"
              className="text-5xl hover:text-blue-700 dark:hover:text-blue-300 duration-200 animate-pulse hover:animate-none"
            >
              Leekoo
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
            : children and teenagers&apos; care center
          </h1>
          <p className="pr-10 text-justify">
            This project involved the development of a{" "}
            <u>
              <b>WordPress</b>
            </u>{" "}
            website for an educational/entertainment center dedicated to
            children and teenagers. The site features a dynamic <b>gallery</b>,
            a dedicated section for <b>courses</b>, an integrated online{" "}
            <b>store</b>, and an{" "}
            <i>interactive homepage designed to engage visitors</i>. I was
            responsible for the majority of content creation and editing.
          </p>
        </div>
      </div>
      <div className="h-fit mx-30 pb-5 -mt-3 flex flex-col text-black dark:text-white">
        <p className="font-bold">Key Features & Technologies :</p>
        <ul className="pt-2 pl-10 list-disc text-justify">
          <li>
            Collaborated directly with the client to gather requirements and
            ensure project alignment with their objectives, resulting in{" "}
            <b>strong client satisfaction</b>.
          </li>
          <li>
            Managed extensive <u>content creation</u> and <u>editing</u>,
            ensuring accuracy, engagement, and brand consistency.
          </li>
          <li>
            Leveraged <b>JetEngine, ElementorPro, WooCommerce</b> plug-in and
            much more, to build interactive elements and customize the user
            experience for an engaging website.
          </li>
        </ul>
      </div>
      <div className="w-4/5 border-white dark:border-black border-b-6 border-dotted mask-x-from-50%"></div>
    </div>
  );
};

export default Leekoo;
