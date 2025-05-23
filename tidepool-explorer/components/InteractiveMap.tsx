"use client";

import { useEffect, useState } from "react";

interface InteractiveMapProps {
  onLocationClick?: (id: string) => void;
}

export default function InteractiveMap({ onLocationClick }: InteractiveMapProps) {
  const [svgContent, setSvgContent] = useState("");

useEffect(() => {
  fetch("/locations/fixed-locations.svg")
    .then((res) => res.text())
    .then((text) => {
      const styled = text.replace(
        "<svg",
        `<svg class="w-full h-auto" preserveAspectRatio="xMidYMid meet"`
      ).replace(
        ">", // only the *first closing angle bracket* after <svg
        `>
        <style>
          path {
            fill: transparent;
            stroke: transparent;
            transition: all 0.2s ease;
            cursor: pointer;
          }
        </style>`,
      );
      setSvgContent(styled);
    })
    .catch((err) => console.error("Failed to load SVG:", err));
}, []);



  // ✅ Attach click listeners to paths once SVG is inserted
    useEffect(() => {
      if (!svgContent) return;

      const handleClick = (event: Event) => {
        const target = event.target as SVGElement;
        if (target.tagName === "path" && target.id) {
          const scrollTargetId = `card-${target.id}`;
          const section = document.getElementById(scrollTargetId);

          if (onLocationClick) {
            onLocationClick(target.id);
          }


          if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
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
