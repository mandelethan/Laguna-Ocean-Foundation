"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChartNoAxesColumnIncreasing, MapPin, Route, CircleParking } from "lucide-react"

interface Location {
  image: string;
  name: string;
  overview: string;
  accessibility: string[];
  coordinates: string[];
  accessPoint: string;
  parking: string;
}

function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetch("/data/locations.json")
      .then((res) => res.json())
      .then((data: Location[]) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  return (
    <section className="pt-20 relative text-[#19516a]">
      {/* Laguna Beach map */}
      <div className="relative h-[600px] md:h-[1800px] flex items-center justify-center bg-cover bg-center">
        <Image src="/locations/laguna-map.png" alt="Map Picture" layout="fill" objectFit="cover" />
      </div>
      {/* Waves */}
      <div className="relative h-[200px] md:h-[400px] lg:h-[450px] bg-cover bg-center">
        <Image src="/locations/Waves.png" alt="Waves" layout="fill" objectFit="cover" />
      </div>

      {/* Locations section */}
      <div className="px-4 bg-[#d6f0ff]">
        <h1 className="text-4xl pb-6 font-bold text-left">Locations</h1>

        {/* Dynamically create the locations accordion */}
        <Accordion type="single" collapsible className="w-full">
          {locations.map((location, index) => (
            <AccordionItem key={index} value={`item-${index}`} className={index < locations.length - 1 ? "mb-6" : ""}>
              {/* Locations accordion image */}
              <div className="relative h-[200px] lg:h-[400px] flex items-center justify-center bg-cover bg-center">
                <Image src={location.image} alt={`${location.name} Picture`} layout="fill" objectFit="cover" className="rounded-xl" />
              </div>
              <AccordionTrigger>
                {/* Location title */}
                <h2 className="font-bold text-3xl">
                  {/* Normal text for larger screens */}
                  <span className="hidden sm:block">{location.name}</span>

                  {/* Modified text with new line for smaller screens */}
                  <span className="block sm:hidden whitespace-pre-line">
                    {location.name.replace(" (", "\n(")}
                  </span>
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                {/* Location accordion content */}
                <p>{location.overview}</p>
                <div>
                  <h3 className="text-xl font-bold mb-3">Overview</h3>
                  <div className="flex flex-col ml-12">
                    {/* Accessibility */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <ChartNoAxesColumnIncreasing className="w-6 h-6 mr-1" />
                        <h4 className="text-lg font-bold">Accessibility</h4>
                      </div>
                      {location.accessibility.map((access, index) => (
                        <p className="ml-8" key={index}>{access}</p>
                      ))}
                    </div>
                    {/* Coordinates */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 mr-1" />
                        <h4 className="text-lg font-bold">Coordinates</h4>
                      </div>
                      {location.coordinates.map((coords, index) => (
                        <p className="ml-8" key={index}>{coords}</p>
                      ))}
                    </div>
                    {/* Access Point */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <Route className="w-6 h-6 mr-1" />
                        <h4 className="text-lg font-bold">Access Point</h4>
                      </div>
                      <p className="ml-8">{location.accessPoint}</p>
                    </div>
                    {/* Parking */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <CircleParking className="w-6 h-6 mr-1" />
                        <h4 className="text-lg font-bold">Parking</h4>
                      </div>
                      <p className="ml-8">{location.parking}</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Locations;
