'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PlanYourTrip() {
  return (
    <section className="pt-20 bg-white text-gray-800 font-['Nunito_Sans'] text-lg leading-relaxed">
      {/* Hero + Page Break */}
      <div className="relative w-full">
        <Image 
          src="/plan your trip/Laguna Beach Sunset Serenade.png" 
          alt="Coastline view at sunset" 
          className="w-full h-auto object-cover"
        />
        <div className="-mt-1 w-full overflow-hidden">
          <Image 
            src="/plan your trip/page_break-removebg-preview.png" 
            alt="page break cloud shape"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>

      {/* Plan Your Trip Section */}
      <div className="text-center px-6 mt-6">
        <h1 className="text-[36px] font-bold text-[#1e4d4d] mb-4">Plan Your Trip</h1>
        <p className="max-w-md mx-auto">
          Embark on your tidepool adventure by first checking out the best times to visit based on
          tide schedules and researching the location for accessibility options like wheelchair ramps
          or smooth paths. Don&apos;t forget to grab your trusty tidepool exploration gear, including sturdy
          footwear for navigating rocky terrain! And remember, while you&apos;re marveling at the wonders
          of the tide, be sure to tread lightly and respect the quirky critters that call the tidepools home.
        </p>
      </div>

      {/* Sea Life Image */}
      <div className="mt-10 text-center px-6">
        <div className="flex justify-center mb-4">
          <Image 
            src="/plan your trip/G0534246.jpg" 
            alt="Underwater tidepool scene" 
            className="rounded-xl shadow-md w-96 max-w-full"
          />
        </div>
      </div>

      {/* Tide Charts Section */}
      <div className="mt-10 text-center px-6">
        <h2 className="text-[36px] font-bold text-[#1e4d4d] mb-4">Tide Charts</h2>
        <p className="max-w-md mx-auto">
          <a 
            href="https://www.tide-forecast.com/locations/Laguna-Beach/tides/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-semibold"
          >
            Tide Charts
          </a>{' '}
          are great ways to see how high or low the water level is going to be at any given day.
          When the tide is low, it can reveal more of the shore&apos;s secrets! Be aware that there will be
          fewer visible tidepools during higher water levels, and much of the shore may be submerged
          or inaccessible.
        </p>
      </div>

      {/* Location Section with Extended Background */}
      <div
        className="mt-10 pt-6 pb-10 px-6 text-center"
        style={{ backgroundColor: '#8CC1D9' }}
      >
        <h3 className="text-[36px] font-bold text-[#1e4d4d] mb-4">Location, Location, Location</h3>
        <p className="max-w-md mx-auto mb-6">
          Set sail on a coastal escapade in the Laguna Ocean area, where you can explore tidepools
          such as Treasure Island, Shaw&apos;s Cove, or Heisler Park. Start by checking tide schedules for
          optimal viewing times and accessibility options, ensuring everyone can join in the fun. With
          your curiosity as your guide, wander through these rocky havens, uncovering hidden marine
          treasures and encountering fascinating sea creatures along the way.
        </p>

        <p className="font-bold text-[18pt] mb-3">
          Find out more about the <br /> different tidepool areas
        </p>
        <Link href="/locations">
          <div className="relative max-w-md mx-auto cursor-pointer group mb-6">
            <Image
              src="/plan your trip/G0136775.jpg"
              alt="Person exploring tidepools"
              className="rounded-xl w-full h-auto shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-4xl font-extrabold text-center drop-shadow-lg group-hover:underline">
                Discover the <br /> Tidepools
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Marine Protected Areas Section */}
      <div
        className="pt-6 pb-10 px-6 text-center"
        style={{ backgroundColor: '#C7E2EF' }}
      >
        <h3 className="text-[36px] font-bold text-[#1e4d4d] mb-4">Marine Protected Areas</h3>
        <p className="max-w-md mx-auto mb-6">
          MPAs safeguard vital ocean ecosystems, ensuring the health of marine life and habitats like tide pools.
          These protected zones help preserve biodiversity, support sustainable fisheries, and maintain the delicate
          balance of coastal environments. By respecting MPAs, we contribute to the long-term health of our oceans
          and the incredible species that call them home.
        </p>

        <p className="font-bold text-[18pt] mb-3">
          Find out more about the <br /> Marine Protected Areas
        </p>
        <Link href="/mpa-rules">
          <div className="relative max-w-md mx-auto cursor-pointer group">
            <Image
              src="/plan your trip/moss-cove-laguna-beach.jpg"
              alt="MPA sign at beach"
              className="rounded-xl w-full h-auto shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-4xl font-extrabold text-center drop-shadow-lg group-hover:underline">
                MPA Guide
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default PlanYourTrip;
