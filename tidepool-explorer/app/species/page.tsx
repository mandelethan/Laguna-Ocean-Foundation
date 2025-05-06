'use client'

import React, { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownContent } from "@/components/ui/dropdown";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Species {
  commonName: string;
  scientificName: string;
  images: string[];
  description: string;
}

function Species() {
  // State for the selected species (to show more info in a dialog)
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  // State to hold all species data by category
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

  // State to track the selected category (dropdown selection)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // State to track whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch species data for each category
  useEffect(() => {
    // Fetching data for different species categories
    fetch("/data/birds.json")
      .then((res) => res.json())
      .then((data: Species[]) => {
        setSpeciesData((prevData) => ({
          ...prevData,
          birds: data,
        }));
      })
      .catch((error) => console.error("Error fetching birds data:", error));

    fetch("/data/marine-mammals.json")
      .then((res) => res.json())
      .then((data: Species[]) => {
        setSpeciesData((prevData) => ({
          ...prevData,
          marineMammals: data,
        }));
      })
      .catch((error) => console.error("Error fetching marine mammals data:", error));

    fetch("/data/invertebrates-and-bony-fish.json")
      .then((res) => res.json())
      .then((data: Species[]) => {
        setSpeciesData((prevData) => ({
          ...prevData,
          invertebratesAndBonyFish: data,
        }));
      })
      .catch((error) => console.error("Error fetching invertebrates and bony fish data:", error));

    fetch("/data/invasive-species.json")
      .then((res) => res.json())
      .then((data: Species[]) => {
        setSpeciesData((prevData) => ({
          ...prevData,
          invasiveSpecies: data,
        }));
      })
      .catch((error) => console.error("Error fetching invasive species data:", error));
  }, []);

  // Function to handle dropdown selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);  // Set the selected category
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Function to filter species based on selected category
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
        return speciesData.birds;  // Default to birds if no category selected
    }
  };

  return (
    <section className="pt-20 bg-[#19516a] min-h-screen">
      <div className="flex flex-col text-white text-left mx-8 my-8 relative">
  {/* Top block: Heading and Dropdown */}
  <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
    <div>
      <h2 className="text-5xl font-bold mb-3">Species Guide</h2>
      <h3 className="text-xl font-semi-bold mt-2">Learn more about the species you will encounter visiting the tide-pools.</h3>
    </div>

    {/* Dropdown for species category selection */}
    <Dropdown className="w-full lg:w-[450px] bg-white rounded-lg shadow-lg z-10 relative">
      <DropdownTrigger
        className="w-full lg:w-[450px] h-[50px] bg-white text-[#19516a] px-4 py-2 rounded-lg text-lg font-semibold uppercase flex items-center justify-between cursor-pointer shadow-md"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedCategory ? selectedCategory : "Birds"} <span className="ml-2">▾</span>
      </DropdownTrigger>

      {isDropdownOpen && (
        <DropdownContent className="w-full lg:w-[450px] bg-white rounded-lg shadow-lg mt-2 z-50 
        relative lg:absolute lg:left-0 lg:top-full border border-gray-200">
          <button className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleCategorySelect("Birds")}>Birds</button>
          <button className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleCategorySelect("Marine Mammals")}>Marine Mammals</button>
          <button className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleCategorySelect("Invertebrates And Bony Fish")}>Invertebrates and Bony Fish</button>
          <button className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleCategorySelect("Invasive Species")}>Invasive Species</button>
        </DropdownContent>
      )}
    </Dropdown>
  </div>
</div>

      {/* New species grid with the updated design */}
      <div className="mx-8 mb-8 p-6 bg-[#5a8baa] rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {getFilteredSpecies().length > 0 ? (
            getFilteredSpecies().map((item, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedSpecies(item)}
              >
                <Image
                  src={item.images[0]}
                  alt={item.commonName}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                  priority={index < 4} // Priority load for visible items
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

      {/* Dialog Popup for selected species */}
      {selectedSpecies && (
        <Dialog open={Boolean(selectedSpecies)} onOpenChange={() => setSelectedSpecies(null)}>
          <DialogContent showClose={false} className="p-0 
                                                      w-full 
                                                      !max-w-none 
                                                      sm:!w-[600px] 
                                                      md:!w-[800px] 
                                                      lg:!w-[1000px] 
                                                      xl:!w-[1200px] 
                                                      max-h-screen 
                                                      bg-[#19516a] 
                                                      rounded-lg
                                                      border-0">
            {/* Blue header with species name */}
            <div className="text-white p-8 relative flex flex-col gap-4">
              <h2 className="text-4xl font-bold">{selectedSpecies.commonName}</h2>
              <p className="text-xl italic">{selectedSpecies.scientificName}</p>
              <button 
                onClick={() => setSelectedSpecies(null)}
                className="absolute top-6 right-6 text-white hover:opacity-80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg> 
                
              </button>
            </div>
            
            {/* Content area with horizontal layout */}
            <div className="bg-white p-8 flex flex-row gap-8 rounded-b-lg">
              {/* Description on the left */}
              <div className="flex-1 text-[#19516a] text-lg">
                <p> 
                  {selectedSpecies.description}
                </p>
              </div>
              
              {/* Image carousel on the right */}
              <div className="w-[50%] flex flex-col h-full">
                <Carousel className="w-full flex flex-col items-center">
                  {/* Keep the image size natural */}
                  <div className="w-full mb-12">
                    <CarouselContent>
                      {selectedSpecies.images.map((img, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="relative aspect-video w-full">
                            <Image
                              src={img}
                              alt={selectedSpecies.commonName}
                              className="object-cover rounded-lg"
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </div>

                  {/* Arrows after the image */}
                  <div className="flex justify-between w-full px-2 mt-6">
                  <CarouselPrevious className="static w-10 h-10" />
                  <CarouselNext className="static w-10 h-10" />
                </div>
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