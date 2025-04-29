'use client';
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardTitle,
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Species {
  commonName: string;
  scientificName: string;
  images: string[];
}

function Species() {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
   // Define a state for all species data
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

  // Fetch and update data for each species category
  useEffect(() => {
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

  return (
    <section className="pt-20 bg-[#19516a] min-h-screen">
      <div className="flex flex-col items-center text-white justify-center text-center my-4">
        <h2 className="text-2xl font-bold mb-3">Species Guide</h2>
        <h3 className="text-xl font-bold mt-2">Get ready to be amazed when you visit the tidepools.</h3>
        <h4 className="text-lg">But first,</h4>
        <h3 className="text-xl font-bold">Let&apos;s learn about the tidal zones.</h3>
      </div>
      <Tabs defaultValue="birds" className="w-full">
        {/* Hardcoded Tab Navigation */}
        <TabsList className="grid w-full h-auto grid-cols-4 gap-2 mb-5 md:mb-0 bg-blue-100">
          <TabsTrigger value="birds" className="whitespace-normal text-center">Birds</TabsTrigger>
          <TabsTrigger value="marineMammals" className="whitespace-normal text-center">Marine Mammals</TabsTrigger>
          <TabsTrigger value="invertebratesAndBonyFish" className="whitespace-normal text-center">Invertebrates and Bony Fish</TabsTrigger>
          <TabsTrigger value="invasiveSpecies" className="whitespace-normal text-center">Invasive Species</TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        {Object.entries(speciesData).map(([category, species]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-4 mb-8">
              {species.length > 0 ? (
                species.map((item, index) => (
                  <Card 
                    key={index} 
                    className="flex flex-col items-center p-4 bg-white cursor-pointer hover:shadow-lg transition"
                    onClick={() => setSelectedSpecies(item)}
                  >
                    {/* Display first image */}
                    <Image
                      src={item.images[0]} 
                      alt={item.commonName}
                      className="w-32 h-32 object-cover rounded-lg"
                      width={300}
                      height={300}
                    />
                    {/* Species name */}
                    <CardTitle className="text-center text-lg font-semibold mt-2 text-[#19516a]">
                      {item.commonName}
                    </CardTitle>
                  </Card>
                ))
              ) : (
                <p className="text-center text-gray-500">No species listed.</p>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Dialog Popup (only renders when selectedSpecies is not null) */}
      {selectedSpecies && (
        <Dialog open={Boolean(selectedSpecies)} onOpenChange={() => setSelectedSpecies(null)}>
          <DialogContent className="bg-white flex flex-col text-[#19516a]">
            <DialogHeader className="items-center">
              <DialogTitle>{selectedSpecies.commonName}</DialogTitle>
              <DialogDescription>
                {selectedSpecies.scientificName}
              </DialogDescription>
            </DialogHeader>

            {/* Image Carousel */}
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