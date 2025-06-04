"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const faqData = [
  // Planning
  {
    category: "Planning",
    question: "What will I see?",
    answer:
      "Visit our page dedicated to tidepool species and what you can expect to see. Want a hard copy to print out for your next visit? Download the Tidepool Explorer Guide created by Orange County Marine Protected Area Council.",
  },
  {
    category: "Planning",
    question: "What should I bring?",
    answer:
      "Bring sun protection, including a hat, sunglasses, and reef safe sunscreen. We recommend Raw Elements for reef safe sunscreen. Tidepools are on an exposed coastline and there is no refuge from the sun. You’ll also want to bring water and snacks. Water is available at all restroom locations, but not all tidepool locations have restrooms nearby.",
  },
  {
    category: "Planning",
    question: "Where should I park?",
    answer:
      "Laguna Beach offers many parking options throughout the span of the 7-mile coastline. There are paid parking lots, metered parking spaces (download the parking app), and a free trolley that brings you from the canyon down to the coastline. While some tidepool locations are only accessible through residential areas, we recommend parking in one of the public parking areas and taking the free trolley to the nearest drop-off location.",
  },
  {
    category: "Planning",
    question: "What should I wear?",
    answer:
      "We recommend that you wear quick-dry clothing (just in case you get wet!) and clothing with built-in UPF protection. A jacket is also recommended because it can be cold, even during summer. Barefoot or flip flops are not recommended due to sharp rocks and other hazards. Wearing water shoes, closed-toed sandals, or sneakers is best. Check out LOF’s Merch Store which has some sunsafe options!",
  },

  // Things to Do
  {
    category: "Things to Do",
    question: "What are other landmarks I can visit?",
    answer:
      "The Laguna Ocean Foundation worked with California Coastal National Monument to have the rocky areas and reefs off the coast of Laguna Beach protected as a National Monument. Which means that basically everywhere you’re looking off the coast is one big landmark! Bird Rock and Seal Rock are two of the most prominent areas within Laguna Beach that’s protected by this status. Check them out when you visit either Heisler Park or Crescent Bay! There’s also a very picturesque rock arch at Treasure Island that’s worth checking out while exploring the tidepools.",
  },
  {
    category: "Things to Do",
    question: "What else is there to do nearby?",
    answer:
      "Lots! Laguna Beach offers a wide variety of things to do. If you’re looking for shopping, a bite to eat, or art galleries, then the Promenade on Forest Ave. is the place for you! Ready to dive in and explore life under the water? Then check out Beach Cities Scuba! The Laguna Art Museum is always a good option when you’re looking for a break from the sun.",
  },

  // Tidepool Information
  {
    category: "Tidepool Information",
    question: "What can I take back with me?",
    answer:
      "Our favorite things you can take? Photographs! You can take photos of all the animals, algae, plans, shells, and rocks you see! Enjoy the photos, and they won’t make your car or home smell. Additionally, you are welcome to take any beach trash, including sea glass. Please remember the MPA rules which don’t allow any natural items to be removed from the tidepools, like shells and rocks.",
  },
  {
    category: "Tidepool Information",
    question: "Are there any sharks in the tidepools?",
    answer:
      "Most of the sharks seen from shore around Laguna Beach are leopard sharks. These harmless sharks are usually seen in the shallow waters of sandy beaches, skimming the sand in search of food. On rare occasions, a leopard shark may get swept into a tidepool. However, it would likely disperse back to the open ocean as soon as possible. There are, however, small fish in the tidepools that are often mistaken for baby sharks. These fish are sculpins and look somewhat similar to small sharks and tend to sit on the bottom of the pools.",
  },
  {
    category: "Tidepool Information",
    question: "Are there any harmful species found in the tidepools?",
    answer:
      "Yes, there are several species that can hurt you in our tidepools. Purple Sea Urchins can pierce skin with their spines. Crabs can pinch with their claws. Moray eels can bite with their teeth. Octopus can bite with their beaks. There are species of marine worms that can deliver a powerful, envenomated bite. Luckily, almost all of these potentially dangerous animal interactions can be avoided if you are following the MPA rules and not stepping in the tidepools or touching the animals. It is also important to watch your step on the rocks, because the mussel and barnacles can cause scrapes and bruises.",
  },
  {
    category: "Tidepool Information",
    question: "What are the seasonal changes to the tidepools?",
    answer:
      "The tidepools experience seasonal change in several ways. Just like the open ocean, water temperature in the tidepools tends to be warmer in the summer and fall, and cooler in the winter and spring. The temperature fluctuations in shallow tidepools can be extreme! Another obvious seasonal change is sand and beach erosion. During winter and spring storms and swells, much of the sandy beach can be swept away. Sometimes this reveals more rocks, increasing the area of the rocky intertidal zone. Usually, the sand is naturally deposited by wave action again in late spring and summer. During this time, much of the intertidal zone may appear “sanded in.” As well, a number of the creatures living in the tidepools have seasonal cycles. Some animals, like sea hares, are very visible during certain seasons and almost entirely absent during others.",
  },
];

export default function FAQPage() {
  const [active, setActive] = useState(Array(faqData.length).fill(false));
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = faqData
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => {
      const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

  useEffect(() => {
    setActive(Array(faqData.length).fill(false));
  }, [selectedCategory, search]);

  const toggleActive = (idx: number) => {
    const updated = [...active];
    updated[idx] = !updated[idx];
    setActive(updated);
  };

  return (
    <section className="bg-[#19516a] text-white text-lg leading-relaxed min-h-screen flex flex-col">
      <div className="px-6 pt-32 pb-16 flex-grow">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-[36px] font-bold mb-6">Frequently Asked Questions</h1>

          <div className="md:grid md:grid-cols-[16rem_1fr] flex flex-col gap-10">
            <aside className="md:w-64 w-full md:sticky top-32 h-fit">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search Question Here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 pl-10 py-2 text-sm rounded-full bg-white text-black shadow placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Image
                  src="/search-icon.png"
                  alt="Search"
                  width={16}
                  height={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
              </div>
              <nav className="space-y-2">
                {["All", "Planning", "Things to Do", "Tidepool Information"].map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left font-semibold transition-all duration-150 ${
                        isActive ? "underline" : "hover:underline"
                      }`}
                      style={{ color: isActive ? "#C2E5F5" : "#8CC0D9" }}
                    >
                      {category}
                    </button>
                  );
                })}
              </nav>
            </aside>

            <main className="flex-1">
              {filteredFaqs.length === 0 ? (
                <div className="flex flex-col items-center space-y-4 text-white text-center font-semibold py-20 rounded-xl">
                  <p className="text-xl">No matching questions found.</p>
                  <Image
                    src="/whale.png"
                    alt="No Results"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="divide-y divide-white/30">
                  {filteredFaqs.map(({ item, index }, i) => {
                    const isFirst = i === 0;
                    const isLast = i === filteredFaqs.length - 1;

                    return (
                      <div
                        key={index}
                        className={`
                          ${isFirst ? "border-t border-white/30" : ""}
                          ${isLast ? "border-b border-white/30" : ""}
                        `}
                      >
                        <button
                          onClick={() => toggleActive(index)}
                          className="w-full flex justify-between items-center px-6 pt-6 pb-5 text-left text-2xl font-semibold"
                        >
                          {item.question}
                          <span
                            className={`inline-block text-xl transition-transform duration-300 ${
                              active[index] ? "rotate-180" : ""
                            }`}
                          >
                            ⌄
                          </span>
                        </button>
                        {active[index] && (
                          <div className="px-6 pb-4 pt-2 text-base text-white">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

