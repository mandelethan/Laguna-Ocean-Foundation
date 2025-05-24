'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PlanYourTrip() {
  return (
    <main className="bg-white text-gray-800 leading-relaxed text-lg">
      {/* Section 1: Hero */}
      <section className="w-full">
        <Image
          src="/plan your trip/Laguna Beach Sunset Serenade.png"
          alt="Sunset over the coast"
          className="w-full h-auto object-cover"
          width={1600}
          height={800}
          priority
        />
      </section>

      {/* Section 2: Intro */}
      <section className="py-12 px-6 text-center bg-white">
        <h1 className="text-[36px] font-bold text-[#4A899C] mb-6">Tidepool Charts</h1>
        <p className="max-w-2xl mx-auto">
          Embark on your tidepool adventure by first checking out the best times to visit based on tide schedules and researching
          the location for accessibility options like wheelchair ramps or smooth paths. Don't forget to grab your trusty tidepool
          exploration gear, including sturdy footwear for navigating rocky terrain! And remember, while you're marveling at the
          wonders of the tide, be sure to tread lightly and respect the quirky critters that call the tidepools home.
        </p>
      </section>

      {/* Section 3: Tide Chart Widget */}
      <section className="bg-[#7DC7C9] py-16 px-6 text-center">
        <h2 className="text-[32px] font-bold text-white mb-4">Tide Charts</h2>
        <p className="text-white max-w-xl mx-auto mb-8">
          Tide charts help you know how high or low the water level will be on any given day. Low tides reveal hidden tidepool
          gems, while high tides can submerge them.
        </p>
        <iframe
          src="https://www.tidespro.com/scripts/e2f8baded0a349a3854c92278b1f1ff6/tidechart/us/california/newport-beach-newport-bay-entrance-corona-del-mar"
          width="100%"
          height="320"
          className="max-w-4xl mx-auto border-0"
          loading="lazy"
        ></iframe>
      </section>

      {/* Section 4: Locations */}
      <section className="bg-[#4A899C] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              src="/plan your trip/G0136775.jpg"
              alt="Tidepool exploration"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] font-bold mb-4">Tidepool Maps</h2>
            <p className="mb-6">
              Explore tidepools like Treasure Island, Shaw's Cove, or Heisler Park. Use maps and tide info to plan the best
              times for access and discovery.
            </p>
            <Link
              href="/locations"
              className="inline-block bg-white text-[#4A899C] px-6 py-3 rounded shadow font-semibold hover:bg-gray-100"
            >
              View Tidepool Maps →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: MPA Info */}
      <section className="bg-[#E3C088] py-16 px-6 text-center text-[#1e4d4d]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              src="/plan your trip/moss-cove-laguna-beach.jpg"
              alt="Marine Protected Area Sign"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] font-bold mb-4">Marine Protected Areas</h2>
            <p className="mb-6">
              MPAs protect biodiversity and ocean health by preserving habitats like tidepools. Following MPA rules supports
              sustainability for future generations.
            </p>
            <Link
              href="/mpa-rules"
              className="inline-block bg-white text-[#1e4d4d] px-6 py-3 rounded shadow font-semibold hover:bg-gray-100"
            >
              View MPA Guide →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
