import React, { Dispatch, SetStateAction } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import QA from '@/app/faqs/QA'
// import { Nunito_Sans } from "next/font/google"

// const nunitoFont = Nunito_Sans({
//     subsets: ["latin"],
//     weight: "400"
// })

type Props = {
    question : string,
    answer : string,
    idx : number
}


interface QAProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
}

const QAaccord = ({handleClick, isSomeActive, data, turn, setTurn} : QAProps) => {
  return (

    
    <div className={`items-center flex flex-col lg:w-7/12 lg:mt-7 w-full my-5 m-auto`}>
        {/* Title */}
        <div>
            <span className={`font-bold text-xl py-3 mb-2 `}>
                Frequently Asked Questions
            </span>

            <p className="text-sm font-normal text-center">
                Here's some answers to the most asked questions.
            </p>
        </div>
        {/* Open/Close all button */}
        <div className="flex items-center justify-between w-full mb-6 lg:justify-end">
            <button onClick={handleClick} className="flex items-center mr-3 space-x-1 text-sm font-bold lg:text-base lg:space-x-2 py-2 px-4 bg-slate-50 rounded-4xl">
                <span className="text-sky-500 min-w-fit text-ellipsis">
                    {!isSomeActive ? "Open All" : "Close All"}
                </span>
                <div className={"relative transition-all ease-in-out duration-200 " + (isSomeActive ? "rotate-180" : "rotate-0")}>
                    <ChevronDownIcon className="text-black"></ChevronDownIcon>
                </div>
            </button>
        </div>

        {/* Programatically added faqs */}
        {data.map((el, i) => {
            return (
                <div className="w-full" key={"questions"+i}>
                    <QA
                        question={el.question}
                        answer={el.answer}
                        turn={turn}
                        setTurn={setTurn}
                        idx={el.idx}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default QAaccord