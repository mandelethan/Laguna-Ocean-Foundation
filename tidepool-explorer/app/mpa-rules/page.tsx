'use client';
import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

function MPARules() {
  return (
    <section className="pt-20 text-base leading-relaxed font-['Nunito_Sans'] text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full">
        <Image
          src="/mpa rules/Colorful Starfish.JPG"
          alt="Colorful tidepool background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-[32px] text-center font-bold px-4 text-white"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
          >
            Marine Protected <br /> Areas (MPAs)
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 py-8">
        <Accordion type="single" collapsible>
          {[
            {
              question: 'What are marine protected areas (MPAs)?',
              answer:
                'MPAs are named, discrete geographic marine or estuarine areas designed to protect or conserve marine life and habitat.',
            },
            {
              question: 'What can I do in an MPA?',
              answer: 'Swimming, wading, boating, diving and surfing are allowed in MPAs.',
            },
            {
              question: 'How do I know where an MPA is?',
              answer: (
                <>
                  Most MPA boundaries are designed to use major onshore landmarks and simple due north/south or east/west lines for easy recognition.
                  You can go to this map to get a better view of these areas:{' '}
                  <a
                    href="https://wildlife.ca.gov/Conservation/Marine/MPAs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700"
                  >
                    https://wildlife.ca.gov/Conservation/Marine/MPAs
                  </a>
                </>
              ),
            },
            {
              question: 'How do MPAs affect existing fisheries regulations and closures?',
              answer:
                'MPAs are not intended to replace existing regulations. They are intended to allow for interactions between both fished and unfished species to occur in a more natural setting.',
            },
          ].map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Call to Action Section */}
      <div className="py-10 px-6 text-center bg-[#75B1DC]">
        <h2 className="text-xl font-bold mb-4 text-[#1A516A]">Want to find out more?</h2>
        <a
          href="https://lagunaoceanfoundation.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white hover:bg-blue-100 text-[#1A516A] font-semibold px-4 py-2 rounded shadow-md transition"
        >
          Check out our Main Site!
        </a>
      </div>
    </section>
  );
}

export default MPARules;
