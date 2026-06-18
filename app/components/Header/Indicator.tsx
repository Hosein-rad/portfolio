// "use client";

// import { useEffect, useState } from "react";

// const Indicator = () => {
//   const [activeId, setActiveId] = useState("#");
//   const [pos, setPos] = useState({ left: -200, width: 0 });

//   useEffect(() => {
//     const ids = ["#", "#projects", "#about", "#contact"];
//     const sections = ids
//       .map((id) => document.getElementById(id))
//       .filter(Boolean) as HTMLElement[];
//     if (!sections.length) return;

//     const handleScroll = () => {
//       const viewportHeight = window.innerHeight;
//       const threshold = viewportHeight * 0.3; // 30vh

//       let bestSection = sections[0];
//       let maxVisible = 0;

//       for (const section of sections) {
//         const rect = section.getBoundingClientRect();
//         // Visible height of the section inside the viewport
//         const visibleHeight =
//           Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

//         if (visibleHeight > maxVisible) {
//           maxVisible = visibleHeight;
//           bestSection = section;
//         }
//       }

//       // Only switch if the winning section reaches the 30vh threshold
//       if (maxVisible >= threshold) {
//         setActiveId(bestSection.id);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // run once on mount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ----- Update indicator position based on active nav link -----
//   useEffect(() => {
//     const updatePosition = () => {
//       const nav = document.querySelector("nav");
//       const link = document.querySelector(`a[href="${activeId}"]`);
//       if (!nav || !link) return;

//       const navRect = nav.getBoundingClientRect();
//       const linkRect = link.getBoundingClientRect();
//       setPos({
//         left: linkRect.left - navRect.left,
//         width: linkRect.width,
//       });
//     };

//     updatePosition();
//     window.addEventListener("resize", updatePosition);
//     return () => window.removeEventListener("resize", updatePosition);
//   }, [activeId]);

//   return (
//     <div
//       className="absolute rounded-[100%] h-7 md:h-12 bg-white dark:bg-black z-11 duration-500"
//       style={{
//         left: pos.left - 15,
//         width: pos.width + 25,
//       }}
//     />
//   );
// };

// export default Indicator;

"use client";

import { useEffect, useState } from "react";

const Indicator = () => {
  const [activeId, setActiveId] = useState("#");
  const [pos, setPos] = useState({ left: -200, width: 0 });

  useEffect(() => {
    // Home is special – we use the area above the first real section
    const ids = ["#", "#projects", "#about", "#contact"];

    // Get the first actual section to define the home area bottom
    const firstRealSection = document.getElementById("projects"); // "#projects" without hash
    if (!firstRealSection) return; // stop if page isn't fully loaded

    // Build an array of virtual sections: for real IDs we use getElementById, for "#" we create a fake rect
    const sections: { id: string; element: HTMLElement | null }[] = ids.map(
      (id) => {
        if (id === "#") {
          // home area: top of page → top of first real section
          return { id, element: null };
        }
        const el = document.getElementById(id.slice(1)); // remove leading '#'
        return { id, element: el };
      }
    );

    // Filter out any missing real sections (except home which is always present)
    const validSections = sections.filter(
      (s) => s.id === "#" || s.element !== null
    );

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.3;

      // Get bottom boundary of home area = top of first real section
      const firstRect = firstRealSection.getBoundingClientRect();
      const homeBottom = firstRect.top;

      let bestSection = validSections[0];
      let maxVisible = 0;

      for (const section of validSections) {
        let rect: { top: number; bottom: number };

        if (section.id === "#") {
          // Home area: from top of viewport (0) to homeBottom
          rect = { top: 0, bottom: homeBottom };
        } else {
          rect = section.element!.getBoundingClientRect();
        }

        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisible) {
          maxVisible = visibleHeight;
          bestSection = section;
        }
      }

      if (maxVisible >= threshold) {
        setActiveId(bestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update indicator position based on active nav link
  useEffect(() => {
    const updatePosition = () => {
      const nav = document.querySelector("nav");
      const link = document.querySelector(`a[href="${activeId}"]`);
      if (!nav || !link) return;

      const navRect = nav.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setPos({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [activeId]);

  return (
    <div
      className="absolute rounded-[100%] h-7 md:h-12 bg-white dark:bg-black z-11 duration-500"
      style={{
        left: pos.left - 15,
        width: pos.width + 25,
      }}
    />
  );
};

export default Indicator;
