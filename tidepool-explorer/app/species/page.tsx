'use client'

import React, { useState, useEffect } from "react";
import { Dropdown, DropdownList, DropdownTrigger, DropdownContent } from "@/components/ui/dropdown";
import { Card, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Species {
  commonName: string;
  scientificName: string;
  images: string[];
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
      case "birds":
        return speciesData.birds;
      case "marineMammals":
        return speciesData.marineMammals;
      case "invertebratesAndBonyFish":
        return speciesData.invertebratesAndBonyFish;
      case "invasiveSpecies":
        return speciesData.invasiveSpecies;
      default:
        return speciesData.birds;  // Return an empty array if no category is selected
    }
  };

  return (
    <section className="pt-20 bg-[#19516a] min-h-screen">
      <div className="flex flex-col items-start text-white text-left mx-8 my-8 relative">
        <h2 className="text-5xl font-bold mb-3">The Species Guide</h2>
        <h3 className="text-xl font-semi-bold mt-2">Learn more about the species you will encounter visiting our tide pools.</h3>

        {/* Dropdown for species category selection */}
        <Dropdown className="absolute top-0 right-0 w-[300px]">
          <DropdownTrigger
            className="bg-white text-[#19516a] p-4 rounded-lg text-center cursor-pointer text-2xl"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown open/close
          >
            {selectedCategory ? selectedCategory : "Birds"} {/* Display selected category */}
          </DropdownTrigger>

          {isDropdownOpen && (
            <DropdownContent className="absolute w-full bg-white rounded-lg shadow-lg mt-2">
              {/* Dropdown items */}
              <button
                className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleCategorySelect("birds")}  // Handle category selection
              >
                Birds
              </button>
              <button
                className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleCategorySelect("marineMammals")}
              >
                Marine Mammals
              </button>
              <button
                className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleCategorySelect("invertebratesAndBonyFish")}
              >
                Invertebrates and Bony Fish
              </button>
              <button
                className="block w-full text-[#19516a] text-lg text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleCategorySelect("invasiveSpecies")}
              >
                Invasive Species
              </button>
            </DropdownContent>
          )}
        </Dropdown>
      </div>

      {/* Display species based on the selected category */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-4 mb-8">
        {getFilteredSpecies().length > 0 ? (
          getFilteredSpecies().map((item, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-4 bg-white cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedSpecies(item)}  // Set selected species for dialog
            >
              <Image
                src={item.images[0]}
                alt={item.commonName}
                className="w-32 h-32 object-cover rounded-lg"
                width={300}
                height={300}
              />
              <CardTitle className="text-center text-lg font-semibold mt-2 text-[#19516a]">
                {item.commonName}
              </CardTitle>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No species listed.</p>
        )}
      </div>

      {/* Dialog Popup for selected species */}
      {selectedSpecies && (
        <Dialog open={Boolean(selectedSpecies)} onOpenChange={() => setSelectedSpecies(null)}>
          <DialogContent className="bg-white flex flex-col text-[#19516a]">
            <DialogHeader className="items-center">
              <DialogTitle>{selectedSpecies.commonName}</DialogTitle>
              <DialogDescription>{selectedSpecies.scientificName}</DialogDescription>
            </DialogHeader>

            <div className="flex justify-center">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {selectedSpecies.images.map((img, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div className="w-full flex justify-center">
                        <Image
                          key={imgIndex}
                          src={img}
                          alt={selectedSpecies.commonName}
                          className="w-64 h-64 object-cover rounded-lg"
                          width={600}
                          height={600}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

export default Species;


