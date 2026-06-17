"use client";

import Image from "next/image";
import Form from "./Form";
import CopyButton from "./CopyButton";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-150 md:h-fit w-full pb-5 pt-15 md:pt-25 flex flex-col items-center justify-center text-black dark:text-white bg-linear-to-b from-sky-200 to-stone-300 dark:from-sky-950 dark:to-black"
    >
      <h1 className="w-fit px-10 md:px-20 py-2 text-black dark:text-white text-center text-4xl md:text-7xl border-white dark:border-black border-b-4 mask-x-from-85%">
        Contact
      </h1>
      <div className="w-fit p-10 flex bg-red-400">
        <div className="flex flex-col items-center justify-evenly">
          <h3 className="text-center text-5xl">Say Hi</h3>
          <div className="flex items-center justify-center rounded-full bg-gray-800">
            <p className="p-3 text-lg">Contact@Hosein.Dev</p>
            {/* <Image
              src={"/images/copy.png"}
              alt="Cryptionary"
              width={20}
              height={20}
              onClick={() =>
                navigator.clipboard.writeText("Contact@Hosein.Dev")
              }
              className="max-w-full size-10 m-2 bg-gray-300 rounded-full hover:scale-105 cursor-pointer duration-300"
            /> */}
            <CopyButton />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
