import React from "react";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

function Home() {
  return (
    <section className="pt-20 relative text-[#19516a]">
      {/* Intro picture */}
      <div className="relative h-[200px] w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/temp.jpg')" }}>
        <div className="bg-[#009dff] absolute top-0 left-0 w-full h-full opacity-20">
          
        </div>
        <h1 className="text-white text-2xl text-center z-1">Come and see the Laguna Tidepools</h1>
      </div>

      {/* Intro descriptions */}
      <div className="flex flex-col w-full px-4 bg-[#1A516A]">

        {/* Hero section */}
        <div className="flex flex-col bg-[#EAFAFC] rounded-2xl p-5 mb-7">
          <h2 className="text-3xl font-bold text-[#184C64]">
            Plan Your Trip!
          </h2>
          <p className="text-sm my-3">
            Learn how to tidepool like a pro! Discover tips for safe, fun, and eco-friendly adventures, plus everything you need to know to plan your visit.
          </p>
          <Link href="/plan-your-trip">
            <Button className="text-[#1A516A] text-2xl bg-[#ACE9FF] h-14 rounded-2xl cursor-pointer w-full">
                Get Started
              <CircleArrowRight />
            </Button>
          </Link>
        </div>
        
        {/* Locations */}
        <div className="flex flex-col bg-[#1A2B47] rounded-2xl p-5 mb-7">
          <h2 className="text-3xl font-bold text-white float-left text-center">
            Explore the Tidepools
          </h2>
          <p className="text-md text-white my-3 px-1 text-center">
            Theres so much for you to see at our beautiful tidepools! Learn more about each of our six tidepools located along the Laguna Beach coast line.
          </p>
          <Link href="/locations">
            <Button className="bg-[#CCA361] text-white text-2xl h-14 rounded-xl cursor-pointer w-full">
              Lets Explore
            </Button>
          </Link>
          {/* <h2 className="text-sm underline pt-6 pr-6 text-blue-300 float-right hover">
            See All
          </h2> */}
        </div>
        
        {/* Species Guide */}
        <div className="flex flex-col bg-white rounded-2xl p-5 mb-7">
          <h2 className="text-xl pt-4 font-bold text-[#1A516A] text-center">
            Discover Tide Pool Life
          </h2>
          <Link href="/species">
            <Button className="text-[#1A516A] text-2xl bg-[#ACE9FF] my-3 h-14 rounded-xl cursor-pointer w-full">
              Explore Species
              <CircleArrowRight />
            </Button>
          </Link>
          <p className="pt-1 px-6 text-sm text-center">
            Dive into the wonders of Laguna Beach&apos;s tide pools! Meet the incredible species and explore the unique habitats that make these coastal treasures come alive.
          </p>        
        </div>
        
      </div>
    </section>
  );
}

export default Home;
