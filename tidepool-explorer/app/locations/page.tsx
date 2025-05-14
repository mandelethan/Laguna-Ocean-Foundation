"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartNoAxesColumnIncreasing,
  MapPin,
  Route,
  CircleParking,
  ChevronDown,
} from "lucide-react";

interface Location {
  name: string;
  overview: string;
  accessibility: string[];
  coordinates: string[];
  accessPoint: string;
  parking: string;
  image: string;
}

function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetch("/data/locations.json")
      .then((res) => res.json())
      .then((data: Location[]) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const formatId = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

  return (
    <section className="bg-[#d6f0ff] text-[#19516a]">
      <div className="px-4 md:px-16 pt-20 pb-16 space-y-12">
        {/* Title & Description */}
        <div className="max-w-4xl mt-16">
          <h2 className="text-5xl font-bold mb-3">Our Locations</h2>
          <h3 className="text-xl font-regular mt-2 leading-relaxed">
            Here at Laguna Beach, you'll discover the best spots to explore Laguna Beach's stunning natural beauty. Focused on the 6 unique tidepool locations, we provide all the details you need, like what marine life to expect, the best times to visit, and tips for a safe and enjoyable experience. You’ll also find information on other must-see landmarks around Laguna Beach to help you make the most of your visit. Click on our locations to find out more!
          </h3>
        </div>

        {/* Subheading */}
        <h2 className="text-3xl font-semibold">All Tidepool Locations</h2>


        {/* Card Container */}
        <div className="bg-[#36879F] rounded-3xl p-6 md:p-10">
          <Accordion type="single" collapsible className="space-y-10">
            {locations.map((location, index) => {
              const id = formatId(location.name);
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  id={id}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Optimized Image */}
                  <div className="relative h-[250px] md:h-[400px] w-full overflow-hidden">
                    <Image
                      src={location.image}
                      alt={`${location.name} Picture`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Accordion Trigger */}
                  <AccordionTrigger className="flex justify-between items-center px-6 py-4 text-2xl font-semibold bg-[#295068] text-white rounded-none [&>svg:not(:last-child)]:hidden">
                    <span className="text-white">{location.name}</span>
                    <ChevronDown className="h-6 w-6 text-white transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>

                  {/* Accordion Content */}
                  <AccordionContent className="px-6 pb-8 pt-2 text-white bg-[#295068] rounded-b-3xl">
                    <p className="text-base mb-6">{location.overview}</p>

                    <div className="space-y-6">
                      {/* Accessibility */}
                      <div>
                        <div className="flex items-center font-semibold text-lg mb-1">
                          <ChartNoAxesColumnIncreasing className="w-5 h-5 mr-2 text-white" />
                          Accessibility
                        </div>
                        <ul className="ml-7 list-disc text-base">
                          {location.accessibility.map((access, i) => (
                            <li key={i}>{access}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Coordinates */}
                      <div>
                        <div className="flex items-center font-semibold text-lg mb-1">
                          <MapPin className="w-5 h-5 mr-2 text-white" />
                          Coordinates
                        </div>
                        <ul className="ml-7 list-disc text-base">
                          {location.coordinates.map((coord, i) => (
                            <li key={i}>{coord}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Access Point */}
                      <div>
                        <div className="flex items-center font-semibold text-lg mb-1">
                          <Route className="w-5 h-5 mr-2 text-white" />
                          Access Point
                        </div>
                        <p className="ml-7 text-base">{location.accessPoint}</p>
                      </div>

                      {/* Parking */}
                      <div>
                        <div className="flex items-center font-semibold text-lg mb-1">
                          <CircleParking className="w-5 h-5 mr-2 text-white" />
                          Parking
                        </div>
                        <p className="ml-7 text-base">{location.parking}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Locations;








