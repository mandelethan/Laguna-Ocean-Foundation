'use client';
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogTrigger, 
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

interface SpeciesItem {
  commonName: string;
  scientificName: string;
  images: string[];
}

const speciesData = {
  "birds": [
    {
      commonName: "Brown Pelican",
      scientificName: "Pelecanus occidentalis",
      images: [
        "/species/birds/brown-pelican/1.jpg",
        "/species/birds/brown-pelican/2.jpg",
        "/species/birds/brown-pelican/3.jpg",
      ],
    },
    {
      commonName: "Double-crested Cormorant",
      scientificName: "Nannopterum auritum",
      images: [
        "/species/birds/double-crested-cormorant/1.jpg",
        "/species/birds/double-crested-cormorant/2.jpeg",
        "/species/birds/double-crested-cormorant/3.jpg",
      ],
    },
    {
      commonName: "Brandt’s Cormorant",
      scientificName: "Urile penicillatus",
      images: [
        "/species/birds/brandts-cormorant/1.jpeg",
        "/species/birds/brandts-cormorant/2.jpg",
        "/species/birds/brandts-cormorant/3.jpg",
      ],
    },
  ],
  "marine-mammals": [
    {
      commonName: "California Sea Lion",
      scientificName: "Zalophus californianus",
      images: [
        "/species/marine-mammals/california-sea-lion/1.jpg",
        "/species/marine-mammals/california-sea-lion/2.jpg",
        "/species/marine-mammals/california-sea-lion/3.jpg"
      ],
    },
    {
      commonName: "Harbor Seal",
      scientificName: "Phoca vitulina",
      images: [
        "/species/marine-mammals/harbor-seal/1.jpg",
        "/species/marine-mammals/harbor-seal/2.jpg",
        "/species/marine-mammals/harbor-seal/3.jpg"
      ],
    },
    {
      commonName: "Bottlenose Dolphin",
      scientificName: "Tursiops truncatus",
      images: [
        "/species/marine-mammals/bottlenose-dolphin/1.jpg",
        "/species/marine-mammals/bottlenose-dolphin/2.jpg",
      ],
    },
  ],
  "invertebrates-and-bony-fish": [
    {
      commonName: "Bat Star",
      scientificName: "Patiria miniata",
      images: [
        "/species/invertebrates-and-bony-fish/bat-star/1.jpg",
        "/species/invertebrates-and-bony-fish/bat-star/2.jpg",
        "/species/invertebrates-and-bony-fish/bat-star/3.jpg"
      ],
    },
    {
      commonName: "Knobby Sea Star",
      scientificName: "Pisaster giganteus",
      images: [
        "/species/invertebrates-and-bony-fish/knobby-sea-star/1.jpeg",
        "/species/invertebrates-and-bony-fish/knobby-sea-star/2.jpg",
        "/species/invertebrates-and-bony-fish/knobby-sea-star/3.jpg",
      ],
    },
    {
      commonName: "Brittle Star",
      scientificName: "Ophiuroidea",
      images: [
        "/species/invertebrates-and-bony-fish/brittle-star/1.jpg",
        "/species/invertebrates-and-bony-fish/brittle-star/2.jpg",
      ],
    },
  ],
  "invasive-species": [
    {
      commonName: "Devil Weed",
      scientificName: "Sargassum horneri",
      images: [
        "/species/invasive/devil-weed/1.jpeg",
        "/species/invasive/devil-weed/2.jpeg",
        "/species/invasive/devil-weed/3.jpg",
      ],
    },
    {
      commonName: "Japanese Wireweed",
      scientificName: "Sargassum muticum",
      images: [
        "/species/invasive/japanese-wireweed/1.jpg",
        "/species/invasive/japanese-wireweed/2.jpg",
        "/species/invasive/japanese-wireweed/3.jpg",
      ],
    },
    {
      commonName: "Wakame",
      scientificName: "Undaria pinnatifida",
      images: [
        "/species/invasive/wakame/1.jpeg",
        "/species/invasive/wakame/2.jpeg",
        "/species/invasive/wakame/3.jpg",
      ],
    },
  ],
};

function Species() {
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesItem | null>(null);

  return (
    <section className="pt-20 bg-[#19516a]">
      <div className="flex flex-col items-center text-white justify-center text-center my-4">
        <h2 className="text-2xl font-bold mb-3">Species Guide</h2>
        <h3 className="text-xl font-bold mt-2">Get ready to be amazed when you visit the tidepools.</h3>
        <h4 className="text-lg">But first,</h4>
        <h3 className="text-xl font-bold">Let&apos;s learn about the tidal zones.</h3>
      </div>
      <Tabs defaultValue="birds" className="w-full">
        {/* Hardcoded Tab Navigation */}
        <TabsList className="grid w-full h-auto grid-cols-4 lg:grid-cols-5 gap-2 mb-5 md:mb-0 bg-blue-100">
          <TabsTrigger value="birds" className="whitespace-normal text-center">Birds</TabsTrigger>
          <TabsTrigger value="marine-mammals" className="whitespace-normal text-center">Marine Mammals</TabsTrigger>
          <TabsTrigger value="invertebrates-and-bony-fish" className="whitespace-normal text-center">Invertebrates and Bony Fish</TabsTrigger>
          <TabsTrigger value="invasive-species" className="whitespace-normal text-center">Invasive Species</TabsTrigger>
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