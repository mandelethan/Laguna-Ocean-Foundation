'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PlanYourTrip() {
  return (
    <section className="text-gray-800 text-lg leading-relaxed">
      {/* Tide Chart Section - White */}
      <div className="bg-white px-6 pt-32 pb-12">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-[36px] font-bold text-[#19516a] mb-4">Tidepool Charts</h1>
          <p className="mb-4 text-left text-gray-800 leading-relaxed">
            Embark on your tidepool adventure by first checking out the best times to visit based on tide schedules and researching the location for accessibility options like wheelchair ramps or smooth paths. Don’t forget to grab your trusty tidepool exploration gear, including sturdy footwear for navigating rocky terrain! And remember, while you’re marveling at the wonders of the tide, be sure to tread lightly and respect the quirky critters that call the tidepools home.
          </p>
          <p className="mb-10 text-left text-gray-800 leading-relaxed underline">
            Note: While Laguna Beach does not have a dedicated tide buoy, the chart below reflects tides from the nearest station at Newport Beach, which closely mirrors conditions in the area.
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Tide Chart + Button */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[380px]">
              <div className="rounded-xl overflow-hidden shadow-md w-[350px] h-[350px]">
                <iframe
                  id="ts_widget_1063f34b87b84a4eb7eb82aae01a4756"
                  scrolling="no"
                  marginHeight={0}
                  frameBorder={0}
                  height="350"
                  width="350"
                  className="intrinsic-ignore"
                  src="https://www.tidespro.com/us/california/newport-beach-newport-bay-entrance-corona-del-mar/widget/tidechart?apikey=1063f34b87b84a4eb7eb82aae01a4756"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
              <a
                href="https://www.tidespro.com/us/california/newport-beach-newport-bay-entrance-corona-del-mar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="bg-white text-[#19516a] px-6 py-3 w-full rounded-md font-semibold shadow-md hover:shadow-lg transition text-center">
                  View Full Tide Schedule →
                </button>
              </a>
            </div>

            {/* Kelp Image */}
            <div className="w-full lg:flex-1 rounded-xl overflow-hidden shadow-md self-start">
              <Image
                src="/plan your trip/G0534246.jpg"
                alt="Underwater tidepool scene"
                className="w-full h-[400px] object-cover"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tidepool Maps Section - Teal */}
      <div className="bg-[#3a899b] px-6 py-24 text-white">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Left: Image */}
          <div className="w-full lg:flex-1 rounded-xl overflow-hidden shadow-md self-start">
            <Image
              src="/plan your trip/G0136775.jpg"
              alt="Discover the Tidepools"
              className="w-full h-[360px] object-cover"
              width={600}
              height={360}
            />
          </div>

          {/* Right: Text + Button */}
          <div className="flex flex-col justify-between w-full lg:flex-1 text-left">
            <div>
              <h2 className="text-[36px] font-bold mb-4">Tidepool Maps</h2>
              <p className="mb-4">
                Set sail on a coastal escapade in the Laguna Ocean area, where you can explore tidepools such as Treasure Island, Shaw&apos;s Cove, or Heisler Park. Start by checking tide schedules for optimal viewing times and accessibility options, ensuring everyone can join in the fun. With your curiosity as your guide, wander through these rocky havens, uncovering hidden marine treasures and encountering fascinating sea creatures along the way.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/locations">
                <button className="bg-white text-[#19516a] px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition">
                  View Tidepool Maps →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MPA Section - Deep Blue */}
      <div className="bg-[#19516a] px-6 py-20 text-white">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Text + Button */}
          <div className="flex flex-col justify-between w-full lg:flex-1 text-left">
            <div>
              <h2 className="text-[36px] font-bold mb-4">Marine Protected Areas</h2>
              <p>
                MPAs safeguard vital ocean ecosystems, ensuring the health of marine life and habitats like tidepools.
                These protected zones help preserve biodiversity, support sustainable fisheries, and maintain the delicate balance of coastal environments.
                By respecting MPAs, we contribute to the long-term health of our oceans and the incredible species that call them home.
              </p>
            </div>
            <Link href="/mpa-rules">
              <button className="bg-white text-[#19516a] px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition mt-6">
                View MPA Guide →
              </button>
            </Link>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:flex-1 rounded-xl overflow-hidden shadow-md self-start">
            <Image
              src="/plan your trip/moss-cove-laguna-beach.jpg"
              alt="MPA sign at beach"
              className="w-full h-[360px] object-cover"
              width={600}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanYourTrip;




