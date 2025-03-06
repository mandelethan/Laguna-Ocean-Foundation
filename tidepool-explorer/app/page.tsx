import React from "react";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";

function Home() {
  return (
    <>
      {/* Intro picture */}
      <section className="pt-20 relative">
        <div className="relative h-[200px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/temp.jpg')" }}>
        </div>
      </section>
      {/* Intro descriptions */}
      <section>
        <div className="flex flex-col w-full">
          <h2 className="text-lg pt-4 font-bold text-blue-300 text-center">
            Plan Your Trip
          </h2>
          <p className="pt-1 px-6 text-sm text-center">
            Learn how to tidepool like a pro! Discover tips for safe, fun, and eco-friendly adventures, plus everything you need to know to plan your visit.
          </p>
          <div>
            <Button className="float-right text-blue-200">
              Get Started
              <CircleArrowRight/>
            </Button>
          </div>
          
          <div className="w-full block">
            <h2 className="text-lg pt-4 pl-6 font-bold text-blue-300 float-left">
              Locations
            </h2>
            <h2 className="text-sm underline pt-6 pr-6 text-blue-300 float-right hover">
              See All
            </h2>
          </div>
          <p className="pt-2 px-12">
            [Insert locations carousel here]
          </p>

          <h2 className="text-lg pt-4 font-bold text-blue-300 text-center">
            Discover Tide Pool Life
          </h2>
          <p className="pt-1 px-6 text-sm text-center">
            Dive into the wonders of Laguna Beach's tide pools! Meet the incredible species and explore the unique habitats that make these coastal treasures come alive.
          </p>
          <p>
            Insert species here?
          </p>
          <Button className="text-blue-200 text-lg underline">
            Learn More About These Species
            <CircleArrowRight />
          </Button>
        </div>
      </section>
      {/* Plan your trip */}
      <section>

      </section>
      
      
    </>
    
  );
}

export default Home;
