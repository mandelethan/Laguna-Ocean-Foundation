"use client"

import React from 'react'
import { useState } from 'react'
import QAaccord from "@/components/ui/accordqa"
import { Nunito_Sans } from "next/font/google"

const nunitoFont = Nunito_Sans({
    subsets: ["latin"],
    weight: ["400", "700"]
});

const faqData = [
  {
    idx: 1,
    question: "What should I wear?",
    answer: "Quick-drying clothes, closed-toed shoes or sandals, a jacket, a hat, sunglasses, and sunscreen!"
  },
  {
    idx: 2,
    question: "What should I bring?",
    answer: "Water and snacks. Waterproof electronics like cameras and cellphones. First-aid kit and a towel."
  },
  {
    idx: 3,
    question: "What will I see?",
    answer: "All types of species, from mussels to starfish to octopus! Check out our species guide for more details!"
  },
  {
    idx: 4,
    question: "Where should I park?",
    answer: "Lorem ipsum dolor sit amet consectetur. Pulvinar vitae lectus elementum consequat turpis leo suspendisse duis sit."
  },
  {
    idx: 5,
    question: "What can I take back with me?",
    answer: "Lorem ipsum dolor sit amet consectetur. Pulvinar vitae lectus elementum consequat turpis leo suspendisse duis sit."
  },
  {
    idx: 6,
    question: "What should I wear?",
    answer: "Lorem ipsum dolor sit amet consectetur. Pulvinar vitae lectus elementum consequat turpis leo suspendisse duis sit."
  }
]

function FAQs() {
  const [active, setActive] = useState([false, false, false, false, false, false, false]);

  const isSomeActive = active.some((element)=>element);

  const handleClick = () => {
    if (isSomeActive) {
      setActive([false, false, false, false, false, false, false]);
    }
    else {
      setActive([true, true, true, true, true, true, true]);
    }
  }

  return (
    <section className={`pt-20 bg-[#35899F] p-3 w-full text-white ${nunitoFont.className}`}>
      <QAaccord
      handleClick={handleClick}
      isSomeActive={isSomeActive}
      data={faqData}
      turn={active}
      setTurn={setActive}
      />        
    </section>
  )
}

export default FAQs;