"use client";

import Image from "next/image";

const CarouselItem = () => {
  const skills = [
    { name: "HTML", url: "/images/HTML.webp" },
    { name: "CSS", url: "/images/CSS.webp" },
    { name: "JavaScript", url: "/images/Javascript.webp" },
    { name: "TailwindCSS", url: "/images/TailwindCSS.webp" },
    { name: "Figma", url: "/images/figma-icon.webp" },
    { name: "Adobe Xd", url: "/images/adobeXD.webp" },
    { name: "TypeScript", url: "/images/typescript.webp" },
    { name: "React", url: "/images/React.webp" },
    { name: "Next.JS", url: "/images/NextJS.webp" },
    { name: "GitHub", url: "/images/github.webp" },
    { name: "VS Code", url: "/images/vscode.webp" },
    { name: "MySQL", url: "/images/mySQL.webp" },
    { name: "A.I", url: "/images/ai.webp" },
    { name: "Wordpress", url: "/images/wordpress.webp" },
  ];

  return (
    <div className="h-full mx-auto flex justify-center">
      {skills.map((item) => {
        return (
          <div
            key={item.name}
            className="relative md:mx-2 flex justify-center items-center rounded-md hover:scale-110 duration-300"
          >
            <Image
              alt={item.name}
              src={item?.url}
              width={40}
              height={40}
              className="size-9 md:size-14 mx-3 md:mx-[1.5em] rounded-md z-100"
            />
            <p className="absolute top-4 md:top-2 size-full text-center text-black dark:text-white opacity-0 hover:opacity-100 active:opacity-100 duration-300 z-110">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselItem;
