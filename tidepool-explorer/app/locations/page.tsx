import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChartNoAxesColumnIncreasing, Accessibility, MapPin, Route, CircleParking } from "lucide-react"

const locationDetails = [
  {
    name: "Crescent Bay",
    difficulty: "Intermediate",
    overview: "Located in the...",
    accessibility: "Moderate - Advanced",
    coordinates: {
      north: "North: ...",
      south: "South: ..."
    },
    accessPoint: "Stairs at...",
    parking: "Name...",
    image: "/temp.jpg"
  },
  // Add more locations here
]

function Locations() {
  return (
    <>
      {/* Images section */}
      <section className="pt-20 relative">
        {/* Laguna Beach map */}
        <div className="relative h-[600px] flex items-center justify-center bg-cover bg-center">
          <Image src="/locations/laguna-map.png" alt="Map Picture" layout="fill" objectFit="cover" />
        </div>
        {/* Waves */}
        <div className="relative h-[200px] md:h-[400px] lg:h-[600px] bg-cover bg-center ">
          <Image src="/locations/Waves.png" alt="Waves" layout="fill" objectFit="cover" />
        </div>
      </section>
      {/* Locations section */}
      <section className="px-4 bg-[#d6f0ff]">
        <h1 className="text-2xl my-4 font-bold text-blue-900 text-left">
          Locations
        </h1>
        {/* Dynamically create the locations accordion */}
        <Accordion type="single" collapsible className="w-full">
          {locationDetails.map((location, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              {/* Locations accordion image */}
              <div className="relative h-[200px] flex items-center justify-center bg-cover bg-center mb-4">
                <Image src={location.image} alt={`${location.name} Picture`} layout="fill" objectFit="cover" className="rounded-xl"/>
              </div>
              <AccordionTrigger>
                {/* Location name and difficulty */}
                <div className="text-blue-950 flex flex-col">
                  <h2 className="font-bold text-5xl">{location.name}</h2>
                  <div className="flex items-center">
                    <ChartNoAxesColumnIncreasing className="w-6 h-6 mr-1" />
                    <p className="text-md">{location.difficulty}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {/* Location accordion content */}
                <p>{location.overview}</p>
                <div className="text-blue-950">
                  <h3 className="text-xl font-bold mb-3">Overview</h3>
                  <div className="flex flex-col ml-12">
                    {/* Accessibility */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <Accessibility className="w-6 h-6 mr-1" />
                        <h4 className="text-lg font-bold">Accessibility</h4>
                      </div>
                      <p className="ml-8">{location.accessibility}</p>
                    </div>
                    {/* Coordinates */}
                    <div className="mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 mr-1" />
                        <h4 className="text-lg font-bold">Coordinates</h4>
                      </div>
                      <p className="ml-8">{location.coordinates.north}</p>
                      <p className="ml-8">{location.coordinates.south}</p>
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
      </section>
    </>
  )
}

export default Locations
