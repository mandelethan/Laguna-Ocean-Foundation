import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChartNoAxesColumnIncreasing, MapPin, Route, CircleParking } from "lucide-react"

const locationDetails = [
  {
    name: "Crescent Bay (North and South)",
    overview: "Crescent Bay is known for its abundant marine life, including bat, ochre, and brittle stars, anemones, shore and hermit crabs, chitons, limpets, mussels, and barnacles. Occasionally, octopuses or spiny lobsters may be spotted. The area is also frequented by osprey, with occasional sightings of dolphins, seals, and sea lions.",
    accessibility: [
      "North: Advanced",
      "South: Moderate"
    ],
    coordinates: [
      `North: 33°32'46"N 117°48'12"W`, 
      `South: 33°32'43"N 117°48'01"W`
    ],
    accessPoint: "Stairs at corner of Circle Way or ramp at Cliff Dr. & Circle Way intersection",
    parking: "Residential parking or Trolley Stop at Cliff Drive and Marine Drive intersection",
    image: "/locations/Crescent-Bay.jpg"
  },
  {
    name: "Goff Island",
    overview: "Goff Island is known for great snorkeling and scuba diving thanks to the protection from the rocks. While the tidepools may not be as abundant with life like it’s partnering tidepool location, Treasure Island, you may still see anemones, urchins, sea stars, opaleye, and sculpin. If you’re extra lucky, one of the resident harbor seals may be sunbathing nearby. If so, please remember to stay back at least 150ft.",
    accessibility: ["Moderate"],
    coordinates: [`33°30'49"N 117°45'37"W`],
    accessPoint: "From ramp at the end of Treasure Island Park trail",
    parking: "Lot 7 and Lot 8 or metered parking on Wesley Drive",
    image: "/locations/Goff Island.jpg"
  },
  {
    name: "Heisler Park",
    overview: "Heisler Park is a popular spot for nudibranch hunting and is known for its diverse marine life, including chitons, Christmas tree worms, anemones, California sea hares (seasonally), hermit crabs, and shore crabs. Spiny lobsters and octopuses are occasionally seen, as well as nudibranchs and navanax. The nearby Bird Rock attracts many gulls, cormorants, and other shorebirds. Seals, sea lions, dolphins, and occasionally whales are also spotted in the area.",
    accessibility: ["Beginner"],
    coordinates: [`33°32'33"N 117°47'20"W`],
    accessPoint: "Stairs in front of Las Brisas or walk along Main Beach",
    parking: "Metered parking along Cliff Drive",
    image: "/locations/Heisler Park.png"
  },
  {
    name: "Shaws Cove (North and South)",
    overview: "Shaws Cove is known for some great rocky structures and deep crevices for octopus hiding spots. Shaws south is an easy to access, flat mussel bed that can be a good place to find sea stars during low tide and watch various shore birds as they feed in the mussel beds. There are also many species of anemones that can be found at both north and south locations.",
    accessibility: [
      "North: Moderate to Advanced",
      "South: Beginner to Moderate"
    ],
    coordinates: [
      `North: 33°32'42"N 117°47'57"W`,
      `South: 33°32'41"N 117°47'49"W`
    ],
    accessPoint: "Stairs at Fairview St. & Cliff Dr.",
    parking: "Residential parking or Trolley Stop at Cliff Drive and Fairview Street Intersection",
    image: "/locations/Shaws-Cove.jpg"
  },
  {
    name: "Treasure Island",
    overview: "Treasure Island is home to a variety of marine life, including garibaldi, ochre sea stars, purple urchins, octopuses, shore and hermit crabs, wavy turban snails, and Norris' top snails. Large mussel beds support various barnacles, as well. Seals are commonly visible from the island, and leopard sharks are frequently seen at the nearby beach.",
    accessibility: ["Beginner"],
    coordinates: [`33°30'48"N 117°45'28"W`],
    accessPoint: "Stairs or ramp along Treasure Island Park trail",
    parking: "Lot 7 and Lot 8 or metered parking on Wesley Drive",
    image: "/locations/Treasure Island.png"
  },
  {
    name: "Wood's Cove",
    overview: "Woods Cove has easy beach access via stairs and is a popular spot for swimmers, snorkelers, and SCUBA divers. The rocky tidepools aren’t as accessible and they occupy a smaller area, but you may find some urchins and anemones during a low tide..",
    accessibility: ["Advanced"],
    coordinates: [`33°31'35"N 117°46'14"W`],
    accessPoint: "Diamond St. or Pearl St.",
    parking: "Trolley Stop at PCH and Diamond Street Intersection or nearby metered parking",
    image: "/locations/Woods-Cove.jpg"
  },
]

function Locations() {
  return (
    <section className="pt-20 relative text-[#19516a]">
      {/* Laguna Beach map */}
      <div className="relative h-[600px] flex items-center justify-center bg-cover bg-center">
        <Image src="/locations/laguna-map.png" alt="Map Picture" layout="fill" objectFit="cover" />
      </div>
      {/* Waves */}
      <div className="relative h-[200px] md:h-[400px] lg:h-[600px] bg-cover bg-center">
        <Image src="/locations/Waves.png" alt="Waves" layout="fill" objectFit="cover" />
      </div>

      {/* Locations section */}
      <div className="px-4 bg-[#d6f0ff]">
        <h1 className="text-4xl pb-6 font-bold text-left">Locations</h1>

        {/* Dynamically create the locations accordion */}
        <Accordion type="single" collapsible className="w-full">
          {locationDetails.map((location, index) => (
            <AccordionItem key={index} value={`item-${index}`} className={index < locationDetails.length - 1 ? "mb-6" : ""}>
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
