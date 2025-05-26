"use client";

import React, { useState } from "react";
import Image from "next/image";

const mpaFaqs = [
  {
    question: "What are marine protected areas (MPAs)?",
    answer:
      "MPAs are named, discrete geographic marine or estuarine areas designed to protect or conserve marine life and habitat.",
  },
  {
    question: "What can I do in an MPA?",
    answer:
      "Swimming, wading, boating, diving and surfing are allowed in MPAs.",
  },
  {
    question: "How do I know where an MPA is?",
    answer: (
      <>
        Most MPA boundaries use major onshore landmarks and simple north/south or east/west lines for easy recognition.
        View the map here:{" "}
        <a
          href="https://wildlife.ca.gov/Conservation/Marine/MPAs"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-200"
        >
          wildlife.ca.gov/Conservation/Marine/MPAs
        </a>
      </>
    ),
  },
  {
    question: "How do MPAs affect existing fisheries regulations and closures?",
    answer:
      "MPAs don’t replace existing regulations. They help allow natural interactions between fished and unfished species.",
  },
];

export default function MPARules() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#1C506B] text-white px-6 pt-32 pb-10 md:px-24 md:pt-40 md:pb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        Marine Protected Areas (MPAs)
      </h1>

      {/* Collapsible FAQ Section */}
      <div className="divide-y divide-white/30 border-y border-white/30">
        {mpaFaqs.map((faq, idx) => (
          <div key={idx}>
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left flex justify-between items-center px-6 pt-6 pb-5 text-xl font-semibold"
            >
              {faq.question}
              <span className="text-2xl">{openIndex === idx ? "▴" : "▾"}</span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-base text-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section with Starfish Background */}
      <div className="mt-16 relative rounded-lg overflow-hidden shadow-lg">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/mpa rules/Colorful Starfish.JPG" // Ensure this path is correct and file is public
            alt="Starfish tidepool background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1C506B]/60" />
        </div>

        {/* CTA Content */}
        <div className="relative z-10 text-center py-12 px-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Want to find out more?</h2>
          <a
            href="https://lagunaoceanfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-blue-100 text-[#1A516A] font-semibold px-5 py-2 rounded shadow-md transition"
          >
            Check out our Main Site!
          </a>
        </div>
      </div>
    </div>
  );
}

