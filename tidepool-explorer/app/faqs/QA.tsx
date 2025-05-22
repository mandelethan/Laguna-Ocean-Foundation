"use client";

import { ChevronDownIcon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type Props = {
  question: string;
  answer: string;
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
  idx: number;
};

const QA = ({ question, answer, turn, setTurn, idx }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn[idx]
        ? `${contentRef.current.scrollHeight}px`
        : `0px`;
    }
  }, [turn, idx]);

  const toggleAccordion = () => {
    const updated = [...turn];
    updated[idx] = !updated[idx];
    setTurn(updated);
  };

  return (
    <div className="border-t border-white/20 w-full">
      <button
        onClick={toggleAccordion}
        className="w-full py-6 px-4 flex justify-between items-center text-white bg-white/10 hover:bg-white/20 rounded-md transition-all"
      >
        <span className="text-2xl font-bold text-left">{question}</span>
        <ChevronDownIcon
          className={`h-6 w-6 transform transition-transform duration-300 ${
            turn[idx] ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 px-4 pb-6 text-white text-base"
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QA;
