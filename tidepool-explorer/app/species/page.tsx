'use client';

import React, { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownContent } from "@/components/ui/dropdown";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Species {
  commonName: string;
  scientificName: string;
  images: string[];
  description: string;
}

function Species() {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [speciesData, setSpeciesData] = useState<{
    birds: Species[];
    marineMammals: Species[];
    invertebratesAndBonyFish: Species[];
    invasiveSpecies: Species[];
  }>({
    birds: [],
    marineMammals: [],
    invertebratesAndBonyFish: [],
    invasiveSpecies: [],
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("/data/birds.json")
      .then((res) => res.json())
      .then((data) => setSpeciesData(prev => ({ ...prev, birds: data })));

    fetch("/data/marine-mammals.json")
      .then((res) => res.json())
      .then((data) => setSpeciesData(prev => ({ ...prev, marineMammals: data })));

    fetch("/data/invertebrates-and-bony-fish.json")
      .then((res) => res.json())
      .then((data) => setSpeciesData(prev => ({ ...prev, invertebratesAndBonyFish: data })));

    fetch("/data/invasive-species.json")
      .then((res) => res.json())
      .then((data) => setSpeciesData(prev => ({ ...prev, invasiveSpecies: data })));
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const getFilteredSpecies = () => {
    switch (selectedCategory) {
      case "Birds":
        return speciesData.birds;
      case "Marine Mammals":
        return speciesData.marineMammals;
      case "Invertebrates And Bony Fish":
        return speciesData.invertebratesAndBonyFish;
      case "Invasive Species":
        return speciesData.invasiveSpecies;
      default:
        return speciesData.birds;
    }
  };

  return (
    <section className="pt-32 pb-24 bg-[#19516a] min-h-screen flex flex-col text-white text-lg leading-relaxed">
      <div className="px-6 w-full">
        <div className="max-w-[1320px] mx-auto">

          {/* Heading and Dropdown */}
          <div className="w-full flex flex-col lg:flex-row lg:items-start lg:gap-8 mb-10">
            <div className="flex-1">
              <h2 className="text-[36px] font-bold mb-4">Species Guide</h2>
              <p className="text-lg">
                Learn more about the species you will encounter while visiting the tidepools. Browse categories using the dropdown and click on each tile for more details.
              </p>
            </div>

            <div className="flex-shrink-0 mt-2 lg:mt-[44px] w-full lg:w-[450px] relative z-10">
              <Dropdown className="w-full bg-white rounded-lg shadow-lg relative">
                <DropdownTrigger
                  className="w-full h-[50px] bg-white text-[#19516a] px-4 py-2 rounded-lg text-lg font-semibold uppercase flex items-center justify-between cursor-pointer shadow-md"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedCategory ? selectedCategory : "Birds"} <span className="ml-2">▾</span>
                </DropdownTrigger>

                {isDropdownOpen && (
                  <DropdownContent className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <button className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => handleCategorySelect("Birds")}>Birds</button>
                    <button className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => handleCategorySelect("Marine Mammals")}>Marine Mammals</button>
                    <button className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => handleCategorySelect("Invertebrates And Bony Fish")}>Invertebrates and Bony Fish</button>
                    <button className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100 rounded-lg" onClick={() => handleCategorySelect("Invasive Species")}>Invasive Species</button>
                  </DropdownContent>
                )}
              </Dropdown>
            </div>
          </div>

          {/* Species Grid */}
          <div className="bg-[#3a899b] p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {getFilteredSpecies().length > 0 ? (
                getFilteredSpecies()
                  .slice()
                  .sort((a, b) => a.commonName.localeCompare(b.commonName))
                  .map((item, index) => (
                    <div
                      key={index}
                      tabIndex={0}
                      role="button"
                      onClick={() => setSelectedSpecies(item)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedSpecies(item);
                        }
                      }}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <Image
                        src={item.images[0]}
                        alt={item.commonName}
                        className="w-full h-full object-cover pointer-events-none"
                        width={400}
                        height={400}
                        priority={index < 4}
                      />
                      <div className="absolute bottom-0 w-full bg-[#19516a] py-3">
                        <h3 className="text-white text-center font-bold uppercase text-lg px-2">
                          {item.commonName}
                        </h3>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-center text-white col-span-full">No species listed.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog for Species Detail */}
      {selectedSpecies && (
        <Dialog open={Boolean(selectedSpecies)} onOpenChange={() => setSelectedSpecies(null)}>
          <DialogContent
            showClose={false}
            className="p-0 w-full !max-w-[90vw] sm:!w-[600px] md:!w-[800px] max-h-screen bg-[#19516a] rounded-lg border-0"
          >
            <div className="text-white p-8 relative flex flex-col gap-4">
              <h2 className="text-4xl font-bold">{selectedSpecies.commonName}</h2>
              <p className="text-xl italic">{selectedSpecies.scientificName}</p>
              <button
                onClick={() => setSelectedSpecies(null)}
                className="absolute top-6 right-6 text-white hover:opacity-80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="bg-white p-6 flex flex-col gap-4 rounded-b-lg">
              <div className="text-[#19516a] text-base leading-relaxed">
                <p>{selectedSpecies.description}</p>
              </div>

              <div className="w-full">
                <Carousel className="w-full flex flex-col items-center">
                  <div className="w-full">
                    <CarouselContent>
                      {selectedSpecies.images.map((img, imgIndex) => (
                        <CarouselItem key={imgIndex} className="flex justify-center">
                          <div className="flex items-center justify-center w-full max-w-[600px] aspect-video bg-white rounded-lg overflow-hidden">
                            <img
                              src={img}
                              alt={selectedSpecies.commonName}
                              className="max-w-full max-h-full rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </div>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full text-[#19516a] shadow-md" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full text-[#19516a] shadow-md" />
                </Carousel>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

export default Species;
