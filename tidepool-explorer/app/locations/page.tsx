"use client";

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
const InteractiveMap = dynamic(() => import('../../components/InteractiveMap'), { ssr: false });
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
} from "lucide-react";

interface Location {
  name: string;
  overview: string;
  accessibility: string[];
  coordinates: string[];
  accessPoint: string;
  parking: string;
  image: string;
  svgId?: string;
}

function dmsToDecimal(dms: string): string | null {
  const match = dms.match(/(\d+)[°](\d+)'(\d+)"([NS])\s*(\d+)[°](\d+)'(\d+)"([EW])/);
  if (!match) return null;
  const [,
    latDeg, latMin, latSec, latDir,
    lonDeg, lonMin, lonSec, lonDir
  ] = match;
  const lat = (parseInt(latDeg) + parseInt(latMin) / 60 + parseInt(latSec) / 3600) * (latDir === "S" ? -1 : 1);
  const lon = (parseInt(lonDeg) + parseInt(lonMin) / 60 + parseInt(lonSec) / 3600) * (lonDir === "W" ? -1 : 1);
  return `${lat},${lon}`;
}

function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("/data/locations.json")
      .then((res) => res.json())
      .then((data: Location[]) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const formatId = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

  return (
    <section className="bg-[#19516a] text-white">
      <div className="px-6 w-full pt-32 pb-24">
        <div className="max-w-[1320px] mx-auto space-y-12">
          <div>
            <h2 className="text-[36px] font-bold mb-4">Our Locations</h2>
            <p className="text-lg leading-relaxed">
              Here at Laguna Beach, you'll discover the best spots to explore Laguna Beach's stunning natural beauty. Focused on the 6 unique tidepool locations, we provide all the details you need, like what marine life to expect, the best times to visit, and tips for a safe and enjoyable experience. You’ll also find information on other must-see landmarks around Laguna Beach to help you make the most of your visit. Click on our locations to find out more!
            </p>
          </div>

          <h2 className="text-[36px] font-bold">All Tidepool Locations</h2>

          <InteractiveMap
            onLocationClick={(id) => {
              console.log("Received location ID in Locations.tsx:", id);
              setExpandedCard(id);
            }}
          />

          <div className="bg-[#3a899b] rounded-3xl p-6 md:p-10">
            <Accordion
              type="single"
              collapsible
              value={expandedCard}
              onValueChange={setExpandedCard}
              className="[&>*:not(:last-child)]:mb-10"
            >
              {locations.map((location, index) => {
                const id = location.svgId || formatId(location.name);
                const cardId = `card-${id}`;

                return (
                  <AccordionItem
                    key={index}
                    value={id}
                    id={cardId}
                    className="bg-[#19516a] rounded-3xl shadow-md transition-shadow duration-300 overflow-hidden hover:shadow-xl scroll-mt-20 border-b border-[#19516a]"
                  >
                    <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-t-3xl">
                      <Image
                        src={location.image}
                        alt={`${location.name} Picture`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                    </div>

                    <AccordionTrigger className="flex justify-between items-center px-6 py-4 text-2xl font-semibold bg-[#19516a] text-white rounded-none">
                      <span className="text-white">{location.name}</span>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-8 pt-2 text-white bg-[#19516a] rounded-b-3xl overflow-hidden">
                      <div className="space-y-6 pb-2">
                        <p className="text-base mb-6">{location.overview}</p>
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

                        <div>
                          <div className="flex items-center font-semibold text-lg mb-1">
                            <Route className="w-5 h-5 mr-2 text-white" />
                            Access Point
                          </div>
                          <p className="ml-7 text-base">{location.accessPoint}</p>
                        </div>

                        <div>
                          <div className="flex items-center font-semibold text-lg mb-1">
                            <CircleParking className="w-5 h-5 mr-2 text-white" />
                            Parking
                          </div>
                          <p className="ml-7 text-base">{location.parking}</p>
                        </div>

                        {location.coordinates.length > 0 && (
                          <div className="ml-1 mt-6 pb-2">
                            {(() => {
                              const raw = location.coordinates[0];
                              const dms = raw.includes(":") ? raw.split(":")[1].trim() : raw;
                              const decimalCoords = dmsToDecimal(dms);
                              return decimalCoords ? (
                                <a
                                  href={`https://www.google.com/maps?q=${decimalCoords}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-4 py-2 bg-white text-[#19516a] font-semibold rounded-full hover:bg-gray-100 transition"
                                >
                                  <MapPin className="w-4 h-4 mr-2" />
                                  View on Google Maps
                                </a>
                              ) : (
                                <p className="text-sm text-red-200">⚠️ Invalid coordinates</p>
                              );
                            })()}
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
