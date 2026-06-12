import Image from "next/image";

const FitShow = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="h-fit mx-auto md:mx-20 pt-10 md:grid md:grid-cols-2 flex flex-col-reverse text-black dark:text-white">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fitshow.hosein.dev"
        >
          <Image
            src={"/images/fitshow.webp"}
            alt="FitShow gym website preview"
            width={600}
            height={300}
            className="max-w-full h-auto md:w-150 mx-auto my-4 md:mx-10 hover:scale-110 cursor-alias duration-500"
          />
        </a>

        <div>
          <h1 className="pb-6 text-2xl md:text-4xl md:px-10 mx-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fitshow.hosein.dev"
              className="text-4xl md:text-5xl hover:text-blue-700 dark:hover:text-blue-300 duration-200 animate-pulse hover:animate-none"
            >
              FitShow
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
            : Modern Gym Website (HTML/CSS)
          </h1>
          <p className="mx-10 md:w-110 md:text-justify">
            This project is a fully responsive, Persian (RTL) gym website built
            with{" "}
            <u>
              <b>pure HTML & CSS</b>
            </u>
            . The site features a <b>hero section</b>, <b>feature cards</b>, a{" "}
            <b>team gallery</b>, a <b>contact form</b>, and an embedded{" "}
            <b>Google Map</b>.<br />
            <br />
            source code:{" "}
            <a
              href="https://github.com/Hosein-rad/fitshow-demo"
              target="_blank"
              className="underline text-blue-700 dark:text-blue-200"
            >
              github.com/Hosein-rad/FitShow-Demo
            </a>
            <br />+ a fully documented README.md file
          </p>
        </div>
      </div>

      <div className="h-fit mx-3 md:mx-30 pb-5 flex flex-col text-black dark:text-white">
        <details className="group">
          <summary className="md:w-fit ml-5 flex items-center cursor-pointer hover:underline rounded-2xl list-none">
            <p className="pt-4 md:ml-20 font-bold text-nowrap">
              Key Features & Technologies :
            </p>
            <Image
              src="/svgs/arrow-l.svg"
              alt="arrow"
              width={40}
              height={40}
              className="p-1 pr-1.5 mx-5 mt-3 size-5 bg-white rounded-full duration-500 transition-transform group-open:rotate-90 -rotate-90"
            />
          </summary>
          <div className="dropdown-grid">
            <div className="overflow-hidden">
              <ul className="pt-2 mx-5 pl-5 md:pl-10 md:mx-20 list-disc text-sm md:text-[16px]">
                <li>
                  Fully responsive design using <b>CSS Grid & Flexbox</b> –
                  works on mobile, tablet, and desktop.
                </li>
                <li>
                  <u>RTL (Right-to-Left)</u> layout with <b>Vazirmatn</b>{" "}
                  Persian font and dark/red color scheme.
                </li>
                <li>
                  Three pages: <b>Home</b> (hero, features, classes, CTA),{" "}
                  <b>About</b> (team, mission, stats), and <b>Contact</b> (form,
                  info, map).
                </li>
                <li>
                  Interactive elements: hover animations, Font Awesome icons,
                  and a working newsletter form.
                </li>
              </ul>
            </div>
          </div>
        </details>
      </div>

      <div className="w-4/5 border-white dark:border-black border-b-6 border-dotted mask-x-from-50%"></div>
    </div>
  );
};

export default FitShow;
