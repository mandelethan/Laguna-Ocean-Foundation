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
    <section className="bg-[#19516a] text-white text-lg leading-relaxed min-h-screen flex flex-col">
      <div className="px-6 pt-32 pb-16 flex-grow">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-[36px] font-bold mb-10">
            Marine Protected Areas (MPAs)
          </h1>

          {/* Collapsible FAQ Section */}
          <div className="divide-y divide-white/30 border-y border-white/30">
            {mpaFaqs.map((faq, idx) => (
              <div key={idx}>
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex justify-between items-center px-6 pt-6 pb-5 text-2xl font-semibold"
                >
                  {faq.question}
                  <span className="text-2xl">
                    {openIndex === idx ? "▴" : "▾"}
                  </span>
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
          <div className="mt-16 relative rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0">
              <Image
                src="/mpa rules/Colorful Starfish.JPG"
                alt="Starfish tidepool background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#1C506B]/60" />
            </div>

            <div className="relative z-10 text-center py-12 px-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Want to find out more?</h2>
              <a
                href="https://lagunaoceanfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-blue-100 text-[#1A516A] font-semibold px-5 py-2 rounded-full shadow-md transition"
              >
                Check out our Main Site!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

