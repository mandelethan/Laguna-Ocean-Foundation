"use client"

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const QA = ({question, answer, turn, setTurn, idx} : Props) => {
    
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(contentRef.current) {
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px`:`0px`
        }
    }, [contentRef, turn, idx])

    const toggleAccordion = () => {
        let newTurn = [...turn!];
        newTurn[idx] = !newTurn[idx];
        setTurn!(newTurn);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full text-lg pt-4 lg:text-base">
            <button onClick={toggleAccordion} className={"bg-[#569AAB] px-5 shadow cursor-pointer w-full h-full ${turn![idx]} rounded-lg"}>
                <div className="py-3">
                    <div className="flex items-center justify-between h-14 text-left">
                        <span className="font-bold lg:font-semibold lg:text-xl text-white text-lg">{question}</span>
                        <div className={"bg-[#67C8CA] rounded-full text-white relative transition-all ease-in-out duration-200 " + (turn[idx] ? "rotate-180" : "rotate-0")}>
                            <ChevronDownIcon className=""></ChevronDownIcon>
                            {/* {turn![idx] ? <ChevronDownIcon className="bg-[#67C8CA] rounded-full text-white"></ChevronDownIcon> : <ChevronUpIcon className="bg-[#67C8CA] rounded-full text-white"></ChevronUpIcon>} */}
                        </div>
                    </div>
                    <div ref={contentRef} className="overflow-hidden text-left transition-all duration-500 h-full">
                        <p className="py-1 font-normal leading-normal whitespace-pre-line text-sm lg:text-lg text-white">
                            {answer}
                        </p>
                    </div>
                </div>
            </button>

        </div>
    )
    // const [showQA, setShowQA] = useState(false);

    // return (
    //     <div className="py-4 px-3 my-6 max-w-2xl mx-auto rounded-lg flex flex-col gap-6 bg-[#569AAB] text-white transition-all ease-in-out duration-500">
    //         <button onClick={() => setShowQA(!showQA)}>
    //             <div className="flex flex-row justify-between">
    //                 <span className="">{props.question}</span>                    
                    
    //                 <div className={'relative transition-all ease-in-out duration-200 ' + (showQA ? "rotate-180" : "rotate-0")}>
    //                     <ChevronDownIcon className="bg-[#67C8CA] rounded-full"></ChevronDownIcon>
    //                 </div>

    //                 {/* {showQA ? <ChevronUpIcon className="bg-[#67C8CA] rounded-full"></ChevronUpIcon> : <ChevronDownIcon className="bg-[#67C8CA] rounded-full"></ChevronDownIcon>} */}
    //             </div>
                
    //             {showQA &&
                    
    //                 <hr className="h-px w-full my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    //             }
    //             {showQA &&
                    
    //                 <p className="text-left">{props.answer}</p>
    //             }
    //         </button> 
    //     </div>
    // )
}

export default QA