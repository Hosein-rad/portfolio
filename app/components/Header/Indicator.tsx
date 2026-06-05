"use client";

import { useEffect, useState } from "react";

const Indicator = () => {
  const [activeId, setActiveId] = useState("hero"); // default to first section
  const [pos, setPos] = useState({ left: -200, width: 0 });

  // ----- Intersection Observer: which section is most in view -----
  useEffect(() => {
    const ids = ["hero", "projects", "about", "contact"]; // match your actual section ids
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best
        );
        if (mostVisible?.isIntersecting) {
          setActiveId(mostVisible.target.id);
        }
      },
      { threshold: [0.3, 0.5, 0.7, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // ----- Update indicator position based on active nav link -----
  useEffect(() => {
    const updatePosition = () => {
      const nav = document.querySelector("nav"); // adjust selector if needed
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
