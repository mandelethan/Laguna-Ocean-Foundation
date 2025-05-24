'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PlanYourTrip() {
  return (
    <section className="text-gray-800 text-lg leading-relaxed">
      {/* Tide Chart Section - White */}
      <div className="bg-white px-6 py-12 text-center">
        <h1 className="text-[36px] font-bold text-[#1e4d4d] mb-4">Tidepool Charts</h1>
        <p className="max-w-2xl mx-auto mb-6">
          Embark on your tidepool adventure by first checking out the best times to visit based on tide schedules and researching the location for accessibility options like wheelchair ramps or smooth paths. Don&apos;t forget to grab your trusty tidepool exploration gear, including sturdy footwear for navigating rocky terrain! And remember, while you&apos;re marveling at the wonders of the tide, be sure to tread lightly and respect the quirky critters that call the tidepools home.
        </p>
        <div className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Tide Chart Widget */}
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.tidespro.com/widgets/e2f8baded0a349a3854c92278b1f1ff6/tidechart/us/california/newport-beach-newport-bay-entrance-corona-del-mar"
              width="100%"
              height="280"
              style={{ border: 'none', overflow: 'hidden' }}
              loading="lazy"
            ></iframe>
          </div>
          {/* Tidepool Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/plan your trip/Laguna Beach Sunset Serenade.png"
              alt="Underwater tidepool sunrise view"
              className="rounded-xl shadow-md w-full"
              width={500}
              height={280}
            />
          </div>
        </div>
      </div>

      {/* Tidepool Maps Section - Teal */}
      <div className="bg-[#7DC7C9] px-6 py-16 text-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <Image
            src="/plan your trip/G0136775.jpg"
            alt="Discover the Tidepools"
            className="rounded-xl shadow-md w-full lg:w-[500px]"
            width={500}
            height={350}
          />
          <div className="text-left">
            <h2 className="text-[36px] font-bold mb-4">Tidepool Maps</h2>
            <p className="mb-6">
              Set sail on a coastal escapade in the Laguna Ocean area, where you can explore tidepools such as Treasure Island, Shaw&apos;s Cove, or Heisler Park. Start by checking tide schedules for optimal viewing times and accessibility options, ensuring everyone can join in the fun. With your curiosity as your guide, wander through these rocky havens, uncovering hidden marine treasures and encountering fascinating sea creatures along the way.
            </p>
            <Link href="/locations">
              <button className="bg-white text-[#1e4d4d] px-6 py-3 rounded-md font-semibold hover:shadow-lg transition">
                View Tidepool Maps →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* MPA Section - Deep Blue */}
      <div className="bg-[#4A899C] px-6 py-16 text-white">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="text-left">
            <h2 className="text-[36px] font-bold mb-4">Marine Protected Areas</h2>
            <p className="mb-6">
              MPAs safeguard vital ocean ecosystems, ensuring the health of marine life and habitats like tide pools. These protected zones help preserve biodiversity, support sustainable fisheries, and maintain the delicate balance of coastal environments. By respecting MPAs, we contribute to the long-term health of our oceans and the incredible species that call them home.
            </p>
            <Link href="/mpa-rules">
              <button className="bg-white text-[#1e4d4d] px-6 py-3 rounded-md font-semibold hover:shadow-lg transition">
                View MPA Guide →
              </button>
            </Link>
          </div>
          <Image
            src="/plan your trip/moss-cove-laguna-beach.jpg"
            alt="MPA sign at beach"
            className="rounded-xl shadow-md w-full lg:w-[500px]"
            width={500}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}

export default PlanYourTrip;
