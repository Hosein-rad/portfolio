"use client";

import Form from "./Form";
import CopyButton from "./CopyButton";
import { useTranslation } from "@/app/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      id="contact"
      className="h-fit w-full pb-5 flex flex-col items-center justify-center text-black dark:text-white bg-linear-to-b from-sky-200 to-stone-300 dark:from-sky-950 dark:to-black"
    >
      <h1 className="w-fit px-10 md:px-20 py-2 mb-5 md:mb-0 mt-15 md:mt-25 text-black dark:text-white text-center text-4xl md:text-7xl border-white dark:border-black border-b-4 mask-x-from-85%">
        {t("contact.title")}
      </h1>

      {/* div containing form and links */}
      <div className="w-fit lg:p-10 flex flex-col-reverse lg:flex-row">
        {/* section with links and header */}
        <div className="p-5 mb-10 flex flex-col items-center justify-start">
          <h3 className="my-3 md:my-7 text-center text-2xl md:text-4xl text-nowrap">
            <span className="block text-nowrap">{t("contact.subtitle.1")}</span>
            {t("contact.subtitle.2")}
          </h3>

          {/* Email to copy section */}
          <div className="my-5 w-full flex items-center justify-between rounded-full bg-gray-400 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 duration-300">
            <div className="flex items-center w-fit">
              <svg
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="white"
                className="px-2 pb-1 size-8"
              >
                <g>
                  <g>
                    <path
                      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </svg>
              <p className=" text-sm md:text-lg">Contact@Hosein.Dev</p>
            </div>
            <CopyButton />
          </div>
          <div className="flex w-full h-10 justify-center gap-5">
            {/* Github Icon and Link */}
            <a
              href="https://github.com/hosein-rad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width={100}
                height={100}
                viewBox="0 0 20 20"
                className="size-15 bg-white border border-white rounded-full cursor-pointer hover:scale-110 hover:brightness-60 duration-400"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#000000"
                  >
                    <g transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
                    </g>
                  </g>
                </g>
                
              </svg>
            </a>
            {/* LinkedIn Icon and Link */}
            <a
              href="https://github.com/hosein-rad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                height={50}
                width={50}
                viewBox="0 0 382 382"
                className="size-15 bg-white border border-white rounded-xl cursor-pointer hover:scale-110 hover:brightness-60 duration-400"
              >
                <path
                  fill="#0077B7"
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* form section */}
        <Form />
      </div>
    </div>
  );
};

export default Contact;
