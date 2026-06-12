"use client";

import { useEffect, useState } from "react";

const Indicator = () => {
  const [activeId, setActiveId] = useState("hero");
  const [pos, setPos] = useState({ left: -200, width: 0 });

  useEffect(() => {
    const ids = ["hero", "projects", "about", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.3; // 30vh

      let bestSection = sections[0];
      let maxVisible = 0;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Visible height of the section inside the viewport
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisible) {
          maxVisible = visibleHeight;
          bestSection = section;
        }
      }

      // Only switch if the winning section reaches the 30vh threshold
      if (maxVisible >= threshold) {
        setActiveId(bestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ----- Update indicator position based on active nav link -----
  useEffect(() => {
    const updatePosition = () => {
      const nav = document.querySelector("nav");
      const link = document.querySelector(`a[href="#${activeId}"]`);
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
