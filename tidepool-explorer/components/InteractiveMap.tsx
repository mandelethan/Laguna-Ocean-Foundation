"use client";

import { useEffect, useState } from "react";

export default function InteractiveMap() {
  const [svgContent, setSvgContent] = useState("");

useEffect(() => {
  fetch("/locations/fixed-locations.svg")
    .then((res) => res.text())
    .then((text) => {
      // Inject responsive styles
      const modified = text.replace(
        "<svg",
        '<svg class="w-full h-auto" preserveAspectRatio="xMidYMid meet"'
      );
      setSvgContent(modified);
    })
    .catch((err) => console.error("Failed to load SVG:", err));
}, []);


  // ✅ Attach click listeners to paths once SVG is inserted
  useEffect(() => {
    if (!svgContent) return;

    const handleClick = (event: Event) => {
      const target = event.target as SVGElement;
      if (target.tagName === "path" && target.id) {
        const section = document.getElementById(target.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };


    const svgElement = document.getElementById("interactive-map");
    if (svgElement) {
      svgElement.addEventListener("click", handleClick);
    }

    return () => {
      if (svgElement) {
        svgElement.removeEventListener("click", handleClick);
      }
    };
  }, [svgContent]);

  return (
    <div
      id="interactive-map"
      className="w-full max-w-[1200px] mx-auto"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
