"use client";

import Image from "next/image";

const CarouselItem = () => {
  const skills = [
    { name: "HTML", url: "/images/HTML.webp" },
    { name: "CSS", url: "/images/CSS.webp" },
    { name: "TailwindCSS", url: "/images/TailwindCSS.webp" },
    { name: "Figma", url: "/images/Figma.png" },
    { name: "Javascript", url: "/images/Javascript.webp" },
    { name: "Typescript", url: "/images/typescript.webp" },
    { name: "React", url: "/images/React.webp" },
    { name: "Next.JS", url: "/images/NextJS.webp" },
    { name: "MySQL", url: "/images/mySQL.webp" },
    { name: "Wordpress", url: "/images/wordpress.webp" },
  ];

  return (
    <div className="h-full mx-auto flex justify-center">
      {skills.map((item) => {
        return (
          <div
            key={item.name}
            className="relative mx-[1.5em] my-auto rounded-md"
          >
            <Image
              alt={item.name}
              src={item?.url}
              width={40}
              height={40}
              className="size-7 md:size-10 mx-3 md:mx-[1.5em] rounded-md z-100"
            />
            <button className="absolute flex justify-center inset-0 -left-4 md:left-1 -mt-6 size-20 md:size-20 text-center text-black dark:text-white opacity-0 hover:opacity-100 focus:opacity-100 duration-300 z-110">
              {item.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselItem;
