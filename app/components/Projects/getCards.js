"use client";

const getCards = (t) => [
  {
    description: t("projects.centerpiece.postTitle"),
    title: t("projects.centerpiece.title"),
    src: "/images/cryptionary.webp",
    ctaText: (
      <svg
        className="size-3 md:size-5 -mt-0.5 group-hover:scale-130 duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    ctaLink: "https://cryptionary.hosein.dev",
    content: () => {
      return (
        <div>
          {t("projects.centerpiece.description")}
          <p className="font-bold mb-2 mt-6">
            {t("projects.centerpiece.featuresTitle")}:
          </p>
          <ul className="px-4 space-y-1">
            <li>
              <b>{t("projects.centerpiece.featuresList.1.title")}</b>:{" "}
              {t("projects.centerpiece.featuresList.1.body")}
            </li>
            <li>
              <b>{t("projects.centerpiece.featuresList.2.title")}</b>:{" "}
              {t("projects.centerpiece.featuresList.2.body")}
            </li>
            <li>
              <b>{t("projects.centerpiece.featuresList.3.title")}</b>:{" "}
              {t("projects.centerpiece.featuresList.3.body")}
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: (
      <svg
        className="size-3 md:size-5 -mt-0.5 group-hover:scale-120 duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br />
          His songs often reflect the struggles and triumphs of everyday life,
          capturing the essence of Punjabi culture and traditions. With a career
          spanning over two decades, Babu Maan has released numerous hit albums
          and singles that have garnered him a massive fan following both in
          India and abroad.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: (
      <svg
        className="size-3 md:size-5 -mt-0.5 group-hover:scale-120 duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br />
          Their songs often reflect themes of aggression, social issues, and
          personal struggles, capturing the essence of the heavy metal genre.
          With a career spanning over four decades, Metallica has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: (
      <svg
        className="size-3 md:size-5 -mt-0.5 group-hover:scale-120 duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br />
          Their songs often reflect a blend of blues, hard rock, and folk music,
          capturing the essence of the 1970s rock era. With a career spanning
          over a decade, Led Zeppelin has released numerous hit albums and
          singles that have garnered them a massive fan following both in the
          United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: (
      <svg
        className="size-3 md:size-5 -mt-0.5 group-hover:scale-120 duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br />
          The movie explores themes of love, redemption, and sacrifice,
          capturing the essence of human emotions and relationships. With a
          gripping narrative and memorable music, &quot;Aawarapan&quot; has
          garnered a massive fan following both in India and abroad, solidifying
          Emraan Hashmi&apos;s status as a versatile actor.
        </p>
      );
    },
  },
  {
    description: "M333tafa Zahid",
    title: "Toh2asdasdasd3ir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: (
      <svg
        className="size-3 md:size-5 -mt-0.5 group-hover:scale-120 duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br />
          The movie explores themes of love, redemption, and sacrifice,
          capturing the essence of human emotions and relationships. With a
          gripping narrative and memorable music, &quot;Aawarapan&quot; has
          garnered a massive fan following both in India and abroad, solidifying
          Emraan Hashmi&apos;s status as a versatile actor.
        </p>
      );
    },
  },
  {
    description: "d a Zahid",
    title: "Toh wwqqq",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: (
      <svg
        className="size-3 md:size-5 -mt-0.5 group-hover:scale-120 duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br />
          The movie explores themes of love, redemption, and sacrifice,
          capturing the essence of human emotions and relationships. With a
          gripping narrative and memorable music, &quot;Aawarapan&quot; has
          garnered a massive fan following both in India and abroad, solidifying
          Emraan Hashmi&apos;s status as a versatile actor.
        </p>
      );
    },
  },
  {
    description: "asd",
    title: "das",
    src: "aswassets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: (
      <svg
        className="size-3 md:size-5 -mt-0.5 group-hover:scale-120 duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7" />
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    ctaLink: "dw.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br />
          The movie explores themes of love, redemption, and sacrifice,
          capturing the essence of human emotions and relationships. With a
          gripping narrative and memorable music, &quot;Aawarapan&quot; has
          garnered a massive fan following both in India and abroad, solidifying
          Emraan Hashmi&apos;s status as a versatile actor.
        </p>
      );
    },
  },
];

export default getCards;
