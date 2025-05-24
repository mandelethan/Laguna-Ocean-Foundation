import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main className="bg-[#295068] min-h-screen text-white pb-20">
      {/* Hero Section with Blue Gradient Overlay */}
      <div className="relative w-full h-[450px] md:h-[550px]">
        <Image
          src="/laguna-beach.jpg"
          alt="Laguna Beach Tidepools"
          fill
          className="object-cover z-0"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#295068]/40 to-[#295068] z-10" />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-20 px-4 w-full max-w-6xl">
          <h1 className="text-5xl md:text-[60px] font-semibold leading-tight">
            Laguna Beach Tidepools
          </h1>
          <p className="mt-4 text-2xl md:text-[35px] font-medium">
            Seven Miles of Protected Coastline. One Community. Endless Impact.
          </p>
        </div>
      </div>

      {/* Guide Cards Section */}
      <div className="mt-4 px-4 md:px-10 flex flex-wrap justify-center gap-14">
        {/* Adventure Guide */}
        <Link href="/plan-your-trip" className="w-full sm:w-[500px] md:w-[650px] aspect-square">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:scale-[1.02] transition-transform w-full h-full">
            <Image
              src="/adventure-guide.jpg"
              alt="Adventure Guide"
              fill
              className="object-cover z-0"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent z-10" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center p-8">
              <h2 className="text-5xl font-semibold">Adventure Guide</h2>
              <p className="text-2xl mt-2">
                Tidepool safely with charts, maps, and location guides.
              </p>
            </div>
          </div>
        </Link>

        {/* Species Guide */}
        <Link href="/species" className="w-full sm:w-[500px] md:w-[650px] aspect-square">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:scale-[1.02] transition-transform w-full h-full">
            <Image
              src="/species-guide.jpg"
              alt="Species Guide"
              fill
              className="object-cover z-0"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent z-10" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center p-8">
              <h2 className="text-5xl font-semibold">Species Guide</h2>
              <p className="text-2xl mt-2">
                Discover local marine life with our species chart.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Home;